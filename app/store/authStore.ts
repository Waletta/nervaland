'use client';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { apiaxios } from '../lib/apiaxios';
import { extractErrorMessage } from '../utils/format';

export interface User {
  id: string;
  email: string;
  fullname: string | null;
}

interface AuthState {
  accessToken: string | null;
  isCheckingAuth: boolean;
  user: User | null;
  isLoading: boolean;
  error: string | null;
}

interface AuthActions {
  login: () => void;
  captureOAuthResult: () => Promise<void>;
  logout: () => Promise<void>;
  checkAuth: () => Promise<void>;
  clearAuth: () => void;
}

const initialState: AuthState = {
  accessToken: null,
  user: null,
  isLoading: false,
  error: null,
  isCheckingAuth: false,
};

const STORAGE_KEY = 'nerva-auth-storage';

export const useAuthStore = create<AuthState & AuthActions>()(
  persist(
    (set, get) => {
      const authHeader = () => {
        const token = get().accessToken;
        return token ? { headers: { Authorization: `Bearer ${token}` } } : {};
      };
      
      const run = async (fn: () => Promise<void>, fallback: string, rethrow = false): Promise<void> => {
        try {
          set({ isLoading: true, error: null });
          await fn();
        } catch (error: any) {
          const message = extractErrorMessage(error, fallback);
          set({ error: message });
          if (rethrow) throw new Error(message);
        } finally {
          set({ isLoading: false });
        }
      };

      return {
        ...initialState,
        clearAuth: () => {
          set({
            ...initialState,
            isCheckingAuth: false,
          });
          if (typeof window !== 'undefined') localStorage.removeItem(STORAGE_KEY);
        },

        captureOAuthResult: async () => {
          if (typeof window === 'undefined') return;

          const params = new URLSearchParams(window.location.search);
          const token_temp_auth = params.get('token_temp_auth');
          const error = params.get('error');
          
          if (!token_temp_auth && !error) return;

          window.history.replaceState({}, '', window.location.pathname);

          if (error) {
            set({ error: `Google login failed: ${error}` });
            return;
          }

          try {
            set({ isLoading: true, error: null });
            if (token_temp_auth) {
              const { data } = await apiaxios.post<{ access_token: string }>(
                '/auth/exchange',
                { token_temp_auth }
              );
            
              set({ accessToken: data.access_token });
              await get().checkAuth();
            }
          } catch (error: unknown) {
            set({
              accessToken: null,
              user: null,
              error: extractErrorMessage(error, 'Login failed. Please try again.'),
              isCheckingAuth: false,
            });
          } finally {
            set({ isLoading: false });
          }
        },

        logout: async (): Promise<void> => {
          get().clearAuth();
        },

        checkAuth: async (): Promise<void> => {
          const { accessToken } = get();

          if (!accessToken) {
            set({ user: null, isCheckingAuth: false, error: null });
            return;
          }

          set({ isCheckingAuth: true, error: null });

          try {
            const { data } = await apiaxios.get<User>('/auth/me', authHeader());
            set({ user: data, error: null, isCheckingAuth: false });

          } catch (error: any) {
            const status = error.response?.status;

            if (status === 401 || status === 403 || status === 404) {
              get().clearAuth();
              return;
            }

            set({
              error: extractErrorMessage(error, 'Failed to check authentication'),
              isCheckingAuth: false,
            });
          }
        },

        login: () => {
          if (typeof window !== 'undefined') {
            window.location.href = 'http://localhost:8000/auth/login/google';
          }
        },
      };
    },
    {
      name: STORAGE_KEY,
      storage: createJSONStorage(() => localStorage),
      partialize: ({ accessToken, user }) => ({
        accessToken,
        user,
      }),
      onRehydrateStorage: () => (state) => {
        state?.checkAuth?.();
      },
    }
  )
);
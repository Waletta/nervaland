'use client';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { apiaxios } from '../lib/apiaxios';
import { extractErrorMessage } from '../utils/format';

export interface User {
  id: string;
  email: string;
  fullname?: string;
  status: string;
  is_active: boolean;
  is_verified: boolean;
}

export type VerificationType = 'SIGN_UP' | 'PASSWORD_RESET';

interface AuthState {
  accessToken: string | null;
  isInitialized: boolean;
  isCheckingAuth: boolean;
  pendingEmail: string | null;
  user: User | null;
  isLoading: boolean;
  error: string | null;
}

interface AuthActions {
  signup: (email: string) => Promise<void>;
  verifyOtp: (email: string, code: string, verification_type: VerificationType) => Promise<void>;
  resendCode: () => Promise<void>;
  register: (email: string, fullname: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  lostpassword: (email: string) => Promise<void>;
  resetpassword: (pass: string) => Promise<void>;
  checkAuth: () => Promise<void>;
  clearAuth: () => void;
}

const normalizeEmail = (email: string) => email.trim().toLowerCase();


const initialState: AuthState = {
  accessToken: null,
  pendingEmail: null,
  user: null,
  isLoading: false,
  error: null,
  isInitialized: false,
  isCheckingAuth: false,
};

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
            isInitialized: true,
            isCheckingAuth: false,
          });
          if (typeof window !== 'undefined') localStorage.removeItem('nerva-auth-storage');
        },

    
        checkAuth: async (): Promise<void> => {
          const { accessToken } = get();

          if (!accessToken) {
            set({
              user: null,
              isInitialized: true,
              isCheckingAuth: false,
              error: null,
            });
            return;
          }

          set({
            isCheckingAuth: true,
            error: null,
          });

          try {
            const { data } = await apiaxios.get('/auth/me', authHeader());
            const user = data.user ?? data;

            set({
              user,
              error: null,
              isInitialized: true,
              isCheckingAuth: false,
            });
          } catch (error: any) {
            const status = error.response?.status;

            if (status === 401 || status === 403) {
              set({
                isInitialized: true,
                isCheckingAuth: false,
              });
              return;
            }

            set({
              error: extractErrorMessage(error, 'Failed to check authentication'),
              isInitialized: true,
              isCheckingAuth: false,
            });
          }
        },

        signup: (email) =>
          run(async () => {
            const ne = normalizeEmail(email);
            const { data } = await apiaxios.post('/auth/signup', { email: ne });
            set({ user: data.user ?? null, pendingEmail: ne, error: null });
          }, 'Signup failed'),

        resendCode: () =>
          run(async () => {
            const { pendingEmail } = get();
            if (!pendingEmail) throw new Error('Missing email. Please restart signup.');
            await apiaxios.post('/auth/resend-code', { email: pendingEmail });
          }, 'Failed to resend code', true),

        verifyOtp: (email, code, verification_type) =>
          run(async () => {
            const ne = normalizeEmail(email);
            const { data } = await apiaxios.post('/auth/verify-otp', { verification_type, email: ne, code });
            set({ accessToken: data.access_token, user: data.user, pendingEmail: ne, error: null });
          }, 'Verification failed', true),

        lostpassword: (email) =>
          run(async () => {
            const ne = normalizeEmail(email);
            await apiaxios.post('/auth/forgot-password', { email: ne });
            set({ accessToken: null, pendingEmail: ne, error: null });
          }, 'Failed to send reset code', true),

        resetpassword: (pass) =>
          run(async () => {
            const { data } = await apiaxios.post('/auth/reset-password', { new_password: pass }, authHeader());
            set({ user: data.user, error: null });
          }, 'Password reset failed', true),

        register: (email, fullname, password) =>
          run(async () => {
            const ne = normalizeEmail(email);
            const { data } = await apiaxios.post('/auth/register',
              { email: ne,  fullname, password },
              authHeader()
            );
            set({ accessToken: data.access_token, pendingEmail: null, user: data.user, error: null });
          }, 'Registration failed', true),

        login: (email, password) =>
          run(async () => {
            const ne = normalizeEmail(email);
            const { data } = await apiaxios.post('/auth/login', { email: ne, password });
            set({
              accessToken: data.access_token, pendingEmail: null, user: data.user, error: null,
            });
          }, 'Login failed', true),

        logout: async (): Promise<void> => {
          get().clearAuth();
        },
      };
    },
    {
      name: 'nerva-auth-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: ({ accessToken, user, pendingEmail }) => ({
        accessToken,
        user,
        pendingEmail,
      }),
      onRehydrateStorage: () => (state) => {
        state?.checkAuth?.();
      },
    }
  )
);
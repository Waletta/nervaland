import axios from 'axios';
import { useAuthStore } from '../store/authStore';

export const apiaxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});

apiaxios.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;
    const authorization = error.config?.headers?.Authorization;

    const isAuthenticatedRequest = Boolean(authorization);

    if ((status === 401 || status === 403) && isAuthenticatedRequest) {
      const { clearAuth } = useAuthStore.getState();
      clearAuth();

      if (typeof window !== 'undefined' && window.location.pathname !== '/login') {
        window.location.href = '/login';
      }
    }

    return Promise.reject(error);
  }
);
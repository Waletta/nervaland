'use client';

import { Loader2 } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import GoogleIcon from '../components/icons/GoogleIcon';
import { useAuthStore } from '../store/authStore';

function LoginPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isLoading = useAuthStore((state) => state.isLoading);
  const checkAuth = useAuthStore((state) => state.checkAuth);

  const [error, setError] = useState<string | null>(null);
  const [isBootstrapping, setIsBootstrapping] = useState(
    () => !!searchParams.get('token')
  );

  useEffect(() => {
    const token = searchParams.get('token');
    const oauthError = searchParams.get('error');

    if (oauthError) {
      setIsBootstrapping(false);
      setError('Google sign-in failed. Please try again.');
      router.replace('/login');
      return;
    }

    if (!token) {
      setIsBootstrapping(false);
      return;
    }

    let cancelled = false;

    const completeGoogleLogin = async () => {
      try {
        setIsBootstrapping(true);
        useAuthStore.setState({
          accessToken: token,
          user: null,
          error: null,
        });
        await checkAuth();
        if (cancelled) return;
        const user = useAuthStore.getState().user;
        if (user) {
          router.replace('/');
          return;
        }

        useAuthStore.setState({
          accessToken: null,
          user: null,
        });

        setIsBootstrapping(false);
        setError('Could not complete Google sign-in. Please try again.');
        router.replace('/login');
      } catch (err) {
        if (cancelled) return;
        useAuthStore.setState({
          accessToken: null,
          user: null,
        });

        setIsBootstrapping(false);
        setError('Could not complete Google sign-in. Please try again.');
        router.replace('/login');
      }
    };

    completeGoogleLogin();

    return () => {
      cancelled = true;
    };
  }, [searchParams, checkAuth, router]);

  const handleGoogleLogin = () => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    if (!apiUrl) {
      setError('Google login is not configured');
      return;
    }
    const baseUrl = apiUrl.replace(/\/$/, '');
    window.location.href = `${baseUrl}/auth/google?flow=login`;
  };

  if (isBootstrapping) {
    return (
      <div className="flex justify-center pt-24">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-md mx-auto px-4 py-12 sm:py-18">
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-10 shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
          <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 mb-2">
            Welcome back
          </h1>

          <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          </p>

          {error && (
            <div className="mb-4 p-3.5 text-sm text-red-600 bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-900 rounded-lg">
              {error}
            </div>
          )}

          <button
            type="button"
            onClick={handleGoogleLogin}
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-700/50 text-zinc-700 dark:text-zinc-200 text-sm font-semibold transition-colors"
          >
            <GoogleIcon />
            <span>Continue with Google</span>
          </button>
        </div>
      </main>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center pt-24 min-h-screen items-center bg-background">
          <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
        </div>
      }
    >
      <LoginPageContent />
    </Suspense>
  );
}
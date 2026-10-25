'use client';

import { Eye, EyeOff, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import GoogleIcon from '../components/icons/GoogleIcon';
import { useAuthStore } from '../store/authStore';

function LoginPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const login = useAuthStore((state) => state.login);
  const isLoading = useAuthStore((state) => state.isLoading);
  const checkAuth = useAuthStore((state) => state.checkAuth);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
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
          pendingEmail: null,
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

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error) setError(null);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      await login(email.trim().toLowerCase(), password);
      router.replace('/');
    } catch {
      setError('Email or password incorrect');
    }
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
            Login to your account.
          </p>

          {error && (
            <div className="mb-4 p-3.5 text-sm text-red-600 bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-900 rounded-lg">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-1.5"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                autoComplete="email"
                required
                value={email}
                onChange={handleEmailChange}
                className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-[#0077ed] transition-all"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-1.5"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={handlePasswordChange}
                  className="w-full px-3.5 py-2.5 pr-10 text-sm rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-[#0077ed] transition-all"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 focus:outline-none"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading || !email.trim() || !password}
              className="w-full mt-2 py-3 px-4 text-sm font-bold text-white bg-lime-500 hover:bg-lime-600 active:bg-lime-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors shadow-sm"
            >
              {isLoading ? 'Connecting...' : 'Login'}
            </button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-zinc-200 dark:border-zinc-800" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white dark:bg-zinc-900 px-3 text-zinc-400 font-medium">
                Or continue with
              </span>
            </div>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={handleGoogleLogin}
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-700/50 text-zinc-700 dark:text-zinc-200 text-sm font-semibold transition-colors"
            >
              <GoogleIcon />
              <span>Google</span>
            </button>
          </div>

          <div className="mt-6 space-y-2 text-center text-sm">
            <p>
              <Link
                href="/login/forgotpassword"
                className="text-lime-400 hover:underline font-medium"
              >
                Forgot my password
              </Link>
            </p>
            <p className="text-zinc-500 dark:text-zinc-400">
              Don&apos;t have an account?{' '}
              <Link
                href="/signup"
                className="text-lime-400 hover:underline font-medium"
              >
                Sign up
              </Link>
            </p>
          </div>
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
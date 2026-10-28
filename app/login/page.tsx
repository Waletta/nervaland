'use client';

import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Suspense, useEffect, useRef } from 'react';
import GoogleIcon from '../components/icons/GoogleIcon';
import { useAuthStore } from '../store/authStore';

function LoginPageContent() {
  const router = useRouter();

  const { captureOAuthResult, login, isLoading, error } = useAuthStore();
  const hasCapturedRef = useRef(false);

  useEffect(() => {
    if (hasCapturedRef.current) return;
    hasCapturedRef.current = true;
    
    captureOAuthResult().then(() => {
      const state = useAuthStore.getState();
      if (state.accessToken) {
        router.replace('/dashboard');
      }
    });
  }, [captureOAuthResult, router]);

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-md mx-auto px-4 py-12 sm:py-18">
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-10 shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
       
          {error && (
            <div className="mb-4 p-3.5 text-sm text-red-600 bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-900 rounded-lg">
              {error}
            </div>
          )}

          <button
            type="button"
            onClick={login}
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
'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';

interface GoogleSignInButtonProps {
  clientId: string;
}

export default function GoogleSignInButton({ clientId }: GoogleSignInButtonProps) {
  const router = useRouter();
  const hasInitialized = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.google) return;
    if (hasInitialized.current) return;
    hasInitialized.current = true;

    const handleCredentialResponse = async (response: { credential: string }) => {
      try {
        const res = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/auth/google', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token: response.credential }),
        });

        const data = await res.json();

        if (res.ok && data.token) {
          localStorage.setItem('token', data.token);
          router.push('/');
          router.refresh();
        } else {
          console.error('FastAPI authentication failed:', data.detail || data.error);
        }
      } catch (error) {
        console.error('Network error communicating with FastAPI:', error);
      }
    };

    window.google.accounts.id.initialize({
      client_id: clientId,
      callback: handleCredentialResponse,
      auto_select: false,
      cancel_on_tap_outside: true,
    });

    window.google.accounts.id.prompt();
  }, [clientId, router]);

  return null;
}
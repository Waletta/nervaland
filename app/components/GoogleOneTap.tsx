'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    google?: {
      accounts: {
        id: {
          initialize: (options: {
            client_id: string;
            callback: (response: { credential: string }) => void | Promise<void>;
            auto_select?: boolean;
            cancel_on_tap_outside?: boolean;
          }) => void;
          prompt: (callback?: (notification: {
            isNotDisplayed: () => boolean;
            isSkippedMoment: () => boolean;
            getNotDisplayedReason: () => string;
          }) => void) => void;
        };
      };
    };
  }
}

interface GoogleOneTapProps {
  clientId: string;
}

export default function GoogleOneTap({ clientId }: GoogleOneTapProps) {
  const router = useRouter();
  const hasInitialized = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.google) return;

    if (hasInitialized.current) return;
    hasInitialized.current = true;

    const handleCredentialResponse = async (response: { credential: string }) => {
      try {
        // Call your FastAPI backend directly
        const res = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/auth/google', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token: response.credential }),
        });

        const data = await res.json();

        if (res.ok && data.token) {
          // Store your app token (e.g., in localStorage or handle via cookie response)
          localStorage.setItem('token', data.token);

          // Redirect to your dashboard
          router.push('/');
          router.refresh();
        } else {
          console.error('Backend authentication failed:', data.detail || data.error);
        }
      } catch (error) {
        console.error('Network error communicating with FastAPI:', error);
      }
    };

    // Initialize Google One Tap
    window.google.accounts.id.initialize({
      client_id: clientId,
      callback: handleCredentialResponse,
      auto_select: process.env.NODE_ENV === 'production', // Automatically logs in if a single session exists
      cancel_on_tap_outside: true,
    });

    // Prompt the One Tap UI
    window.google.accounts.id.prompt((notification) => {
      if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
        console.log('One Tap skipped or blocked:', notification.getNotDisplayedReason());
      }
    });
  }, [clientId, router]);

  return null;
}
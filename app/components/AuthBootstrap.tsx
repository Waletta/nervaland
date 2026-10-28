// components/AuthBootstrap.tsx
'use client';

import { useEffect } from 'react';
import { useAuthStore } from '../store/authStore';

export function AuthBootstrap() {
  const captureOAuthResult = useAuthStore((s) => s.captureOAuthResult);

  useEffect(() => {
    captureOAuthResult();
  }, [captureOAuthResult]);

  return null;
}
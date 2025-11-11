'use client';

import { LoadingSpinner } from '@kampus-gratis/components/atoms';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import React, { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { RecoilEnv, RecoilRoot } from 'recoil';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function Provider({ children }: { children: React.ReactNode }) {
  RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        <RecoilRoot>
          <Suspense fallback={<LoadingSpinner />}>
            <Toaster position="top-center" reverseOrder={true} />
            {children}
          </Suspense>
        </RecoilRoot>
      </SessionProvider>
    </QueryClientProvider>
  );
}

export default Provider;

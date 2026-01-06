'use client';

import { LoadingSpinner } from '@kampus-gratis/components/atoms';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import { Provider as JotaiProvider } from 'jotai';
import React, { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function Provider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        <JotaiProvider>
          <Suspense fallback={<LoadingSpinner />}>
            <Toaster position="top-center" reverseOrder={true} />
            {children}
          </Suspense>
        </JotaiProvider>
      </SessionProvider>
    </QueryClientProvider>
  );
}

export default Provider;

'use client';
import React, { Suspense } from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import { SessionProvider } from 'next-auth/react';
// import { LoadingSpinner } from '@kampus-gratis/components/atoms';

const queryClient = new QueryClient();

export const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        <RecoilRoot>
          {children}
          {/* <Suspense fallback={<LoadingSpinner />}>{children}</Suspense> */}
        </RecoilRoot>
      </SessionProvider>
    </QueryClientProvider>
  );
};

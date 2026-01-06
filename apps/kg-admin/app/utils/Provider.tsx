'use client';
import React from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { Provider as JotaiProvider } from 'jotai';
import { SessionProvider } from 'next-auth/react';

const queryClient = new QueryClient();

export const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        <JotaiProvider>
          {children}
        </JotaiProvider>
      </SessionProvider>
    </QueryClientProvider>
  );
};

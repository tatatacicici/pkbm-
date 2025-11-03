'use client';

import { LoadingSpinner } from '@kampus-gratis/components/atoms';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FC, Suspense, useEffect, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { AuthLayout } from '../../../components/layouts/auth';

export const EmailSentModule: FC = () => {
  const router = useRouter();
  const [getError] = useState<string | undefined>(undefined);
  const [getTimer, setTimer] = useState(5);

  useEffect(() => {
    setTimeout(() => {
      setTimer((prev) => (prev !== 0 ? prev - 1 : prev));
    }, 1000);
    if (getTimer === 0) {
      router.push('/auth/login');
    }
  }, [getTimer, router]);

  return (
    <ErrorBoundary fallback={<>{getError}</>}>
      <Suspense fallback={<LoadingSpinner />}>
        <AuthLayout
          h="screen"
          error={getError}
          title="Email Berhasil terkirim!"
          description="Silahkan cek Kotak masuk email anda untuk melanjutkan prosess reset kata sandi"
        >
          <section className="flex flex-col w-full justify-start">
            <div className="flex flex-col my-4">
              <span>
                Anda Akan Redirect ke halaman login dalam {getTimer} Detik
              </span>

              <div className="flex w-full items-start justify-start my-4 gap-x-2 mb-4 text-sm text-neutral-500 font-semibold">
                <span>Tidak Redirect?</span>
                <Link
                  className="text-primary-600 hover:text-primary-700"
                  href={'/auth/login'}
                >
                  Klik Disini
                </Link>
              </div>
            </div>
          </section>
        </AuthLayout>
      </Suspense>
    </ErrorBoundary>
  );
};

'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { validationSchemaResetPassword } from '../../../config/validation/authentications/reset-password';
import { useRouter } from 'next/navigation';
import { FC, Suspense, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useResetPassword } from '../../../hooks/authentications/hook';
import { ErrorBoundary } from 'react-error-boundary';
import {
  Button,
  LoadingSpinner,
  TextField,
} from '@kampus-gratis/components/atoms';
import { AuthLayout } from '../../../components/layouts/auth';
import Link from 'next/link';

type ValidationSchema = z.infer<typeof validationSchemaResetPassword>;

type Params = {
  params: {
    token: string;
  };
};

export const ResetModule: FC<Params> = ({ params }) => {
  const { token } = params;
  const router = useRouter();
  const [getError, setError] = useState<string | undefined>(undefined);
  const {
    control,
    formState: { isValid, errors },
    handleSubmit,
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchemaResetPassword),
    mode: 'all',
    defaultValues: {
      password: '',
      password_confirmation: '',
    },
  });

  const { mutate, isLoading } = useResetPassword();

  const onSubmit = handleSubmit(async (data) => {
    const { password } = data;
    const payload = {
      token,
      password,
    };

    mutate(payload, {
      onSuccess: () => router.push('/auth/email-sent'),
      onError: (e) => setError(e.response?.data?.message),
    });
  });

  //   useEffect(() => {
  //     setError(router.query.error as string);
  //   }, [router.query.error]);
  return (
    <ErrorBoundary fallback={<>{getError}</>}>
      <Suspense fallback={<LoadingSpinner />}>
        <AuthLayout
          h="screen"
          error={getError}
          title="Reset Kata Sandi"
          description="Silahkan masukan kata sandi yang mudah di ingat namun kuat"
        >
          <form
            onSubmit={onSubmit}
            className="flex flex-col w-full justify-start"
          >
            <TextField
              type="password"
              variant="lg"
              control={control}
              name={'password'}
              placeholder="Masukkan Kata Sandi"
              label="Kata sandi"
              status={errors.password ? 'error' : 'none'}
              message={errors.password?.message}
            />
            <TextField
              type="password"
              variant="lg"
              control={control}
              name={'password_confirmation'}
              placeholder="Masukkan Konfirmasi Kata Sandi"
              label="Konfirmasi Kata Sandi"
              status={errors.password_confirmation ? 'error' : 'none'}
              message={errors.password_confirmation?.message}
            />
            <div className="flex flex-col my-4">
              <Button
                type="submit"
                disabled={!isValid}
                loading={isLoading ? 'Sedang Mengirim Permintaan...' : ''}
                className="w-auto disabled:bg-neutral-300 h-auto text-[18px] text-white p-4 rounded-lg border-2 border-neutral-200 appearance-none bg-primary-600 font-[700]"
              >
                Reset Sekarang
              </Button>

              <div className="flex w-full items-center justify-center my-4 gap-x-4 mb-4 font-[500] text-[18px] text-neutral-500">
                <span>Sudah Ingat Password nya?</span>
                <Link className="text-primary-600" href={'/auth/login'}>
                  Masuk Disini
                </Link>
              </div>
            </div>
          </form>
        </AuthLayout>
      </Suspense>
    </ErrorBoundary>
  );
};

'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  Button,
  Checkbox,
  DashedText,
  LoadingSpinner,
  TextField,
} from '@kampus-gratis/components/atoms';
import { LoadingButton } from '@kampus-gratis/components/molecules';
import { signIn, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { FC, Suspense, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useForm } from 'react-hook-form';
import { lazily } from 'react-lazily';
import { z } from 'zod';
import { validationSchemaLogin } from '../../../config';
import {
  usePopupForgotPass,
  usePopupForgotPassword,
  usePopupOtp,
} from '../../../hooks/authentications/hook';
import { ForgotModule } from '../forgot';
import { OtpModule } from '../otp';

const { AuthLayout } = lazily(() => import('../../../components/layouts/auth'));

type ValidationSchema = z.infer<typeof validationSchemaLogin>;

export const LoginModule: FC = () => {
  const { status } = useSession();

  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const { getPopupForgotPassword } = usePopupForgotPassword();
  const { setPopupStatus } = usePopupForgotPass();
  const { setPopupOtp } = usePopupOtp();
  const [getError, setError] = useState<string | undefined | null>(undefined);

  const {
    control,
    formState: { isValid, errors },
    handleSubmit,
    watch,
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchemaLogin),
    mode: 'all',
    defaultValues: {
      email: '',
      password: '',
      remember: false,
    },
  });

  const onSubmit = handleSubmit(async (data, e) => {
    setLoading(true);
    try {
      const response = await signIn('login', {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (response?.ok && response?.url !== null) {
        const callbackURL = searchParams.get('callbackUrl');
        callbackURL
          ? router.push(decodeURIComponent(callbackURL))
          : router.push('/beranda');
      } else if (response?.error) {
        switch (response.error) {
          case 'Invalid email and password combination':
            setError('Email atau kata sandi salah! Silahkan coba lagi.');
            break;
          case "This email hasn't verified. Please verify your email address":
            setError('Email belum terverifikasi! Silahkan cek email anda.');
            setPopupOtp(true);
            break;
          default:
            setError('Terjadi kesalahan, silahkan coba lagi!');
        }
      }
    } catch (e) {
      e instanceof Error ? setError(e.message) : setError('Terjadi kesalahan!');
    } finally {
      setLoading(false);
    }
  });

  const onGoogleLogin = async () => {
    const res = await signIn('google', {
      redirect: false,
    });
    if (res?.ok) {
      const callbackURL = searchParams.get('callbackUrl');
      const redirect = callbackURL
        ? decodeURIComponent(callbackURL)
        : '/beranda';

      router.push(redirect);
    }
  };

  if (status === 'loading') {
    return <LoadingSpinner />;
  }

  return (
    <ErrorBoundary fallback={<>{getError}</>}>
      <Suspense fallback={<LoadingSpinner />}>
        <AuthLayout
          h="screen"
          error={getError as string}
          title="Masuk"
          description="Silahkan masuk menggunakan email dan kata sandi yang terdaftar"
        >
          <form
            onSubmit={onSubmit}
            className="flex flex-col w-full justify-start"
          >
            <TextField
              type="email"
              variant="lg"
              control={control}
              name={'email'}
              placeholder="Masukkan Email"
              label="Email"
              status={errors.email ? 'error' : 'none'}
              message={errors.email?.message}
              required
            />
            <TextField
              type="password"
              variant="lg"
              control={control}
              name={'password'}
              placeholder="Masukkan Kata Sandi"
              label="Kata Sandi"
              status={errors.password ? 'error' : 'none'}
              message={errors.password?.message}
              required
            />
            <div className="flex w-full justify-between my-2">
              <Checkbox
                variant="lg"
                control={control}
                name={'remember'}
                label="Ingat Saya"
              />
              <div
                className="text-sky-base cursor-pointer"
                onClick={() => setPopupStatus(true)}
              >
                Lupa Kata Sandi?
              </div>
            </div>
            <div className="flex flex-col my-4">
              {/* <Button
                type="submit"
                disabled={!isValid}
                loading={loading && <LoadingButton />}
                className={`w-auto disabled:bg-neutral-300 h-auto text-[18px] text-white p-4 rounded-lg border-2 border-neutral-200 appearance-none bg-primary-600 font-[700] ${
                  loading ? 'cursor-not-allowed' : ''
                }`}
              > */}
              <Button
                type="submit"
                disabled={!isValid}
                loading={loading && <LoadingButton />}
                className={`w-auto disabled:bg-neutral-300 h-auto text-[18px] text-white p-4 rounded-lg border-2 border-neutral-200 appearance-none bg-sky-base font-[700] ${
                  loading ? 'cursor-not-allowed' : ''
                }`}
              >
                Masuk
              </Button>

              <DashedText text="Atau" />

              <Button
                onClick={onGoogleLogin}
                type="button"
                className="w-auto h-auto text-[18px] text-black p-3 rounded-lg border-2 border-neutral-300 appearance-none bg-white font-[700] flex items-center justify-center gap-x-4"
              >
                <Image
                  src="/icons/Google.svg"
                  width={24}
                  height={24}
                  alt="google"
                />{' '}
                <span>Masuk Dengan Google</span>
              </Button>
              <div className="flex w-full items-center justify-center my-4 gap-x-4 mb-4 font-[500] text-[18px] text-neutral-500">
                <span>Belum punya akun?</span>
                <Link className="text-sky-base" href={'/auth/register'}>
                  Daftar Disini
                </Link>
              </div>
            </div>
          </form>
        </AuthLayout>
        <ForgotModule />
        <OtpModule type="REGISTER" email={watch('email')} />
      </Suspense>
    </ErrorBoundary>
  );
};

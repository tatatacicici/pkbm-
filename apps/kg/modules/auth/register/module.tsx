'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  Checkbox,
  DashedText,
  LoadingSpinner,
  TextField,
} from '@kampus-gratis/components/atoms';
import { LoadingButton } from '@kampus-gratis/components/molecules';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { FC, Suspense, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { lazily } from 'react-lazily';
import { z } from 'zod';
import { validationSchemaRegister } from '../../../config';
import {
  useOtpRequest,
  usePopupOtp,
  useRegister,
} from '../../../hooks/authentications/hook';
import { OtpModule } from '../otp';

const { AuthLayout } = lazily(() => import('../../../components/layouts/auth'));

type ValidationSchema = z.infer<typeof validationSchemaRegister>;

export const RegisterModule: FC = () => {
  // const router = useRouter();
  const [error, setError] = useState<string | null>('');
  const { setPopupOtp } = usePopupOtp();

  const {
    control,
    watch,
    formState: { isValid, errors },
    handleSubmit,
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchemaRegister),
    mode: 'all',
    defaultValues: {
      email: '',
      full_name: '',
      password: '',
      password_confirmation: '',
      term_and_condition: false,
    },
  });

  const { mutate: request } = useOtpRequest();
  const { mutate, isLoading } = useRegister();

  const onSubmit = handleSubmit((data) => {
    const { email, full_name, password, password_confirmation } = data;

    mutate(
      {
        email,
        full_name,
        password,
        password_confirmation,
      },
      {
        onSuccess: () => {
          request(
            {
              email: data.email,
            },
            {
              onSuccess: () => {
                setPopupOtp(true);
              },
            }
          );
        },
        onError: (e) => {
          setError(e.response?.data.message as string);
        },
      }
    );
  });

  const onGoogleLogin = async () => {
    await signIn('google', {
      redirect: false,
    });
  };

  useEffect(() => {
    console.log(watch('term_and_condition'));
  }, [watch]);

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <AuthLayout
        h="full"
        error={error as string}
        title="Daftar Akun"
        description="Silahkan isi data berikut untuk melakukan pendaftaran"
      >
        <form
          onSubmit={onSubmit}
          className="flex flex-col w-full justify-start"
        >
          <TextField
            type="text"
            variant="lg"
            control={control}
            name={'full_name'}
            placeholder="Masukkan Nama Lengkap Anda"
            label="Nama Lengkap"
            status={errors.full_name ? 'error' : 'none'}
            message={errors.full_name?.message}
          />
          <TextField
            type="email"
            variant="lg"
            control={control}
            name={'email'}
            placeholder="Masukkan Email Anda"
            label="Email"
            status={errors.email ? 'error' : 'none'}
            message={errors.email?.message}
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
          />
          <h1 className="pb-2 text-sm text-neutral-500">
            Minimal 8 karakter variasi huruf besar, huruf kecil, dan angka
          </h1>
          <TextField
            type="password"
            variant="lg"
            control={control}
            name={'password_confirmation'}
            placeholder="Konfirmasi Kata Sandi"
            label="Konfirmasi Kata Sandi"
            status={errors.password_confirmation ? 'error' : 'none'}
            message={errors.password_confirmation?.message}
          />
          <div className=" w-full">
            <hr className="w-full h-px bg-[#D9D9D9] border-0 dark:bg-gray-700 mt-4" />
            <div className="my-2">
              <Checkbox
                variant="lg"
                control={control}
                name="term_and_condition"
                label="Syarat & Ketentuan serta Kebijakan Privasi"
                status={errors.term_and_condition ? 'error' : 'none'}
                message={errors.term_and_condition?.message}
                required
              />
              <p className="text-gray-600 text-sm">
                Setujui{' '}
                <Link
                  className="underline"
                  target="_blank"
                  href={'/syarat-ketentuan'}
                >
                  Syarat & Ketentuan{' '}
                </Link>{' '}
                serta{' '}
                <Link
                  className="underline"
                  target="_blank"
                  href={'/kebijakan-privasi'}
                >
                  Kebijakan Privasi
                </Link>{' '}
                Berikut! untuk melanjutkan pendaftaran.
              </p>
            </div>
          </div>
          <div className="flex flex-col my-4">
            {/* <button
              type="submit"
              disabled={!isValid || !watch('term_and_condition')}
              className={`w-auto disabled:bg-neutral-300  h-auto text-[18px] text-white p-4 rounded-lg border-2 border-neutral-200 appearance-none bg-primary-600 font-[700] ${
                isLoading ? 'cursor-not-allowed' : ''
              }`}
            > */}
            <button
              type="submit"
              disabled={!isValid || !watch('term_and_condition')}
              className={`w-auto disabled:bg-neutral-300  h-auto text-[18px] text-white p-4 rounded-lg border-2 border-neutral-200 appearance-none bg-sky-base font-[700] ${
                isLoading ? 'cursor-not-allowed' : ''
              }`}
            >
              {isLoading ? <LoadingButton /> : 'Daftar Sekarang'}
            </button>

            <DashedText text="Atau" />

            <button
              onClick={onGoogleLogin}
              disabled={!watch('term_and_condition')}
              type="button"
              className="w-auto h-auto text-[18px] text-black p-3 rounded-lg border-2 border-neutral-300 disabled:bg-neutral-300  appearance-none bg-white font-[700] flex items-center justify-center gap-x-4"
            >
              <Image
                src="/icons/Google.svg"
                width={24}
                height={24}
                alt="google"
              />{' '}
              <span>Daftar Dengan Google</span>
            </button>
            <div className="flex w-full items-center justify-center my-4 gap-x-4 mb-4 font-[500] text-[18px] text-neutral-500">
              <span>Sudah punya akun?</span>
              <Link className="text-sky-base" href={'/auth/login'}>
                Masuk Disini
              </Link>
            </div>
          </div>
        </form>
      </AuthLayout>
      <OtpModule type="REGISTER" email={watch('email')} />
    </Suspense>
  );
};

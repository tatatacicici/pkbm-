'use client';

import {
  useForgot,
  useForgotPasswordVerify,
  usePopupForgotPass,
  usePopupForgotPassword,
  usePopupOtp,
} from '../../../hooks/authentications/hook';
import { validationSchemaForgot } from '../../../config/validation/authentications/forgot';
import { FC } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { PopupModal } from '@kampus-gratis/components/molecules';
import { Button, TextField } from '@kampus-gratis/components/atoms';
import Link from 'next/link';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { OtpModule } from '../otp';

type ValidationSchema = z.infer<typeof validationSchemaForgot>;

export const ForgotModule: FC = () => {
  const { setPopupOtp } = usePopupOtp();
  const { setPopupStatus, getPopupStatus } = usePopupForgotPass();

  const { setPopupForgotPassword, getPopupForgotPassword } =
    usePopupForgotPassword();

  const {
    control,
    formState: { isValid, errors },
    handleSubmit,
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchemaForgot),
    mode: 'all',
    defaultValues: {
      email: '',
    },
  });

  const { mutate, isLoading } = useForgot();

  const onSubmit = handleSubmit((data) => {
    mutate(data, {
      onSuccess: () => {
        setPopupForgotPassword(data?.email);
        setPopupStatus(false);
        setPopupOtp(true);
      },
      onError: (error) => {
        toast.error(error?.response?.data?.message as string, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
        // setError(e.response?.data.message as string);
      },
    });
  });

  return (
    <>
      <PopupModal
        onClose={() => setPopupStatus(false)}
        lookup={getPopupStatus}
        className="!w-[100%] text-md md:px-16 sm:px-14"
        popupTitle="Lupa Kata Sandi"
      >
        <div className="mb-5 lg:text-[16px] md:text-[14px]">
          Masukkan alamat email Anda yang terdaftar. Kami akan
          <br />
          mengirimkan kode OTP untuk dapat mengatur ulang kata sandi Anda.
        </div>

        <form className="flex flex-col w-full !justify-end" onSubmit={onSubmit}>
          <label className="text-start font-[500] text-[16px] mb-1">
            Email
            <TextField
              type="email"
              variant="lg"
              name={'email'}
              control={control}
              placeholder="Masukan Email Anda"
              status={errors.email ? 'error' : 'none'}
              message={errors.email?.message}
            />
          </label>

          <div className="flex justify-center text-center w-full">
            {/* <Button
              type="submit"
              disabled={!isValid}
              className=" w-fit px-8 py-3 disabled:bg-neutral-400 h-auto text-[16px] text-white rounded-lg border-2 border-neutral-200 appearance-none bg-primary-600 font-[600] tracking-wide"
              loading={isLoading ? 'Sedang Memuat...' : ''}
            > */}
            <Button
              type="submit"
              disabled={!isValid}
              className=" w-fit px-8 py-3 disabled:bg-neutral-400 h-auto text-[16px] text-white rounded-lg border-2 border-neutral-200 appearance-none bg-sky-base font-[600] tracking-wide"
              loading={isLoading ? 'Sedang Memuat...' : ''}
            >
              Kirim
            </Button>
          </div>
        </form>
      </PopupModal>
      <OtpModule type="FORGOT_PASSWORD" email={getPopupForgotPassword} />
    </>
  );
};

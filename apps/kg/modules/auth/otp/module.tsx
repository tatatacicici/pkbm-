'use client';

import { PopupModal } from '@kampus-gratis/components/molecules';
import clsx from 'clsx';
import { usePathname, useRouter } from 'next/navigation';
import { FC, useEffect, useRef, useState } from 'react';
import OTPInput from 'react-otp-input';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  useForgot,
  useForgotPasswordVerify,
  useOtpRequest,
  useOtpVerify,
  usePopupOtp,
} from '../../../hooks/authentications/hook';
import { TOTPProps } from '../../../types/authentications';

export const OtpModule: FC<TOTPProps> = (props) => {
  const [isError, setIsError] = useState(false);
  const { setPopupOtp, getPopupOtp } = usePopupOtp();

  const [otp, setOtp] = useState('');
  const { mutate: requestRegister } = useOtpRequest();
  const { mutate: requestForgotPassword } = useForgot();
  const { mutate: verifyRegister } = useOtpVerify();
  const { mutate: verifyForgot } = useForgotPasswordVerify();
  const { push } = useRouter();
  const pathname = usePathname();

  const [timer, setTimer] = useState(60);

  const intervalRef = useRef<any>();

  const decreaseNum = () => setTimer((prev) => prev - 1);
  useEffect(() => {
    intervalRef.current = setInterval(decreaseNum, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    if (otp.length === 6) {
      if (pathname === '/auth/login') {
        verifyForgot(
          {
            email: props.email,
            otp,
          },
          {
            onSuccess: (data) => {
              setPopupOtp(false);
              push(`/auth/reset-password/${data?.data?.token}`);
            },
            onError: (error) => {
              setIsError(true);
              toast.error(error && 'Kode OTP yang Anda masukkan salah');
            },
          }
        );
      } else {
        verifyRegister(
          {
            email: props.email,
            otp,
          },
          {
            onSuccess: () => {
              setPopupOtp(false);
              push('/auth/verify-success');
            },
            onError: (error) => {
              setIsError(true);
              toast.error(error && 'Kode OTP yang Anda masukkan salah');
            },
          }
        );
      }
    }
  }, [otp]);

  const inputStyle = clsx(
    '!w-[40px] !h-[48px] text-[14px] md:!w-[64px] md:!h-[64px] md:text-[28px] text-black focus:outline-none outline-none placeholder:text-black placeholder:p-2  p-2 rounded-lg ',
    {
      'border border-neutral-100  bg-neutral-200': !isError,
      'border border-error-base bg-error-100': isError,
    }
  );

  return (
    <PopupModal
      onClose={() => setPopupOtp(false)}
      lookup={getPopupOtp}
      className="w-[659px] h-[455px] text-md"
      popupTitle="Verifikasi OTP"
      description="Masukkan kode OTP yang telah dikirimkan ke email Anda"
    >
      <div className="flex flex-col w-full">
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          shouldAutoFocus
          inputStyle={inputStyle}
          containerStyle={
            'w-full flex gap-x-2 md:gap-x-6 items-center justify-center overflow-auto py-4'
          }
          inputType="number"
          renderInput={(props) => <input {...props} />}
        />
      </div>
      <div className="flex w-full justify-center py-2 px-4 md:px-20 text-sm md:text-base">
        <span>
          Belum menerima kode?{' '}
          {timer < 0 ? (
            <span
              onClick={() => {
                setTimer(60);
                props.type === 'REGISTER'
                  ? requestRegister({ email: props.email })
                  : requestForgotPassword({ email: props.email });
              }}
              ref={intervalRef}
              className="text-blue-base font-bold cursor-pointer"
            >
              Kirim Ulang
            </span>
          ) : (
            <span className="text-blue-base font-bold">{timer}</span>
          )}
        </span>
      </div>
    </PopupModal>
  );
};

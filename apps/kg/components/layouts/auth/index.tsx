'use client';

import Image from 'next/image';
import { FC, ReactElement, Suspense, useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './index.css';

import { LoadingSpinner } from '@kampus-gratis/components/atoms';
import Link from 'next/link';
import { TAuthLayoutProps } from '../../../types/layouts';

const SliderLayout: FC = () => {
  return (
    <div className="sm:flex hidden justify-center items-center lg:w-1/2  relative w-full">
      <Link href={'/'} className="absolute top-0 left-12">
        <Image
          // src={'/images/logo_nav.svg'}
          src={'/images/logo-pkbm-paket-c.png'}
          width={120}
          height={120}
          alt="Logo"
        />
      </Link>
      <Suspense fallback={<LoadingSpinner />}>
        <div className="flex justify-center gap-3 mt-6 items-center">
          <div className="flex flex-col justify-center">
            <figure className="flex justify-center h-[300px]">
              <Image
                // src={'/images/loginImg2.svg'}
                src={'/images/daftar-masuk.svg'}
                width={300}
                height={300}
                loading="eager"
                priority
                alt="Auth"
                className="transition-all max-w-[300px]"
              />
            </figure>
            <section className="min-h-[120px] w-full px-14 text-center mb-4 pb-4">
              <div className="text-[#171717] text-[22px] font-[700]">
                Jangan cuma mimpi, ayo langsung aksi
              </div>
              <div className="w-full flex justify-center pt-2">
                <p className="text-[#737373] text-[13px] font-[500] max-w-[350px]">
                  Mulailah langkahmu dengan belajar di sini. Ingat, setiap
                  langkah kecilmu hari ini adalah bekal kesuksesanmu di masa
                  depan!
                </p>
              </div>
            </section>
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export const AuthLayout: FC<TAuthLayoutProps> = ({
  title,
  description,
  children,
  h = 'screen',
  error,
}): ReactElement => {
  const [getError, setError] = useState('');

  useEffect(() => {
    setError(error as string);
  }, [error]);

  return (
    <section
      className={`w-full bg-neutral-100 flex justify-center items-center lg:py-10 lg:px-14 md:p-8 sm:p-6 ${
        h === 'full' ? 'h-full items-center' : 'lg:min-h-screen'
      }`}
    >
      <section className="flex bg-white max-w-7xl w-full h-full rounded-lg shadow-lg flex-col pt-11 pb-0 lg:flex-row mx-auto min-h-screen sm:min-h-min">
        <SliderLayout />
        <div className="flex-col md:gap-y-[57px] gap-y-6 items-center justify-center px-6 flex h-full w-full lg:w-1/2 pt-[57px] lg:pt-0">
          <Link href={'/'} className="sm:hidden">
            <Image
              src={'/images/logo-pkbm-paket-c.png'}
              width={120}
              height={120}
              alt="Logo"
              className="sm:hidden absolute top-2 left-6"
            />
          </Link>
          <div className="flex flex-col w-full justify-center items-center md:items-start md:justify-start gap-y-1">
            <h1 className="text-3xl md:text-4xl font-bold text-[#171717]">
              {title}
            </h1>
            <p className="text-sm  md:text-base text-[#737373] font-medium text-center md:text-left mt-1 lg:-mb-6">
              {description}
            </p>
          </div>
          <div className="flex flex-col w-full items-start pb-[37px] justify-start relative">
            {getError && (
              <div className="bg-error-100 mb-4 text-error-600 w-full font-[700] text-1xl p-4 rounded-lg border-2 border-error-500 flex justify-between">
                <p className="font-semibold">{error}</p>
                <span
                  onClick={() => setError('')}
                  className="text-right font-semibold cursor-pointer"
                >
                  x
                </span>
              </div>
            )}
            {children}
          </div>
        </div>
      </section>
    </section>
  );
};

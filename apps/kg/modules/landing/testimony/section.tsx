'use client';

import Image from 'next/image';
import { FC, ReactElement } from 'react';

import dynamic from 'next/dynamic';

const SwiperTestimony = dynamic(() => import('./swiper-testimony'), {
  ssr: false,
});

export const TestimonySection: FC = (): ReactElement => {
  return (
    // <section className="bg-primary-500 my-5">
    <section className="bg-sky-base my-5">
      <div className="lg:flex overflow-y-hidden h-[580px] lg:h-[544px] max-w-[1440px] mx-auto justify-start px-8 md:px-16 2xl:px-0 items-center relative">
        <div className="flex flex-col text-white text-left w-full lg:w-1/2 py-10 z-10">
          {/* <p className="text-lg font-semibold tracking-wide z-10">Testimoni</p> */}
          <h1 className="text-2xl lg:text-4xl font-bold font-700 py-5 z-10">
            Apa Kata Siswa Paket-C Gratis?
          </h1>
          <p className="text-[16px] z-10 font-medium">
            Paket-C Gratis membantu peserta didik meraih ijazah setara SMA
            secara fleksibel dan berkualitas.
            <br />
            Simak pengalaman mereka!
          </p>
          <div className="absolute z-0 right-0 -top-32 md:top-40 lg:top-0 g:pt-[250px]">
            <Image
              src="/images/testimony-fire.png"
              width={600}
              height={600}
              alt={'Banner 1'}
              loading="lazy"
              className="rounded-tr-lg md:block rounded-br-lg"
            />
          </div>
        </div>
        <SwiperTestimony />
      </div>
    </section>
  );
};

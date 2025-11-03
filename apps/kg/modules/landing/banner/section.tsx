'use client';

import dynamic from 'next/dynamic';
import { FC } from 'react';

const SwiperBanner = dynamic(() => import('./swiper-banner'), {
  ssr: false,
});

const BannerSection: FC = () => {
  return (
    <section className="flex flex-col py-4 md:py-10 w-full px-8 justify-center">
      <div className="">
        <SwiperBanner />
      </div>
    </section>
  );
};

export default BannerSection;

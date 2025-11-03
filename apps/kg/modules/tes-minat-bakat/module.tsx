'use client';

import { FC, useEffect } from 'react';

import { BaseLayout } from '../../components';
import HeroSection from './hero/section';
import ProgramSection from './program/section';
import ResultSection from './result/section';
import FooterCredit from '../../components/footer/footer-credit/footer-credit';

export const TesMinatBakatModules: FC = () => {
  // ganti title disini, karena metadata nya nabrak dengan use client
  useEffect(() => {
    document.title = 'Tes Minat & Bakat | Paket-C Gratis';
  }, []);

  return (
    <>
      <BaseLayout>
        <HeroSection />
        <ProgramSection />
        <ResultSection />
        <FooterCredit />
      </BaseLayout>
    </>
  );
};

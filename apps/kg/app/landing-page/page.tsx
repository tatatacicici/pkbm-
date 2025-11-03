'use client';
import { NextPage } from 'next';
import { LandingPageModules } from '../../modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const LandingPage: NextPage = () => {
  return (
    <>
      <LandingPageModules />
    </>
  );
};

export default LandingPage;

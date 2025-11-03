'use client';
import { Metadata, NextPage } from 'next';
import { TesMinatBakatModules } from '../../modules/tes-minat-bakat/module';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// export const metadata: Metadata = {
//   title: 'Tes Minat & Bakat',
//   description:
//     'Platform belajar gratis pertama di Indonesia, belajar mudah dengan paket-c gratis bisa diakses siapapun khususnya kaum marginal',
// };

const TesMinatBakatPage: NextPage = () => {
  return (
    <>
      <TesMinatBakatModules />
    </>
  );
};

export default TesMinatBakatPage;

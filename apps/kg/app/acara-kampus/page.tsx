import React from 'react';
import { Metadata, NextPage } from 'next';
import { ReactElement } from 'react';
import AcaraKampusModule from '../../modules/acara-kampus/module';
import { BaseLayout } from '../../../kg/components';
import { BreadCrumb } from '@kampus-gratis/components/atoms';
import { constantAcaraKampus } from '../../utils/constantAcaraKampus';
import FooterCredit from '../../components/footer/footer-credit/footer-credit';

export const metadata: Metadata = {
  title: 'Paket-C Gratis - Acara Kampus',
  description:
    'Jangan lewatkan berbagai acara menarik di Paket-C Gratis. Temukan informasi terkini tentang seminar, workshop, kompetisi, dan acara lainnya yang diselenggarakan di pkbm kami. Tingkatkan pengetahuan dan jaringan Anda dengan mengikuti acara-acara kami.',
};

const AcaraKampusPage: NextPage = (): ReactElement => {
  return (
    <BaseLayout>
      <BreadCrumb items={constantAcaraKampus} />
      <div className=" bg-neutral-100">
        <div className="w-full py-5 md:px-8 lg:px-[60px] min-h-[calc(100vh-140px)]">
          <AcaraKampusModule />
        </div>
      </div>
      <FooterCredit />
    </BaseLayout>
  );
};

export default AcaraKampusPage;

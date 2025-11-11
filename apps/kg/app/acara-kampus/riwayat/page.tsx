import { BaseLayout } from '../../../../kg/components';
import { Metadata, NextPage } from 'next';
import { ReactElement } from 'react';
import { BreadCrumb } from '@kampus-gratis/components/atoms';
import { constantAcaraKampusRiwayat } from '../../../../kg/utils/constantAcaraKampus';
import { EventHistory } from '../../../../kg/modules/acara-kampus/riwayat';
import FooterCredit from '../../../../kg/components/footer/footer-credit/footer-credit';

export const metadata: Metadata = {
  title: 'Paket-C Gratis - Acara Kampus',
  description:
    'Platform belajar gratis pertama di Indonesia, belajar mudah dengan paket-c gratis bisa diakses siapapun khususnya kaum marginal',
};

const EventPage: NextPage = (): ReactElement => {
  return (
    <BaseLayout>
      <BreadCrumb items={constantAcaraKampusRiwayat} />
      <div className="w-full px-6 py-5 md:px-8 lg:px-[60px] bg-neutral-100 h-screen">
        <EventHistory />
      </div>
      <FooterCredit />
    </BaseLayout>
  );
};

export default EventPage;

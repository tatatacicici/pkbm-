import { Metadata, NextPage } from 'next';
import { ReactElement } from 'react';
import { BaseLayout } from '../../../../kg/components';
import { BreadCrumb } from '@kampus-gratis/components/atoms';
import { constantAcaraKampusRegistered } from '../../../utils/constantAcaraKampus';
import { RegisteredEvent } from '../../../modules/acara-kampus/registered';
import FooterCredit from '../../../components/footer/footer-credit/footer-credit';

export const metadata: Metadata = {
  title: 'Paket-C Gratis - Acara Kampus',
  description:
    'Platform belajar gratis pertama di Indonesia, belajar mudah dengan paket-c gratis bisa diakses siapapun khususnya kaum marginal',
};

const EventPages: NextPage = (): ReactElement => {
  return (
    <>
      <BaseLayout>
        <BreadCrumb items={constantAcaraKampusRegistered} />
        <div className="w-full px-6 py-5 md:px-8 lg:px-[60px] bg-neutral-100 h-screen">
          <RegisteredEvent />
        </div>
        <FooterCredit />
      </BaseLayout>
    </>
  );
};

export default EventPages;

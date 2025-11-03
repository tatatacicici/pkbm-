import { Metadata, NextPage } from 'next';
import { ReactElement } from 'react';
import { ConsultationAndServiceModule } from '../../modules/konsultasi-dan-layanan';
import { BaseLayout } from '../../components/layouts/base/section';
import { BreadCrumb } from '@kampus-gratis/components/atoms';
import { consultasionService } from '../../modules/konsultasi-dan-layanan';

export const metadata: Metadata = {
  title: 'Paket-C Gratis - Konsultasi dan Layanan',
  description:
    'Platform belajar gratis pertama di Indonesia, belajar mudah dengan paket-c gratis bisa diakses siapapun khususnya kaum marginal',
};

const ConsultationAndServicePage: NextPage = (): ReactElement => {
  return (
    <BaseLayout>
      <BreadCrumb items={consultasionService} />
      <ConsultationAndServiceModule />
    </BaseLayout>
  );
};

export default ConsultationAndServicePage;

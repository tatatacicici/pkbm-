import { NextPage } from 'next';
import { ReactElement } from 'react';
import { BaseLayout } from '../../../components/layouts/base/section';
import { BreadCrumb } from '@kampus-gratis/components/atoms';
import {
  StatusDokumenModule,
  cekStatusDokumen,
} from '../../../modules/konsultasi-dan-layanan/status-dokumen';

const ConsultationAndServicePage: NextPage = (): ReactElement => {
  return (
    <BaseLayout>
      <BreadCrumb items={cekStatusDokumen} />
      <StatusDokumenModule />
    </BaseLayout>
  );
};

export default ConsultationAndServicePage;

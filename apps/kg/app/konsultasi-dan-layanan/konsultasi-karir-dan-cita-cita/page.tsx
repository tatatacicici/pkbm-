import { NextPage } from 'next';
import { ReactElement } from 'react';
import { BaseLayout } from '../../../components/layouts/base/section';
import { BreadCrumb } from '@kampus-gratis/components/atoms';
import {
  KonsultasiKarirDanCitaCitaModule,
  konsultasiKarirDanCitaCita,
} from './../../../modules/konsultasi-dan-layanan/konsultasi-karir-dan-cita-cita';

const ConsultationAndServicePage: NextPage = (): ReactElement => {
  return (
    <BaseLayout>
      <BreadCrumb items={konsultasiKarirDanCitaCita} />
      <KonsultasiKarirDanCitaCitaModule />
    </BaseLayout>
  );
};

export default ConsultationAndServicePage;

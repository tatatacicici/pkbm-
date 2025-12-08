import { AdministrationModule } from '../../modules/administration/module';
import { Metadata, NextPage } from 'next';
import { ReactElement } from 'react';
import { BaseLayout } from '../../components';
import { BreadCrumb } from '@kampus-gratis/components/atoms';
import { administrationBreadCumbs } from '../../modules/administration/constant';

export const metadata: Metadata = {
  title: 'Paket-C Gratis - Administrasi',
  description:
    'Platform belajar gratis pertama di Indonesia, belajar mudah dengan paket-c gratis bisa diakses siapapun khususnya kaum marginal',
};
const AdministrationPage: NextPage = (): ReactElement => {
  return (
    <BaseLayout title="Administrasi">
      <BreadCrumb items={administrationBreadCumbs} />
      <AdministrationModule />
    </BaseLayout>
  );
};

export default AdministrationPage;

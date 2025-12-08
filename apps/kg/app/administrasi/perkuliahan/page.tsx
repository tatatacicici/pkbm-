import { Metadata } from 'next';
import { BaseLayout } from '@kampus-gratis/apps/kg/components';
import CollegeAdministrationModule from '@kampus-gratis/apps/kg/modules/administration/perkuliahan/module';

export const metadata: Metadata = {
  title: 'Administrasi Sekolah',
  description:
    'Platform belajar gratis pertama di Indonesia, belajar mudah dengan paket-c gratis bisa diakses siapapun khususnya kaum marginal',
};

export default function CollegeAdministrationPage() {
  return (
    <BaseLayout title="Administrasi">
      <CollegeAdministrationModule />
    </BaseLayout>
  );
}

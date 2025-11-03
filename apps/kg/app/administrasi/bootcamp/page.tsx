import { Metadata } from 'next';
import { BaseLayout } from '@kampus-gratis/apps/kg/components';
import BootcampAdministrationModule from '@kampus-gratis/apps/kg/modules/administration/bootcamp/module';

export const metadata: Metadata = {
  title: 'Administrasi Bootcamp / Pelatihan',
  description:
    'Platform belajar gratis pertama di Indonesia, belajar mudah dengan paket-c gratis bisa diakses siapapun khususnya kaum marginal',
};

export default function BootcampAdministrationPage() {
  return (
    <BaseLayout title="Administrasi">
      <BootcampAdministrationModule />
    </BaseLayout>
  );
}

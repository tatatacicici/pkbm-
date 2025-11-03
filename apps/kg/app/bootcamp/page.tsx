import { BreadCrumb } from '@kampus-gratis/components/atoms';
import { BaseLayout } from 'apps/kg/components';
import FooterCredit from 'apps/kg/components/footer/footer-credit/footer-credit';
import { bootcampBreadCumbs } from 'apps/kg/modules/bootcamp/constant';
import BootcampModule from 'apps/kg/modules/bootcamp/module';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pelatihan Berbasis Kompetensi',
  description:
    'Platform belajar gratis pertama di Indonesia, belajar mudah dengan paket-c gratis bisa diakses siapapun khususnya kaum marginal',
};

export default function BootcampPage() {
  return (
    <BaseLayout>
      <BreadCrumb items={bootcampBreadCumbs} bgColor="bg-gray-50" />
      <BootcampModule />
      <FooterCredit />
    </BaseLayout>
  );
}

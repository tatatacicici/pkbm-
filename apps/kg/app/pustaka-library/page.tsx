import { BreadCrumb } from '@kampus-gratis/components/atoms';
import { BaseLayout } from '../../components';
import { pustakaLibraryBreadCumbs } from '../../modules/pustaka-library/constant';
import FooterCredit from '../../components/footer/footer-credit/footer-credit';
import { Metadata, NextPage } from 'next';
import PustakaLibraryModule from '../../modules/pustaka-library/module';

export const metadata: Metadata = {
  title: 'Perpustakaan',
  description:
    'Platform belajar gratis pertama di Indonesia, belajar mudah dengan paket-c gratis bisa diakses siapapun khususnya kaum marginal',
};

const PustakaLibraryPage: NextPage = () => {
  return (
    <>
      <BaseLayout>
        <BreadCrumb items={pustakaLibraryBreadCumbs} bgColor="bg-gray-50" />
        <PustakaLibraryModule />
        <FooterCredit />
      </BaseLayout>
    </>
  );
};

export default PustakaLibraryPage;

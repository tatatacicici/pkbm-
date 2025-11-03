import { BreadCrumb } from '@kampus-gratis/components/atoms';
import { Metadata, NextPage } from 'next';
import { ReactElement } from 'react';
import { BaseLayout } from '../../components';
import FooterCredit from '../../components/footer/footer-credit/footer-credit';
import { TryOutBreadcrumb } from '../../modules/try-out/constant';
import TryOutModule from '../../modules/try-out/module';

export const metadata: Metadata = {
  title: 'Try Out',
  description:
    'Platform belajar gratis pertama di Indonesia, belajar mudah dengan paket-c gratis bisa diakses siapapun khususnya kaum marginal',
};

const TryOutPage: NextPage = (): ReactElement => {
  return (
    <>
      <BaseLayout title="Try-Out">
        <BreadCrumb items={TryOutBreadcrumb} bgColor="bg-gray-100" />
        <TryOutModule />
        <FooterCredit />
      </BaseLayout>
    </>
  );
};

export default TryOutPage;

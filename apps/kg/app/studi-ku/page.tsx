import { BreadCrumb } from '@kampus-gratis/components/atoms';
import { StudiKuBreadCumbs } from 'apps/kg/utils/constantStudiKu';
import { Metadata, NextPage } from 'next';
import { ReactElement } from 'react';
import { BaseLayout } from '../../components';
import FooterCredit from '../../components/footer/footer-credit/footer-credit';
import { MyStudyModule } from '../../modules/mystudy/mystudy-module/module';

export const metadata: Metadata = {
  title: 'Pelajaran-Ku',
  description:
    'Platform belajar gratis pertama di Indonesia, belajar mudah dengan paket-c gratis bisa diakses siapapun khususnya kaum marginal',
};

const MyStudyPage: NextPage = (): ReactElement => {
  return (
    <>
      <BaseLayout title="Studi-Ku">
        <div className="w-full bg-neutral-50">
          <BreadCrumb items={StudiKuBreadCumbs} bgColor="bg-neutral-50" />
          <div className="max-w-[1440px] mx-auto mb-10 mt-10 sm:mt-0">
            <MyStudyModule />
          </div>
        </div>
        <FooterCredit />
      </BaseLayout>
    </>
  );
};

export default MyStudyPage;

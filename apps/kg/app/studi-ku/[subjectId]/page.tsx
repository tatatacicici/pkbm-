// import { BreadCrumb } from '@kampus-gratis/components/atoms';
import { ReactElement } from 'react';
import { Metadata } from 'next';

import { BaseLayout } from 'apps/kg/components';
import { SubjectDetailsModule } from 'apps/kg/modules/mystudy/subject-details/module';
import FooterCredit from 'apps/kg/components/footer/footer-credit/footer-credit';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Pelajaran Ku - Detail Mata Pelajaran`,
    description:
      'Platform belajar gratis pertama di Indonesia, belajar mudah dengan paket-c gratis bisa diakses siapapun khususnya kaum marginal',
  };
}

const MyStudyPage = (): ReactElement => {
  return (
    <BaseLayout title="Studi-Ku">
      <div className="w-full bg-neutral-50 px-6  md:px-14 lg:px-16">
        <div className="max-w-[1440px] mx-auto bg-white rounded-lg mb-10 mt-10 sm:mt-0 pb-10 shadow-sm">
          <SubjectDetailsModule />
        </div>
      </div>
      <FooterCredit />
    </BaseLayout>
  );
};

export default MyStudyPage;

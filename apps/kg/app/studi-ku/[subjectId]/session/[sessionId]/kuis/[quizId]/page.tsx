import { BreadCrumb } from '@kampus-gratis/components/atoms';
import { BaseLayout } from 'apps/kg/components';
import FooterCredit from 'apps/kg/components/footer/footer-credit/footer-credit';
import { QuizDetailModule } from 'apps/kg/modules/mystudy/quiz/detail';
import { Metadata } from 'next';
import { ReactElement } from 'react';

export const metadata: Metadata = {
  title: 'Paket-C Gratis - Detail Kuis',
  description:
    'Platform belajar gratis pertama di Indonesia, belajar mudah dengan paket-c gratis bisa diakses siapapun khususnya kaum marginal',
};

const QuizDetailPage = (): ReactElement => {
  return (
    <BaseLayout>
      <div className="w-full bg-neutral-50 px-6  md:px-14 lg:px-16">
        <div className="max-w-[1440px] mx-auto bg-red rounded-lg mb-10 pb-10 shadow-sm">
          <div className="max-w-[1440px] mx-auto">
            <QuizDetailModule />
          </div>
        </div>
      </div>
      <FooterCredit />
    </BaseLayout>
  );
};

export default QuizDetailPage;

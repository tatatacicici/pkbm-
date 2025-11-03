'use client';

import { BaseLayout } from '@kampus-gratis/apps/kg/components';
import FooterCredit from '@kampus-gratis/apps/kg/components/footer/footer-credit/footer-credit';
import { QuizResultModule } from '@kampus-gratis/apps/kg/modules/tes-minat-bakat/minat/quiz/result';

const QuizResultPage = () => {
  return (
    <BaseLayout>
      <QuizResultModule />
      <FooterCredit />
    </BaseLayout>
  );
};

export default QuizResultPage;

import { ReactElement } from 'react';
import { Metadata } from 'next';

import { BaseLayout } from 'apps/kg/components';
import FooterCredit from 'apps/kg/components/footer/footer-credit/footer-credit';
import TesMinatQuizInfoPage from './session/sessionId/quiz/quizId/page';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Tes Minat & Bakat - Tes Minat`,
    description:
      'Platform belajar gratis pertama di Indonesia, belajar mudah dengan paket-c gratis bisa diakses siapapun khususnya kaum marginal',
  };
}

const TesMinatPage = (): ReactElement => {
  return (
    <BaseLayout title="Test Minat & Bakat">
      <TesMinatQuizInfoPage />
      <FooterCredit />
    </BaseLayout>
  );
};

export default TesMinatPage;

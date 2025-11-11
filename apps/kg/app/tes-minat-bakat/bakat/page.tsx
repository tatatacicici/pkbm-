import { ReactElement } from 'react';
import { Metadata } from 'next';

import { BaseLayout } from 'apps/kg/components';
import TesBakatQuizInfoPage from './session/sessionId/quiz/quizId/page';
import FooterCredit from 'apps/kg/components/footer/footer-credit/footer-credit';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Tes Minat & Bakat - Tes Bakat`,
    description:
      'Platform belajar gratis pertama di Indonesia, belajar mudah dengan paket-c gratis bisa diakses siapapun khususnya kaum marginal',
  };
}

const TesBakatPage = (): ReactElement => {
  return (
    <BaseLayout title="Test Minat & Bakat">
      <TesBakatQuizInfoPage />
      <FooterCredit />
    </BaseLayout>
  );
};

export default TesBakatPage;

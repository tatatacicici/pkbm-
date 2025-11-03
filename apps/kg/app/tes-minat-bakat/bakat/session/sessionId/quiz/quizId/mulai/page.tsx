import { QuizTakeModule } from '@kampus-gratis/apps/kg/modules/tes-minat-bakat/bakat/quiz/take';
import { BaseLayout } from 'apps/kg/components';
import { Metadata } from 'next';
import { ReactElement } from 'react';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Tes Minat & Bakat - Tes Bakat - Mulai Tes`,
    description:
      'Platform belajar gratis pertama di Indonesia, belajar mudah dengan paket-c gratis bisa diakses siapapun khususnya kaum marginal',
  };
}

const StartQuizPage = (): ReactElement => {
  return (
    <BaseLayout>
      <QuizTakeModule />
    </BaseLayout>
  );
};

export default StartQuizPage;

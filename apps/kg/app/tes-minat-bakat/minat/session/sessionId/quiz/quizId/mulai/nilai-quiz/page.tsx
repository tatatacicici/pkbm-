import { QuizScoreModule } from '@kampus-gratis/apps/kg/modules/tes-minat-bakat/minat/quiz/score';
import { BaseLayout } from 'apps/kg/components';
import { Metadata } from 'next';
import { ReactElement } from 'react';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Tes Minat & Bakat - Tes Minat - Hasil Tes`,
    description:
      'Platform belajar gratis pertama di Indonesia, belajar mudah dengan paket-c gratis bisa diakses siapapun khususnya kaum marginal',
  };
}

const ScoreQuizPage = (): ReactElement => {
  return (
    <BaseLayout>
      <QuizScoreModule />
    </BaseLayout>
  );
};

export default ScoreQuizPage;

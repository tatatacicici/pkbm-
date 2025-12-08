import { BaseLayout } from 'apps/kg/components';
import { QuizScoreModule } from 'apps/kg/modules/mystudy/quiz/score';
import { Metadata } from 'next';
import { ReactElement } from 'react';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Pelajaran Ku - Hasil Kuis`,
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

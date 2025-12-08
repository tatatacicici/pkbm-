import { BaseLayout } from 'apps/kg/components';
import { QuizTakeModule } from 'apps/kg/modules/mystudy/quiz/take';
import { Metadata } from 'next';
import { ReactElement } from 'react';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Pelajaran Ku - Mulai Kuis`,
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

import { BaseLayout } from 'apps/kg/components';
import { QuizTakeModule } from '@kampus-gratis/apps/kg/modules/tes-kepemimpinan/pramuka/take';
import { Metadata } from 'next';
import { ReactElement } from 'react';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Kuis Tes Kepemimpinan - Pramuka - Mulai Kuis`,
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

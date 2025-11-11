import { BaseLayout } from 'apps/kg/components';
import { LayoutHistoryQuiz } from 'apps/kg/modules/mystudy/quiz/riwayat/Layout';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Pelajaran Ku - Riwayat Kuis`,
    description:
      'Platform belajar gratis pertama di Indonesia, belajar mudah dengan paket-c gratis bisa diakses siapapun khususnya kaum marginal',
  };
}

const HistoryQuizPage = () => {
  return (
    <BaseLayout>
      <LayoutHistoryQuiz />
    </BaseLayout>
  );
};

export default HistoryQuizPage;

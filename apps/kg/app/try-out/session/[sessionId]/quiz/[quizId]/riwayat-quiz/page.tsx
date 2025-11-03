import { LayoutHistoryQuiz } from '@kampus-gratis/apps/kg/modules/try-out/riwayat/Layout';
import { BaseLayout } from 'apps/kg/components';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Kuis Try Out - Riwayat Try Out`,
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

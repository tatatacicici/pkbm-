import { BaseLayout } from 'apps/kg/components';
import { LayoutHistoryQuiz } from '@kampus-gratis/apps/kg/modules/tes-kepemimpinan/pramuka/riwayat/Layout';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Kuis Tes Kepemimpinan - Pramuka - Riwayat Kuis`,
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

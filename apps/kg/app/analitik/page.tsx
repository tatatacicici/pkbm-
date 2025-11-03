import { ReactElement } from 'react';
import { Metadata, NextPage } from 'next';
import { BaseLayout } from '../../components/layouts/base/section';
import { AnalyticModule } from '../../modules/analitik/module';

export const metadata: Metadata = {
  title: 'Paket-C Gratis - Analitik',
  description:
    'Platform belajar gratis pertama di Indonesia, belajar mudah dengan paket-c gratis bisa diakses siapapun khususnya kaum marginal',
};

const AnalyticPage: NextPage = (): ReactElement => {
  return (
    <BaseLayout title="Analitik">
      <AnalyticModule />
    </BaseLayout>
  );
};

export default AnalyticPage;

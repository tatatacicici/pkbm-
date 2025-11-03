import { Metadata, NextPage } from 'next';
import { BaseLayout } from '../../components/layouts/base/section';
import { DashboardModule } from '../../modules/dashboard/module';

export const metadata: Metadata = {
  title: 'Beranda',
  description:
    'Platform belajar gratis pertama di Indonesia, belajar mudah dengan paket-c gratis bisa diakses siapapun khususnya kaum marginal',
};

const DashboardPage: NextPage = () => {
  return (
    <BaseLayout title="Dashboard">
      <DashboardModule />
    </BaseLayout>
  );
};

export default DashboardPage;

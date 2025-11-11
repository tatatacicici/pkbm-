import { BreadCrumb } from '@kampus-gratis/components/atoms';
import { BaseLayout } from '../../components/layouts/base/section';
import { Metadata, NextPage } from 'next';
import { studyPlanBreadCumbs } from '../../utils/constantAdministrations';
import { RencanaStudiModule } from '../../modules/rencana-studi';

export const metadata: Metadata = {
  title: 'Rencana Belajar',
  description:
    'Platform belajar gratis pertama di Indonesia, belajar mudah dengan paket-c gratis bisa diakses siapapun khususnya kaum marginal',
};

const StudyPlanPage: NextPage = () => {
  return (
    <BaseLayout title="Rencana Studi">
      <BreadCrumb bgColor="bg-neutral-50" items={studyPlanBreadCumbs} />
      <RencanaStudiModule />
    </BaseLayout>
  );
};

export default StudyPlanPage;

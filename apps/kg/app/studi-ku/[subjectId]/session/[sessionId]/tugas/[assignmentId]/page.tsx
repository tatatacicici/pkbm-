import { BaseLayout } from 'apps/kg/components';
import { StudyPlanAssigmentDetailModule } from 'apps/kg/modules/mystudy/assignment/detail';
import { Metadata } from 'next';
import { ReactElement } from 'react';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Pelajaran Ku - Detail Tugas`,
    description:
      'Platform belajar gratis pertama di Indonesia, belajar mudah dengan paket-c gratis bisa diakses siapapun khususnya kaum marginal',
  };
}

const StudyPlanAssigmentPage = (): ReactElement => {
  return (
    <BaseLayout title="Tugas">
      <StudyPlanAssigmentDetailModule />
    </BaseLayout>
  );
};

export default StudyPlanAssigmentPage;

import { BreadCrumb } from '@kampus-gratis/components/atoms';
import { ReactElement } from 'react';
import { BaseLayout } from '../../../components/layouts/base/section';
import { StudyProgram } from '../../../modules/study-plan/study-program';
import { studyProgramBreadCumbs } from '../../../utils/constantAdministrations';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Paket-C Gratis - Rencana Studi - Fakultas - Program Studi',
  description:
    'Platform belajar gratis pertama di Indonesia, belajar mudah dengan paket-c gratis bisa diakses siapapun khususnya kaum marginal',
};

const FacultyPage = ({ params }: { params: { id: string } }): ReactElement => {
  const { id } = params;
  return (
    <BaseLayout title="Pilih Program Studi">
      <BreadCrumb bgColor="bg-neutral-50" items={studyProgramBreadCumbs} />
      <StudyProgram id={id} />
    </BaseLayout>
  );
};

export default FacultyPage;

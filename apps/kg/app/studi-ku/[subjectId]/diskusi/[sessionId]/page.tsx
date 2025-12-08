import { BreadCrumb } from '@kampus-gratis/components/atoms';
import { BaseLayout } from 'apps/kg/components';
import { DiskusiStudikuModule } from 'apps/kg/modules/mystudy/discussion';
import { Metadata } from 'next';
import { ReactElement } from 'react';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Pelajaran Ku - Diskusi`,
    description:
      'Platform belajar gratis pertama di Indonesia, belajar mudah dengan paket-c gratis bisa diakses siapapun khususnya kaum marginal',
  };
}

const DiskusiStudikuPage = (): ReactElement => {
  return (
    <BaseLayout title="Diskusi">
      <DiskusiStudikuModule />
    </BaseLayout>
  );
};

export default DiskusiStudikuPage;

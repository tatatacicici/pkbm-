import { BreadCrumb } from '@kampus-gratis/components/atoms';
import { BaseLayout } from 'apps/kg/components';
import { RiwayatRefleksiEksplorasiModule } from 'apps/kg/modules/mystudy/refleksi-eksplorasi/riwayat/module';
import { Metadata } from 'next';
import { ReactElement } from 'react';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Pelajaran Ku - Refleksi Pembelajaran`,
    description:
      'Platform belajar gratis pertama di Indonesia, belajar mudah dengan paket-c gratis bisa diakses siapapun khususnya kaum marginal',
  };
}

const RiwayatRefleksiEkspolrasiPage = (): ReactElement => {
  return (
    <BaseLayout>
      <RiwayatRefleksiEksplorasiModule />
    </BaseLayout>
  );
};

export default RiwayatRefleksiEkspolrasiPage;

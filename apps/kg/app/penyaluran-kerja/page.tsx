import { BreadCrumb } from '@kampus-gratis/components/atoms';
import { BaseLayout } from '../../components';
import { Metadata, NextPage } from 'next';
import { ReactElement } from 'react';
import { distributionService } from '../../utils/constantPenyaluranKerja';
import { DistributionOfWorkModule } from '../../modules/penyaluran-kerja/module';
import FooterCredit from '../../components/footer/footer-credit/footer-credit';

export const metadata: Metadata = {
  title: 'Paket-C Gratis - Penyaluran Kerja',
  description:
    'Platform belajar gratis pertama di Indonesia, belajar mudah dengan paket-c gratis bisa diakses siapapun khususnya kaum marginal',
};

const DistributionOfWorkPage: NextPage = (): ReactElement => {
  return (
    <BaseLayout>
      <BreadCrumb items={distributionService} />
      <DistributionOfWorkModule />
      <FooterCredit />
    </BaseLayout>
  );
};

export default DistributionOfWorkPage;

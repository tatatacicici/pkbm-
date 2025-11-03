import { SemuaFiturModule } from '../../modules/semua-fitur/module';
import { Metadata, NextPage } from 'next';
import { ReactElement } from 'react';

export const metadata: Metadata = {
  title: 'Semua Fitur',
  description:
    'Platform belajar gratis pertama di Indonesia, belajar mudah dengan paket-c gratis bisa diakses siapapun khususnya kaum marginal',
};

const SemuaFiturPage: NextPage = (): ReactElement => {
  return <SemuaFiturModule />;
};

export default SemuaFiturPage;

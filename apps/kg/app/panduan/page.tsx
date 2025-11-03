import { PanduanModule } from '../../modules/panduan/landing';
import { Metadata, NextPage } from 'next';
import { ReactElement } from 'react';

export const metadata: Metadata = {
  title: 'Panduan',
  description:
    'Platform belajar gratis pertama di Indonesia, belajar mudah dengan paket-c gratis bisa diakses siapapun khususnya kaum marginal',
};

const PanduanPage: NextPage = (): ReactElement => {
  return <PanduanModule />;
};

export default PanduanPage;

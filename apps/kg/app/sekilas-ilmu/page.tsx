import { GlimpseKnowledgeModule } from '../../modules/sekilas-ilmu/module';
import { Metadata, NextPage } from 'next';
import { ReactElement } from 'react';

export const metadata: Metadata = {
  title: 'Tahukah Kamu',
  description:
    'Platform belajar gratis pertama di Indonesia, belajar mudah dengan paket-c gratis bisa diakses siapapun khususnya kaum marginal',
};

const GlimpseOfKnowledgePage: NextPage = (): ReactElement => {
  return <GlimpseKnowledgeModule />;
};

export default GlimpseOfKnowledgePage;

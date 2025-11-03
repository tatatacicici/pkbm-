import { ScoreModule } from '../../modules/score-sertificate/module';
import { Metadata, NextPage } from 'next';
import { ReactElement } from 'react';

export const metadata: Metadata = {
  title: 'Nilai dan Rapor',
  description:
    'Platform belajar gratis pertama di Indonesia, belajar mudah dengan paket-c gratis bisa diakses siapapun khususnya kaum marginal',
};

const GradeAndCertificationPage: NextPage = (): ReactElement => {
  return <ScoreModule />;
};

export default GradeAndCertificationPage;

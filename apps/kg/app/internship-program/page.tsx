import InternshipProgramModule from '../../modules/internship-program';

import { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'Paket-C Gratis - Internship Program',
  description:
    'Platform belajar gratis pertama di Indonesia, belajar mudah dengan paket-c gratis bisa diakses siapapun khususnya kaum marginal',
};

const IntershipProgramPage: NextPage = () => {
  return (
    <>
      <InternshipProgramModule />
    </>
  );
};

export default IntershipProgramPage;

import { AssignmentModule } from '../../modules/assignment/module';
import { Metadata, NextPage } from 'next';
import { ReactElement } from 'react';

export const metadata: Metadata = {
  title: 'PR & Tugas',
  description:
    'Platform belajar gratis pertama di Indonesia, belajar mudah dengan paket-c gratis bisa diakses siapapun khususnya kaum marginal',
};

const AssignmentPages: NextPage = (): ReactElement => {
  return <AssignmentModule />;
};

export default AssignmentPages;

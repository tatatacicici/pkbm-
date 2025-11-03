import BaseLayout from '../../../modules/base/BaseLayout';
import React from 'react';
import Breadcrumb from '../../../components/breadcrumb/Breadcrumb';
import { ProgramStudiSection } from '../../../modules/rencana-studi/programstudi';


const ProgramStudiPage = () => {
  const ProgramStudiBreadCrumb = [
    {
      name: 'Rencana Studi',
      link: '/rencana-studi',
    },
    { name: 'Program Studi', link: '/rencana-studi/program-studi' },
  ];

  return (
    <BaseLayout>
    <Breadcrumb items={ProgramStudiBreadCrumb} bgColor="bg-neutral-100" />
      <ProgramStudiSection />
    </BaseLayout>
  );
};

export default ProgramStudiPage;

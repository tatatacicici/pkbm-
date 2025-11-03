import BaseLayout from '../../../modules/base/BaseLayout';
import React from 'react';
import Breadcrumb from '../../../components/breadcrumb/Breadcrumb';
import { MataKuliahSection } from '../../../modules/rencana-studi/matakuliah';

const MataKuliahPage = () => {
  const MataKuliahBreadCrumb = [
    {
      name: 'Rencana Studi',
      link: '/rencana-studi',
    },
    { name: 'Mata Kuliah', link: '/rencana-studi/matakuliah' },
  ];

  return (
    <BaseLayout>
      <Breadcrumb items={MataKuliahBreadCrumb} bgColor="bg-neutral-100" />
      <MataKuliahSection />
    </BaseLayout>
  );
};

export default MataKuliahPage;

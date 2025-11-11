'use client';
import { BreadCrumb } from '@kampus-gratis/components/atoms';
import { BaseLayout } from 'apps/kg/components';
import PenilaianPengajarStartModule from 'apps/kg/modules/mystudy/teacher-assessment/assessment';
import React from 'react';

const Mulai = () => {
  return (
    <BaseLayout>
      <PenilaianPengajarStartModule />
    </BaseLayout>
  );
};

export default Mulai;

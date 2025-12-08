'use client';
import { BaseLayout } from 'apps/kg/components';
import PenilaianPengajarModule from 'apps/kg/modules/mystudy/teacher-assessment';
import React, { ReactElement } from 'react';

const PenilaianPengajarPage = (): ReactElement => {
  return (
    <BaseLayout title="Studi-Ku">
      <PenilaianPengajarModule />
    </BaseLayout>
  );
};

export default PenilaianPengajarPage;

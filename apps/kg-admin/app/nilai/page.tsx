'use client';
import BaseLayout from '../../modules/base/BaseLayout';
import React from 'react';
import { NilaiModule } from '../../modules/nilai-sertifikat/nilai';

const NilaiPage = () => {
  return (
    <BaseLayout>
      <div>
        <NilaiModule />
      </div>
    </BaseLayout>
  );
};

export default NilaiPage;

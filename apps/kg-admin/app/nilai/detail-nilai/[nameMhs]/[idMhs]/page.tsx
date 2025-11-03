'use client';

import BaseLayout from '../../../../../modules/base/BaseLayout';
import React from 'react';
import { DetailMahasiswaModule } from '../../../../../modules/nilai-sertifikat/detail-mahasiswa';
export default function DetailPage() {
  return (
    <BaseLayout>
      <div className="h-full w-min-[1440px]">
        <DetailMahasiswaModule />
      </div>
    </BaseLayout>
  );
}

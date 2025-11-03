'use client';
import React from 'react';
import { DetailNilaiModule } from '../../../../../../../modules/nilai-sertifikat/detail-nilai';
import BaseLayout from '../../../../../../../modules/base/BaseLayout';
export default function DetailPage() {
  return (
    <BaseLayout>
      <div className="h-full w-min-[1440px]">
        <DetailNilaiModule />
      </div>
    </BaseLayout>
  );
}

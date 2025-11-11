'use client';

import BaseLayout from '../../../modules/base/BaseLayout';
import React from 'react';
import { NilaiModule } from '../../../modules/nilai-sertifikat/nilai/index';

export default function DetailPage() {
  return (
    <BaseLayout>
      <div>
        <NilaiModule />
      </div>
    </BaseLayout>
  );
}

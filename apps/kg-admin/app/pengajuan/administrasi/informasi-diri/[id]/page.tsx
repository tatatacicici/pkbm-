'use client';
import LihatInformasiModule from '../../../../../modules/pengajuan/administrasi/lihat-informasi';
import BaseLayout from '../../../../../modules/base/BaseLayout';
import React from 'react';

const LihatInformasiPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return (
    <BaseLayout>
      <LihatInformasiModule id={id} />
    </BaseLayout>
  );
};

export default LihatInformasiPage;

'use client';

import React from 'react';
import { BaseLayout } from '../../../../components/layouts/base/section';

import DetailPertemuan from './detail-pertemuan';
import Capaian from './Capaian';
import DetailPenilaian from './penilaian';
import { useGetDetailMatkulConversion } from '../../../../hooks/konversi/hook';
import { BreadCrumb } from '@kampus-gratis/components/atoms';
import FooterCredit from '../../../../components/footer/footer-credit/footer-credit';

const DetailMataKuliahKonversiModule = ({ id }: { id: string }) => {
  useGetDetailMatkulConversion(id);

  const constantKonversi = [
    {
      name: 'Beranda',
      link: '/beranda',
    },
    {
      name: 'Konversi SKS',
      link: '/konversi',
    },
    {
      name: 'Daftar Mata kuliah',
      link: '/konversi/program',
    },
    {
      name: 'Detail Mata kuliah',
      link: '/konversi/program/daftar-mata-kuliah',
    },
  ];
  return (
    <BaseLayout title="Tahapan Konversi">
      <BreadCrumb items={constantKonversi} />
      <div className="px-6 md:px-14 lg:px-16 w-full min-h-[calc(94vh-72px)] flex">
        <div className="max-w-[1440px] mx-auto flex w-full flex-col space-y-5">
          <DetailPertemuan />
          <Capaian />
          <DetailPenilaian />
        </div>
      </div>
      <FooterCredit />
    </BaseLayout>
  );
};

export default DetailMataKuliahKonversiModule;

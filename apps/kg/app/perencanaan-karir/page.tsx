import React from 'react';
import { Maintenance } from '../../components/maintenance';
import { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'Paket-C Gratis - Perencanaan Karir',
  description:
    'Platform belajar gratis pertama di Indonesia, belajar mudah dengan paket-c gratis bisa diakses siapapun khususnya kaum marginal',
};

const PerencanaanKarir: NextPage = () => {
  return (
    <>
      <Maintenance />
    </>
  );
};

export default PerencanaanKarir;

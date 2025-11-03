import DaftarMatkulKonversiModule from '../../../../modules/konversi/program/daftar-matkul/module';
import { Metadata, NextPage } from 'next';
import { ReactElement } from 'react';

export const metadata: Metadata = {
  title: 'Paket-C Gratis - Daftar Mata Kuliah Konversi ',
  description: 'Lakukan konversi mata kuliah di paket-c gratis dengan mudah',
};

const DaftarMataKuliahPage: NextPage = (): ReactElement => {
  return <DaftarMatkulKonversiModule />;
};

export default DaftarMataKuliahPage;

import { Metadata, NextPage } from 'next';
import { ReactElement, use } from 'react';
import DetailMataKuliahKonversiModule from '../../../../../modules/konversi/program/detail-matkul';

export const metadata: Metadata = {
  title: 'Paket-C Gratis - Daftar Mata Kuliah Konversi ',
  description: 'Lakukan konversi mata kuliah di paket-c gratis dengan mudah',
};

type Props = {
  params: Promise<{ id: string }>;
};

const DetailMataKuliahKonversiPage = ({ params }: Props): ReactElement => {
  const { id } = use(params);
  return <DetailMataKuliahKonversiModule id={id} />;
};

export default DetailMataKuliahKonversiPage;

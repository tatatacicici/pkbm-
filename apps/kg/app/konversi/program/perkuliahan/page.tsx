import { TahapanKonversiModule } from '../../../../modules/konversi/tahapan';
import { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'Paket-C Gratis - Tahapan Konversi',
  description:
    'Mahasiswa dapat melakukan konversi nilai dari kampus lain ke Paket-C Gratis',
};

const TahapanKonversiPage: NextPage = () => {
  return <TahapanKonversiModule />;
};

export default TahapanKonversiPage;

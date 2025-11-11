import { Metadata } from 'next';
import KonversiModule from '../../modules/konversi/module';

export const metadata: Metadata = {
  title: 'Paket-C Gratis - Konversi SKS',
  description:
    'Platform belajar gratis pertama di Indonesia, belajar mudah dengan paket-c gratis bisa diakses siapapun khususnya kaum marginal',
};

const Konversi = () => {
  return <KonversiModule />;
};

export default Konversi;

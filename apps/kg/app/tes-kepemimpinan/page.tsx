import { Metadata } from 'next';
import TesKepemimpinanModule from '../../modules/tes-kepemimpinan/module';
import { BaseLayout } from '../../components';
import FooterCredit from '../../components/footer/footer-credit/footer-credit';

export const metadata: Metadata = {
  title: 'Tes Kepemimpinan',
  description:
    'Platform belajar gratis pertama di Indonesia, belajar mudah dengan paket-c gratis bisa diakses siapapun khususnya kaum marginal',
};

export default function TesKepemimpinanPage() {
  return (
    <BaseLayout>
      <TesKepemimpinanModule />
      <FooterCredit />
    </BaseLayout>
  );
}

import { BaseLayout } from '@kampus-gratis/apps/kg/components';
import FooterCredit from '@kampus-gratis/apps/kg/components/footer/footer-credit/footer-credit';
import StandarasisasiMateriModule from '@kampus-gratis/apps/kg/modules/mega-menu/menjadi-pengajar/standarasisasi-materi/module';

export default function StandarasasiMateri() {
  return (
    <BaseLayout>
      <StandarasisasiMateriModule />
      <FooterCredit />
    </BaseLayout>
  );
}

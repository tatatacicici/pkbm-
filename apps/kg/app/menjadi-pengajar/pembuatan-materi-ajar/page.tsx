import { BaseLayout } from '@kampus-gratis/apps/kg/components';
import FooterCredit from '@kampus-gratis/apps/kg/components/footer/footer-credit/footer-credit';
import PembuatanMateriModule from '@kampus-gratis/apps/kg/modules/mega-menu/menjadi-pengajar/pembuatan-materi/module';

export default function PembuatanMateriAjarPage() {
  return (
    <BaseLayout>
      <PembuatanMateriModule />
      <FooterCredit />
    </BaseLayout>
  );
}

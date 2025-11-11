import { BaseLayout } from '@kampus-gratis/apps/kg/components';
import FooterCredit from '@kampus-gratis/apps/kg/components/footer/footer-credit/footer-credit';
import OrientasiPersiapanModule from '@kampus-gratis/apps/kg/modules/mega-menu/menjadi-pengajar/orientasi-persiapan/module';

export default function OrientasiPersiapanPage() {
  return (
    <BaseLayout>
      <OrientasiPersiapanModule />
      <FooterCredit />
    </BaseLayout>
  );
}

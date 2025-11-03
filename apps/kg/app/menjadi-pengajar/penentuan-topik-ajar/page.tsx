import { BaseLayout } from '@kampus-gratis/apps/kg/components';
import FooterCredit from '@kampus-gratis/apps/kg/components/footer/footer-credit/footer-credit';
import PenentuanTopikModule from '@kampus-gratis/apps/kg/modules/mega-menu/menjadi-pengajar/penentuan-topik/module';

export default function PenentuanTopikAjarPage() {
  return (
    <BaseLayout>
      <PenentuanTopikModule />
      <FooterCredit />
    </BaseLayout>
  );
}

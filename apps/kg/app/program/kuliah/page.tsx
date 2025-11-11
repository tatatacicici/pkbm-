import { BaseLayout } from '@kampus-gratis/apps/kg/components';
import FooterCredit from '@kampus-gratis/apps/kg/components/footer/footer-credit/footer-credit';
import KuliahModule from '@kampus-gratis/apps/kg/modules/mega-menu/program/kuliah/module';

export default function KuliiahPage() {
  return (
    <BaseLayout>
      <KuliahModule />
      <FooterCredit />
    </BaseLayout>
  );
}

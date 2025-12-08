import { BaseLayout } from '@kampus-gratis/apps/kg/components';
import FooterCredit from '@kampus-gratis/apps/kg/components/footer/footer-credit/footer-credit';
import MagangModule from '@kampus-gratis/apps/kg/modules/mega-menu/proses/magang/module';

export default function ProsesMagangPage() {
  return (
    <BaseLayout>
      <MagangModule />
      <FooterCredit />
    </BaseLayout>
  );
}

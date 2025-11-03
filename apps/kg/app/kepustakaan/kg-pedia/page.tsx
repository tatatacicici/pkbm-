import { BaseLayout } from '@kampus-gratis/apps/kg/components';
import FooterCredit from '@kampus-gratis/apps/kg/components/footer/footer-credit/footer-credit';
import KGPediaModule from '@kampus-gratis/apps/kg/modules/mega-menu/kepustakaan/kg-pedia/module';

export default function KGPediaPage() {
  return (
    <BaseLayout>
      <KGPediaModule />
      <FooterCredit />
    </BaseLayout>
  );
}

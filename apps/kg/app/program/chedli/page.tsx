import { BaseLayout } from '@kampus-gratis/apps/kg/components';
import FooterCredit from '@kampus-gratis/apps/kg/components/footer/footer-credit/footer-credit';
import ChedliModule from '@kampus-gratis/apps/kg/modules/mega-menu/program/chedli/module';

export default function ChedliPage() {
  return (
    <BaseLayout>
      <ChedliModule />
      <FooterCredit />
    </BaseLayout>
  );
}

import { BaseLayout } from '@kampus-gratis/apps/kg/components';
import FooterCredit from '@kampus-gratis/apps/kg/components/footer/footer-credit/footer-credit';
import PenjadwalanPenugasanModule from '@kampus-gratis/apps/kg/modules/mega-menu/menjadi-pengajar/penjadwalan-penugasan/module';

export default function PenjadwalanPenugasanPage() {
  return (
    <BaseLayout>
      <PenjadwalanPenugasanModule />
      <FooterCredit />
    </BaseLayout>
  );
}

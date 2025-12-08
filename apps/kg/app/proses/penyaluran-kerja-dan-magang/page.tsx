import { BaseLayout } from '@kampus-gratis/apps/kg/components';
import FooterCredit from '@kampus-gratis/apps/kg/components/footer/footer-credit/footer-credit';
import PenyaluranKerjaMagangModule from '@kampus-gratis/apps/kg/modules/mega-menu/proses/penyaluran-kerja-magang/module';

export default function PenyaluranKerjaMagangPage() {
  return (
    <BaseLayout>
      <PenyaluranKerjaMagangModule />
      <FooterCredit />
    </BaseLayout>
  );
}

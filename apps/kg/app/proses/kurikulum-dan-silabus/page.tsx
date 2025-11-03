import { BaseLayout } from '@kampus-gratis/apps/kg/components';
import FooterCredit from '@kampus-gratis/apps/kg/components/footer/footer-credit/footer-credit';
import KurikulumSilabusModule from '@kampus-gratis/apps/kg/modules/mega-menu/proses/kurikulum-silabus/module';

export default function KurikulumSilabusPage() {
  return (
    <BaseLayout>
      <KurikulumSilabusModule />
      <FooterCredit />
    </BaseLayout>
  );
}

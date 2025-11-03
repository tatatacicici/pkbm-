import { BaseLayout } from '@kampus-gratis/apps/kg/components';
import FooterCredit from '@kampus-gratis/apps/kg/components/footer/footer-credit/footer-credit';
import ProsesPendaftaranModule from '@kampus-gratis/apps/kg/modules/mega-menu/proses/pendaftaran/module';

export default function ProsesPendaftaranPage() {
  return (
    <BaseLayout>
      <ProsesPendaftaranModule />
      <FooterCredit />
    </BaseLayout>
  );
}

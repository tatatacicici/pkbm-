import { BaseLayout } from '@kampus-gratis/apps/kg/components';
import FooterCredit from '@kampus-gratis/apps/kg/components/footer/footer-credit/footer-credit';
import PendaftaranPengajarModule from '@kampus-gratis/apps/kg/modules/mega-menu/menjadi-pengajar/pendaftaran/module';

export default function PendaftaranPengajarPage() {
  return (
    <BaseLayout>
      <PendaftaranPengajarModule />
      <FooterCredit />
    </BaseLayout>
  );
}

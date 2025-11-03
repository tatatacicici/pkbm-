import { BaseLayout } from '@kampus-gratis/apps/kg/components';
import FooterCredit from '@kampus-gratis/apps/kg/components/footer/footer-credit/footer-credit';
import SeleksiVerifikasiModule from '@kampus-gratis/apps/kg/modules/mega-menu/menjadi-pengajar/seleksi-dan-verifikasi/module';

export default function SeleksiVerifikasiPage() {
  return (
    <BaseLayout>
      <SeleksiVerifikasiModule />;
      <FooterCredit />
    </BaseLayout>
  );
}

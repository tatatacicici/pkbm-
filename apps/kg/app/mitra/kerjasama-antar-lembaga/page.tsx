import { BaseLayout } from '@kampus-gratis/apps/kg/components';
import FooterCredit from '@kampus-gratis/apps/kg/components/footer/footer-credit/footer-credit';
import KerjasamaAntarLembagaModule from '@kampus-gratis/apps/kg/modules/mega-menu/mitra/kerjasama-antar-lembaga/module';

export default function KerjasamaAntarLembagaPage() {
  return (
    <BaseLayout>
      <KerjasamaAntarLembagaModule />
      <FooterCredit />
    </BaseLayout>
  );
}

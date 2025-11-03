import { BaseLayout } from '@kampus-gratis/apps/kg/components';
import FooterCredit from '@kampus-gratis/apps/kg/components/footer/footer-credit/footer-credit';
import EvaluasiUmpanBalikModule from '@kampus-gratis/apps/kg/modules/mega-menu/menjadi-pengajar/evaluasi-umpan-balik/module';

export default function EvaluasiUmpanBalikPage() {
  return (
    <BaseLayout>
      <EvaluasiUmpanBalikModule />
      <FooterCredit />
    </BaseLayout>
  );
}

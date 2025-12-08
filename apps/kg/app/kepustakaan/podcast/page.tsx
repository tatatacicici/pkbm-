import { BaseLayout } from '@kampus-gratis/apps/kg/components';
import FooterCredit from '@kampus-gratis/apps/kg/components/footer/footer-credit/footer-credit';
import KGPodcastModule from '@kampus-gratis/apps/kg/modules/mega-menu/kepustakaan/podcast/module';

export default function KGPodcastPage() {
  return (
    <BaseLayout>
      <KGPodcastModule />
      <FooterCredit />
    </BaseLayout>
  );
}

import FooterCredit from '@kampus-gratis/apps/kg/components/footer/footer-credit/footer-credit';
import { BaseLayout } from 'apps/kg/components';
import PerbandinganBootcampModules from 'apps/kg/modules/mega-menu/proses/perbandingan-bootcamp';
import React from 'react';

export default function PerbandinganBootcampPages() {
  return (
    <BaseLayout>
      <PerbandinganBootcampModules />
      <FooterCredit />
    </BaseLayout>
  );
}

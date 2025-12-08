import { BaseLayout } from 'apps/kg/components';
import CSRModules from 'apps/kg/modules/mega-menu/mitra/csr';
import DonorHibahModules from 'apps/kg/modules/mega-menu/mitra/donor-dan-hibah';

export default function DonorHibahPages() {
  return (
    <BaseLayout>
      <DonorHibahModules />
    </BaseLayout>
  );
}

'use client';

import { BaseLayout } from '@kampus-gratis/apps/kg/components';
import { BreadCrumb } from '@kampus-gratis/components/atoms';
import TabList from '../../assesmen-dan-uji-kompetensi/common/tab-list';
import { SimulasiListBreadcrumb } from '../constant';

export default function SimulationListModules() {
  return (
    <BaseLayout>
      <BreadCrumb items={SimulasiListBreadcrumb} bgColor="bg-grey-100" />
      <div className="bg-grey-100">
        <div className="w-full max-w-[1440px] mt-4 mb-12 mx-auto min-h-[80vh] space-y-4 px-8 md:px-14 lg:px-16 2xl:px-0 ">
          <div className="bg-white rounded-md p-8 w-full shadow-sm space-y-4">
            <h2 className="text-2xl font-bold">Daftar Simulasi</h2>
          </div>
          <div className="bg-white rounded-md p-8 w-full shadow-sm">
            <TabList
              badgeColor="bg-violet-500"
              badgeText="Simulasi"
              href="/simulasi-dan-roleplay/simulasi/1"
              title="Simulasi Matkul 1"
              type="simulasi"
            />
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}

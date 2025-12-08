'use client';

import { BaseLayout } from '@kampus-gratis/apps/kg/components';
import { BreadCrumb } from '@kampus-gratis/components/atoms';
import TabList from '../../assesmen-dan-uji-kompetensi/common/tab-list';
import { RoleplayListBreadcrumb } from '../constant';

export default function RoleplayListModules() {
  return (
    <BaseLayout>
      <BreadCrumb items={RoleplayListBreadcrumb} bgColor="bg-grey-100" />
      <div className="bg-grey-100">
        <div className="w-full max-w-[1440px] mt-4 mb-12  mx-auto min-h-[80vh] space-y-6 px-8 md:px-14 lg:px-16 2xl:px-0 ">
          <div className="bg-white rounded-md p-8 w-full shadow-sm">
            <h2 className="text-2xl font-bold">Roleplay</h2>
          </div>
          <div className="bg-white rounded-md p-8 w-full shadow-sm">
            <TabList
              badgeColor="bg-lime-500"
              badgeText="Roleplay"
              href="/simulasi-dan-roleplay/roleplay/1"
              title="Roleplay Matkul 1"
              type="roleplay"
            />
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}

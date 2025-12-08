'use client';

import { BaseLayout } from '@kampus-gratis/apps/kg/components';
import { BreadCrumb } from '@kampus-gratis/components/atoms';
import TabList from '../common/tab-list';
import { UjiKompetensiListBreadCrumb } from '../constant';

export default function UjiKompetensiListModule() {
  return (
    <BaseLayout>
      <BreadCrumb items={UjiKompetensiListBreadCrumb} bgColor="bg-grey-100" />
      <div className="bg-grey-100">
        <div className="w-full max-w-[1440px] mt-4 mb-12 mx-auto min-h-[80vh] space-y-4 px-8 md:px-14 lg:px-16 2xl:px-0 ">
          <div className="bg-white rounded-md p-8 w-full shadow-sm">
            <h2 className="text-2xl font-bold">Uji Kompetensi</h2>
          </div>
          <div className="bg-white rounded-md p-8 w-full shadow-sm">
            <TabList
              badgeColor="bg-lime-500"
              badgeText="Uji Kompetensi"
              href="/assesmen-dan-uji-kompetensi/uji-kompetensi/1"
              title="Kompetensi : Network Desainer"
              type="uji-kompetensi"
            />
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}

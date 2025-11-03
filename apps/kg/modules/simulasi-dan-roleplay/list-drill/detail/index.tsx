'use client';

import { BaseLayout } from '@kampus-gratis/apps/kg/components';
import RoleplayDetailContent from '@kampus-gratis/apps/kg/components/simulasi-dan-roleplay/detail-roleplay';
import { BreadCrumb } from '@kampus-gratis/components/atoms';
import { usePathname } from 'next/navigation';
import { RoleplayListBreadcrumb } from '../../constant';

export default function RoleplayDetailModules() {
  const pathname = usePathname();

  const breadcrumbData = {
    name: 'Detail Roleplay',
    link: pathname,
  };

  return (
    <BaseLayout>
      <BreadCrumb
        items={[...RoleplayListBreadcrumb, breadcrumbData]}
        bgColor="bg-grey-100"
      />
      <div className="bg-grey-100">
        <div className="w-full max-w-[1440px] mt-4 mb-12 mx-auto min-h-[80vh] space-y-6 px-8 md:px-14 lg:px-16 2xl:px-0 ">
          <div className="bg-white rounded-md p-8 w-full shadow-sm">
            <h2 className="text-2xl font-bold">Roleplay Matkul</h2>
          </div>
          <RoleplayDetailContent />
        </div>
      </div>
    </BaseLayout>
  );
}

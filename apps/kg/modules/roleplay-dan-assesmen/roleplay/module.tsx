'use client';

import { BaseLayout } from '@kampus-gratis/apps/kg/components';
import { useGetRoleplayList } from '@kampus-gratis/apps/kg/hooks/roleplay/hook';
import { TRoleplayListItem } from '@kampus-gratis/apps/kg/types/roleplay';
import { BreadCrumb, LoadingSpinner } from '@kampus-gratis/components/atoms';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import CardImage from '../common/card-image';
import ModalConfirmation from '../common/modal-confirmation';
import TabList from '../common/tab-list';
import TabPanel from '../common/tab-panel';
import { RoleplayListBreadcrumb } from '../constant';

export default function RoleplayListModule() {
  const pathname = usePathname();
  const router = useRouter();

  const { data, isLoading } = useGetRoleplayList();

  const [isOpen, setIsOpen] = useState(false);

  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <BaseLayout>
      <BreadCrumb items={RoleplayListBreadcrumb} bgColor="bg-grey-100" />
      <div className="bg-grey-100">
        <div className="w-full max-w-[1440px] mt-4 mb-12  mx-auto min-h-[80vh] space-y-6 px-8 md:px-14 lg:px-16 2xl:px-0 ">
          <div className="bg-white rounded-md p-8 w-full shadow-sm">
            <h2 className="text-2xl font-bold">Roleplay</h2>
          </div>
          <div className="bg-white rounded-md p-8 w-full shadow-sm">
            <TabList tabItem={['Daftar', 'Terjadwal', 'Penilaian', 'Riwayat']}>
              <TabPanel>
                {data?.data?.roleplays.length !== 0 ? (
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {data?.data?.roleplays.map(
                      (item: TRoleplayListItem, index: number) => (
                        <CardImage
                          key={index}
                          title={item.subject_name}
                          author={'Aryo Bimo'}
                          startAt={item.start_at}
                          thumbnail={item.subject_thumbnail}
                          description={item.description}
                          detail="#"
                          badgeColor="bg-[#C1272D]"
                          badgeText="Roleplay"
                          onClick={() => setIsOpen(true)}
                          modal={
                            <ModalConfirmation
                              isOpen={isOpen}
                              setIsOpen={setIsOpen}
                              buttonText="Daftar Sekarang"
                              text={`Apakah anda yakin ingin mendaftar roleplay ${item.subject_name}?`}
                              onSubmit={() => {
                                router.push(`${pathname}/${item.id}/team`);
                                setIsOpen(false);
                              }}
                            />
                          }
                        />
                      )
                    )}
                  </div>
                ) : (
                  <p className="text-center">{data?.message}</p>
                )}
              </TabPanel>
            </TabList>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}

/* eslint-disable @nx/enforce-module-boundaries */
'use client';

import { BaseLayout } from '@kampus-gratis/apps/kg/components';
import {
  useGetAssesmenList,
  useTakeAssesmen,
} from '@kampus-gratis/apps/kg/hooks/asesmen/hook';
import { TAssesmenListItem } from '@kampus-gratis/apps/kg/types/asesmen';
import { BreadCrumb, LoadingSpinner } from '@kampus-gratis/components/atoms';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';
import CardImage from '../common/card-image';
import ModalRegister from '../common/modal-register';
import TabList from '../common/tab-list';
import TabPanel from '../common/tab-panel';
import { AssesmenListBreadcrumb } from '../constant';

export default function AssesmenListModule() {
  const router = useRouter();
  const pathname = usePathname();
  const { data, isLoading } = useGetAssesmenList();

  const [isOpen, setIsOpen] = useState(false);
  const [selection, setSelection] = useState('individual');

  const { mutate, isLoading: takeAssesmenLoading } = useTakeAssesmen();

  const onSubmit = (id: string) => {
    const payloadWithId = {
      id,
      payload: {
        type: selection,
      },
    };

    try {
      mutate(payloadWithId, {
        onSuccess: (data) => {
          toast.success(data.message);
          router.push(`${pathname}/sesi/${data.data.session.id}`);
        },
        onError: (error) => {
          toast.error(
            error.response?.data.message || 'Gagal mendaftar assesmen'
          );
        },
      });
    } catch (error) {
      toast.error('Terjadi kesalahan');
    }
    toast.dismiss();
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <BaseLayout>
      <BreadCrumb items={AssesmenListBreadcrumb} bgColor="bg-grey-100" />
      <div className="bg-grey-100">
        <div className="w-full max-w-[1440px] mt-4 mb-12  mx-auto min-h-[80vh] space-y-6 px-8 md:px-14 lg:px-16 2xl:px-0 ">
          <div className="bg-white rounded-md p-8 w-full shadow-sm">
            <h2 className="text-2xl font-bold">Assesmen</h2>
          </div>
          <div className="bg-white rounded-md p-8 w-full shadow-sm">
            <TabList tabItem={['Daftar', 'Terjadwal', 'Penilaian', 'Riwayat']}>
              <TabPanel>
                {data?.data?.assessments.length !== 0 ? (
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {data?.data?.assessments.map(
                      (item: TAssesmenListItem, index: number) => (
                        <CardImage
                          key={index}
                          title={item.subject_name}
                          author={item.creator_full_name}
                          startAt={item.start_at}
                          thumbnail={item.thumbnail}
                          description={item.description}
                          detail="#"
                          badgeColor="bg-[#0B956C]"
                          badgeText="Assesmen"
                          onClick={() => setIsOpen(true)}
                          modal={
                            <ModalRegister
                              isOpen={isOpen}
                              setIsOpen={setIsOpen}
                              selection={selection}
                              setSelection={setSelection}
                              isLoading={takeAssesmenLoading}
                              onSubmit={() => onSubmit(item.id)}
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

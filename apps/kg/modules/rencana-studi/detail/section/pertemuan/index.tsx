'use client';

import { Disclosure } from '@headlessui/react';
import React, { FC } from 'react';
import { RiArrowUpSLine } from 'react-icons/ri';
import { TDetailStudyPlanSessions } from '../../../../../types/rencana-studi';
import { useGetSessionsDetailStudyPlan } from '../../../../../hooks/rencana-studi/hooks';
import { LoadingSpinner } from '@kampus-gratis/components/atoms';

const PertemuanSection: FC<any> = ({ id }) => {
  const { data, isLoading } = useGetSessionsDetailStudyPlan(id);

  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <div className="flex flex-col gap-3">
      {data?.data && data?.data?.length > 0 ? (
        <>
          {data?.data?.map((item: TDetailStudyPlanSessions, i: number) => (
            <div key={i}>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full rounded-lg justify-between bg-primary-500 p-4 text-left text-sm md:text-base font-medium text-white">
                      <div className="flex flex-col gap-2">
                        <h3 className="font-semibold">
                          Pertemuan {item.number}
                        </h3>
                        <p className="font-normal">{item.title}</p>
                      </div>
                      <RiArrowUpSLine
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-white`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm md:text-base text-gray-500">
                      {item.description}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          ))}
        </>
      ) : (
        <div>Tidak Ada Data.</div>
      )}
    </div>
  );
};

export default PertemuanSection;

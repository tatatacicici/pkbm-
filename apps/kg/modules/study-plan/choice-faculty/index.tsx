'use client';

import Image from 'next/image';
import { useFaculty } from '../../../hooks/study-plan/hook';
import { FC } from 'react';
import { Card } from '@kampus-gratis/components/molecules';

export const ChoiceFaculty: FC = () => {
  const { data } = useFaculty();
  const facultyData = data?.data;

  return (
    <main className="py-2 px-6 md:px-14 lg:px-16 bg-neutral-50 min-h-[calc(100vh-193px)] w-full overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <h5 className="p-0 text-2xl font-semibold pb-5">Pilihan Fakultas</h5>
        <div className="grid grid-cols-1 gap-4 pb-40 lg:grid-cols-3">
          {facultyData && facultyData?.length > 0 ? (
            <>
              {facultyData?.map((x, i) => (
                <Card
                  key={i}
                  href={`/rencana-studi/${x.id}`}
                  className="px-3 rounded-lg "
                  imgStyle="rounded-lg"
                  hasImage={true}
                  src={x.thumbnail}
                  imgwidth={1000}
                  imgheight={850}
                  titleStyle={'text-xl font-bold mt-0 text-[#106FA4]'}
                  icon={
                    <div className="flex flex-row ">
                      <div className=" py-1 text-[#3EB449] px-2  text-[12px] rounded-[5px] justify-center bg-[#E3FBDA]">
                        {x.major_count} Program Studi
                      </div>
                    </div>
                  }
                >
                  <div className="text-xl mt-0 text-[#106FA4] w-full">
                    {x.name}
                  </div>
                </Card>
              ))}
            </>
          ) : (
            <div className="flex flex-col justify-center w-screen h-screen gap-8 lg:items-center ">
              <div className="hidden w-auto h-auto p-1 bg-gray-100 rounded-full lg:flex dark:bg-gray-600 lg:p-4">
                <Image
                  width={300}
                  height={300}
                  src={'/icons/study-plan/data-kosong.png'}
                  alt="simulasi-null"
                />
              </div>
              <h1 className="text-xl font-bold">Tidak Ada Data Fakultas</h1>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

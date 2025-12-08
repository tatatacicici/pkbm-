'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { useDashboardData } from '../../../../hooks/dashboard/hook';
import { resumeItems } from '../../../../utils/constantDashboard';

export const ResumeSection: FC = () => {
  const { getDashboardData } = useDashboardData();
  const router = useRouter();

  const profile = getDashboardData?.profile;

  const ItemAmounts = [
    profile?.current_subjects,
    profile?.total_certificates,
    profile?.ipk,
    profile?.poin,
  ];

  return (
    <div className="w-full bg-white shadow-sm shadow-neutral-100 rounded-md min-h-[540px] mb-10 overflow-hidden">
      {/* <section className="bg-primary-500 rounded-md relative px-4 md:px-6 pt-12 pb-28"> */}
      <section className="bg-sky-base rounded-md relative px-4 md:px-6 pt-12 pb-28">
        <h1 className="text-white font-bold text-2xl">
          Hai, {profile?.full_name}
        </h1>
        <h2 className="text-white text-sm font-semibold my-2">
          {profile?.role}
        </h2>
        <div className="flex flex-col text-sm mb-2">
          <div className="flex mb-1">
            <span className="text-white/75">Kamu mengambil</span>
            <span className="text-white border-b-2 border-white/70 decoration-white/70 mx-1">
              {profile?.current_subjects} Mata Pelajaran
            </span>
          </div>
        </div>
        <div className="absolute md:right-[52px] lg:right-[50px] md:-bottom-[216px] grid grid-cols-2 gap-2 lg:gap-4">
          {resumeItems.map(({ src, title, link }, index) => {
            return (
              <div
                key={index}
                className={`flex auto px-5 py-4 gap-5 flex-col bg-neutral-100 transition-colors ease-in-out duration-300 rounded-lg shadow-sm w-[140px] md:w-40
                 ${link ? 'hover:bg-neutral-200 cursor-pointer' : ''}
                `}
                onClick={() => link && router.push(link)}
              >
                <div className="flex flex-col justify-between gap-y-4">
                  <Image
                    // className="w-8"
                    className="w-6"
                    width={8}
                    height={8}
                    src={src}
                    alt="icon"
                  />
                  <section>
                    <h1 className=" text-3xl font-bold text-neutral-600 mb-2">
                      {ItemAmounts[index]}
                    </h1>
                    <h1 className="font-medium text-sm text-neutral-500">
                      {title}
                    </h1>
                  </section>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

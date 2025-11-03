import React from 'react';
import { ReactElement, FC } from 'react';
import { SideBarProps } from '../../../types/acarakampus';
import Link from 'next/link';

export const AcaraKampusSideBar: FC<SideBarProps> = ({
  active,
}): ReactElement => {
  return (
    <div className="flex flex-col gap-[36px] w-[339px]">
      <div className="flex flex-col bg-primary-500 text-white rounded px-5 py-3">
        <h1 className="text-[28px] font-bold">Acara Kampus</h1>
        <p className="text-[18px] font-[400]">
          Pilih dan ikuti beragam webinar seru dan menarik dari Paket-C Gratis
        </p>
      </div>
      <div className="flex items-center justify-center flex-col rounded-[8px] gap-[8px] w-[339px] h-[188px] py-[20px] px-[16px] bg-white text-[#737373] text-[14px] font-[600] dark:bg-[#1b1e21] dark:text-white">
        <div
          className={`flex items-center px-[12px] rounded-[8px] w-full h-full ${
            active === 'EventList' && 'bg-primary-100 dark:bg-[#a1a1a8]'
          } `}
        >
          <Link href={'/acara-kampus'}>Daftar Acara</Link>
        </div>
        <div
          className={`flex items-center px-[12px] rounded-[8px] w-full h-full ${
            active === 'RegisteredEvent' && 'bg-primary-100 dark:bg-[#a1a1a8]'
          } `}
        >
          <Link href={'/acara-kampus/terdaftar'}>Acara Terdaftar</Link>
        </div>
        <div
          className={`flex items-center px-[12px] rounded-[8px] w-full h-full ${
            active === 'EventHistory' && 'bg-primary-100 dark:bg-[#a1a1a8]'
          } `}
        >
          <Link href={'/acara-kampus/riwayat'}>Riwayat Acara</Link>
        </div>
      </div>
    </div>
  );
};

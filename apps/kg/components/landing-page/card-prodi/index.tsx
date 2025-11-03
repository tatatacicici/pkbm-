import Image from 'next/image';
import { FC } from 'react';

export const ProdiCardHero: FC = () => {
  return (
      <div className="w-[227.18px] h-[86.63px] pl-[24px] pr-[41.27px] pt-[16px] pb-[16px] bg-white rounded-[7px] shadow justify-start items-center gap-[13.13px] inline-flex">
        <div className="w-[52.52px] h-[52.52px] pl-[12.26px] pr-[12.25px] py-[12.25px] bg-sky-700 rounded-[26.26px]">
          <Image src={"/icons/hero-prodi.svg"} alt='prodi' width={28} height={28} className="relative flex-col justify-start items-start flex" />
        </div>
        <div className="flex-col justify-start items-start inline-flex">
          <div className="text-sky-800 text-2xl font-semibold leading-6">
            17
          </div>
          <div className="text-zinc-500 text-[13.13px] font-normal leading-snug">
            Program Studi
          </div>
        </div>
      </div>
  );
};

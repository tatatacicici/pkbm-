'use client';

import { FC, Fragment, ReactElement } from 'react';
import Image from 'next/image';
import search from './assets/search.svg';
import { MitraPenyaluranKerja } from './mitra';
import { HamburderIcon } from '../../modules/penyaluran-kerja/assets/icon/hamburger';
import { JobSibeBar } from './sidebar';

export const DistributionOfWorkModule: FC = (): ReactElement => {
  return (
    <Fragment>
      <main className="bg-neutral-50 h-full px-[20px] lg:px-[66px] py-[30px]">
        <section>
          <h1 className="text-[24px] font-bold">Penyaluran Kerja</h1>
          <div className="seacrh w-full h-[56px]  bg-neutral-200 dark:bg-[#232529] rounded-[8px] mt-[28px] flex items-center">
            <Image src={search} alt={'search'} className={'ml-[24px] mr-5'} />
            <input
              type="text"
              name=""
              id=""
              placeholder="Cari Lowongan"
              className=" bg-neutral-200 w-full focus:outline-none"
            />
            <div className="md:hidden">
              <button className="flex flex-col bg-blue-600  h-9 w-9  p-2 rounded-md justify-center items-center group md:hidden">
                <HamburderIcon />
              </button>
            </div>
          </div>
        </section>
        <section className="flex gap-[60px]">
          <div>
            <JobSibeBar />
          </div>
          <div className="w-full gap-[28px]">
            <MitraPenyaluranKerja />
          </div>
        </section>
      </main>
    </Fragment>
  );
};

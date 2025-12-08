'use client';
import Image from 'next/image';
import { FC, ReactElement } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import { querySemuaFitur } from '../../../recoil/atoms/semuafitur';
import { filterSemuaFitur } from '../../../recoil/selectors/semuafitur';
import CardSemuaFitur from '../Card/CardSemuaFitur';
import EmptyState from '../../empty-state';

const Features: FC = (): ReactElement => {
  const [query, setQuery] = useRecoilState(querySemuaFitur);
  const getSemuafitur = useRecoilValue(filterSemuaFitur);

  return (
    <section className="dark:bg-[#222529] w-full max-w-[1440px] mx-auto pb-10 relative">
      {/* <div className="bg-[#106FA4] w-full max-w-[1440px] h-[300px] absolute"></div> */}
      <div className="bg-sky-base w-full max-w-[1440px] h-[300px] absolute"></div>

      <div className="flex absolute z-0 top-0 left-0 lg:top-30">
        <Image
          src="/icons/semua-fitur/random3.svg"
          alt={'tes'}
          width={0}
          height={0}
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <div className="flex absolute z-0 top-28 lg:top-12 md:top-14 right-0 md:right-0 lg:right-10">
        <Image
          src="/icons/semua-fitur/random4.svg"
          alt={'tes'}
          width={0}
          height={0}
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <div className="flex relative flex-col items-center mt-8">
        <h1 className="font-bold text-[28px] text-center text-white">
          Fitur Paket-C Gratis
        </h1>
        <p className="text-white font-semibold text-[16px] max-w-1/2 text-center px-4">
          Kembangkan keterampilan Kamu dengan kursus dan sertifikasi online di
          Paket-C Gratis. Berbagai macam fitur tersedia.
        </p>
        <div className="flex bg-white my-[36px] z-10 rounded-lg py-[16px] px-[26px] w-4/5  items-center">
          <Image
            src="/icons/semua-fitur/search.svg"
            alt={'tes'}
            width={20}
            height={20}
          />
          <input
            type="text"
            placeholder="Cari Fitur"
            className="ml-[24px] w-full focus:outline-none dark:text-black"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
      </div>
      <div className="grid grid-cols-12 lg:gap-x-[40px] md:gap-x-[40px] gap-x-[20px] gap-y-[34px] mx-8">
        {getSemuafitur && getSemuafitur.length > 0 ? (
          getSemuafitur.map((fitur) => (
            <div
              key={fitur.id}
              className="lg:col-span-3 md:col-span-6 col-span-12 rounded-lg bg-white z-10 shadow-md relative"
            >
              <CardSemuaFitur
                className="items-start justify-start flex "
                href={fitur.slug}
                hasImage={true}
                src={fitur.icon}
                imgStyle="ml-3 mb-2"
              >
                <div className="flex flex-col px-4">
                  <h1 className="font-bold text-left dark:text-black lg:text-[16px] md:text-[16px] text-[16px]">
                    {fitur.namaFitur}
                  </h1>
                  <p className="text-neutral-base text-sm w-full py-2">
                    {fitur.desc}
                  </p>
                </div>
              </CardSemuaFitur>
            </div>
          ))
        ) : (
          <div className="col-span-12 flex justify-center items-center">
            <EmptyState text="Oops! Fitur tidak ditemukan" />
          </div>
        )}
      </div>
    </section>
  );
};

export default Features;

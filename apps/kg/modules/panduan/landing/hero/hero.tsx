import { ReactElement, useEffect, useState } from 'react';
import Image from 'next/image';
import { AiOutlineSearch } from 'react-icons/ai';
import { Combobox } from '@headlessui/react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { queryGlobalPanduan } from '../../../../recoil/atoms/panduan';
import { filterGlobalPanduan } from '../../../../recoil/selectors/panduan';
import Link from 'next/link';
import { TDictionariesResponse } from '../../../../types/panduan';
import {
  useDictionary,
  useGetBukuPanduan,
  useGetDictionary,
  useGuideBook,
} from '../../../../hooks/panduan/hooks';
import { filterPanduanBook } from '../../../../recoil/selectors/buku-panduan';
// import PanduanHero from "../../../public/images/panduan/panduan-hero.svg"

export const HeroSection = (): ReactElement => {
  const [query, setQuery] = useRecoilState(queryGlobalPanduan);
  const [selectedGlobal, setSelectedGlobal] = useState('');

  const { data, isLoading } = useGetBukuPanduan();
  const { setBookData, getBookData } = useGuideBook();

  useEffect(() => {
    setBookData(data as any);
  }, [data, setBookData]);

  const bookDataFilter = useRecoilValue(filterPanduanBook);

  return (
    <div className="md:grid md:grid-cols-2 md:gap-10 md:px-14 2xl:px-0 px-6 mb-4 bg-white max-w-[1440px] mx-auto">
      <div className="col-span-1 ">
        <div className="title">
          <h1 className="text-[50px] font-[700]">Panduan</h1>
          <p className="text-[20px] font-light text-neutral-500 dark:text-white">
            Cari informasi penggunaan website Paket-C Gratis di sini
          </p>
        </div>
        <div className="lg:w-[700px] h-[56px] w-full rounded-[8px] mt-[48px] flex items-center gap-4 flex-wrap z-10 relative">
          <Combobox value={selectedGlobal} onChange={setSelectedGlobal}>
            <div
              className={
                'w-full flex bg-neutral-100 h-[56px] pl-6 focus:outline-none rounded-[8px]'
              }
            >
              <div className="flex items-center justify-item-center">
                <AiOutlineSearch className="text-2xl  text-neutral-400" />
              </div>
              <Combobox.Input
                onChange={(event) => setQuery(event.target.value)}
                value={query}
                placeholder="Search"
                className={'w-full ml-3 bg-neutral-100 focus:outline-none'}
              />
            </div>
            <Combobox.Options
              className={
                'w-full max-h-[200px] overflow-y-scroll scrollbar-thin scrollbar-thumb-blue-base scrollbar-thumb-rounded-lg'
              }
            >
              <div className="bg-neutral-100 rounded-[8px]">
                {bookDataFilter &&
                  bookDataFilter?.map((item, index) => (
                    <Link
                      href={`/panduan/buku-panduan/${item.id}`}
                      key={index}
                      className={'w-full'}
                    >
                      <Combobox.Option
                        key={index}
                        value={item.title}
                        className={
                          'py-3 block z-10 hover:bg-neutral-200 pl-6 rounded-[8px]'
                        }
                      >
                        {item.title}
                      </Combobox.Option>
                    </Link>
                  ))}
              </div>
            </Combobox.Options>
          </Combobox>
        </div>
      </div>
      <div className="col-span-1 grid place-content-end lg:-mt-10">
        <Image
          src="/images/panduan/panduan-hero.svg"
          width={335}
          height={335}
          alt={'panduan'}
          className={'w-0 md:w-full h-full'}
        />
      </div>
    </div>
  );
};

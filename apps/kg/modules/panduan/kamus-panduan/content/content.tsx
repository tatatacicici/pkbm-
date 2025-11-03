import { ReactElement, useEffect, useState } from 'react';
import Image from 'next/image';
import search from '../../assets/search.svg';
import { AiOutlineSearch } from 'react-icons/ai';
import { queryOptionDictionary } from '../../../../recoil/atoms/kamus-kampus-gratis';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Combobox } from '@headlessui/react';
// import { filterPanduanKamus } from "apps/kg/recoil/selectors/kampus-kamus-gratis";
import Link from 'next/link';
import {
  useDictionary,
  useGetDictionary,
} from '../../../../hooks/panduan/hooks';
import { TDictionariesResponse } from '../../../../types/panduan';
import { LoadingSpinner } from '@kampus-gratis/components/atoms';
import { filterPanduanKamus } from '../../../../recoil/selectors/kampus-kamus-gratis';

export const ContentSection = (): ReactElement => {
  const [query, setQuery] = useRecoilState(queryOptionDictionary);

  const [selectedKamus, setSelectedKamus] = useState('');

  const { data, isLoading } = useGetDictionary();
  const { setDictionariesData, getDictionariesData } = useDictionary();

  useEffect(() => {
    setDictionariesData(data as TDictionariesResponse);
  }, [data, setDictionariesData]);

  const getSemuaKamus = useRecoilValue(filterPanduanKamus);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="flex flex-col px-6 md:px-8 lg:px10 mt-[30px] mb-[50px]">
      <div className="col-span-1 ">
        <div className="title">
          <h1 className=" text-[50px] font-[700]">Kamus Paket-C Gratis </h1>
          <p className="text-[14px] font-[400] text-neutral-500 dark:text-white">
            Berupa video tutorial penggunaan dan fungsi fitur yang ada di
            Website Paket-C Gratis
          </p>
        </div>
        <div className="lg:w-[700px] h-[56px] w-full rounded-[8px] mt-[48px] flex items-center gap-4 flex-wrap z-10 relative">
          <Combobox value={selectedKamus} onChange={setSelectedKamus}>
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
                {getSemuaKamus &&
                  getSemuaKamus?.map((item, index) => (
                    <Link
                      href={'/panduan/kamus-kampus-gratis/' + item.id}
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

      <div className="col-span-1 grid place-content-center my-5 z-2 ">
        <Image
          // src="/images/panduan/dictionary-empty.svg"
          src="/images/panduan/dictionary-empty-new.svg"
          width={450}
          height={300}
          alt={''}
          className={' lg:w-full h-full'}
        />
        <p className="w-full flex justify-center lg:px-20 text-neutral-700 dark:text-white font-semibold">
          Tidak ada riwayat pencarian
        </p>
      </div>
    </div>
  );
};

import { Fragment, ReactElement, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { dummyGuide } from './constant';
import {
  useGetBukuPanduan,
  useGuideBook,
} from '../../../../hooks/panduan/hooks';

export const AnotherGuideBook = (): ReactElement => {
  const { data } = useGetBukuPanduan();
  const { setBookData, getBookData } = useGuideBook();

  useEffect(() => {
    setBookData(data as any);
  }, [data, setBookData]);

  return (
    <Fragment>
      <div className="w-full px-6 md:px-8 lg:px-16 max-w-[1440px] mx-auto">
        <div className="title">
          <h1 className="font-[700] text-[16px]">Buku panduan lainnya</h1>
        </div>
        <div className="mt-[24px] mb-[54px]">
          {getBookData &&
            getBookData?.data?.map((item, index) => {
              return (
                <Link key={index} href={`/panduan/buku-panduan/${item.id}`}>
                  <div className="content bg-white dark:bg-[#232529]   w-full h-[54px] shadow-lg rounded-[8px] flex justify-between items-center p-[24px] mt-[16px]">
                    <h1 className="font-[600] text-[16px]">{item.title}</h1>
                    <Image
                      src={'/images/panduan/book.svg'}
                      alt={'book'}
                      width={30}
                      height={30}
                    />
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </Fragment>
  );
};

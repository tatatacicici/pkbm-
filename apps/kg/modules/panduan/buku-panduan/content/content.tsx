import React, { ReactElement, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRecoilValue } from 'recoil';
import { filterPanduanBook } from '../../../../recoil/selectors/buku-panduan';
import {
  useGetBukuPanduan,
  useGuideBook,
} from '../../../../hooks/panduan/hooks';
import { LoadingSpinner } from '@kampus-gratis/components/atoms';

export const ContentSection = (): ReactElement => {
  const { data, isLoading } = useGetBukuPanduan();
  const { setBookData, getBookData } = useGuideBook();

  useEffect(() => {
    setBookData(data as any);
  }, [data, setBookData]);

  const bookDataFilter = useRecoilValue(filterPanduanBook);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  // const getSemuaBook = useRecoilValue(filterPanduanBook);
  return (
    <div className="w-full md:px-14 2xl:px-0 max-w-[1440px] mx-auto">
      <div className="md:mt-8 mb-[54px] bg-[#F5F5F5] p-4 rounded-md w-full">
        {bookDataFilter && bookDataFilter?.length > 0 ? (
          bookDataFilter?.map((item, index) => (
            <Link key={index} href={`/panduan/buku-panduan/${item.id}`}>
              <div className="content bg-white dark:bg-[#232529] w-full h-[54px] shadow-md rounded-[8px] flex justify-between items-center p-[24px] mt-[16px]">
                <h1 className="font-[600] text-[14px] md:text-[16px] dark:text-white">
                  {item.title}
                </h1>
                <Image
                  src={'/images/panduan/book.svg'}
                  alt={'book'}
                  width={30}
                  height={30}
                />
              </div>
            </Link>
          ))
        ) : (
          <p>Tidak Ada Buku Panduan</p>
        )}
      </div>
    </div>
  );
};

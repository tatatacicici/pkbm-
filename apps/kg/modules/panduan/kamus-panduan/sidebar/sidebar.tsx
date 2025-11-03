'use client';

import { ReactElement, useEffect, useState } from 'react';

import { Card } from '@kampus-gratis/components/molecules';
import {
  useDictionary,
  useGetDictionary,
} from '../../../../hooks/panduan/hooks';
import { TDictionariesResponse } from '../../../../types/panduan';

// import { useGuideDictionary } from "../../../../hooks/kamus-kampus-gratis/hook";

export const Sidebar = (): ReactElement => {
  // const { getGuideDictionary } = useGuideDictionary();

  const { data } = useGetDictionary();
  const { setDictionariesData, getDictionariesData } = useDictionary();

  useEffect(() => {
    setDictionariesData(data as TDictionariesResponse);
  }, [data, setDictionariesData]);

  return (
    <div className="px-6 md:px-8 lg:px-16 mb-10">
      <h1 className=" text-[20px] font-[700] mb-2">Kamus Populer</h1>
      <div className="grid grid-cols-2 lg:grid-cols-1 md:grid-cols-3 gap-2 lg:gap-0 md:gap-4">
        {getDictionariesData &&
          getDictionariesData?.data?.map((item, index) => {
            return (
              <Card
                key={index}
                href={`/panduan/kamus-kampus-gratis/${item.id}`}
                hasImage={false}
                title={item.title.substring(0, 25) + '...'}
                titleStyle="font-bold text-[16px]"
                className="bg-neutral-100 rounded-lg max-w-xs my-2 min-h-max line-clamp-1"
              >
                <p className="text-[12px] font-normal line-clamp-2">
                  {item.description}
                </p>
              </Card>
            );
          })}
      </div>
    </div>
  );
};

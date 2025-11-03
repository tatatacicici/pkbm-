'use client';

import { FC, Fragment, ReactElement } from 'react';
import { StaticImageData } from 'next/image';
import { SearchBar } from '../../..//components/searchbar';
import { CardList } from '../../../components/card-list';
import { useGetEventRegistered } from '../../..//hooks/acarakampus/registered/hooks';
import { TEventItem } from '../../../types/acarakampus';
import { AcaraKampusSideBar } from '../../../components/acarakampus/sidebar';

import ImageEventList from '../../../assets/icons/ic-img-eventlist.svg';

export const RegisteredEvent: FC = (): ReactElement => {
  const { data } = useGetEventRegistered();
  const eventListData = data?.data;

  return (
    <Fragment>
      <div className="flex flex-col px-6 gap-4 md:flex-row lg:gap-0 lg:flex-row  mx-auto max-w-[1440px] ">
        <div className="flex justify-center lg:justify-start lg:basis-1/3">
          <AcaraKampusSideBar active="RegisteredEvent" />
        </div>
        <div className="w-full lg:basis-2/3">
          <SearchBar />
          <div className="grid w-full grid-flow-row gap-4 lg:gap-16 lg:grid-cols-2">
            {eventListData ? (
              eventListData
                .map((item: TEventItem, index: number) => (
                  <CardList
                    key={index}
                    slug={item.id}
                    title={item.name}
                    image={ImageEventList as unknown as StaticImageData}
                    day={item.date_start.slice(0, 10)}
                    date={item.date_start.slice(0, 10)}
                    status={item.event_studentEvent[0].status}
                  />
                ))
                .slice(0, 4)
            ) : (
              <div className="flex justify-center items-center w-full h-[300px]">
                <p>Belum ada event yang terdaftar</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

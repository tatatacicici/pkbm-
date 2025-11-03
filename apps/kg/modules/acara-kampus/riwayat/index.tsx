'use client';

import { AcaraKampusSideBar } from '../../../components/acarakampus/sidebar';
import { CardHistory } from '../../../components/acarakampus/card-history';
import { SearchBar } from '../../../components/searchbar';
import { useGetEventHistory } from '../../../hooks/acarakampus/riwayat/hooks';
import { TEventItem } from '../../../types/acarakampus';
import { StaticImageData } from 'next/image';
import { FC, Fragment, ReactElement } from 'react';
import ImageEventList from '../../../assets/icons/ic-img-eventlist.svg';
// import { Pagination } from 'swiper/modules';
// import { useRouter } from 'next/navigation';

export const EventHistory: FC = (): ReactElement => {
  const { data } = useGetEventHistory();
  // const router = useRouter();

  const eventListData = data?.data;

  // const handlePageChange = async (page: number) => {
  //   window.scrollTo(0, 0);
  //   router.push(`/acara-kampus?page=${page}`);
  // };
  return (
    <Fragment>
      <div className="flex flex-col px-6 gap-4 md:flex-row lg:gap-0 lg:flex-row  mx-auto max-w-[1440px]">
        <div className="flex justify-center md:flex-row lg:gap-0 lg:flex-row lg:justify-start lg:basis-1/3 ">
          <AcaraKampusSideBar active="EventHistory" />
        </div>
        <div className="w-full lg:basis-2/3">
          <SearchBar />
          <div className="grid w-full grid-flow-row gap-4 lg:gap-8">
            {eventListData ? (
              eventListData
                ?.map((item: TEventItem, index: number) => (
                  <CardHistory
                    key={index}
                    title={item.name}
                    image={ImageEventList as unknown as StaticImageData}
                    status="SELESAI"
                  />
                ))
                .slice(0, 4)
            ) : (
              <div className="flex justify-center items-center w-full h-[300px]">
                <p>Belum ada event yang terdaftar</p>
              </div>
            )}
          </div>
          {/* <Pagination
            currentPage={Number(page)}
            totalPages={Number(getAcaraKampus?.data?.max_page)}
            onPageChange={handlePageChange}
          /> */}
        </div>
      </div>
    </Fragment>
  );
};

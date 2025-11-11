import { FC, Fragment, ReactElement, useEffect, useState } from 'react';
import { CardList } from '../../../components/card-list';
import { useAcaraKampus, useGetEvent } from '../../../hooks/acarakampus/hooks';
import { StaticImageData } from 'next/image';
import Pagination from '../../../components/general/pagination';
import { useRouter, useSearchParams } from 'next/navigation';
import { TEventItem } from '../../../types/acarakampus';
import { AcaraKampusSideBar } from '../../../components/acarakampus/sidebar';

import ImageEventList from '../../../assets/icons/ic-img-eventlist.svg';
import { SearchBar } from '../../../components/searchbar';

export const EventList: FC = (): ReactElement => {
  const { getAcaraKampus, setAcaraKampus } = useAcaraKampus();
  const searchParams = useSearchParams();
  const page = searchParams.get('page') || '1';
  const { data } = useGetEvent(page);

  const router = useRouter();

  useEffect(() => {
    setAcaraKampus(data);
  }, [data, setAcaraKampus]);

  const eventListData = data?.data?.events;

  const handlePageChange = async (page: number) => {
    window.scrollTo(0, 0);
    router.push(`/acara-kampus?page=${page}`);
  };

  const [searchQuery, setSearchQuery] = useState<string>('');
  const handleChange = (e: any) => {
    setSearchQuery(e.target.value);
    // refetchArticle();
    router.push(`/sekilas-ilmu?page=1`);
  };
  return (
    <Fragment>
      <div className="flex flex-col gap-4 px-6 md:flex-row lg:gap-0 lg:flex-row  mx-auto max-w-[1440px]">
        <div className="flex justify-center md:justify-start lg:justify-start lg:basis-1/3">
          <AcaraKampusSideBar active="EventList" />
        </div>
        <div className="w-full lg:basis-2/3">
          <SearchBar />
          <div className="grid w-full grid-flow-row gap-4 lg:gap-16 lg:grid-cols-2">
            {eventListData ? (
              eventListData?.map((item: TEventItem, index: number) => (
                <CardList
                  key={index}
                  slug={item.id}
                  title={item.name}
                  image={ImageEventList as unknown as StaticImageData}
                  price={'GRATIS'}
                  day={item.date_start.slice(0, 10)}
                  date={item.date_start.slice(0, 10)}
                />
              ))
            ) : (
              <div className="flex justify-center items-center w-full h-[300px]">
                <p className="text-neutral-500 font-medium text-[14px]">
                  Tidak Ada Event
                </p>
              </div>
            )}
          </div>
          <Pagination
            currentPage={Number(page)}
            totalPages={Number(getAcaraKampus?.data?.max_page)}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </Fragment>
  );
};

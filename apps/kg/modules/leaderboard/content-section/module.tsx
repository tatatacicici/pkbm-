import { RankingSection } from '../section';
import Image from 'next/image';
import Medal1 from '../assets/medal-1.svg';
import Medal2 from '../assets/medal-2.svg';
import Medal3 from '../assets/medal-3.svg';
import crown from '../assets/crown.svg';
import { LoadingSpinner } from '@kampus-gratis/components/atoms';
import { useInfiniteQuery } from '@tanstack/react-query';
import { leaderboardGetRequestScore } from '@kampus-gratis/apps/kg/hooks/leaderboard/request';
import { useCallback, useEffect, useRef } from 'react';

export default function ContentSection() {
  const observerElem = useRef<HTMLDivElement | null>(null);

  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ['get-leaderboard-score'],
      queryFn: async ({ pageParam = 0 }) => {
        return await leaderboardGetRequestScore({ pageParam });
      },
      getNextPageParam: (lastPage) => {
        return lastPage.meta.page < '5' ? lastPage.meta.page + 1 : undefined;
      },
      enabled: true,
    });

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const target = entries[0];
      if (target.isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    },
    [fetchNextPage, hasNextPage]
  );

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '20px',
      threshold: 1.0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (observerElem.current) observer.observe(observerElem.current);

    return () => {
      if (observerElem.current) observer.unobserve(observerElem.current);
    };
  }, [handleObserver]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const getRank = data?.pages.flatMap((item) => item?.data?.rankings) || [];

  return (
    <div className="w-full lg:px-[170px] md:px-[100px] px-3  mb-10 ">
      <h1 className="text-center lg:text-[50px] md:text-[50px] dark:text-white text-black text-[30px] font-[700] rounded-[8px]">
        Papan Skor
      </h1>
      <div className="bg-white w-full rounded-[8px] py-10 mt-6">
        <div className="flex justify-end md:px-10 px-5">{/* <Filter /> */}</div>
        <div className="flex justify-center items-end w-full mx-auto">
          <div className="bg-yellow-100 p-4 max-h-[220px]">
            <div className="flex flex-col gap-2 items-center -translate-y-12 md:-translate-y-20">
              <div className="relative shrink-0">
                <Image
                  className="object-cover w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40 rounded-full mb-4 border-8 border-gray-500"
                  src={
                    getRank[1]?.student?.avatar || '/images/profile-picture.png'
                  }
                  alt={getRank[1]?.student?.full_name}
                  width={500}
                  height={500}
                />
                <Image
                  src={Medal2}
                  className="absolute bottom-0 translate-x-1/2 right-1/2 translate-y-2 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <div className="flex flex-col items-center gap-2 max-w-fit text-center">
                <h2 className="text-lg font-semibold">
                  {getRank[1]?.student?.full_name}
                </h2>
                <p className="bg-orange-base/80 text-white font-semibold px-4 py-2 rounded-full">
                  {getRank[1]?.current_score} Poin
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 bg-yellow-200 p-6 pb-20">
            <div className="relative shrink-0">
              <Image
                className="object-cover w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40 rounded-full mb-4 border-8 border-yellow-400"
                src={
                  getRank[0]?.student?.avatar || '/images/profile-picture.png'
                }
                alt={getRank[0]?.student?.full_name}
                width={500}
                height={500}
              />
              <Image
                src={Medal1}
                className="absolute bottom-0 translate-x-1/2 right-1/2 translate-y-2 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
                alt=""
                width={100}
                height={100}
              />
              <Image
                src={crown}
                className="absolute top-0 translate-x-1/2 right-1/2 -translate-y-14 w-12 h-12 sm:w-16 sm:h-16"
                alt=""
                width={100}
                height={100}
              />
            </div>
            <div className="flex flex-col items-center gap-2 max-w-fit text-center">
              <h2 className="text-lg font-semibold">
                {getRank[0]?.student?.full_name}
              </h2>
              <p className="bg-orange-base/80 text-white font-semibold px-4 py-2 rounded-full">
                {getRank[0]?.current_score} Poin
              </p>
            </div>
          </div>
          <div className="bg-yellow-100 p-4 max-h-[210px]">
            <div className="flex flex-col gap-2 items-center -translate-y-12 md:-translate-y-20">
              <div className="relative">
                <Image
                  className="object-cover w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40 rounded-full mb-2 border-8 border-orange-700"
                  src={
                    getRank[2]?.student?.avatar || '/images/profile-picture.png'
                  }
                  alt={getRank[2]?.student?.full_name}
                  width={500}
                  height={500}
                />
                <Image
                  src={Medal3}
                  className="absolute bottom-0 translate-x-1/2 right-1/2 translate-y-2 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <div className="flex flex-col items-center gap-2 max-w-fit text-center">
                <h2 className="text-lg font-semibold">
                  {getRank[2]?.student?.full_name}
                </h2>
                <p className="bg-orange-base/80 text-white font-semibold px-4 py-2 rounded-full">
                  {getRank[2]?.current_score} Poin
                </p>
              </div>
            </div>
          </div>
        </div>
        <RankingSection data={getRank} />
        <div ref={observerElem}>
          {isFetchingNextPage && (
            <div className="px-14">
              <div className="rounded-md w-full h-16 bg-slate-100 animate-pulse mt-6"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

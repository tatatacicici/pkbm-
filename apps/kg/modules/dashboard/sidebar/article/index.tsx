import Link from 'next/link';
import { FC, Fragment, ReactElement } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useDashboardData } from '../../../../hooks/dashboard/hook';

import 'swiper/css';

import Image from 'next/image';

export const ArticleSection: FC = (): ReactElement => {
  const { getDashboardData } = useDashboardData();
  const articles = getDashboardData?.articles;

  function changeFormatByTime(iso: string): string {
    const date = new Date(iso);
    const month = date.toLocaleString('id-ID', { month: 'long' });
    const year = String(date.getFullYear());
    return `${month} ${year}`;
  }

  return (
    <>
      <div className="w-full mb-4 hidden md:block">
        <div className="flex flex-row items-center justify-between mb-4">
          <h1 className="text-xl font-semibold">Tahukah Kamu</h1>
          {/* <Link
            className="text-sm text-primary-500 font-semibold"
            href={'/sekilas-ilmu'}
          >
            Lihat Artikel Lainnya
          </Link> */}
          <Link
            className="text-sm text-sky-base font-semibold"
            href={'/sekilas-ilmu'}
          >
            Lihat Artikel Lainnya
          </Link>
        </div>
        <Swiper slidesPerView={1}>
          {articles ? (
            articles?.map((article, i) => (
              <SwiperSlide key={i}>
                <Link href={`/sekilas-ilmu/${article?.slug}`} key={i}>
                  <div className="flex flex-col shadow-sm bg-white rounded-lg overflow-hidden">
                    <div className="block w-full h-[200px] bg-neutral-100">
                      <Image
                        width={0}
                        height={0}
                        sizes="100vw"
                        src={article?.thumbnail}
                        className="w-full h-full object-cover rounded-t-lg"
                        alt="article-thumbnail"
                        style={{
                          width: '100%',
                          height: '200px',
                        }}
                      />
                    </div>
                    <div className="bg-white text-start w-full py-4 flex flex-col gap-2 p-4">
                      <h1 className="font-semibold text-black dark:text-yellow-500 text-xl">
                        {article?.title}
                      </h1>
                      <p className="flex flex-row items-center gap-x-2 font-normal text-sm flex-wrap">
                        {article?.tags?.map((tag, i) => (
                          <Fragment key={i}>
                            <span>{tag}</span>
                            {article?.tags?.length - 1 !== i && (
                              <div className="flex items-center">
                                <svg
                                  width="3"
                                  height="2"
                                  viewBox="0 0 3 2"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <circle
                                    cx="1.5"
                                    cy="1"
                                    r="1"
                                    fill="#A3A3A3"
                                  />
                                </svg>
                              </div>
                            )}
                          </Fragment>
                        ))}
                      </p>
                      <p className="font-normal text-end text-sm text-[#A3A3A3] mt-2">
                        {changeFormatByTime(article?.created_at)}
                      </p>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center w-full h-[200px] bg-neutral-100">
              <p className="text-black dark:text-white">Belum ada artikel</p>
            </div>
          )}
        </Swiper>
      </div>
    </>
  );
};

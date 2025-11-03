import { FC, ReactElement } from 'react';
import { useDashboardData } from '../../../../../hooks/dashboard/hook';

// Import Swiper React components

// Import Swiper styles
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SmallDashboardBanner } from '../../banner/constant';
import '../index.css';

export const EventSection: FC = (): ReactElement => {
  const { getDashboardData } = useDashboardData();
  const events = getDashboardData?.events;

  function formatDateToMonthYear(iso: string): string {
    const date = new Date(iso);
    const month = date.toLocaleString('id-ID', { month: 'short' });
    const year = String(date.getFullYear());
    return `${month} ${year}`;
  }

  function formatDateToHoursMinute(iso: string): string {
    const time = new Date(iso);
    const hour = String(time.getHours()).padStart(2, '0');
    const minute = String(time.getMinutes()).padStart(2, '0');
    return `${hour}:${minute}`;
  }

  return (
    <>
      {/* {events !== null && events && events.length > 0 ? (
        <div className="bg-white p-7 rounded-md shadow-sm w-full flex overflow-hidden">
          <Swiper
            pagination={true}
            modules={[Pagination]}
            className="mySwiper relative"
            wrapperClass="pt-2"
          >
            {events?.map((event, index) => {
              const idEvent = event?.id;
              return (
                <SwiperSlide key={index}>
                  <div className="h-full flex flex-col justify-evenly">
                    <section>
                      <section className="text-neutral-900 mb-4 flex flex-col w-full">
                        <h1 className="text-lg font-bold text-neutral-900 w-fit">
                          {event.name}
                        </h1>
                        <p className="text-sm text-neutral-500 w-fit">
                          {events.length} {event.name} tersedia
                        </p>
                      </section>
                      <section className="flex gap-4 mb-4">
                        <div className="w-[90px] h-[110px]">
                          <Image
                            src={event.thumbnail}
                            width={90}
                            height={110}
                            className="h-full w-full object-cover rounded-lg"
                            alt="event thumbnail"
                            style={{
                              width: '90px',
                              height: '110px',
                            }}
                          />
                        </div>
                        <div className="flex flex-col justify-center">
                          <h1 className="mb-2 text-neutral-900 text-start">
                            {event?.description}
                          </h1>
                          <section className="flex gap-2 xl:gap-4  flex-wrap xl:flex-nowrap">
                            <div className="flex flex-col">
                              <section className="flex gap-2 items-center mb-2">
                                <div className="w-5 h-5 rounded-full bg-yellow-100 flex items-center justify-center">
                                  <MdNavigateNext className="text-yellow-500" />
                                </div>
                                <p className="text-start text-xs lg:text-sm text-neutral-400">
                                  {formatDateToMonthYear(
                                    event?.registration_close_date
                                  )}
                                </p>
                              </section>
                              <section className="flex gap-2 items-center">
                                <div className="w-5 h-5 rounded-full bg-yellow-100 flex items-center justify-center">
                                  <MdNavigateNext className="text-yellow-500" />
                                </div>
                                <p className="text-start text-xs lg:text-sm text-neutral-400">
                                  {event.contact_person_name}
                                </p>
                              </section>
                            </div>
                            <div className="flex flex-col ">
                              <section className="flex gap-2 items-center mb-2">
                                <div className="w-5 h-5 rounded-full bg-yellow-100 flex items-center justify-center">
                                  <MdNavigateNext className="text-yellow-500" />
                                </div>
                                <p className="text-xs lg:text-sm  text-neutral-400">{`${formatDateToHoursMinute(
                                  event?.date_start
                                )}-${formatDateToHoursMinute(
                                  event?.date_end
                                )}`}</p>
                              </section>
                              <section className="flex gap-2 items-center">
                                <div className="w-5 h-5 rounded-full bg-yellow-100 flex items-center justify-center">
                                  <MdNavigateNext className="text-yellow-500" />
                                </div>
                                <p className="text-start text-xs lg:text-sm text-neutral-400">
                                  {event?.event_studentEvent?.length} /{' '}
                                  {event?.capacity} Peserta
                                </p>
                              </section>
                            </div>
                          </section>
                        </div>
                      </section>
                    </section>
                    <section className="flex justify-between items-center">
                      <Link
                        href={`/acara-kampus/detail/${idEvent}`}
                        className="text-center text-white w-[95%] lg:w-44 bg-yellow-500 text-sm py-3 px-4 mx-auto md:mx-0 rounded-md hover:bg-yellow-600 transition-colors ease-in-out duration-300"
                      >
                        Daftar Sekarang
                      </Link>
                    </section>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      ) : ( */}
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
        className="relative rounded-md shadow-sm w-full overflow-hidden col-span-2"
      >
        {SmallDashboardBanner.map((banner, index) => (
          <SwiperSlide key={index} className="relative !h-full">
            <Image
              src={banner}
              layout="fill"
              objectFit="cover"
              alt={`Banner ${index}`}
              className="object-cover object-left-top"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* )} */}
    </>
  );
};

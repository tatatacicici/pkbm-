import Image from 'next/image';
import { FC, ReactElement } from 'react';
import { useDashboardData } from '../../../../../hooks/dashboard/hook';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import '../index.css';
// Import Swiper styles
import Link from 'next/link';
import { AiFillWarning } from 'react-icons/ai';
import { MdNavigateNext } from 'react-icons/md';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

export const TaskSection: FC = (): ReactElement => {
  const { getDashboardData } = useDashboardData();
  const assignments = getDashboardData?.assignments;

  function changeFormatToDate(iso: string): string {
    const date = new Date(iso);
    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    };
    return date.toLocaleDateString('id-ID', options);
  }

  function limitString(text: string, maxLength: number) {
    if (text.length <= maxLength) {
      return text;
    } else {
      return text.slice(0, maxLength - 3) + '...';
    }
  }

  return (
    <>
      <div className="bg-white p-7 rounded-lg shadow-md w-full overflow-hidden col-span-2 border">
        <Swiper
          pagination={{
            clickable: true,
            enabled: true,
          }}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Pagination, Autoplay]}
          className="mySwiper relative"
          wrapperClass=" pt-5"
        >
          {assignments?.map((assignment, index) => (
            <SwiperSlide key={index}>
              <div key={index} className="px-3">
                <section className="text-neutral-900 mb-4 flex flex-col w-full">
                  <h1 className="text-lg font-bold w-fit">Penugasan</h1>
                  <p className="text-sm text-neutral-500 w-fit">
                    {assignment?.progress_type}
                  </p>
                </section>
                <section className="flex gap-4 mb-4 h-fit">
                  <div className="min-w-[90px] h-[110px]">
                    <Image
                      src="/images/dashboard/dummytask.png"
                      width={90}
                      height={110}
                      className="h-full w-full object-cover rounded-lg"
                      alt="assignment-thumbnail"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h1 className="mb-2 text-start ">
                      {assignment?.assignment_title}
                    </h1>
                    <section className="flex gap-2 items-start lg:items-center mb-2">
                      <div className="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center">
                        <MdNavigateNext className="text-primary-500" />
                      </div>
                      <p className="text-xs lg:text-sm text-neutral-400 ">
                        {limitString(assignment?.assignment_desc, 40)}
                      </p>
                    </section>
                    <section className="flex gap-2 items-start lg:items-centers">
                      <div className="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center">
                        <MdNavigateNext className="text-primary-500" />
                      </div>
                      <p className="text-xs lg:text-sm text-neutral-400">
                        {assignment?.subject_name}
                      </p>
                    </section>
                  </div>
                </section>
                <section className="flex flex-col md:flex-row justify-between gap-4 items-center">
                  <Link
                    href={`studi-ku/${assignment.subject_id}/tugas/${assignment.assignment_session_id}`}
                    className="text-white w-[95%] lg:w-44 mx-auto md:mx-0  mb-2  bg-primary-500 text-xs lg:text-sm py-3 px-4 rounded-md hover:bg-primary-600 transition-colors ease-in-out duration-300 text-center"
                  >
                    Kerjakan Sekarang
                  </Link>
                  <div
                    style={{ color: 'red' }}
                    className="text-red-500 lg:justify-end  flex items-center gap-2 text-xs lg:text-sm w-52"
                  >
                    <AiFillWarning className="text-lg" />
                    <h1 className="text-sm">
                      Terakhir{' '}
                      {changeFormatToDate(assignment?.progress_deadline)}
                    </h1>
                  </div>
                </section>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

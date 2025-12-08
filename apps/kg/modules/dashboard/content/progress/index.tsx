import Image from 'next/image';
import Link from 'next/link';
import { FC, ReactElement, useState } from 'react';
import { RxDividerVertical } from 'react-icons/rx';
import { useDashboardData } from '../../../../hooks/dashboard/hook';
import './index.css';

export const ProgressSection: FC = (): ReactElement => {
  const { getDashboardData } = useDashboardData();
  const subjectProgress = getDashboardData?.subject_progress;
  const [more, setMore] = useState(false);
  let lengthData = 0;

  if (subjectProgress && more) {
    lengthData = subjectProgress?.dataSubjects?.length as number;
  }
  if (subjectProgress && !more) {
    lengthData = 3;
  }
  const handleMore = (): void => {
    setMore((prev) => !prev);
  };

  return (
    <section className="bg-white w-full pt-[28px] px-[24px] rounded-md pb-[44px] mb-8">
      {subjectProgress && subjectProgress?.dataSubjects?.length > 0 ? (
        <>
          <p className="font-semibold text-xl text-neutral-900 mb-2 ">
            Lanjutkan Pembelajaran Kamu
          </p>
          <p className="text-sm font-normal text-neutral-900">
            Lanjutkan pembelajaran kamu di materi yang belum selesai
          </p>
          <div className="wrapper mt-5 grid gap-y-[20px] mb-[20px]">
            {subjectProgress?.dataSubjects
              ?.slice(0, lengthData)
              ?.map((subject, i) => {
                const subjectName = subject.name;
                const subjectId = subject.id;
                return (
                  <div
                    key={i}
                    className="progressBox bg-white w-full relative flex gap-x-4 gap-y-[20px] rounded-lg p-5 border-[#F5F5F5] border-[1px] border-solid flex-col md:flex-row"
                  >
                    <div className="w-full md:w-[400px] h-[150px] relative">
                      <Image
                        className="rounded-lg object-cover"
                        src={
                          subject?.thumbnail ||
                          '/images/dashboard/dummyCourse.png'
                        }
                        layout="fill"
                        alt={subject?.name}
                        priority
                        quality={100}
                      />
                    </div>
                    <div className="flex w-full justify-between flex-col lg:flex-row gap-4">
                      <div className="flex flex-col justify-between w-full h-full">
                        <p className="text-lg font-semibold mb-[12px]">
                          {subject?.name}
                        </p>
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center gap-x-2 text-neutral-500 font-normal text-xs md:text-sm">
                            <p>Batch 1</p>
                            <RxDividerVertical className="scale-y-125" />
                            {/* <p>{subject?.credit} SKS</p>
                            <RxDividerVertical className="scale-y-125" /> */}
                            <p>{subject?.session_count} Pertemuan</p>
                          </div>
                          <div className="flex justify-between lg:justify-normal lg:grid lg:grid-cols-8 gap-x-2 items-center">
                            <progress
                              className={`progress col-span-5 h-[10px] rounded-lg overflow-hidden`}
                              max="100"
                              value={`${subject?.progress_percentage}`}
                            />
                            <p className="col-span-1 text-neutral-500 font-normal inline mt-0 leading-none text-xs md:text-sm">
                              {subject?.current_session === '-'
                                ? '0'
                                : subject?.current_session}
                              /{subject?.session_count}
                              <span className="ml-1 text-[12px]">
                                Pertemuan
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="w-max min-w-fit flex justify-end">
                        {subject?.progress_percentage < 100 ? (
                          // <Link href={`/studi-ku/${subjectId}`}>
                          //   <button className="bg-primary-500 w-fit h-fit text-white text-sm font-medium px-5 py-2 hover:bg-primary-600 transition-colors ease-in-out duration-300 rounded-md justify-self-end">
                          <Link href={`/studi-ku/${subjectId}`}>
                            <button className="bg-sky-base w-fit h-fit text-white text-sm font-medium px-5 py-2 hover:bg-sky-base/80 transition-colors ease-in-out duration-300 rounded-md justify-self-end">
                              Lanjut Belajar
                            </button>
                          </Link>
                        ) : (
                          <button
                            disabled
                            className="bg-neutral-300 w-fit h-fit text-white text-sm font-medium px-5 py-2 rounded-md justify-self-end"
                          >
                            Selesai
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            {(subjectProgress?.dataSubjects?.length as number) > 3 && (
              <button onClick={handleMore}>
                <p className="text-center text-[12px] text-neutral-500 font-normal mb-[16px]">
                  {more ? 'Lihat Lebih Sedikit' : 'Lihat Semua'}
                </p>
                <Image
                  className={`mx-auto ${more && 'rotate-180'}`}
                  src={'/icons/LihatSemua.svg'}
                  alt="Lihat Semua"
                  width={24}
                  height={13}
                />
              </button>
            )}
          </div>
        </>
      ) : (
        <div className="lg:h-[calc(50vh-0px)] md:h-[calc(100vh-250px)] w-full flex items-center justify-center flex-col gap-4 mb-4">
          <Image
            src="/images/dashboard/emptyMatkul.svg"
            width={280}
            height={280}
            alt="Empty"
          />
          <p className="text-base font-medium">
            Belum ada studi yang kamu ikuti
          </p>
          {/* <Link
            href={'/studi-ku'}
            className="bg-primary-500 text-white px-8 text-center py-2 rounded-md font-semibold"
          >
            Mulai Sekarang
          </Link> */}
        </div>
      )}
    </section>
  );
};

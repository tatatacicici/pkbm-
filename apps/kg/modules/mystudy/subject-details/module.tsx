'use client';
import EmptyState from '@kampus-gratis/apps/kg/components/empty-state';
import { BreadCrumb, LoadingSpinner } from '@kampus-gratis/components/atoms';
import { StudiKuBreadCumbs } from 'apps/kg/utils/constantStudiKu';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { FC, ReactElement, useEffect, useState } from 'react';
import {
  FaBookOpen,
  FaCalendarCheck,
  FaClipboardCheck,
  FaComments,
  FaSort,
  FaStar,
} from 'react-icons/fa';
import { MdArrowDropDown } from 'react-icons/md';
import YouTube from 'react-youtube';
import { useGetSubjectDetailsById } from '../../../hooks/mystudy/subject-detail/hook';
import { TDataSession } from '../../../types/subjectDetails';
import { SessionSection } from './session';

const TipItem: FC<{ icon: React.ReactNode; text: string }> = ({
  icon,
  text,
}) => (
  <li className="flex items-start mb-4 last:mb-0">
    {/* <span className="text-primary-500 mr-3 mt-1">{icon}</span> */}
    <span className="text-sky-base mr-3 mt-1">{icon}</span>
    <span>{text}</span>
  </li>
);

const TipsAndTutorials: FC = () => {
  return (
    <div className="flex flex-col mb-5">
      <div className="bg-white rounded-lg shadow-lg">
        <div className="p-6">
          {/* <h4 className="font-bold text-xl mb-4 text-primary-500"> */}
          <h4 className="font-bold text-xl mb-4 text-sky-base">
            Tips dan Tutorial Penggunaan Platform:
          </h4>
          <ul className="space-y-3">
            <TipItem
              icon={<FaBookOpen size={18} />}
              text="Klik pada setiap sesi / pertemuan untuk melihat detail materi"
            />
            <TipItem
              icon={<FaClipboardCheck size={18} />}
              text="Selesaikan modul, kuis dan tugas untuk meningkatkan progress belajar"
            />
            <TipItem
              icon={<FaComments size={18} />}
              text="Gunakan fitur diskusi untuk bertanya atau berbagi wawasan dan meningkatkan point kamu di papan skor / leaderboard"
            />
            <TipItem
              icon={<FaStar size={18} />}
              text="Jangan lupa untuk menilai pengajar untuk meningkatkan kualitas pembelajaran di Paket-C Gratis"
            />
            <TipItem
              icon={<FaCalendarCheck size={18} />}
              text="Absensi kamu akan dihitung berdasarkan progress belajar yang telah selesai"
            />
            <TipItem
              icon={<FaSort size={18} />}
              text="Kerjakan modul, kuis, dan tugas sesuai urutan yang ada"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export const SubjectDetailsModule: FC = (): ReactElement => {
  const { subjectId } = useParams();
  const { data, isLoading } = useGetSubjectDetailsById(subjectId as string);

  const [isOpen, setIsOpen] = useState('pendahuluan');

  const dataSubjectDetails = data?.data?.subject;
  const overview = data?.data?.overview;
  const dataSessions = data?.data?.sessions;
  const thumbnailImg = dataSubjectDetails?.thumbnail.includes('.')
    ? dataSubjectDetails.thumbnail
    : '';

  const idYoutube = overview?.link?.match(
    /(?<=v=|v\/|vi\/|vi=|youtu\.be\/|\/v\/|\/embed\/|\/shorts\/|\/youtu.be\/|\/v=|\/e\/|\/u\/\w\/|\/embed\/|\/v\/|\/watch\?v=|youtube.com\/watch\?v=|youtu.be\/)([^#&?\n]*)/
  );

  const studyBreadcrumb = [
    ...StudiKuBreadCumbs,
    {
      name: dataSubjectDetails?.name,
      link: `/studi-ku/${subjectId}`,
    },
  ];

  useEffect(() => {
    if (dataSubjectDetails?.name != undefined)
      document.title = `Pelajaran-Ku | ${dataSubjectDetails?.name} | Paket-C Gratis`;

    if (
      typeof window !== 'undefined' &&
      dataSubjectDetails?.name != undefined
    ) {
      window.gtag('config', 'G-YWYY60L1FX', {
        page_title: `Studi-Ku ${dataSubjectDetails?.name} | Paket-C Gratis`,
        page_location: window.location.href,
        page_path: window.location.pathname,
      });
    }
  }, [dataSubjectDetails]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!dataSubjectDetails)
    return <EmptyState text="Oops! Mata Pelajaran ini belum tersedia." />;

  return (
    <>
      <BreadCrumb className="px-5" items={studyBreadcrumb} bgColor="bg-white" />
      <div className="mx-auto px-[7%] my-8 flex flex-col gap-y-7 max-w-[1440px] w-full">
        <div className="flex flex-col gap-y-[30px] items-center">
          <h3 className="text-black text-[28px] text-center font-bold">
            {dataSubjectDetails?.name}
          </h3>
          <div className="w-full h-[253px]">
            <Image
              src={thumbnailImg}
              alt={`${dataSubjectDetails?.name}-image`}
              width={1400}
              height={250}
              className="h-full object-cover rounded-lg mx-auto"
            />
          </div>
          <p className="text-lg font-normal text-neutral-800 text-justify">
            {dataSubjectDetails?.description
              ? dataSubjectDetails?.description
              : dataSubjectDetails?.name}
          </p>
        </div>

        <TipsAndTutorials />

        <div className="flex flex-col gap-5 select-none">
          {overview?.link && (
            <div className="flex flex-col">
              <div className="bg-white rounded-lg">
                <button
                  onClick={() =>
                    isOpen == '' ? setIsOpen(`pendahuluan`) : setIsOpen('')
                  }
                  // className={`px-[30px] py-[14px] bg-primary-500 text-white flex justify-between items-center rounded-lg text-black cursor-pointer w-full`}
                  className={`px-[30px] py-[14px] bg-sky-base text-white flex justify-between items-center rounded-lg text-black cursor-pointer w-full`}
                >
                  <p className="text-lg font-medium">Pendahuluan</p>
                  <MdArrowDropDown
                    className={`text-3xl relative ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen === `pendahuluan` && (
                  <div className="w-[94%] mx-auto flex justify-center py-5">
                    <YouTube
                      videoId={idYoutube?.[0]}
                      iframeClassName="xl:w-[728px] md:w-[728px] xl:h-[398px] lg:h-[508px] w-[350px] h-[240px]"
                    />
                  </div>
                )}
              </div>
            </div>
          )}
          <div className="flex justify-between items-center">
            {/* <h4 className="text-lg font-bold text-primary-500"> */}
            <h4 className="text-lg font-bold text-sky-base">
              Pertemuan Belajar:
            </h4>
            {/* <p className="text-lg font-medium text-primary-500"> */}
            <p className="text-lg font-medium text-sky-base">
              {dataSessions?.length} Pertemuan
            </p>
          </div>
          {dataSessions &&
            dataSessions?.map((session: TDataSession, index: number) => (
              <SessionSection
                key={index}
                index={index}
                session={session}
                subjectSession={dataSessions}
              />
            ))}
        </div>
      </div>
    </>
  );
};

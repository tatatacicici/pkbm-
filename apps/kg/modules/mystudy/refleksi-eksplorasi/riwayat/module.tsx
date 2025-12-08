'use client';

import EmptyState from '@kampus-gratis/apps/kg/components/empty-state';
import { BreadCrumb, LoadingSpinner } from '@kampus-gratis/components/atoms';
import { useGetSubjectDetailsById } from 'apps/kg/hooks/mystudy/subject-detail/hook';
import { StudiKuBreadCumbs } from 'apps/kg/utils/constantStudiKu';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { useState } from 'react';
import Avatar from 'react-avatar';
import { MdArrowDropDown } from 'react-icons/md';
import { useGetRiwayatRefleksi } from '../../../../hooks/mystudy/riwayat-refleksi/hooks';
import imgModuleIcon from '../../../../public/images/mystudy/subject-details/module-icon.svg';

export const RiwayatRefleksiEksplorasiModule = () => {
  const pathName = usePathname();
  const { subjectId, sessionId } = useParams();

  const [isOpen, setIsOpen] = useState('');

  const { data, isLoading } = useGetRiwayatRefleksi(sessionId as string);
  const { data: subjectDetail, isLoading: subjectDetailLoading } =
    useGetSubjectDetailsById(subjectId as string);

  const studyAssigmentBreadcrumb = [
    ...StudiKuBreadCumbs,
    {
      name: subjectDetail?.data?.subject?.name,
      link: `/studi-ku/${subjectId}`,
    },
    {
      name: 'Refleksi Pembelajaran',
      link: `/studi-ku/${subjectId}/refleksi-pembelajaran/${sessionId}`,
    },
    {
      name: 'Riwayat',
      link: `/studi-ku/${subjectId}/refleksi-pembelajaran/${sessionId}/riwayat`,
    },
  ];

  if (isLoading || subjectDetailLoading) {
    return <LoadingSpinner />;
  }

  if (!data?.data) {
    return (
      <EmptyState text="Oops! Riwayat refleksi pembelajaran tidak ditemukan" />
    );
  }

  return (
    <>
      <BreadCrumb items={studyAssigmentBreadcrumb} bgColor="bg-neutral-50" />
      <section className="w-full px-8 min-h-[80vh] md:px-14 lg:px-16 2xl:px-0 max-w-[1440px] mx-auto lg:pt-6 lg:pb-6 pt-4">
        <div className="bg-white w-full p-6 rounded-md">
          <h1 className="text-lg md:text-2xl font-semibold mb-4">
            Riwayat Refleksi Pembelajaran
          </h1>
          <p className="text-sm">Pertemuan {data?.data.session_no}</p>
        </div>
        <div className="w-full md:flex mt-4 gap-x-6 ">
          <div className="w-full md:w-1/3 bg-white p-6 rounded-md mb-4 h-full">
            <div key={1} className="flex flex-col">
              <button
                onClick={() =>
                  isOpen == '' ? setIsOpen(`Accordion-1`) : setIsOpen('')
                }
                //   className={`px-[30px] py-[14px] flex justify-between items-center rounded-lg text-white cursor-pointer
                //     bg-primary-500 hover:opacity-80
                // `}
                className={`px-[30px] py-[14px] flex justify-between items-center rounded-lg text-white cursor-pointer 
                  bg-sky-base hover:opacity-80
              `}
              >
                <p className="text-lg font-medium">
                  {/* Pertemuan {session.session_no} */}
                  Pertemuan {data?.data?.session_no}
                </p>

                <MdArrowDropDown
                  className={`text-3xl relative ${isOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {/* CONTENT */}
              {isOpen === `Accordion-1` ? (
                <div className="w-[94%] mx-auto">
                  <div className="h-[60px] items-center flex justify-between border-b border-neutral-300 pl-[21px] pr-[40.5px]">
                    <div className="flex gap-x-6">
                      <Image src={imgModuleIcon} alt="module" />
                      <Link
                        href={pathName}
                        className="text-base text-neutral-800 hover:underline"
                      >
                        Refleksi Pembelajaran
                      </Link>
                    </div>
                    <div>
                      {/* {isProgressFinished('MODULE') && (
                        <Image src={imgDoneIcon} alt="done" />
                      )} */}
                    </div>
                  </div>
                </div>
              ) : (
                ''
              )}
            </div>
          </div>
          <div className="w-full md:w-2/3 bg-white p-6 rounded-md">
            <div className="w-full flex gap-4 py-2 mb-12">
              <div className="min-w-40 rounded-full">
                {data?.data?.teacher?.avatar ? (
                  <Image
                    src={data?.data?.teacher?.avatar || ''}
                    alt="placeholder"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                ) : (
                  <Avatar
                    name={data?.data?.teacher?.full_name}
                    size="40"
                    round={true}
                  />
                )}
              </div>
              <div className="w-full bg-neutral-100 p-4 rounded-md">
                <p className="pb-4 font-bold">
                  {data?.data?.teacher?.full_name}
                </p>
                <p>{data?.data?.reflection}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

import EmptyState from '@kampus-gratis/apps/kg/components/empty-state';
import {
  BreadCrumb,
  Button,
  LoadingSpinner,
} from '@kampus-gratis/components/atoms';
import { useGetSubjectDetailsById } from 'apps/kg/hooks/mystudy/subject-detail/hook';
import { StudiKuBreadCumbs } from 'apps/kg/utils/constantStudiKu';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import Content from './assets/content-new.svg';

const PenilaianPengajarModule: React.FC = () => {
  const { subjectId } = useParams();
  const router = useRouter();
  const pathname = usePathname();
  const { data, isLoading } = useGetSubjectDetailsById(subjectId as string);

  const handleStart = () => {
    router.push(`${pathname}/mulai`);
  };

  const penilaianPengajarBreadcrumb = [
    ...StudiKuBreadCumbs,
    {
      name: data?.data?.subject.name,
      link: `/studi-ku/${subjectId}`,
    },
    {
      name: 'Penilaian Pengajar',
      link: pathname,
    },
  ];

  if (isLoading) return <LoadingSpinner />;

  if (!data) {
    <EmptyState text="Oops! Penilaian pengajar tidak ditemukan" />;
  }

  return (
    <>
      <BreadCrumb items={penilaianPengajarBreadcrumb} />
      <div className=" w-full max-w-[1440px] mx-auto min-h-(calc(100vh-192px)) px-6 md:px-14 lg:px-16 2xl:px-0">
        <div className="space-y-5">
          <div className="bg-white rounded mt-5">
            <h1 className="text-2xl font-semibold">Penilaian Pengajar</h1>
          </div>
          <div className=" bg-white py-2 rounded">
            <div className="bg-blue-200 text-blue-base px-4 py-5 rounded">
              <p>
                Pilihlah keterangan nilai yang paling mewakili penilaian Anda
                terhadap instruktur.
              </p>
              <p>
                Keterangan: Sangat Baik, Baik, Biasa Saja, Tidak Baik, Sangat
                Tidak baik
              </p>
            </div>
            <div className="flex flex-col justify-center w-full pt-10 mb-10">
              <Image
                src={Content}
                alt={'content-images'}
                width={200}
                height={200}
                className="w-full h-full rounded-xl"
              />
              <div className=" w-full pt-5 flex justify-center">
                {/* <Button
                  type="button"
                  className=" bg-blue-base w-[300px] rounded-md py-2 text-white"
                  onClick={handleStart}
                > */}
                <Button
                  type="button"
                  className=" bg-sky-base w-[300px] rounded-md py-2 text-white hover:bg-sky-base/90 transition-all"
                  onClick={handleStart}
                >
                  Mulai
                </Button>
              </div>
              <div className=" w-full pt-2 flex justify-center">
                {/* <Link
                  href={`/studi-ku/${subjectId}`}
                  className="text-primary-500 hover:text-primary-500/80 cursor-pointer flex items-center gap-x-2 py-2 border border-primary-500 rounded-md w-[300px] justify-center"
                > */}
                <Link
                  href={`/studi-ku/${subjectId}`}
                  className=" text-sky-base text-center hover:bg-sky-base/90 hover:text-white cursor-pointer flex items-center gap-x-2 py-2 border border-sky-base rounded-md w-[300px] justify-center transition-all"
                >
                  <FaArrowLeft />
                  Kembali
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PenilaianPengajarModule;

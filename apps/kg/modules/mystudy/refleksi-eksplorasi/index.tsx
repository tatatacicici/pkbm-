'use client';

import { BreadCrumb } from '@kampus-gratis/components/atoms';
import { useGetSubjectDetailsById } from 'apps/kg/hooks/mystudy/subject-detail/hook';
import { StudiKuBreadCumbs } from 'apps/kg/utils/constantStudiKu';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { FaArrowLeft } from 'react-icons/fa';
import { BaseLayout } from '../../../components';

const ReflesiEksplorasiModule = () => {
  const pathName = usePathname();
  const { subjectId, sessionId } = useParams();
  const { data, isLoading } = useGetSubjectDetailsById(subjectId as string);

  const ITEMS = [
    ...StudiKuBreadCumbs,
    {
      name: data?.data?.subject.name,
      link: `/studi-ku/${subjectId}`,
    },
    {
      name: 'Refleksi Pembelajaran',
      link: `/studi-ku/${subjectId}/refleksi-pembelajaran/${sessionId}`,
    },
  ];

  return (
    <BaseLayout>
      <BreadCrumb items={ITEMS} />
      <main className="w-full max-w-[1440px] mx-auto my-4 max-h-max md:px-10 2xl:px-0 p-2 ">
        <div className="w-full flex flex-col">
          <section className="w-full bg-white px-6 rounded-lg">
            <h1 className="text-3xl font-semibold">Refleksi Pembelajaran</h1>
            <p className="mt-2 text-lg text-gray-500 font-normal">
              Pertemuan 1
            </p>
          </section>
          <section className="bg-white px-8 xl:px-40 rounded-lg flex justify-center items-center gap-5 mb-8 flex-col lg:flex-row">
            <Image
              src="/images/refleksi-ekplorasi/refleksi.svg"
              alt="ekplorasi"
              width={500}
              height={500}
              className="object-contain"
            />
            <div className="flex flex-col gap-5">
              <h1 className="text-2xl font-semibold">Deskripsi</h1>
              <p className="text-lg text-gray-500 text-justify">
                Refleksi Pembelajaran dilakukan dengan tujuan untuk meningkatkan
                pemahaman diri, memperkuat koneksi antara teori dan praktik,
                serta merancang strategi perbaikan atau pengembangan diri ke
                depannya. Dengan refleksi, pengguna dapat mengidentifikasi
                pencapaian, tantangan, dan area yang perlu diperbaiki,
                menciptakan lingkungan pembelajaran yang lebih efektif dan
                memastikan pertumbuhan yang berkelanjutan.
              </p>
              <span className="w-full flex gap-2 justify-between items-stretch">
                {/* <Link
                  href={`${pathName}/riwayat`}
                  className="w-full border-2 border-blue-base py-2 rounded-md text-blue-base text-center hover:bg-blue-base/90 hover:text-white transition-all"
                > */}
                <Link
                  href={`${pathName}/riwayat`}
                  className="w-full border-2 border-sky-base py-2 rounded-md text-sky-base text-center hover:bg-sky-base/90 hover:text-white transition-all"
                >
                  Riwayat Refleksi Pembelajaran
                </Link>
                {/* <Link
                  href={`${pathName}/refleksi`}
                  className=" text-center w-full py-2 bg-blue-base rounded-md text-white hover:bg-blue-base/90 flex items-center justify-center transition-all"
                > */}
                <Link
                  href={`${pathName}/refleksi`}
                  className=" text-center w-full py-2 bg-sky-base rounded-md text-white hover:bg-sky-base/90 flex items-center justify-center transition-all"
                >
                  Mulai
                </Link>
              </span>
            </div>
          </section>
          <div className="px-8 xl:px-40">
            {/* <Link
              href={`/studi-ku/${subjectId}`}
              className="text-blue-500 hover:text-blue-500/80 cursor-pointer flex items-center gap-x-2 underline"
            > */}
            <Link
              href={`/studi-ku/${subjectId}`}
              className="text-sky-base hover:text-sky-base/80 cursor-pointer flex items-center gap-x-2"
            >
              <FaArrowLeft />
              Kembali
            </Link>
          </div>
        </div>
      </main>
    </BaseLayout>
  );
};

export default ReflesiEksplorasiModule;

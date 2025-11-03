/* eslint-disable @nx/enforce-module-boundaries */
'use client';

import { BaseLayout } from '@kampus-gratis/apps/kg/components';
import { BreadCrumb, LoadingSpinner } from '@kampus-gratis/components/atoms';

import { useGetDetailScore } from '@kampus-gratis/apps/kg/hooks/score-certificate/hook';
import { useParams, useRouter } from 'next/navigation';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { detailScoreBreadCumbs } from '../../../constant';

export default function DetailScoreModule() {
  const router = useRouter();
  const { nilai_id } = useParams();

  const { data, isLoading } = useGetDetailScore(nilai_id as string);

  const sessionData = data?.data?.sessions;

  if (isLoading) {
    <LoadingSpinner />;
  }

  return (
    <BaseLayout>
      <BreadCrumb items={detailScoreBreadCumbs} bgColor="bg-gray-50" />
      <section className="py-1 bg-[#FAFAFA] px-6 md:px-14 lg:px-16">
        <main className="max-w-[1440px] mx-auto mb-20 py-4">
          <div className="mb-6">
            <h1 className="text-2xl font-bold">{data?.data?.subject?.name}</h1>
            <p className="text-md text-gray-500">
              {data?.data?.subject?.type === 'INDIVIDUAL'
                ? 'MATA PELAJARAN'
                : 'BOOTCAMP'}
            </p>
          </div>
          <div className="border rounded-lg shadow overflow-auto dark:border-white dark:shadow-gray-900">
            <table className="min-w-full divide-y divide-neutral-400">
              {/* <thead className="bg-primary-500"> */}
              <thead className="bg-sky-base">
                <tr className="divide-x divide-neutral-300">
                  <th
                    scope="col"
                    className="lg:px-6 lg:py-3 px-3 py-2 text-center font-medium text-white text-sm"
                  >
                    Materi
                  </th>
                  <th
                    scope="col"
                    className="lg:px-6 lg:py-3 px-3 py-2 text-center font-medium text-white text-sm"
                  >
                    Tipe
                  </th>
                  <th
                    scope="col"
                    className=" col-span-2 lg:px-6 lg:py-3 px-3 py-2 text-center font-medium text-white text-sm"
                  >
                    Tugas
                  </th>
                  <th
                    scope="col"
                    className="lg:px-6 lg:py-3 px-3 py-2 text-center font-medium text-white text-sm"
                  >
                    Ujian
                  </th>
                  <th
                    scope="col"
                    className="lg:px-6 lg:py-3 px-3 py-2 text-center font-medium text-white text-sm"
                  >
                    PR
                  </th>
                  <th
                    scope="col"
                    className="lg:px-6 lg:py-3 px-3 py-2 text-center font-medium text-white text-sm"
                  >
                    Rata Rata
                  </th>
                  <th
                    scope="col"
                    className="lg:px-6 lg:py-3 px-3 py-2 text-center font-medium text-white text-sm"
                  >
                    Nilai
                  </th>
                </tr>
              </thead>
              {/* <tbody className="divide-y divide-neutral-200 text-center text-primary-600 font-bold"> */}
              <tbody className="divide-y divide-neutral-200 text-center text-black font-bold">
                {sessionData &&
                  sessionData?.map((item) => (
                    <>
                      <tr>
                        <td className="px-6 py-4 border-r whitespace-nowrap text-sm text-start">
                          {item.title}
                        </td>
                        <td className="px-6 py-4 border-r whitespace-nowrap text-sm ">
                          {item.type}
                        </td>
                        <td className="px-6 py-4 border-r whitespace-nowrap text-sm ">
                          {item.module_score}
                        </td>
                        <td className="px-6 py-4 border-r whitespace-nowrap text-sm ">
                          {item.quiz_score}
                        </td>
                        <td className="px-6 py-4 border-r whitespace-nowrap text-sm ">
                          {item.assignment_score}
                        </td>
                        <td className="px-6 py-4 border-r whitespace-nowrap text-sm ">
                          {item.average_score}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm ">
                          {item.average_score_letter}
                        </td>
                      </tr>
                    </>
                  ))}
                <tr>
                  <td
                    scope="col-span-6"
                    className="text-center py-4"
                    colSpan={3}
                  >
                    Total Skor
                  </td>
                  <td className="py-4">{data?.data?.subject?.score}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-8">
            <button
              // className="bg-primary-500 text-white px-4 py-2 rounded-lg flex items-center gap-2"
              className="bg-sky-base text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-sky-base/80 transition-all"
              onClick={() => router.push('/nilai-dan-sertifikat')}
            >
              <FaArrowLeftLong className="inline-block" />
              Kembali
            </button>
          </div>
        </main>
      </section>
    </BaseLayout>
  );
}

'use client';

import { FC, ReactElement } from 'react';

import { LoadingSpinner } from '@kampus-gratis/components/atoms';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { useGetAllScore } from '../../../../hooks/score-certificate/hook';

const ScoreSection: FC = (): ReactElement => {
  const { data, isLoading } = useGetAllScore();
  const scoreData = data?.data;

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {scoreData &&
        scoreData?.subjects.map((item, index) => (
          <div
            className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow flex justify-between flex-col relative"
            key={index}
          >
            <div className="">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                {item.name}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-sm">
                {item.status}
              </p>
            </div>
            <div className="">
              {/* <Link
                href={`/nilai-dan-sertifikat/nilai/${item.id}`}
                className="inline-flex gap-2 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-base rounded-lg hover:bg-blue-base/80"
              > */}
              <Link
                href={`/nilai-dan-sertifikat/nilai/${item.id}`}
                className="inline-flex gap-2 items-center px-3 py-2 text-sm font-medium text-center text-white bg-sky-base rounded-lg hover:bg-sky-base/80"
              >
                Lihat Detail
                <FaArrowRight />
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ScoreSection;

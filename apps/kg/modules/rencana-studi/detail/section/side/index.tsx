'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

import { BsFillFileEarmarkTextFill } from 'react-icons/bs';
import { MdAvTimer } from 'react-icons/md';
import { BsBookHalf } from 'react-icons/bs';

import { useGetAllSubject } from '../../../../../hooks/rencana-studi/hooks';
import { TSubject } from '../../../../../types/rencana-studi';
import { LoadingSpinner } from '@kampus-gratis/components/atoms';

const SideSectionDetail = () => {
  const { data, isLoading } = useGetAllSubject();

  const shuffleArray = (array: any) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const [shuffledData, setShuffledData] = useState([]);

  useEffect(() => {
    if (data?.data) {
      // Shuffle the data and take the first 5 items
      const shuffledItems = shuffleArray([...data.data]).slice(0, 5);
      setShuffledData(shuffledItems);
    }
  }, [data]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center gap-2">
        <h2 className="text-xs lg:text-xl max-md:text-lg font-medium">
          Pelatihan Lainnya
        </h2>
        <Link
          href={'/rencana-studi'}
          className="flex gap-1 max-md:gap-2 lg:gap-3 text-xs lg:text-xl max-md:text-lg items-center text-primary-500"
        >
          {' '}
          <p className="leading-none">Selengkapnya</p>
          <FaArrowRightLong />
        </Link>
      </div>
      <div className="my-3 flex flex-col gap-4">
        {shuffledData ? (
          shuffledData
            ?.map((item: TSubject, i: number) => (
              <div key={i}>
                <Link href={`/rencana-studi/detail-rencana-studi/${item.id}`}>
                  <div className="flex flex-col lg:flex-row w-full bg-white rounded-lg shadow-md">
                    <div className="lg:w-1/3 w-full">
                      <Image
                        src={item.thumbnail}
                        alt="matakuliah"
                        width={1000}
                        height={1000}
                        className="object-cover lg:h-full max-h-48 w-full rounded-t-lg lg:rounded-l-lg lg:rounded-r-none"
                      />
                    </div>
                    <div className="lg:w-2/3 w-full">
                      <div className="w-full lg:p-5 max-md:p-5 p-3">
                        <div className="flex flex-col lg:gap-2 max-md:gap-2 gap-1">
                          <p className="text-xs lg:text-sm text-gray-500">
                            {item.code}
                          </p>
                          <h3 className="text-xs lg:text-sm font-semibold">
                            {item.name}
                          </h3>
                          <div className="flex gap-5">
                            {/* <span className="flex items-center gap-1 lg:text-xs max-md:text-xs text-[8px]">
                              <BsBookHalf className="text-primary-400" />
                              <p>Semester {item.semester} </p>
                            </span>
                            <span className="flex items-center gap-1 lg:text-xs max-md:text-xs text-[8px]">
                              <BsFillFileEarmarkTextFill className="text-green-700" />
                              <p>{item.credit} SKS</p>
                            </span> */}
                            <span className="flex items-center gap-1 lg:text-xs max-md:text-xs text-[8px]">
                              <MdAvTimer className="text-primary-600" />
                              <p>{item.total_session} Modul</p>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))
            .slice(0, 5)
        ) : (
          <div>Tidak Ada Data</div>
        )}
      </div>
    </div>
  );
};

export default SideSectionDetail;

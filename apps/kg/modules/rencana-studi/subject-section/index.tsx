'use client';

import React, { useEffect, useMemo } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useGetAllSubject } from '../../../hooks/rencana-studi/hooks';
import { SubjectCard } from './subject-card';
import { TSubject } from 'apps/kg/types/rencana-studi';

interface SubjectSectionProps {
  deb: string;
  smt: number;
  type: string;
}

export const SubjectSection: React.FC<SubjectSectionProps> = ({
  deb,
  smt,
  type,
}) => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const params = useMemo(
    () => new URLSearchParams(searchParams),
    [searchParams]
  );

  const faculty_id = params.get('faculty') || '';
  const major_id = params.get('major') || '';
  const semester = params.get('semester') || '';
  const credit = params.get('credit') || '';
  const level = params.get('level') || '';
  const search = params.get('search') || '';

  useEffect(() => {
    const setSearch = setTimeout(() => {
      if (deb) {
        params.set('search', deb);
      } else {
        params.delete('search');
      }
      replace(`${pathName}?${params.toString()}`);
    }, 1000);

    return () => clearTimeout(setSearch);
  }, [deb, params, pathName, replace]);

  const { data, isLoading } = useGetAllSubject(
    faculty_id,
    major_id,
    semester || smt.toString(),
    credit,
    level,
    search,
    type,
    100
  );

  if (isLoading) {
    return (
      <div className="mb-8 pb-8 border-b border-gray-200">
        <Skeleton height={22} width={180} className="!rounded-xl mb-4" />
        <Skeleton
          height={250}
          count={3}
          containerClassName="flex mt-2 overflow-x-auto gap-2 w-full"
          className="!rounded-xl"
        />
      </div>
    );
  }

  const isFiltered = Boolean(credit || level || search);

  const renderContent = () => {
    if (!data || data.data.length === 0) {
      const message = isFiltered
        ? `Tidak ada mata pelajaran yang ditemukan pada ${
            type === 'GROUP' ? 'Batch' : 'Semester'
          } ${smt}`
        : `Tidak ada mata pelajaran yang tersedia pada ${
            type === 'GROUP' ? 'Batch' : 'Semester'
          } ${smt}`;

      return (
        <div className="text-center py-4 bg-gray-50 rounded-lg">
          <p className="text-gray-500 font-medium">{message}</p>
        </div>
      );
    }

    return (
      <div className="flex flex-col">
        <div className="flex mt-4 overflow-x-auto gap-5 pb-4">
          {data.data
            .sort((a: TSubject, b: TSubject) =>
              a.is_available === b.is_available ? 0 : a.is_available ? -1 : 1
            )
            .map((subject: TSubject) => (
              <SubjectCard key={subject.id} {...subject} />
            ))}
        </div>
      </div>
    );
  };

  return (
    <div className="mb-8 pb-8 border-b border-gray-200 last:border-b-0">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-lg text-gray-800">
          {type === 'GROUP' ? 'Batch ' : 'Semester '}
          {smt}
        </h2>
        {data && data.data.length > 0 && (
          <span className="text-md text-gray-900">
            {data.meta.total_data} Mata Pelajaran
          </span>
        )}
      </div>
      {renderContent()}
    </div>
  );
};

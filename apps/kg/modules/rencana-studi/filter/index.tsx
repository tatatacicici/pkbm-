'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { IoFilter } from 'react-icons/io5';
import { Major, TFilterData } from '@kampus-gratis/apps/kg/types/rencana-studi';
import FilterModalStudyPlan from './modal-filter';

interface FilterStudyPlanProps {
  data: TFilterData;
  isFilterOpen: boolean;
  setIsFilterOpen: (val: boolean) => void;
}

const FilterStudyPlan: React.FC<FilterStudyPlanProps> = ({
  data,
  isFilterOpen,
  setIsFilterOpen,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = useMemo(() => new URLSearchParams(searchParams), [searchParams]);

  const [majorSelection, setMajorSelection] = useState<Major[]>([]);

  const facultyParams = params.get('faculty') || '';
  const majorParams = params.get('major') || '';
  const semesterParams = params.get('semester') || '';
  const levelParams = params.get('level') || '';
  const creditParams = params.get('credit') || '';

  const majorLabel = data.majors.find((major) => major.id === majorParams)?.name;

  useEffect(() => {
    setMajorSelection(data.majors.filter((major) => major.faculty_id === facultyParams));
  }, [data.majors, facultyParams]);

  useEffect(() => {
    const defaultFaculty = '6b25cc9c-143e-4377-b275-ab7f2043f8e5';
    const defaultMajors: { [key: string]: string } = {
      '9886a97b-d570-4c71-ac7f-3be2ce98b1aa': '71969662-85ec-48e4-b762-bd2511a8d56f',
      'dd34b43a-edde-479d-9292-24a949e14bf0': '1d5634b4-abd2-4b32-8e49-1475b5f45a64',
      '6b25cc9c-143e-4377-b275-ab7f2043f8e5': 'f1390af0-278c-433a-8df6-bc5b6f035678',
    };

    if (!params.has('faculty')) {
      params.set('faculty', defaultFaculty);
      params.set('major', defaultMajors[defaultFaculty]);
      router.replace(`?${params.toString()}`);
    } else if (!params.has('major') && facultyParams in defaultMajors) {
      params.set('major', defaultMajors[facultyParams]);
      router.replace(`?${params.toString()}`);
    }
  }, [params, facultyParams, router]);

  const renderFilterContent = () => {
    if (!majorParams && !semesterParams && !levelParams && !creditParams) {
      return <div className="text-sm hidden sm:block font-semibold px-6 flex-1 text-center w-max">Filter Studi</div>;
    }

    return (
      <>
        {majorLabel && <div className="text-sm hidden sm:block font-semibold px-6 flex-1 text-center w-max">{majorLabel}</div>}
        {semesterParams && <div className="text-sm px-6 border-l-[1px] flex flex-row items-center gap-3 font-semibold"><div className="hidden sm:block">Semester {semesterParams}</div></div>}
        {levelParams && <div className="text-sm px-6 border-l-[1px] flex flex-row items-center gap-3 font-semibold"><div className="hidden sm:block">Tingkatan {levelParams}</div></div>}
        {creditParams && <div className="text-sm px-6 border-l-[1px] flex flex-row items-center gap-3 font-semibold"><div className="hidden sm:block">{creditParams} SKS</div></div>}
      </>
    );
  };

  return (
    <>
      <div
        onClick={() => setIsFilterOpen(!isFilterOpen)}
        className="border-[1px] w-full md:w-max py-1 rounded-full shadow-sm hover:shadow-md transition cursor-pointer"
      >
        <div className="flex flex-row items-center justify-between">
          {renderFilterContent()}
          <div className="text-sm px-2 flex flex-row items-center gap-3 font-semibold">
            <div className="p-2 bg-blue-base rounded-full text-white">
              <IoFilter size={18} />
            </div>
          </div>
        </div>
      </div>
      <FilterModalStudyPlan
        isOpen={isFilterOpen}
        setIsOpen={() => setIsFilterOpen(false)}
        data={data}
        facultyParams={facultyParams}
        majorSelection={majorSelection}
      />
    </>
  );
};

export default FilterStudyPlan;
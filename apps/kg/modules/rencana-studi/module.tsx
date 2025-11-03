'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { BiSearch } from 'react-icons/bi';
import { LoadingSpinner } from '@kampus-gratis/components/atoms';
import EmptyState from '../../components/empty-state';
import { useGetFilter } from '../../hooks/rencana-studi/hooks';
import FilterStudyPlan from './filter';
import { SubjectSection } from './subject-section';

export const RencanaStudiModule: React.FC = () => {
  const [semesterList, setSemesterList] = useState<number[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const { data, isLoading } = useGetFilter();
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = useMemo(
    () => new URLSearchParams(searchParams),
    [searchParams]
  );

  const facultyParams = params.get('faculty') || '';
  const semester = params.get('semester') || '';

  useEffect(() => {
    setSemesterList(semester ? [parseInt(semester)] : [1, 2, 3, 4, 5, 6, 7]);
  }, [semester]);

  const handleFacultyClick = (facultyId: string) => {
    setIsFilterOpen(true);
    params.set('faculty', facultyId);
    params.delete('major');
    setSearchTerm('');
    router.push(`?${params.toString()}`);
  };

  if (isLoading) return <LoadingSpinner />;
  if (!data) return <EmptyState text="Data tidak ditemukan" />;

  return (
    <div className="py-2 px-4 md:px-14 lg:px-16 bg-[#fff8f6] min-h-[calc(100vh-193px)] w-full overflow-hidden">
      <div className="!max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-5 w-full overflow-scroll scrollbar-hide">
          <section className="bg-white h-full p-8 rounded-lg mt-8">
            <div className="flex flex-col gap-2 items-center">
              <h1 className="text-4xl text-center font-bold text-blue-base">
                Buat Rencana Belajar-mu di
                <span className="text-orange-base"> Sini</span>
              </h1>
            </div>
            <p className="text-lg font-medium mt-6 text-center mb-4">
              Pilih Jurusan sesuai keinginanmu
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {data.data.faculties.map((faculty) => (
                <button
                  key={faculty.id}
                  className={`border border-green-600 rounded-lg font-semibold py-3 p-2 text-green-600 hover:bg-green-600 hover:text-white transition-all duration-300 ${
                    faculty.id === facultyParams
                      ? 'bg-green-600 text-white'
                      : ''
                  }`}
                  onClick={() => handleFacultyClick(faculty.id)}
                >
                  {faculty.name}
                </button>
              ))}
            </div>
            <div className="flex gap-4 mt-4 mx-auto justify-center">
              <FilterStudyPlan
                data={data.data}
                isFilterOpen={isFilterOpen}
                setIsFilterOpen={setIsFilterOpen}
              />
              <label htmlFor="search" className="relative w-max">
                <input
                  placeholder="Cari Mata Pelajaran"
                  className="border h-full w-full py-2 pl-4 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-base focus:border-transparent rounded-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <BiSearch className="p-2 bg-blue-base rounded-full text-white pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 right-2" />
              </label>
            </div>
            <div className="mt-8 space-y-6">
              {semesterList.map((smt) => (
                <SubjectSection
                  key={smt}
                  deb={searchTerm}
                  smt={smt}
                  type="INDIVIDUAL"
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

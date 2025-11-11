import { Button } from '@kampus-gratis/components/atoms';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useMemo } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useGetFilter } from '../../../hooks/rencana-studi/hooks';

const getBackgroundColor = (title: string) => {
  switch (title) {
    case 'Bisnis Keberlanjutan':
      return 'bg-[#4caf50] text-white'; // Warna hijau cerah
    case 'Pembiayaan dan Optimalisasi Bisnis':
      return 'bg-[#ff9800] text-white'; // Warna oranye cerah
    case 'Teknologi Virtual Reality & Game':
      return 'bg-[#e91e63] text-white'; // Warna merah muda cerah
    case 'Teknologi Internet of Things & Cyber Security':
      return 'bg-[#ff5722] text-white'; // Warna merah terang
    case 'Desain Digital':
      return 'bg-[#9c27b0] text-white'; // Warna ungu cerah
    case 'Teknologi BlockChain, AI & Data Science':
      return 'bg-[#3f51b5] text-white'; // Warna biru indigo cerah
    default:
      return 'bg-[#f44336] text-white'; // Warna merah terang
  }
};

const getFacultyBackgroundColor = (title: string) => {
  switch (title) {
    case 'Teknologi Digital':
      return 'bg-[#4caf50] text-white';
    case 'Desain':
      return 'bg-[#ff9800] text-white';
    case 'Bisnis':
      return 'bg-[#e91e63] text-white';
    default:
      return 'bg-[#f44336] text-white';
  }
};

const getCreditBackgroundColor = (credit: number) => {
  const colors = [
    'bg-[#f44336] text-white',
    'bg-[#e91e63] text-white',
    'bg-[#9c27b0] text-white',
    'bg-[#673ab7] text-white',
    'bg-[#3f51b5] text-white',
    'bg-[#2196f3] text-white',
    'bg-[#00bcd4] text-white',
    'bg-[#009688] text-white',
    'bg-[#4caf50] text-white',
  ];
  return colors[credit - 1] || 'bg-[#f44336] text-white';
};

const getSemesterBackgroundColor = (semester: number) => {
  const colors = [
    'bg-[#ffeb3b] text-black',
    'bg-[#ffc107] text-black',
    'bg-[#ff9800] text-white',
    'bg-[#ff5722] text-white',
    'bg-[#795548] text-white',
    'bg-[#9e9e9e] text-white',
    'bg-[#607d8b] text-white',
    'bg-[#00bcd4] text-white',
  ];
  return colors[semester - 1] || 'bg-[#f44336] text-white';
};

const getLevelBackgroundColor = (level: number) => {
  const colors = [
    'bg-[#4caf50] text-white',
    'bg-[#8bc34a] text-white',
    'bg-[#cddc39] text-black',
    'bg-[#ffeb3b] text-black',
    'bg-[#ffc107] text-black',
  ];
  return colors[level - 1] || 'bg-[#f44336] text-white';
};

const Filter = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathName = usePathname();
  const params = useMemo(
    () => new URLSearchParams(searchParams),
    [searchParams]
  );

  const [filter, setFilter] = React.useState({
    faculty_id: null as string | null,
    major_id: null as string | null,
    semester: null as number | null,
    credit: null as number | null,
    level: null as number | null,
  });

  const { data, isLoading } = useGetFilter();

  const updateParams = (key: string, value: string | null) => {
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    replace(`${pathName}?${params.toString()}`);
  };

  const onFilterClear = () => {
    setFilter({
      faculty_id: null,
      major_id: null,
      semester: null,
      credit: null,
      level: null,
    });
    ['faculty', 'major', 'semester', 'credit', 'level'].forEach((key) =>
      params.delete(key)
    );
    replace(`${pathName}?${params.toString()}`);
  };

  const onFilterChange = (key: string, value: string | number | null) => {
    setFilter((prev) => ({ ...prev, [key]: value }));
  };

  useEffect(() => {
    updateParams('faculty', filter.faculty_id);
    updateParams('major', filter.major_id);
    updateParams('semester', filter.semester?.toString() || null);
    updateParams('credit', filter.credit?.toString() || null);
    updateParams('level', filter.level?.toString() || null);
  }, [filter]);
  const onFilterFaculties = (facultyId: string) => {
    setFilter((prev) => ({ ...prev, faculty_id: facultyId }));
    params.set('faculty', facultyId);
    replace(`${pathName}?${params.toString()}`);
  };

  const onFilterMajors = (majorId: string) => {
    setFilter((prev) => ({ ...prev, major_id: majorId }));
    params.set('major', majorId);
    replace(`${pathName}?${params.toString()}`);
  };

  const onFilterSemesters = (semester: number) => {
    setFilter((prev) => ({ ...prev, semester: semester }));
    params.set('semester', semester.toString());
    replace(`${pathName}?${params.toString()}`);
  };

  const onFilterCredits = (credit: number) => {
    setFilter((prev) => ({ ...prev, credit: credit }));
    params.set('credit', credit.toString());
    replace(`${pathName}?${params.toString()}`);
  };

  const onFilterLevels = (level: number) => {
    setFilter((prev) => ({ ...prev, level: level }));
    params.set('level', level.toString());
    replace(`${pathName}?${params.toString()}`);
  };

  const onFilterApply = () => {
    filter.faculty_id && params.set('faculty', filter.faculty_id);
    filter.major_id && params.set('major', filter.major_id);
    filter.semester && params.set('semester', filter.semester.toString());
    filter.credit && params.set('credit', filter.credit.toString());
    filter.level && params.set('level', filter.level.toString());
    replace(`${pathName}?${params.toString()}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="p-5 flex flex-col gap-3 ">
        <div className="border-b border-gray-200 pb-5">
          <p className="text-sm font-medium mb-3">Fakultas</p>
          <section className="flex flex-wrap gap-2">
            {isLoading ? (
              <Skeleton height={22} width={180} className="!rounded-xl" />
            ) : (
              data?.data?.faculties &&
              data?.data?.faculties.map((item) => (
                <Button
                  key={item.id}
                  type="button"
                  className={`flex px-2 py-3 gap-2 text-sm items-center leading-none rounded-md ${
                    filter.faculty_id === item.id
                      ? getFacultyBackgroundColor(item.name)
                      : 'border border-gray-500 text-gray-500 hover:bg-gray-200'
                  }`}
                  onClick={() => onFilterChange('faculty_id', item.id)}
                >
                  {item.name}
                </Button>
              ))
            )}
          </section>
        </div>

        <div className="border-b border-gray-200 pb-5">
          <p className="text-sm font-medium mb-3">Program Studi</p>
          <section className="flex flex-wrap gap-2">
            {isLoading ? (
              <Skeleton height={22} width={180} className="!rounded-xl" />
            ) : (
              data?.data?.majors &&
              data?.data?.majors.map((item) => (
                <Button
                  key={item.id}
                  type="button"
                  className={`flex px-2 py-3 gap-2 text-sm items-center leading-none rounded-md ${
                    filter.major_id === item.id
                      ? getBackgroundColor(item.name)
                      : 'border border-gray-500 text-gray-500 hover:bg-gray-200'
                  }`}
                  onClick={() => onFilterChange('major_id', item.id)}
                >
                  {item.name}
                </Button>
              ))
            )}
          </section>
        </div>

        <div className="border-b border-gray-200 pb-5">
          <p className="text-sm font-medium mb-3">Semester</p>
          <section className="flex flex-wrap gap-2">
            {isLoading ? (
              <Skeleton height={22} width={180} className="!rounded-xl" />
            ) : (
              [...Array(8)].map((_, index) => (
                <Button
                  key={index + 1}
                  type="button"
                  className={`flex px-2 py-3 gap-2 text-sm items-center leading-none rounded-md ${
                    filter.semester === index + 1
                      ? getSemesterBackgroundColor(index + 1)
                      : 'border border-gray-500 text-gray-500 hover:bg-gray-200'
                  }`}
                  onClick={() => onFilterChange('semester', index + 1)}
                >
                  Semester {index + 1}
                </Button>
              ))
            )}
          </section>
        </div>

        <div className="border-b border-gray-200 pb-5">
          <p className="text-sm font-medium mb-3">SKS</p>
          <section className="flex flex-wrap gap-2">
            {isLoading ? (
              <Skeleton height={22} width={180} className="!rounded-xl" />
            ) : (
              [...Array(8)].map((_, index) => (
                <Button
                  key={index + 1}
                  type="button"
                  className={`flex px-2 py-3 gap-2 text-sm items-center leading-none rounded-md ${
                    filter.credit === index + 1
                      ? getCreditBackgroundColor(index + 1)
                      : 'border border-gray-500 text-gray-500 hover:bg-gray-200'
                  }`}
                  onClick={() => onFilterChange('credit', index + 1)}
                >
                  {index + 1} SKS
                </Button>
              ))
            )}
          </section>
        </div>

        <div className="border-b border-gray-200 pb-5">
          <p className="text-sm font-medium mb-3">Tingkatan</p>
          <section className="flex flex-wrap gap-2">
            {isLoading ? (
              <Skeleton height={22} width={180} className="!rounded-xl" />
            ) : (
              [...Array(5)].map((_, index) => (
                <Button
                  key={index + 1}
                  type="button"
                  className={`flex px-2 py-3 gap-2 text-sm items-center leading-none rounded-md ${
                    filter.level === index + 1
                      ? getLevelBackgroundColor(index + 1)
                      : 'border border-gray-500 text-gray-500 hover:bg-gray-200'
                  }`}
                  onClick={() => onFilterChange('level', index + 1)}
                >
                  Tingkatan {index + 1}
                </Button>
              ))
            )}
          </section>
        </div>

        <div className="flex justify-end">
          <Button
            type="button"
            className="w-full flex px-2 py-3 gap-2 items-center outline-none border border-gray-300 text-gray-500 rounded-md justify-center hover:bg-gray-200"
            onClick={onFilterClear}
          >
            Hapus
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Filter;

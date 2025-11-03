'use client';
import { ReusableTable } from '../../../components/reusable-table/reusable-table';
import FakeDummyData from './MOCK_DATA.json';
import Searchbar from '../../../components/searchbar/Searchbar';
import { BsPlus } from 'react-icons/bs';
import { useRouter, useSearchParams } from 'next/navigation';
import { BsPencilFill } from 'react-icons/bs';
import { UseMahasiswaRequest } from '../../../hooks/nilai-sertifikat/hooks';
import { DependencyList, useCallback, useEffect, useState } from 'react';
import Pagination from '../../../components/pagination/index';
export function useDebounce(
  effect: VoidFunction,
  dependencies: DependencyList,
  delay: number
): void {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const callback = useCallback(effect, dependencies);

  useEffect(() => {
    const timeout = setTimeout(callback, delay);
    return () => clearTimeout(timeout);
  }, [callback, delay]);
}
export const NilaiModule = () => {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;
  const searchQuery = searchParams.get('search') || '';

  const router = useRouter();
  const [option, setOption] = useState({
    page: page,
    search: '',
    limit: 10,
    sort_by: '',
  });
  const [deb, setDeb] = useState('');
  useEffect(() => {
    setOption(option);
  }, [option]);

  useDebounce(
    () => {
      setOption((prev) => ({ ...prev, search: deb, page: 1 }));
      router.replace(`/nilai?page=${option.page}&search=${deb}`);
    },
    [deb],
    1000
  );
  const { data: Mahasiswa } = UseMahasiswaRequest(
    page,
    searchQuery,
    option.limit
  );
  const handlePageChange = async (page: number) => {
    setOption((prev) => ({ ...prev, page: page }));
    router.push(`/nilai?page=${page}`);
  };
  console.log(Mahasiswa?.data);
  const columns = [
    {
      header: 'No',
      className:
        'w-[20px]  text-[12px] text-neutral-500 font-semibold h-10 border-b-2 rounded-t-sm',
    },
    {
      header: 'Nama Mahasiswa',
      className:
        'text-center text-neutral-500 border-b-2 text-[12px] font-semibold',
      sort_by: 'nik',
    },
    {
      header: 'Nilai Per Matakuliah',
      sort_by: 'name',
      className: 'border-b-2 text-neutral-500 text-[12px] font-semibold',
    },
    {
      header: 'Program Studi',
      sort_by: 'created_at',
      className: 'border-b-2 text-neutral-500 text-[12px] font-semibold',
    },
    {
      header: 'IP Semester',
      className: 'border-b-2 text-neutral-500 text-[12px] font-semibold',
    },
  ];
  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <div className="text-md font-semibold text-dark">Nilai Mahasiswa</div>
        </div>
        <div className="w-full bg-white p-2">
          <ReusableTable
            classBody="w-full"
            classHead="bg-[#fff] border-b border-solid"
            columns={columns}
            className="rounded-md border-5 w-full"
          >
            {Mahasiswa?.data &&
              Mahasiswa?.data?.map((data: any, index: number) => {
                const rowNumber = index + 1 + (page - 1) * option.limit;
                return (
                  <tr key={index} className="border-b">
                    <td className="text-center">
                      <div className="flex text-neutral-500 justify-center text-[12px] font-semibold items-center py-1">
                        {rowNumber}
                      </div>
                    </td>
                    <td>
                      <div className="flex text-neutral-500 justify-center text-[12px] font-semibold items-center py-1">
                        {data?.full_name}
                      </div>
                    </td>
                    <td>
                      <div className="flex text-primary-500 justify-center text-[12px] font-semibold items-center py-1">
                        <a
                          href={`/nilai/detail-nilai/${data.full_name}/${data.id}`}
                        >
                          Lihat Nilai
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="flex text-neutral-500 justify-center text-[12px] font-semibold items-center py-1">
                        {/* {formatTime(data.created_at).formatedDate} */}
                        {data?.major}
                      </div>
                    </td>
                    <td>
                      <div className="flex text-neutral-500 text-[12px] font-semibold justify-center items-center py-1">
                        {data?.gpas}
                      </div>
                    </td>
                  </tr>
                );
              })}
          </ReusableTable>
        </div>
        <Pagination
          onPageChange={handlePageChange}
          totalPages={Mahasiswa?.meta?.max_page || 1}
          currentPage={Mahasiswa?.meta?.current_page || 1}
        />
      </div>
    </>
  );
};

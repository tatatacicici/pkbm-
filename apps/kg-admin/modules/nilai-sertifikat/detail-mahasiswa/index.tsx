'use client';
import { DependencyList, useCallback, useEffect, useState } from 'react';
import { ReusableTable } from '../../../components/reusable-table/reusable-table';
import FakeDummyData from './Anjay.json';
import Searchbar from '../../../components/searchbar/Searchbar';
import Pagination from '../../../components/pagination/index';
import { BsPlus } from 'react-icons/bs';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { BsPencilFill } from 'react-icons/bs';
import { BreadCrumb } from '@kampus-gratis/components/atoms';
import { UseMatakuliahRequest } from '../../../hooks/nilai-sertifikat/hooks';

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
export const DetailMahasiswaModule = () => {
  const { nameMhs, idMhs } = useParams();
  const Name = (nameMhs as string).replace(/[/%20]/g, ' ');
  const searchParams = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;
  const searchQuery = searchParams.get('search') || '';
  const router = useRouter();
  const [option, setOption] = useState({
    page: 1,
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
      router.replace(
        `/nilai/detail-nilai/${nameMhs}/${idMhs}?page=1&search=${deb}`
      );
    },
    [deb],
    1000
  );
  const { data: Matakuliah } = UseMatakuliahRequest(
    page,
    searchQuery,
    option.limit,
    idMhs as string
  );

  const handlePageChange = async (page: number) => {
    setOption((prev) => ({ ...prev, page: page }));
    router.push(`/nilai/detail-nilai/${nameMhs}/${idMhs}?page=${page}`);
  };
  const items = [
    {
      name: 'Nilai',
      link: '/nilai',
    },
    {
      name: Name,
      link: `/nilai/detail-nilai/${nameMhs}/${idMhs}`,
    },
  ];
  const columns = [
    {
      header: 'No',
      className:
        'w-[20px]  text-[12px] text-neutral-500 font-semibold h-10 border-b-2 rounded-t-sm',
    },
    {
      header: 'Mata Kuliah',
      className:
        'text-center text-neutral-500 border-b-2 text-[12px] font-semibold',
      sort_by: 'nik',
    },
    {
      header: 'Nilai',
      sort_by: 'name',
      className: 'border-b-2 text-neutral-500 text-[12px] font-semibold',
    },
    {
      header: 'IP Semester',
      className: 'border-b-2 text-neutral-500 text-[12px] font-semibold',
    },
    {
      header: 'Keterangan',
      className:
        'border-b-2 text-neutral-500 text-[12px] font-semibold rounded-t-sm',
    },
  ];
  return (
    <>
      <div className="flex flex-col gap-5 h-full">
        <div className="flex justify-between items-center">
          <BreadCrumb style={{ paddingLeft: 0 }} items={items} />
        </div>
        <div className="w-full bg-white p-2">
          <ReusableTable
            classBody="w-full"
            classHead="bg-[#fff] border-b border-solid"
            columns={columns}
            className="rounded-md border-5 w-full"
          >
            {Matakuliah?.data?.subjects &&
              Matakuliah?.data?.subjects?.map((data: any, index: number) => {
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
                        {data.name}
                      </div>
                    </td>
                    <td>
                      <div className="flex text-primary-500 justify-center text-[12px] font-semibold items-center py-1">
                        <a
                          href={`/nilai/detail-nilai/${nameMhs}/${idMhs}/${data.name}/${data.id}`}
                        >
                          Lihat Nilai
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="flex text-neutral-500 justify-center text-[12px] font-semibold items-center py-1">
                        {data.score_gpa}
                      </div>
                    </td>
                    <td>
                      <div className="flex text-neutral-500 text-[12px] font-semibold justify-center items-center py-1">
                        {data.status}
                      </div>
                    </td>
                  </tr>
                );
              })}
          </ReusableTable>
        </div>
        <Pagination
          onPageChange={handlePageChange}
          totalPages={Matakuliah?.meta?.max_page || 1}
          currentPage={Matakuliah?.meta?.current_page || 1}
        />
      </div>
    </>
  );
};

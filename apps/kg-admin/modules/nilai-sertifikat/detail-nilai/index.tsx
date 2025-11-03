import React from 'react';
import { DependencyList, useCallback, useEffect, useState } from 'react';
import { ReusableTable } from '../../../components/reusable-table/reusable-table';
import FakeDummyData from './Anjay.json';
import Pagination from '../../../components/pagination/index';
import Searchbar from '../../../components/searchbar/Searchbar';
import { BreadCrumb } from '@kampus-gratis/components/atoms';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { UseScoresRequest } from '../../../hooks/nilai-sertifikat/hooks';
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
export const DetailNilaiModule = () => {
  const { nameMhs, idMhs, nameMatkul, idMatkul } = useParams();
  const Name: string = (nameMhs as string).replace(/[/%20]/g, ' ');
  const NameMataKuliah: string = (nameMatkul as string).replace(/[/%20]/g, ' ');
  const searchParams = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;
  const searchQuery = searchParams.get('search') || '';
  const router = useRouter();
  const [option, setOption] = useState({
    page: 1,
    limit: 10,
  });

  const [deb, setDeb] = useState('');
  useEffect(() => {
    setOption(option);
  }, [option]);

  useDebounce(
    () => {
      setOption((prev) => ({ ...prev, search: deb, page: 1 }));
      router.replace(
        `/nilai/detail-nilai/${nameMhs}/${idMhs}/${nameMatkul}/${idMatkul}?page=1&search=${deb}`
      );
    },
    [deb],
    1000
  );
  const { data: Score } = UseScoresRequest(
    page,
    option.limit,
    idMhs as string,
    idMatkul as string
  );

  const array = Score?.data?.sessions;
  const TotalArray: number | undefined = array?.length;
  console.log(TotalArray);
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
    {
      name: NameMataKuliah,
      link: `/nilai/detail-nilai/${nameMhs}/${idMhs}/${nameMatkul}/${idMatkul}`,
    },
  ];
  const columns = [
    {
      header: 'No',
      className:
        'w-[20px]  text-[12px] text-neutral-500 font-semibold h-10 border-b-2 rounded-t-sm',
    },
    {
      header: 'Pertemuan',
      className:
        'text-center text-neutral-500 border-b-2 text-[12px] font-semibold',
      sort_by: 'nik',
    },
    {
      header: 'Nilai Penugasan',
      sort_by: 'name',
      className: 'border-b-2 text-neutral-500 text-[12px] font-semibold',
    },
    {
      header: 'Nilai Quiz',
      sort_by: 'created_at',
      className: 'border-b-2 text-neutral-500 text-[12px] font-semibold',
    },
    {
      header: 'Nilai Modul',
      className: 'border-b-2 text-neutral-500 text-[12px] font-semibold',
    },
    {
      header: 'Nilai Pertemuan',
      className:
        'border-b-2 text-neutral-500 text-[12px] font-semibold rounded-t-sm',
    },
  ];
  let totalAssignmentScore = 0.0;
  let totalQuizScore = 0.0;
  let totalModuleScore = 0.0;
  let totalAllScore = 0.0;
  let totalAverageScore = 0.0;
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
            {Score?.data?.sessions &&
              Score?.data.sessions?.map((data: any, index: any) => {
                const assignmentScore = data.assignment_score;
                const quizScore = data.quiz_score;
                const moduleScore = data.module_score;
                const averageScore = data.average_score;
                // Check for NaN or non-numeric values
                if (
                  !isNaN(assignmentScore) &&
                  !isNaN(quizScore) &&
                  !isNaN(moduleScore) &&
                  !isNaN(averageScore)
                ) {
                  // Calculate total scores for assignments, quizzes, and modules
                  totalAssignmentScore += +assignmentScore;
                  totalQuizScore += +quizScore;
                  totalAverageScore += +averageScore;
                  totalModuleScore += +moduleScore;
                  totalAllScore =
                    totalAssignmentScore +
                    totalAverageScore +
                    totalModuleScore +
                    totalQuizScore;
                  const gatau = (totalAllScore / 4).toFixed(2);
                  console.log(gatau);
                }
                return (
                  <tr key={index} className="border-b">
                    <td className="text-center">
                      <div className="flex text-neutral-500 justify-center text-[12px] font-semibold items-center py-1">
                        {index + 1}
                      </div>
                    </td>
                    <td>
                      <div className="flex text-neutral-500 justify-center text-[12px] font-semibold items-center py-1">
                        Pertemuan {data.session_no}
                      </div>
                    </td>
                    <td>
                      <div className="flex text-neutral-500 text-[12px] font-semibold justify-center items-center py-1">
                        {data.assignment_score}
                      </div>
                    </td>
                    <td>
                      <div className="flex text-neutral-500 justify-center text-[12px] font-semibold items-center py-1">
                        {/* {formatTime(data.created_at).formatedDate} */}
                        {data.quiz_score}
                      </div>
                    </td>
                    <td>
                      <div className="flex text-neutral-500 text-[12px] font-semibold justify-center items-center py-1">
                        {data.module_score}
                      </div>
                    </td>
                    <td>
                      <div className="flex text-neutral-500 text-[12px] font-semibold justify-center items-center py-1">
                        {data.average_score}
                      </div>
                    </td>
                  </tr>
                );
              })}
            <tr>
              <td>
                <div className="flex text-neutral-500 text-[12px] font-semibold justify-center items-center py-1"></div>
              </td>
              <td>
                <div className="flex text-neutral-500 text-[12px] font-semibold justify-center items-center py-1">
                  Nilai Akhir
                </div>
              </td>
              <td>
                <div className="flex text-neutral-500 text-[12px] font-semibold justify-center items-center py-1">
                  -
                </div>
              </td>
              <td>
                <div className="flex text-neutral-500 text-[12px] font-semibold justify-center items-center py-1">
                  -
                </div>
              </td>
              <td>
                <div className="flex text-neutral-500 text-[12px] font-semibold justify-center items-center py-1">
                  -
                </div>
              </td>
              <td>
                <div className="flex text-neutral-500 text-[12px] font-semibold justify-center items-center py-1">
                  {TotalArray !== undefined
                    ? (totalAverageScore / TotalArray).toFixed(2)
                    : 'N/A'}
                </div>
              </td>
            </tr>
          </ReusableTable>
        </div>
        <Pagination
          onPageChange={handlePageChange}
          totalPages={Score?.meta?.max_page || 1}
          currentPage={Score?.meta?.current_page || 1}
        />
      </div>
    </>
  );
};

'use client';
import Pagination from '../../../components/pagination';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  DependencyList,
  Fragment,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsCheckCircleFill, BsFillXCircleFill } from 'react-icons/bs';
import { BiChevronDown } from 'react-icons/bi';
import Breadcrumb from '../../../components/breadcrumb/Breadcrumb';
import { ReusableTable } from '../../../components/reusable-table/reusable-table';
import { Menu, Transition } from '@headlessui/react';
import { LoadingSpinner } from '@kampus-gratis/components/atoms';
import { ModalAcc } from './modalAcc';
import { ModalPenolakan } from './modalPenolakan';
import { useGetConversionRequest } from '../../../hooks/pengajuan/konversi/hooks';
import {
  TConversionDataItem,
  TSubject,
} from '../../../types/pengajuan/konversi/types';
import { ModalDetailKonversi } from './modalDetail';
import { modalAccOpen, modalDetailOpen, modalRejectOpen } from './store';
import { useRecoilState } from 'recoil';

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

export const PengajuanKonversiModule = () => {
  const PengajuanKonversiBreadCrumb = [
    {
      name: 'Pengajuan',
      link: '/pengajuan',
    },
    { name: 'Pengajuan Konversi', link: '/pengajuan/konversi' },
  ];
  const router = useRouter();
  const [selecteSubjectId, setSelectedSubjectId] = useState<string>('');
  const [selectedStudentId, setSelectedStudentId] = useState<string>('');
  const searchParams = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;
  const searchQuery = searchParams.get('search') || '';
  const [sortBy, setSortBy] = useState<string>('');

  const [option, setOption] = useState({
    page: 1,
    search: '',
    limit: 10,
    sort_by: '',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isReject, setIsReject] = useState(false);
  const [isAccept, setIsAccept] = useState(false);
  const [subjectData, setSubjectData] = useState<TSubject[]>([]);
  const [studentName, setStudentName] = useState('');
  const [studentMajor, setStudentMajor] = useState('');
  const [request_id, setRequest_id] = useState('');

  const [getModalDetailOpen, setModalDetailOpen] =
    useRecoilState(modalDetailOpen);
  const [getModalAccOpen, setModalAccOpen] = useRecoilState(modalAccOpen);
  const [getModalRejectOpen, setModalRejectOpen] =
    useRecoilState(modalRejectOpen);

  const [deb, setDeb] = useState('');
  useEffect(() => {
    setOption(option);
  }, [option]);

  useDebounce(
    () => {
      setOption((prev) => ({ ...prev, search: deb, page: 1 }));
      router.replace(`/pengajuan/konversi?page=1&search=${deb}`);
    },
    [deb],
    1000
  );

  const { data, isLoading } = useGetConversionRequest(
    page,
    searchQuery,
    option.limit
  );

  console.log(data?.data.length);
  const columns = [
    { header: 'No', className: 'w-[20px] h-10 border-b rounded-s-md' },
    {
      header: 'Nama Mahasiswa',
      className: 'text-center border-b',
    },
    {
      header: 'Program Studi',
      className: 'border-b',
    },
    { header: 'Status KRS', className: 'border-b' },
    { header: 'Konversi', className: 'border-b' },
    { header: 'Action', className: 'border-b rounded-r-md min-w-[100px]' },
  ];

  const handlePageChange = async (page: number) => {
    setOption((prev) => ({ ...prev, page }));
    router.push(`/pengajuan/konversi?page=${page}&search=${searchQuery}`);
  };

  const handleAccept = (request_id: string) => {
    setModalAccOpen(true);
    setRequest_id(request_id);
  };

  const handleReject = (request_id: string) => {
    setModalRejectOpen(true);
    setRequest_id(request_id);
  };

  const handleOpenDetail = (
    subjectData: TSubject[],
    student_major: string,
    student_name: string,
    request_id: string
  ) => {
    setModalDetailOpen(true);
    setSubjectData(subjectData);
    setStudentMajor(student_major);
    setStudentName(student_name);
    setRequest_id(request_id);
  };

  return (
    <div>
      <div className="flex justify-between items-center w-full bg-neutral-100 mb-5">
        <Breadcrumb
          items={PengajuanKonversiBreadCrumb}
          bgColor="bg-neutral-100"
        />

        <label
          htmlFor="searchBar"
          className="flex  px-3 w-[80%] gap-4 items-center rounded-md shadow-[0_5px_50px_-5px_rgba(0,0,0,0.1)] bg-neutral-100  text-neutral-500 h-[42px] lg:h-[50px]"
        >
          <AiOutlineSearch className="text-xl md:text-2xl text-neutral-500 " />
          <input
            type="text"
            className="w-full px-2 text-xs outline-none bg-neutral-100 text-neutral-700 md:text-sm"
            id="searchBar"
            placeholder="Cari Pengajuan"
            value={deb}
            onChange={(e) => setDeb(e.target.value)}
          />
        </label>
      </div>
      <div className="bg-white p-5 shadow-lg rounded-lg ">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <ReusableTable
            classBody=""
            classHead="bg-[#fff] border-b border-solid"
            columns={columns}
            className="rounded-md"
          >
            {data?.data &&
              data?.data?.map((data: TConversionDataItem, index: number) => {
                return (
                  <tr key={index} className="border-b">
                    <td className="text-center">
                      <div className="flex justify-center items-center py-2">
                        {index + 1}
                      </div>
                    </td>
                    <td>
                      <div className="flex justify-center items-center py-2">
                        {data.student_name}
                      </div>
                    </td>
                    <td>
                      <div className="flex justify-center items-center py-2">
                        {data.student_major}
                      </div>
                    </td>

                    <td>
                      <div className="flex justify-center items-center py-2">
                        <div
                          className={`rounded-lg p-1 text-center w-full ${
                            data.status === 'APPROVED'
                              ? 'bg-green-100 text-green-600'
                              : data.status === 'REJECTED'
                              ? 'bg-red-100 text-red-600'
                              : 'bg-yellow-100 text-yellow-600'
                          }`}
                        >
                          {data.status}
                        </div>
                      </div>
                    </td>
                    <td>
                      <div
                        className="flex justify-center items-center py-2 underline cursor-pointer"
                        onClick={() =>
                          handleOpenDetail(
                            data.subjects,
                            data.student_major,
                            data.student_name,
                            data.uuid
                          )
                        }
                      >
                        Lihat Konversi
                      </div>
                    </td>
                    <td>
                      <div className="flex justify-around items-center w-full py-2 ">
                        <div
                          className="relative group"
                          onClick={() => handleAccept(data.uuid)}
                        >
                          <BsCheckCircleFill
                            size={20}
                            color="#3EB449"
                            className="hover:fill-green-400 cursor-pointer"
                          />
                          <div className="opacity-0 group-hover:opacity-100 absolute top-6 left-1/2 transform -translate-x-1/2 bg-white  text-gray-600 border border-neutral-300 py-1 px-2 rounded-md text-xs transition-opacity duration-300">
                            Setujui
                          </div>
                        </div>
                        <div
                          className="relative group"
                          onClick={() => handleReject(data.uuid)}
                        >
                          <BsFillXCircleFill
                            size={20}
                            color="#EE2D24"
                            className="hover:fill-red-400 cursor-pointer"
                          />
                          <div className="opacity-0 group-hover:opacity-100 absolute top-6 left-1/2 transform -translate-x-1/2 bg-white text-gray-600 border border-neutral-300 py-1 px-2 rounded-md text-xs transition-opacity duration-300">
                            Tolak
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
          </ReusableTable>
        )}

        <Pagination
          onPageChange={handlePageChange}
          totalPages={data?.meta?.max_page || 1}
          currentPage={data?.meta?.current_page || 1}
        />
      </div>

      <ModalDetailKonversi
        isOpen={getModalDetailOpen}
        data={subjectData}
        student_major={studentMajor}
        student_name={studentName}
        request_id={request_id}
      />
      <ModalAcc isOpen={getModalAccOpen} request_id={request_id} />
      <ModalPenolakan isOpen={getModalRejectOpen} request_id={request_id} />
    </div>
  );
};

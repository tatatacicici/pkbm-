'use client';
import { TKRSRequest } from '../../../types/pengajuan/krs/types';
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
import { useGetStudyPlanRequest } from '../../../hooks/pengajuan/krs/hooks';
import { ModalAcc } from './modalAcc';
import { ModalPenolakan } from './modalPenolakan';
import { Menu, Transition } from '@headlessui/react';
import { LoadingSpinner } from '@kampus-gratis/components/atoms';

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

export const PengajuanKRSModule = () => {
  const PengajuanKRSBreadCrumb = [
    {
      name: 'Pengajuan',
      link: '/pengajuan',
    },
    { name: 'Pengajuan KRS', link: '/pengajuan/krs' },
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

  const [deb, setDeb] = useState('');
  useEffect(() => {
    setOption(option);
  }, [option]);

  useDebounce(
    () => {
      setOption((prev) => ({ ...prev, search: deb, page: 1 }));
      router.replace(`/pengajuan/krs?page=1&search=${deb}`);
    },
    [deb],
    1000
  );

  const { data, isLoading } = useGetStudyPlanRequest(
    page,
    searchQuery,
    option.limit,
    sortBy
  );

  const columns = [
    { header: 'No', className: 'w-[20px] h-10 border-b rounded-ss-md' },
    {
      header: 'Nama Mahasiswa',
      className: 'text-center border-b',
    },
    {
      header: 'Mata Kuliah',
      className: 'border-b',
    },
    {
      header: 'NIM',
      className: 'border-b',
    },
    { header: 'Status KRS', className: 'border-b' },
    { header: 'Action', className: 'border-b rounded-tr-md min-w-[100px]' },
  ];

  const handlePageChange = async (page: number) => {
    setOption((prev) => ({ ...prev, page }));
    router.push(
      `/pengajuan/krs?page=${page}&search=${searchQuery}&sort_by=${sortBy}`
    );
  };

  const handleReject = (student_id: string, subject_id: string) => {
    setIsModalOpen(true);
    setIsReject(true);
    setIsAccept(false);
    setSelectedStudentId(student_id);
    setSelectedSubjectId(subject_id);
  };

  const handleAccept = (student_id: string, subject_id: string) => {
    setIsModalOpen(true);
    setIsAccept(true);
    setIsReject(false);
    setSelectedStudentId(student_id);
    setSelectedSubjectId(subject_id);
  };

  const handleClosePopUpSubmit = () => {
    setIsModalOpen(false);
    setSelectedStudentId('');
    setSelectedSubjectId('');
  };

  return (
    <div>
      <div className="flex justify-between items-center w-full bg-neutral-100 mb-5">
        <Breadcrumb items={PengajuanKRSBreadCrumb} bgColor="bg-neutral-100" />
        <Menu as="div" className="relative inline-block text-left group mx-5">
          <Menu.Button className="inline-flex items-center w-full justify-center rounded-md text-center text-xs text-blue-base  group-hover:text-blue-600 border-2 border-blue-base relative px-3 py-2 min-w-[100px] ">
            Sort By
            <BiChevronDown
              className="ml-2 -mr-1 h-5 w-5 text-blue-base group-hover:text-blue-600"
              aria-hidden="true"
            />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-36 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
              <div className="px-1 py-1 ">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-blue-base text-white' : 'text-blue-base'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      onClick={() => {
                        setOption((prev) => ({
                          ...prev,
                          sort_by: 'STUDENT_NAME',
                        }));
                        setSortBy('STUDENT_NAME');
                      }}
                    >
                      Mahasiswa
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-blue-base text-white' : 'text-blue-base'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      onClick={() => {
                        setOption((prev) => ({
                          ...prev,
                          sort_by: 'SUBJECT_NAME',
                        }));
                        setSortBy('SUBJECT_NAME');
                      }}
                    >
                      Mata Kuliah
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
        <label
          htmlFor="searchBar"
          className="flex  px-3 w-[80%] gap-4 items-center rounded-md shadow-[0_5px_50px_-5px_rgba(0,0,0,0.1)] bg-neutral-100  text-neutral-500 h-[42px] lg:h-[50px]"
        >
          <AiOutlineSearch className="text-xl md:text-2xl text-neutral-500 " />
          <input
            type="text"
            className="w-full px-2 text-xs outline-none bg-neutral-100 text-neutral-700 md:text-sm"
            id="searchBar"
            placeholder="Cari"
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
            className=""
          >
            {data?.data &&
              data?.data?.map((data: TKRSRequest, index: number) => {
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
                        {data.subject_name}
                      </div>
                    </td>
                    <td>
                      <div className="flex justify-center items-center py-2 ">
                        {data.national_student_number}
                      </div>
                    </td>
                    <td>
                      <div className="flex justify-center items-center py-2">
                        <div
                          className={`rounded-lg p-1 text-center w-full ${
                            data.status === 'DISETUJUI'
                              ? 'bg-green-100 text-green-600'
                              : data.status === 'DITOLAK'
                              ? 'bg-red-100 text-red-600'
                              : 'bg-yellow-100 text-yellow-600'
                          }`}
                        >
                          {data.status}
                        </div>
                      </div>
                    </td>
                    <td>
                      {data.status === 'PENDING' ? (
                        <div className="flex justify-around items-center w-full py-2 ">
                          <div
                            className="relative group"
                            onClick={() =>
                              handleAccept(data.student_id, data.subject_id)
                            }
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
                            onClick={() =>
                              handleReject(data.student_id, data.subject_id)
                            }
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
                      ) : (
                        '-'
                      )}
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
      {isAccept ? (
        <ModalAcc
          isOpen={isModalOpen}
          closeModal={handleClosePopUpSubmit}
          student_id={selectedStudentId}
          subject_id={selecteSubjectId}
        />
      ) : (
        <ModalPenolakan
          isOpen={isModalOpen}
          closeModal={handleClosePopUpSubmit}
          student_id={selectedStudentId}
          subject_id={selecteSubjectId}
        />
      )}
    </div>
  );
};

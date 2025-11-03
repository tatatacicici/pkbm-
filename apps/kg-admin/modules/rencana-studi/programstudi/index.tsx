'use client';

import { ReusableTable } from '../../../components/reusable-table/reusable-table';
import Pagination from '../../../../kg/components/general/pagination';
import { DependencyList, use, useCallback, useEffect, useState } from 'react';
import { Button, LoadingSpinner } from '@kampus-gratis/components/atoms';
import { IconEdit } from '../../../components/icons/ic-edit';
import { IconDelete } from '../../../components/icons/ic-delete';
import { IconLock } from '../../../components/icons/ic-lock';
import { ModalTambahProdi } from './modalTambahProdi';
import {
  modalBerhasil,
  modalConfirmation,
  modalDelete,
  modalDeleteSuccess,
  modalEdit,
  modalEditSuccess,
  modalOpenState,
} from '../../../recoil/atoms/rencana-studi';
import { useRecoilState } from 'recoil';
import { Modal } from '../../../components/popup/modal';
import Searchbar from '../../../components/searchbar/Searchbar';
import Dropdown from '../../../components/dropdown/Dropdown';
import { IconArrowDown } from '../../../components/icons/ic-arrow-down';
import ButtonPlus from '../../../components/button-plus/ButtonPlus';
import { ModalPopUpBerhasil } from '../fakultas/popUp/popUpBerhasil';
import { ModalPopUpConfirmation } from './popUp/popUpConfirmation';
import { ModalPopUpDelete } from './popUp/popUpDelete';
import {
  useFacultyData,
  useGetAllMajorPagination,
  useGetFaculty,
  useGetMajor,
  useMajorData,
} from '../../../hooks/rencana-studi/hook';
import { useRouter, useSearchParams } from 'next/navigation';
import { ModalEditProdi } from './popUp/popUpEdit';
import { TMajorItem } from '../../../types/rencatastudi';
import { useQueryClient } from '@tanstack/react-query';
import { ModalEditSuccess } from './popUp/popUpEditSuccess';
import { ModalDeleteSuccess } from './popUp/popUpDeleteSuccess';

export function useDebounce(
  effect: VoidFunction,
  dependencies: DependencyList,
  delay: number
): void {
  const callback = useCallback(effect, dependencies);

  useEffect(() => {
    const timeout = setTimeout(callback, delay);
    return () => clearTimeout(timeout);
  }, [callback, delay]);
}

export const ProgramStudiSection = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useRecoilState(modalOpenState);
  const [isModalBerhasilOpen, setIsModalBerhasilOpen] =
    useRecoilState(modalBerhasil);
  const [isModalConfirmOpen, setIsModalConfirmOpen] =
    useRecoilState(modalConfirmation);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useRecoilState(modalDelete);
  const [isModalEditOpen, setIsModalEditOpen] = useRecoilState(modalEdit);
  const [isModalDeleteSuccessOpen, setIsModalDeleteSuccessOpen] =
    useRecoilState(modalDeleteSuccess);
  const [isModalEditSuccessOpen, setIsModalEditSuccessOpen] =
    useRecoilState(modalEditSuccess);
  const [majorId, setMajorId] = useState('');
  const [selectedFaculty, setSelectedFaculty] = useState('');
  const [countSubject, setCountSubject] = useState(0);
  const [majorDataState, setMajorDataState] = useState<TMajorItem>({
    id: '',
    faculty_id: '',
    name: '',
    degree: '',
    major_head_id: '',
    description: '',
    thumbnail: null,
    slug: '',
    subject_count: 0,
    total_credit: 0,
  });

  const params = useSearchParams();
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  const page = params.get('page') || 1;

  const [filterMajor, setFilterMajor] = useState({
    page: page,
    limit: 1,
    search: '',
  });

  const queryClient = useQueryClient();

  const defaultPlaceholder = 'Faculty Name';
  const defaultDataOptions = ['Faculty Name'];

  const { setFacultyData, getFacultyData } = useFacultyData();
  const {
    data: facultyData,
    refetch: refecthFaculty,
    isLoading: isLoadingFaculty,
  } = useGetFaculty();

  const firstFacultyId =
    facultyData?.data &&
    facultyData?.data.map((faculty) => faculty.id.toString())[0];
  const [facultyId, setFacultyId] = useState(''); // Atur nilai awal sebagai string kosong

  // useEffect(() => {
  //   if (firstFacultyId !== undefined) {
  //     setFacultyId(firstFacultyId);
  //   }
  // }, [firstFacultyId]);

  // console.log(facultyId);

  useEffect(() => {
    setFacultyData(facultyData as any);
  }, [facultyData, setFacultyData]);

  const firstFacultyName =
    facultyData?.data &&
    facultyData?.data.map((faculty) => faculty.name.toString())[0];

  const {
    data: majorData,
    refetch: refecthMajor,
    isLoading: isLoadingMajor,
  } = useGetAllMajorPagination(
    filterMajor.page as number,
    filterMajor.limit,
    filterMajor.search
  );

  const [deb, setDeb] = useState(searchQuery);

  const ListMajorData = majorData;

  useEffect(() => {
    setFilterMajor(filterMajor);
  }, [filterMajor]);

  useDebounce(
    () => {
      setFilterMajor((prev) => ({ ...prev, page: 1, search: deb }));
      router.push(`/rencana-studi/program-studi?page=1&search=${deb}`);
    },
    [deb],
    700
  );

  const { setMajorData, getMajorData } = useMajorData();

  useEffect(() => {
    setMajorData(majorData as any);
  }, [majorData, setMajorData]);

  const handlePageChange = async (page: number) => {
    setFilterMajor((prev) => ({ ...prev, page: page as any }));
    router.push(`/rencana-studi/program-studi?page=${page}&search=${deb}`);
  };

  const [option, setOption] = useState({
    limit: '5',
    order: 'LATEST',
    title: '',
    page: '1',
  });

  const columns = [
    { header: 'No', className: 'w-[20px] h-10 border-b rounded-s-md' },
    {
      header: 'ID Program Studi',
      hasSorting: true,
      className: 'text-center border-b',
      sort_by: 'nik',
    },
    {
      header: 'Nama Program Studi',
      hasSorting: true,
      sort_by: 'name',
      className: 'border-b',
    },
    {
      header: 'Fakultas',
      hasSorting: true,
      sort_by: 'created_at',
      className: 'border-b',
    },
    {
      header: 'Jumlah SKS',
      hasSorting: true,
      sort_by: 'created_at',
      className: 'border-b',
    },
    { header: 'Action', className: 'border-b rounded-r-md min-w-[100px]' },
  ];

  // const handleFacultyFilter = async (selectedFacultyName: string) => {
  //   const selectedFaculty = facultyData?.data.find(
  //     (faculty) => faculty.name === selectedFacultyName
  //   );
  //   if (selectedFaculty) {
  //     setFacultyId(selectedFaculty.id);
  //     setSelectedFaculty(selectedFacultyName);
  //     // queryClient.invalidateQueries(['get-major']);
  //     // handleFacultyFilter(selectedFaculty.id);
  //     // router.push(`/rencana-studi/major/${selectedFaculty.id}`);
  //     // refetchMajor();
  //   }
  // };

  // const handlePageChange = async (page: number) => {
  //   setOption((prev) => ({ ...prev, page: page.toString() }));
  //   router.push(`/ruang-diskusi?page=${page}`);
  // };

  const handleFacultyFilter = async (selectedFacultyName: string) => {
    const selectedFaculty = facultyData?.data.find(
      (faculty) => faculty.name === selectedFacultyName
    );
    if (selectedFaculty) {
      setFacultyId(selectedFaculty.id);
      setDeb(selectedFacultyName);
      setSelectedFaculty(selectedFacultyName);
      // queryClient.invalidateQueries(['get-major']);
      // handleFacultyFilter(selectedFaculty.id);
      // router.push(`/rencana-studi/major/${selectedFaculty.id}`);
      // refetchMajor();
    }
  };

  // const handlePageChange = async (page: number) => {
  //   setOption((prev) => ({ ...prev, page: page.toString() }));
  //   router.push(`/ruang-diskusi?page=${page}`);
  // };

  // if (isLoadingFaculty || isLoadingMajor) {
  //   return (
  //     <LoadingSpinner/>
  //   )
  // }

  return (
    <div>
      <div className="flex justify-between w-full bg-neutral-100 mb-5 mt-4">
        <Dropdown
          placeholder={selectedFaculty || 'Pilih Fakultas'}
          dataOptions={facultyData?.data.map((faculty) => faculty.name)}
          reverse={false}
          textCentre={true}
          icons={<IconArrowDown />}
          shadow={false}
          bold={false}
          onChange={handleFacultyFilter}
        />
        <div className="flex gap-x-2 justify-end">
          <ButtonPlus
            plus={true}
            title="Prodi"
            buttonStyle="px-6 bg-blue-base text-white rounded-md"
            onClick={() => setIsModalOpen(true)}
          />
          <Searchbar
            placeholder="search"
            onChange={(e) => setDeb(e.target.value)}
            value={deb}
          />
        </div>
      </div>
      <div className="bg-white p-5 shadow-lg rounded-lg ">
        {isLoadingMajor ? (
          <LoadingSpinner />
        ) : (
          <ReusableTable
            classBody=""
            classHead="bg-[#fff] border-b border-solid"
            columns={columns}
            className="rounded-md"
            //   MainTableSort={handleSort}
          >
            {ListMajorData?.data &&
              ListMajorData?.data?.map((data, index) => {
                const matchingFaculty = facultyData?.data.find(
                  (faculty) => faculty.id === data.faculty_id
                );
                return (
                  <tr key={index} className="border-b">
                    <td className="text-center">
                      <div className="flex justify-center items-center py-2">
                        {index + 1}
                      </div>
                    </td>
                    <td>
                      <div className="flex justify-center items-center py-2">
                        {data?.id}
                      </div>
                    </td>
                    <td>
                      <div className="flex justify-center items-center py-2">
                        {data.name}
                      </div>
                    </td>
                    <td>
                      <div className="flex justify-center items-center py-2 ">
                        {/* {formatTime(data.created_at).formatedDate} */}
                        {matchingFaculty?.name}
                      </div>
                    </td>
                    <td>
                      <div className="flex justify-center items-center py-2 ">
                        {/* {formatTime(data.created_at).formatedDate} */}
                        {data.subject_count} SKS
                      </div>
                    </td>
                    <td>
                      <div className="flex justify-center gap-3 mx-6">
                        <Button
                          type="button"
                          onClick={() => {
                            setIsModalEditOpen(true);
                            setMajorDataState(data);
                          }}
                        >
                          <IconEdit />
                        </Button>
                        <Button
                          type="button"
                          onClick={() => {
                            setIsModalDeleteOpen(true);
                            setMajorId(data.id);
                            setCountSubject(data?.subject_count);
                          }}
                        >
                          <IconDelete />
                        </Button>
                        <Button
                          type="button"
                          onClick={() => setIsModalConfirmOpen(true)}
                        >
                          <IconLock />
                        </Button>
                      </div>
                    </td>
                  </tr>
                );
              })}
          </ReusableTable>
        )}

        {/* <Pagination
          onPageChange={handlePageChange}
          totalPages={Number(data?.meta?.page_size) || 1}
          currentPage={Number(data?.meta?.page) || 1}
          totalPages={Number(2)}
          currentPage={Number(1)}
        /> */}
      </div>
      <Modal
        lookup={isModalOpen}
        withClose={true}
        onClose={() => setIsModalOpen(false)}
      >
        <ModalTambahProdi facultyId={facultyId} />
      </Modal>
      <Modal
        lookup={isModalBerhasilOpen}
        withClose={true}
        onClose={() => setIsModalBerhasilOpen(false)}
      >
        <ModalPopUpBerhasil title="Berhasil Menambahkan Program Studi" />
      </Modal>
      <Modal
        lookup={isModalEditSuccessOpen}
        withClose={true}
        onClose={() => setIsModalEditSuccessOpen(false)}
      >
        <ModalEditSuccess title="Berhasil Mengubah Program Studi" />
      </Modal>
      <Modal
        lookup={isModalDeleteSuccessOpen}
        withClose={true}
        onClose={() => setIsModalDeleteSuccessOpen(false)}
      >
        <ModalDeleteSuccess title="Berhasil Menghapus Program Studi" />
      </Modal>
      <Modal
        lookup={isModalEditOpen}
        withClose={true}
        onClose={() => setIsModalEditOpen(false)}
      >
        <ModalEditProdi majorData={majorDataState} />
      </Modal>
      <Modal
        lookup={isModalConfirmOpen}
        withClose={true}
        onClose={() => setIsModalConfirmOpen(false)}
      >
        <ModalPopUpConfirmation />
      </Modal>
      <Modal
        lookup={isModalDeleteOpen}
        withClose={true}
        onClose={() => setIsModalDeleteOpen(false)}
      >
        <ModalPopUpDelete
          jumlahProdi={3}
          jumlahMatkul={countSubject}
          major_id={majorId}
        />
      </Modal>
      <Pagination
        currentPage={Number(getMajorData?.meta?.current_page) || 1}
        totalPages={getMajorData?.meta?.max_page || 1}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

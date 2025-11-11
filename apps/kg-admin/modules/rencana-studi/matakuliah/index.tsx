'use client';
import Searchbar from '../../../components/searchbar/Searchbar';
import { ReusableTable } from '../../../components/reusable-table/reusable-table';

import { DependencyList, useCallback, useEffect, useState } from 'react';
import { Button, LoadingSpinner } from '@kampus-gratis/components/atoms';
import { IconEdit } from '../../../components/icons/ic-edit';
import { IconDelete } from '../../../components/icons/ic-delete';
import { IconLock } from '../../../components/icons/ic-lock';
import Dropdown from '../../../components/dropdown/Dropdown';
import { IconArrowDown } from '../../../components/icons/ic-arrow-down';
import ButtonPlus from '../../../components/button-plus/ButtonPlus';
import { useRecoilState } from 'recoil';
import {
  modalBerhasil,
  modalConfirmation,
  modalDelete,
  modalDeleteSuccess,
  modalEdit,
  modalEditSuccess,
  modalOpenState,
} from '../../../recoil/atoms/rencana-studi';
import { Modal } from '../../../components/popup/modal';
import { ModalTambahMatkul } from './modalTambahMatkul';
import { ModalPopUpBerhasil } from '../fakultas/popUp/popUpBerhasil';
import { ModalPopUpConfirmation } from './popUp/popUpConfirmation';
import { ModalPopUpDelete } from './popUp/popUpDelete';
import {
  useGetAllMajor,
  useGetAllMajorPagination,
  useGetMajor,
  useGetSubject,
  useGetSubjectWithPagination,
  useMajorData,
  useSubjectData,
} from '../../../hooks/rencana-studi/hook';
import { useRouter, useSearchParams } from 'next/navigation';
import { TMajorResponse, TSubjectItem } from '../../../types/rencatastudi';
import { ModalEditMatkul } from './popUp/popUpEdit';
import { ModalEditSuccess } from './popUp/popUpEditSuccess';
import { ModalDeleteSuccess } from './popUp/popUpDeleteSuccess';
import Pagination from '../../../../kg/components/general/pagination';

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

export const MataKuliahSection = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useRecoilState(modalOpenState);
  const [isModalBerhasilOpen, setIsModalBerhasilOpen] =
    useRecoilState(modalBerhasil);
  const [isModalConfirmOpen, setIsModalConfirmOpen] =
    useRecoilState(modalConfirmation);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useRecoilState(modalDelete);

  const [filterData, setFilterData] = useState<TSubjectItem[]>([]);
  const [subjectId, setSubjectId] = useState('');
  const [isModalEditOpen, setIsModalEditOpen] = useRecoilState(modalEdit);
  const [isModalEditSuccessOpen, setIsModalEditSuccessOpen] =
    useRecoilState(modalEditSuccess);
  const [isModalDeleteSuccessOpen, setIsModalDeleteSuccessOpen] =
    useRecoilState(modalDeleteSuccess);
  const [selectedMajor, setSelectedMajor] = useState('');
  const [subjectDataState, setSubjectDataState] = useState<TSubjectItem>({
    id: '',
    major_name: '',
    major_id: '',
    name: '',
    subject_code: '',
    duration_hours: 0,
    level: 0,
    teacher_id: '',
    indicator: '',
    study_experience: '',
    teaching_materials: '',
    basic_competencies: '',
    tools_needed: '',
    scoring: '',
    description: '',
    thumbnail: null,
    credit: 0,
    slug: '',
  });

  const params = useSearchParams();
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  const page = params.get('page') || 1;

  const [filterSubject, setFilterSubject] = useState({
    page: page,
    limit: 10,
    search: '',
  });

  // console.log(majorId);

  // console.log(majorId);

  const defaultPlaceholder = 'Major Name';
  const defaultDataOptions = ['Major Name'];

  const { setMajorData, getMajorData } = useMajorData();
  const {
    data: majorData,
    refetch: refecthMajor,
    isLoading: isLoadingMajor,
  } = useGetAllMajor();
  const defaultId = majorData?.data[0].id;
  const [majorId, setMajorId] = useState<any>(defaultId);

  // console.log(defaultId)
  useEffect(() => {
    setMajorData(majorData as any);
  }, [majorData, setMajorData]);

  const {
    data: subjectData,
    refetch: refecthSubject,
    isLoading: isLoadingSubject,
  } = useGetSubjectWithPagination(
    filterSubject.page as number,
    filterSubject.limit,
    filterSubject.search
  );

  const [deb, setDeb] = useState(searchQuery);

  const ListSubjectData = subjectData;

  useEffect(() => {
    setFilterSubject(filterSubject);
  }, [filterSubject]);

  useDebounce(
    () => {
      setFilterSubject((prev) => ({ ...prev, page: 1, search: deb }));
      router.push(`/rencana-studi/matakuliah?page=1&search=${deb}`);
    },
    [deb],
    700
  );

  const { setSubjectData, getSubjectData } = useSubjectData();

  useEffect(() => {
    setSubjectData(subjectData as any);
  }, [subjectData, setSubjectData]);

  const handlePageChange = async (page: number) => {
    setFilterSubject((prev) => ({ ...prev, page: page as any }));
    router.push(`/rencana-studi/matakuliah?page=${page}&search=${deb}`);
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
      header: 'Kode Mata Kuliah',
      hasSorting: true,
      className: 'text-center border-b',
      sort_by: 'nik',
    },
    {
      header: 'Nama Mata Kuliah',
      hasSorting: true,
      sort_by: 'name',
      className: 'border-b',
    },
    {
      header: 'Prodi',
      hasSorting: true,
      sort_by: 'created_at',
      className: 'border-b',
    },
    { header: 'Action', className: 'border-b rounded-r-md min-w-[100px]' },
  ];

  // const handlePageChange = async (page: number) => {
  //   setOption((prev) => ({ ...prev, page: page.toString() }));
  //   // router.push(`/ruang-diskusi?page=${page}`);
  // };

  // const handleMajorFilter = async (majorName: string) => {
  //   const selectedMajor = majorData?.data.find(
  //     (major) => major.name === majorName
  //   );
  //   if (selectedMajor) {
  //     setMajorId(selectedMajor.id);
  //     // handleFacultyFilter(selectedFaculty.id);
  //     router.push(`?major_id=${selectedMajor.id}`);
  //     refecthMajor();
  //   }
  // };

  const handleMajorFilter = async (majorName: string) => {
    const selectedMajor = majorData?.data.find(
      (major) => major.name === majorName
    );
    if (selectedMajor) {
      setMajorId(selectedMajor.id);
      // setSelectedMajor(majorName);
      setDeb(majorName);
      const filteredSubjects = getSubjectData?.data.filter((subject) => {
        return subject.major_id === selectedMajor.id;
      });
      setFilterData(filteredSubjects);
      // router.push(`?major_id=${selectedMajor.id}`);
    }
  };

  // console.log(getSubjectData)
  // if (isLoadingMajor) {
  //   return (
  //     <LoadingSpinner/>
  //   )
  // }

  return (
    <div>
      <div className="flex justify-between w-full bg-neutral-100 mb-5 mt-4">
        <Dropdown
          placeholder={selectedMajor || 'Pilih Mata Kuliah'}
          dataOptions={
            majorData?.data && majorData?.data.map((major) => major.name)
          }
          reverse={false}
          textCentre={true}
          icons={<IconArrowDown />}
          shadow={false}
          bold={false}
          onChange={handleMajorFilter}
        />
        <div className="flex gap-x-2 justify-end">
          <ButtonPlus
            plus={true}
            title="Mata Kuliah"
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
        {isLoadingSubject ? (
          <LoadingSpinner />
        ) : (
          <ReusableTable
            classBody=""
            classHead="bg-[#fff] border-b border-solid"
            columns={columns}
            className="rounded-md"
            //   MainTableSort={handleSort}
          >
            {ListSubjectData?.data &&
              ListSubjectData?.data?.map((data, index) => {
                const matchingMajor = majorData?.data.find(
                  (major) => major.id === data.major_id
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
                        {data?.subject_code}
                      </div>
                    </td>
                    <td>
                      <div className="flex justify-center items-center py-2">
                        {data?.name}
                      </div>
                    </td>
                    <td>
                      <div className="flex justify-center items-center py-2 ">
                        {/* {formatTime(data.created_at).formatedDate} */}
                        {data?.major_name}
                      </div>
                    </td>
                    <td>
                      <div className="flex justify-center gap-3 mx-6">
                        <Button
                          type="button"
                          onClick={() => {
                            setIsModalEditOpen(true);
                            setSubjectDataState(data);
                          }}
                        >
                          <IconEdit />
                        </Button>
                        <Button
                          type="button"
                          onClick={() => {
                            setIsModalDeleteOpen(true);
                            setSubjectId(data.id);
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
          // totalPages={Number(data?.meta?.page_size) || 1}
          // currentPage={Number(data?.meta?.page) || 1}
          totalPages={Number(2)}
          currentPage={Number(1)}
        /> */}
      </div>
      <Modal
        lookup={isModalOpen}
        withClose={true}
        onClose={() => setIsModalOpen(false)}
      >
        <ModalTambahMatkul majorId={majorId} />
      </Modal>
      <Modal
        lookup={isModalEditOpen}
        withClose={true}
        onClose={() => setIsModalEditOpen(false)}
      >
        <ModalEditMatkul subjectData={subjectDataState} />
      </Modal>
      <Modal
        lookup={isModalBerhasilOpen}
        withClose={true}
        onClose={() => setIsModalBerhasilOpen(false)}
      >
        <ModalPopUpBerhasil title="Berhasil Menambahkan Mata Kuliah" />
      </Modal>
      <Modal
        lookup={isModalDeleteSuccessOpen}
        withClose={true}
        onClose={() => setIsModalDeleteSuccessOpen(false)}
      >
        <ModalDeleteSuccess title="Berhasil Menghapus Mata Kuliah" />
      </Modal>
      <Modal
        lookup={isModalEditSuccessOpen}
        withClose={true}
        onClose={() => setIsModalEditSuccessOpen(false)}
      >
        <ModalEditSuccess title="Berhasil Mengubah Mata Kuliah" />
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
          jumlahMatkul={18}
          subjectId={subjectId}
        />
      </Modal>
      <Pagination
        currentPage={Number(getSubjectData?.meta?.current_page) || 1}
        totalPages={getSubjectData?.meta?.max_page || 1}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

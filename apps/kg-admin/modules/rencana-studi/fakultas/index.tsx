'use client';
import { ReusableTable } from '../../../components/reusable-table/reusable-table';
import Pagination from '../../../../kg/components/general/pagination';
import { DependencyList, useCallback, useEffect, useState } from 'react';
import { Button, LoadingSpinner } from '@kampus-gratis/components/atoms';
import { IconEdit } from '../../../components/icons/ic-edit';
import { IconDelete } from '../../../components/icons/ic-delete';
import { IconLock } from '../../../components/icons/ic-lock';
import { Modal } from '../../../components/popup/modal';
import ButtonPlus from '../../../components/button-plus/ButtonPlus';
import Searchbar from '../../../components/searchbar/Searchbar';
import { ModalTambahFakultas } from './modalTambahFakultas';
import { ModalPopUpBerhasil } from './popUp/popUpBerhasil';
import { useRecoilState } from 'recoil';
import {
  idFacultyState,
  modalBerhasil,
  modalConfirmation,
  modalDelete,
  modalDeleteSuccess,
  modalEdit,
  modalEditSuccess,
  modalOpenState,
} from '../../../recoil/atoms/rencana-studi';
import { ModalPopUpConfirmation } from './popUp/popUpConfirmation';
import { ModalPopUpDelete } from './popUp/popUpDelete';
import {
  useFacultyData,
  useGetFaculty,
  useGetFacultyWithPagination,
} from '../../../hooks/rencana-studi/hook';
import { ModalPopUpEdit } from './popUp/popUpEdit';
import { TFacultyItem } from '../../../types/rencatastudi';
import { ModalDeleteSuccess } from './popUp/popUpDeleteSuccess';
import { ModalEditSuccess } from './popUp/popUpEditSuccess';
import { useRouter, useSearchParams } from 'next/navigation';

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

export const FakultasSection = () => {
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
  const [idFaculty, setIdFaculty] = useRecoilState(idFacultyState);
  const [countMajor, setCountMajor] = useState('');
  const [facultyDataState, setFacultyDataState] = useState<TFacultyItem>({
    id: '',
    name: '',
    thumbnail: null,
    slug: '',
    major_count: '',
  });

  const params = useSearchParams();
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  const page = params.get('page') || 1;

  const [filterFaculty, setFilterFaculty] = useState({
    page: page,
    limit: 1,
    search: '',
  });

  const { data, refetch, isLoading } = useGetFacultyWithPagination(
    filterFaculty.page as number,
    filterFaculty.limit,
    filterFaculty.search
  );

  const [deb, setDeb] = useState(searchQuery);

  const listFacultyData = data;
  useEffect(() => {
    setFilterFaculty(filterFaculty);
  }, [filterFaculty]);

  useDebounce(
    () => {
      setFilterFaculty((prev) => ({ ...prev, page: 1, search: deb }));
      router.push(`/rencana-studi/fakultas?page=1&search=${deb}`);
    },
    [deb],
    700
  );
  const { setFacultyData, getFacultyData } = useFacultyData();

  useEffect(() => {
    setFacultyData(data as any);
  }, [data, setFacultyData]);

  const handlePageChange = async (page: number) => {
    setFilterFaculty((prev) => ({ ...prev, page: page as any }));
    router.push(`/rencana-studi/fakultas?page=${page}&search=${deb}`);
  };

  // const handleChangeSearch = (e:any) => {
  //   setSearchQuery(e.target.value)
  //   refetch()
  //   router.push(`/rencana-studi`)
  // }

  // const handlePageChange =async (page:number) => {
  //   window.scrollTo(0, 0)
  //   refetch()
  //   router.push(`/rencana-studi/fakultas?page=${page}`)
  // }

  const [option, setOption] = useState({
    limit: '5',
    order: 'LATEST',
    title: '',
    page: '1',
  });

  const columns = [
    { header: 'No', className: 'w-[20px] h-10 border-b rounded-s-md' },
    {
      header: 'ID Fakultas',
      hasSorting: true,
      className: 'text-center border-b',
      sort_by: 'nik',
    },
    {
      header: 'Nama Fakultas',
      hasSorting: true,
      sort_by: 'name',
      className: 'border-b',
    },
    {
      header: 'Jumlah Prodi',
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

  return (
    <div>
      <div className="flex justify-between w-full bg-neutral-100 mb-5 ">
        <h1 className="text-2xl font-bold">Fakultas</h1>
        <div className="flex gap-x-2">
          <ButtonPlus
            plus={true}
            title="Fakultas"
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
        {' '}
        <ReusableTable
          classBody=""
          classHead="bg-[#fff] border-b border-solid"
          columns={columns}
          className="rounded-md"
        >
          {listFacultyData?.data &&
            listFacultyData?.data?.map((data, index) => {
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
                      {data?.name}
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center items-center py-2 ">
                      {/* {formatTime(data.created_at).formatedDate} */}
                      {data?.major_count} Prodi
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center gap-3 mx-6">
                      <Button
                        type="button"
                        onClick={() => {
                          setIsModalEditOpen(true);
                          setFacultyDataState(data);
                        }}
                      >
                        <IconEdit />
                      </Button>
                      <Button
                        type="button"
                        onClick={() => {
                          setIsModalDeleteOpen(true);
                          setIdFaculty(data?.id);
                          setCountMajor(data?.major_count);
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
        {/* <Pagination
          onPageChange={handlePageChange}
          totalPages={Number(data?.meta?.page_size) || 1}
          currentPage={Number(data?.meta?.page) || 1}
          totalPages={Number(2)}
          currentPage={Number(1)}
        /> */}
      </div>
      <Modal
        children={<ModalTambahFakultas />}
        lookup={isModalOpen}
        withClose={true}
        onClose={() => setIsModalOpen(false)}
      />
      <Modal
        children={<ModalPopUpEdit facultyData={facultyDataState} />}
        lookup={isModalEditOpen}
        withClose={true}
        onClose={() => setIsModalEditOpen(false)}
      />
      <Modal
        children={<ModalPopUpBerhasil title="Berhasil Menambahkan Fakultas" />}
        lookup={isModalBerhasilOpen}
        withClose={true}
        onClose={() => setIsModalBerhasilOpen(false)}
      />
      <Modal
        children={<ModalDeleteSuccess title="Berhasil Menghapus Fakultas" />}
        lookup={isModalDeleteSuccessOpen}
        withClose={true}
        onClose={() => setIsModalDeleteSuccessOpen(false)}
      />
      <Modal
        children={<ModalEditSuccess title="Berhasil Mengubah Fakultas" />}
        lookup={isModalEditSuccessOpen}
        withClose={true}
        onClose={() => setIsModalEditSuccessOpen(false)}
      />
      <Modal
        children={<ModalPopUpConfirmation />}
        lookup={isModalConfirmOpen}
        withClose={true}
        onClose={() => setIsModalConfirmOpen(false)}
      />
      <Modal
        children={
          <ModalPopUpDelete
            jumlahProdi={countMajor}
            jumlahMatkul={18}
            faculty_id={idFaculty}
          />
        }
        lookup={isModalDeleteOpen}
        withClose={true}
        onClose={() => setIsModalDeleteOpen(false)}
      />
      <Pagination
        currentPage={Number(getFacultyData?.meta?.current_page) || 1}
        totalPages={getFacultyData?.meta?.max_page || 1}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

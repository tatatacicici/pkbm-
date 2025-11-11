import { Button, LoadingSpinner } from '@kampus-gratis/components/atoms';
import { IconDelete } from '../../../components/icons/ic-delete';
import { IconEdit } from '../../../components/icons/ic-edit';
import Table from '../../../components/table/Table';
import { useUser } from '../../../hooks/user/hook';
import { FC, Fragment, ReactElement, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { PopupModal } from '../../../components/popup';
import Junk from '../../../public/assets/ic-junk.svg';
import Searchbar from '../../../components/searchbar/Searchbar';
import Link from 'next/link';
// eslint-disable-next-line @nx/enforce-module-boundaries
import Pagination from '../../../../kg/components/general/pagination';
import Breadcrumb from '../../../components/breadcrumb/Breadcrumb';
import { useDeleteUser } from '../../../hooks/user/deleteuser/hook';
import { toast } from 'react-toastify';
export const MahasiswaData: FC = (): ReactElement => {
  const [getDeleteStatus, setDeleteStatus] = useState(false);
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const searchParams = useSearchParams();
  const page = searchParams.get('page') || 1;
  const { data, isLoading, refetch } = useUser(
    Number(page),
    10,
    searchQuery,
    'STUDENT'
  );
  console.log(data?.data?.users);

  const mahasiswaPageBC = [
    {
      name: 'User',
      link: 'not-routing',
    },
    {
      name: 'Mahasiswa',
      link: '/user',
    },
  ];
  const handleSearch = (e: any) => {
    setSearchQuery(e.target.value);
    refetch();
  };
  const handlePageChange = async (page: number) => {
    window.scrollTo(0, 0);

    router.push(`/user/mahasiswa?page=${page}`);
  };
  const [selectedUser, setSelectedUser] = useState('');
  const { mutate, isLoading: deleteUserLoading } = useDeleteUser();
  const handlePopUpDeleteUser = (id: string) => {
    setDeleteStatus(true);
    setSelectedUser(id);
  };
  const handleDeleteUser = async (id: string) => {
    try {
      await mutate(id, {
        onSuccess: () => {
          console.log('sukses delete user');
          setDeleteStatus(false);
          toast.success('Sukes Delete User');
          refetch();
        },
      });
    } catch (err) {
      console.log('Gagal delete User');
    }
  };

  return (
    <Fragment>
      <div className="flex justify-between mb-10">
        <Breadcrumb items={mahasiswaPageBC} />
        <div className="flex">
          <Button
            type="button"
            className="flex items-center place-items-center justify-center bg-blue-base w-full px-3 rounded text-white"
            onClick={() => router.push('/user/tambah-user')}
          >
            <span className="text-[20px] pr-3">+</span>Pengguna
          </Button>
          <Searchbar
            placeholder="Cari Pengguna"
            onChange={handleSearch}
            value={searchQuery}
          />
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-3">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <Table>
            <tr>
              <th>No</th>
              <th>Nama Pengguna</th>
              <th>Role</th>
              <th>Email</th>
              <th>Berkas</th>
              <th>Action</th>
            </tr>
            {data?.data.users &&
              data?.data.users?.map((user: any, index: number) => (
                <tr key={index}>
                  <td>{index + 1 + (Number(page) - 1) * 10}</td>
                  <td>{user.full_name && user.full_name}</td>
                  <td>{user.role.toLowerCase() && user.role}</td>
                  <td>{user.email && user.email}</td>
                  <td>
                    <Link href={`/user/berkas/${user.id}/administration`}>
                      <span className="text-blue-base hover:text-primary-500 font-semibold">
                        Lihat Berkas
                      </span>
                    </Link>
                  </td>
                  <td>
                    <div className="flex justify-center gap-3 mx-6">
                      {/* <Button type="button" onClick={handleEditButton}>
                      <IconEdit />
                    </Button> */}
                      <Button
                        onClick={() => handlePopUpDeleteUser(user.id)}
                        type="submit"
                      >
                        <IconDelete />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
          </Table>
        )}
        <Pagination
          currentPage={Number(page)}
          totalPages={Number(data?.data?.max_page)}
          onPageChange={handlePageChange}
        />
      </div>
      <PopupModal
        icon={Junk}
        lookup={getDeleteStatus}
        image={Junk as string}
        popupTitle={'Konfirmasi'}
        description={'Apakah anda ingin menghapus User ini?'}
        className={''}
      >
        <div className="flex items-center justify-center w-full gap-10">
          <Button
            onClick={() => {
              handleDeleteUser(selectedUser);
            }}
            type="button"
            className={
              'bg-white hover:bg-neutral-100 transition-colors ease-in-out duration-300 py-3 w-72 text-primary-500 font-bold border-2 border-primary-500 rounded-md'
            }
          >
            {deleteUserLoading ? 'Sedang Menghapus' : <h1>Ya, Hapus</h1>}
          </Button>
          <Button
            type="button"
            className={
              'text-white hover:bg-primary-600 transition-colors ease-in-out duration-300 py-3 w-72 bg-primary-500 font-bold border-2 border-primary-500 rounded-md'
            }
            onClick={() => {
              setDeleteStatus(false);
            }}
          >
            Tidak
          </Button>
        </div>
      </PopupModal>
    </Fragment>
  );
};

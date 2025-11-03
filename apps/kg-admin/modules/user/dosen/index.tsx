import { IconEdit } from '../../../components/icons/ic-edit';
import Table from '../../../components/table/Table';
import { FC, Fragment, ReactElement, useState } from 'react';
import { IconDelete } from '../../../components/icons/ic-delete';
import { useUser } from '../../../hooks/user/hook';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button, LoadingSpinner } from '@kampus-gratis/components/atoms';
import Junk from '../../../public/assets/ic-junk.svg';
import { PopupModal } from '../../../components/popup';
import Breadcrumb from '../../../components/breadcrumb/Breadcrumb';
import Searchbar from '../../../components/searchbar/Searchbar';
import Pagination from '../../../components/pagination';
import Link from 'next/link';
import { useDeleteUser } from '../../../hooks/user/deleteuser/hook';
import { toast } from 'react-toastify';

export const DosenData: FC = (): ReactElement => {
  const [getDeleteStatus, setDeleteStatus] = useState(false);
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const searchParams = useSearchParams();
  const page = searchParams.get('page') || '1';
  const { data, isLoading, refetch } = useUser(
    Number(page),
    5,
    searchQuery,
    'TEACHER'
  );
  console.log(data?.data?.users);

  const userAdminPageBC = [
    {
      name: 'User',
      link: 'not-routing',
    },
    {
      name: 'Dosen',
      link: '/user/dosen',
    },
  ];
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

  const handleSearch = (e: any) => {
    setSearchQuery(e.target.value);
    refetch();
  };
  const handlePageChange = async (page: number) => {
    window.scrollTo(0, 0);

    router.push(`/user/dosen?page=${page}`);
  };
  return (
    <Fragment>
      <div className="flex justify-between mb-10">
        <Breadcrumb items={userAdminPageBC} />
        <div className="flex">
          <Button
            type="button"
            className="flex items-center place-items-center justify-center bg-blue-base w-full px-3 rounded text-white"
            onClick={() => router.push('/user/tambah-user')}
          >
            <span className="text-[20px] pr-3">+</span> Pengguna
          </Button>
          <Searchbar placeholder="Cari Pengguna" onChange={handleSearch} />
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
              <th>Action</th>
            </tr>
            {data?.data?.users &&
              data?.data?.users.map((user: any, i: number) => (
                <tr key={user.id}>
                  <td>{i + 1 + (Number(page) - 1) * 10}</td>
                  <td>{user?.full_name}</td>
                  <td>{user?.role.toLowerCase()}</td>
                  <td>{user?.email}</td>
                  <td>
                    <div className="flex justify-center gap-3 mx-6">
                      <Button type="submit">
                        <Link href={`/user/edituser/${user.id}`}>
                          <IconEdit />
                        </Link>
                      </Button>
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
            {deleteUserLoading ? 'Sedang menghapus...' : <h1>Ya, Hapus</h1>}
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

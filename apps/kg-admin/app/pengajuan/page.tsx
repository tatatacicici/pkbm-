'use client';

import BaseLayout from '../../modules/base/BaseLayout';
import React, { useEffect, useState } from 'react';
import Table from '../../components/table/Table';
import Button from '../../components/button/Button';
import Searchbar from '../../components/searchbar/Searchbar';
import axios from 'axios';
import Modal from '../../components/modal/Modal';
import Image from 'next/image';
import { IconAccept } from '../../components/icons/ic-accept';
import { IconReject } from '../../components/icons/ic-reject';

export default function PengajuanPage() {
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState([
    {
      id: 0,
      name: { firstname: '', lastname: '' },
      email: '',
      username: '',
      phone: '',
    },
  ]);
  const GetData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/users');

      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    GetData();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  // https://dummyjson.com/user
  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <BaseLayout>
      <div className="absolute right-0 w-[calc(100%-300px)] top-[15%] ml-10">
        <div className="w-max-full mt-5 mb-16 pr-10">
          <div className="flex justify-between mb-10">
            <div className="flex">
              <Button
                plus={true}
                buttonStyle="flex items-center justify-center bg-primary  w-[200px] rounded text-white"
                onClick={() => setShowModal(true)}
              >
                Mahasiswa
              </Button>
              <Searchbar placeholder="Cari Mahasiswa" onChange={() => ''} />
            </div>
            <Modal isVisible={showModal}>
              <div className="flex flex-col justify-center items-center gap-5">
                <Image
                  src="/assets/ic-avatar.svg"
                  alt="img"
                  width={100}
                  height={100}
                />
                <h1 className="font-semibold">Konfirmasi</h1>
                <p className="font-light">
                  Apakah anda ingin menghapus Lowongan Pekerjaan ini?
                </p>
                <div className="w-full flex flex-between gap-5">
                  <Button
                    plus={true}
                    buttonStyle="flex items-center justify-center border-2 bg-transparent border-primary-base w-full h-[40px] rounded text-primary-base"
                    onClick={() => setShowModal(false)}
                  >
                    Ya Hapus
                  </Button>
                  <Button
                    plus={true}
                    buttonStyle="flex items-center justify-center bg-primary-base w-full h-[40px] rounded text-white"
                    onClick={() => setShowModal(false)}
                  >
                    Tidak Terima Kasih
                  </Button>
                </div>
              </div>
            </Modal>
          </div>
          <div className="bg-white rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-3">
            <Table>
              <tr>
                <th>No</th>
                <th>Nama Mahasiswa</th>
                <th>Program Studi</th>
                <th>NIM</th>
                <th>Status KRS</th>
                <th>Action</th>
              </tr>
              {users &&
                users.map((user: any) => (
                  <tr key={user.id} className="bg-white">
                    <td>{user.id}</td>
                    <td>{user.name?.firstname}</td>
                    <td>{user.name?.lastname}</td>
                    <td>{user.phone}</td>
                    <td>{user.email}</td>
                    <td>
                      <div className="flex justify-evenly">
                        <IconAccept />
                        <IconReject />
                      </div>
                    </td>
                  </tr>
                ))}
            </Table>
          </div>
          {/* <Pagination
            currentPage={currentPage}
            onPageChange={onPageChange}
            totalPages={pageSize}
          /> */}
        </div>
      </div>
    </BaseLayout>
  );
}

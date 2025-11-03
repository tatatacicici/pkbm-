import React, { useState } from 'react';
import { Modal } from '../../../../../../libs/components/molecules/src/modal/index';
import { ReusableTable } from '../../../../components/reusable-table/reusable-table';
import FakeDummyData from './MOCK_DATA.json';
import { Button } from '../../../../../../libs/components/atoms/src/button/index';
import { Dialog, Transition } from '@headlessui/react';
// import { useRemainingTimeQuiz } from '../../../../hooks/mystudy/quiz/hook';
import { FC, Fragment } from 'react';
import { TMyModal } from '../types';

export const ModalDetailKRS: FC<TMyModal> = ({
  isOpen,
  closeModal,
  //   handleClickSubmit,
}) => {
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const columns = [
    { header: 'No', className: 'w-[20px] h-10 border-b rounded-s-md' },
    {
      header: 'Kode Matkul',
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
      header: 'Dosen',
      hasSorting: true,
      sort_by: 'created_at',
      className: 'border-b',
    },
    { header: 'Semester', className: 'border-b' },
    { header: 'SKS', className: 'border-b rounded-r-md' },
  ];
  const data = FakeDummyData;

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[100]" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full sm:min-w-[800px] max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-center align-middle shadow-xl transition-all flex justify-center items-center flex-col">
                  {/* <BsFillXCircleFill size={30} color="#EE2D24" /> */}
                  <Dialog.Title
                    as="h3"
                    className="text-lg text-left w-full font-bold leading-6 text-gray-900 my-3"
                  >
                    <div className="w-full font-bold pb-3">
                      <div className="flex gap-2 pb-2">
                        <p>Pengajuan KRS</p>
                        <p>Mahasiswa 1</p>
                      </div>
                      <p>Sistem Informasi</p>
                    </div>
                  </Dialog.Title>

                  <div className="w-full">
                    <ReusableTable
                      classBody="w-full"
                      classHead="bg-[#fff] border-b border-solid"
                      columns={columns}
                      className="rounded-md w-full"
                    >
                      {data &&
                        data?.map((data, index) => {
                          return (
                            <tr key={index} className="border-b">
                              <td className="text-center">
                                <div className="flex justify-center items-center py-1">
                                  {index + 1}
                                </div>
                              </td>
                              <td>
                                <div className="flex justify-center items-center py-1">
                                  {data.kode_matkul}
                                </div>
                              </td>
                              <td>
                                <div className="flex justify-center items-center py-1">
                                  {data.nama_matkul}
                                </div>
                              </td>
                              <td>
                                <div className="flex justify-center items-center py-1">
                                  {/* {formatTime(data.created_at).formatedDate} */}
                                  {data.dosen}
                                </div>
                              </td>
                              <td>
                                <div className="flex justify-center items-center py-1">
                                  {data.semester}
                                </div>
                              </td>
                              <td>
                                <div className="flex justify-center items-center py-1">
                                  {data.sks}
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                    </ReusableTable>
                  </div>
                  <div className="flex gap-10 pt-5 w-full justify-end">
                    <Button
                      type="button"
                      className="py-2.5 px-5 min-w-[122px] text-sm font-bold transition-colors ease-in-out relative z-10 rounded-md duration-300  flex items-center justify-center gap-2 bg-green-500 text-white hover:border-version2-300 hover:bg-green-600 "
                      // onClick={() => {
                      //   setOptionOpen(false);
                      // }}
                    >
                      Setujui
                    </Button>
                    <Button
                      type="button"
                      className="py-2.5 px-10  min-w-[122px] text-sm font-bold transition-colors ease-in-out relative z-10 rounded-md duration-300  flex items-center justify-center gap-2 bg-red-500 text-white hover:border-version2-300 hover:bg-red-600 "
                      onClick={closeModal}
                      // onClick={() => {
                      //   setOptionOpen(false);
                      // }}
                    >
                      Tolak
                    </Button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

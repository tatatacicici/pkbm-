import { Dialog, Transition } from '@headlessui/react';
import { Button } from '../../../../../../libs/components/atoms/src/button/index';
import { ReusableTable } from '../../../../components/reusable-table/reusable-table';
// import { useRemainingTimeQuiz } from '../../../../hooks/mystudy/quiz/hook';
import { useQueryClient } from '@tanstack/react-query';
import { useAccRejectConversion } from 'apps/kg-admin/hooks/pengajuan/konversi/hooks';
import { FC, Fragment } from 'react';
import { useRecoilState } from 'recoil';
import { modalAccOpen, modalDetailOpen, modalRejectOpen } from '../store';
import { TDetailModal } from '../types';

export const ModalDetailKonversi: FC<TDetailModal> = ({
  isOpen,
  data,
  student_major,
  student_name,
}) => {
  const columns = [
    { header: 'No', className: 'w-[20px] h-10 border-b rounded-s-md' },
    {
      header: 'Kode Matkul',
      className: 'text-center border-b',
    },
    {
      header: 'Nama Mata Kuliah',
      className: 'border-b',
    },
    { header: 'SKS', className: 'border-b rounded-r-md' },
  ];

  const queryClient = useQueryClient();

  const { mutate } = useAccRejectConversion();
  const [getModalDetailOpen, setModalDetailOpen] =
    useRecoilState(modalDetailOpen);
  const [getModalAccOpen, setModalAccOpen] = useRecoilState(modalAccOpen);
  const [getModalRejectOpen, setModalRejectOpen] =
    useRecoilState(modalRejectOpen);

  const handleAcceptConversion = () => {
    setModalDetailOpen(false);
    setModalAccOpen(true);
    // const params = {
    //   request_id: request_id,
    //   action_type: 'APPROVED',
    // };
    // console.log(params);
    // mutate(params, {
    //   onSuccess: () => {
    //     queryClient.invalidateQueries(['get-conversion-request']);
    //     closeModal();
    //   },
    // });
  };

  const handleCloseModal = () => {
    setModalDetailOpen(false);
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-[100]"
          onClose={handleCloseModal}
        >
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
                        <p>{student_name}</p>
                      </div>
                      <p>{student_major}</p>
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
                                  {data.subject_id}
                                </div>
                              </td>
                              <td>
                                <div className="flex justify-center items-center py-1">
                                  {data.name}
                                </div>
                              </td>

                              <td>
                                <div className="flex justify-center items-center py-1">
                                  {data.total_session}
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
                      onClick={() => {
                        handleAcceptConversion();
                      }}
                    >
                      Setujui
                    </Button>
                    <Button
                      type="button"
                      className="py-2.5 px-10  min-w-[122px] text-sm font-bold transition-colors ease-in-out relative z-10 rounded-md duration-300  flex items-center justify-center gap-2 bg-red-500 text-white hover:border-version2-300 hover:bg-red-600 "
                      onClick={handleCloseModal}
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

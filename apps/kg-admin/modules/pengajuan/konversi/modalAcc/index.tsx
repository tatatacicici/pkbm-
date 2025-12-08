'use client';

import { Dialog, Transition } from '@headlessui/react';
import { useQueryClient } from '@tanstack/react-query';
import { FC, Fragment } from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';
import { useRecoilState } from 'recoil';
import { useAccRejectConversion } from '../../../../hooks/pengajuan/konversi/hooks';
import { modalAccOpen } from '../store';
import { TAccRejectModal } from '../types';
import { toast } from 'react-toastify';

export const ModalAcc: FC<TAccRejectModal> = ({ isOpen, request_id }) => {
  const queryClient = useQueryClient();
  const [getModalAccOpen, setModalAccOpen] = useRecoilState(modalAccOpen);

  const { mutate, isLoading } = useAccRejectConversion();

  const handleAcceptConversion = () => {
    const params = {
      request_id: request_id,
      action_type: 'APPROVED',
    };
    mutate(params, {
      onSuccess: () => {
        queryClient.invalidateQueries(['get-conversion-request']);
        setModalAccOpen(false);
        toast.success('Berhasil Menyetujui Konversi');
      },
    });
  };

  const handleCloseModal = () => {
    setModalAccOpen(false);
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
                <Dialog.Panel className="w-full sm:min-w-[500px] max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-center align-middle shadow-xl transition-all flex justify-center items-center flex-col">
                  <BsCheckCircleFill size={30} color="#3EB449" />
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-bold leading-6 text-gray-900 my-3"
                  >
                    Konfirmasi
                  </Dialog.Title>

                  <p className="text-lg  mt-3">
                    Apakah anda ingin menyetujui pengajuan Konversi ini?
                  </p>
                  <div className="flex gap-3 justify-center w-full mt-3">
                    <button
                      type="button"
                      className="w-[250px] text-white px-5 py-2 bg-primary-500 rounded-lg border-2 border-transparent border-solid"
                      onClick={() => handleAcceptConversion()}
                    >
                      {isLoading ? 'Loading...' : 'Setujui'}
                    </button>
                    <button
                      type="button"
                      onClick={handleCloseModal}
                      className="w-[250px] text-primary-500 px-5 py-2 bg-white rounded-lg border-2 border-primary-500 border-solid"
                    >
                      Kembali
                    </button>
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

'use client';

import { Dialog, Transition } from '@headlessui/react';
// import { useRemainingTimeQuiz } from '../../../../hooks/mystudy/quiz/hook';
import { FC, Fragment } from 'react';
import {
  BsCheckCircleFill,
  BsExclamationCircleFill,
  BsFillXCircleFill,
} from 'react-icons/bs';
import { TMyModal } from '../../krs/types';
import { useAccKrs } from '../../../../hooks/pengajuan/krs/hooks';
import { toast } from 'react-toastify';
import { useQueryClient } from '@tanstack/react-query';

export const ModalAcc: FC<TMyModal> = ({
  isOpen,
  closeModal,
  student_id,
  subject_id,
}) => {
  const { mutate: mutateAcc } = useAccKrs();

  const queryClient = useQueryClient();

  const handleConfirmAccept = (student_id: string, subject_id: string) => {
    const payload = {
      student_id: student_id,
      subject_id: subject_id,
    };
    mutateAcc(payload, {
      onSuccess: () => {
        toast.success('Berhasil Menyetujui Mata Kuliah');
        closeModal();
        queryClient.invalidateQueries(['get-study-plan-request']);
      },
    });
  };

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
                <Dialog.Panel className="w-full sm:min-w-[500px] max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-center align-middle shadow-xl transition-all flex justify-center items-center flex-col">
                  <BsCheckCircleFill size={30} color="#3EB449" />
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-bold leading-6 text-gray-900 my-3"
                  >
                    Konfirmasi
                  </Dialog.Title>

                  <p className="text-lg  mt-3">
                    Apakah anda ingin menyetujui pengajuan KRS ini?
                  </p>
                  <div className="flex gap-3 justify-center w-full mt-3">
                    <button
                      type="button"
                      className="w-[250px] text-white px-5 py-2 bg-primary-500 rounded-lg border-2 border-transparent border-solid"
                      onClick={() =>
                        handleConfirmAccept(student_id, subject_id)
                      }
                    >
                      Setujui
                    </button>
                    <button
                      type="button"
                      onClick={closeModal}
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

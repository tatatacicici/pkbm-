'use client';

import { Dialog, Transition } from '@headlessui/react';
import { FC, Fragment } from 'react';
import { BsExclamationCircleFill } from 'react-icons/bs';
import { useRemainingTimeQuiz } from '@kampus-gratis/apps/kg/hooks/tes-kepemimpinan/quiz/hook';
import { TMyModal } from '../../../../types/quiz';

export const PopUpSubmit: FC<TMyModal> = ({
  isOpen,
  closeModal,
  handleClickSubmit,
}) => {
  const { getRemainingTime } = useRemainingTimeQuiz();

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor(seconds / 60);
    const secondsLeft = seconds % 60;
    if (seconds <= 0) {
      return '00:00:00';
    }
    return `${hours}:${minutes}:${
      secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft
    }`;
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
                <Dialog.Panel className="w-full sm:min-w-[600px] max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-center align-middle shadow-xl transition-all flex justify-center items-center flex-col">
                  <div className="py-8">
                    <BsExclamationCircleFill
                      className="text-yellow-500 mx-auto"
                      size={72}
                    />
                    <p className="text-lg mt-3">
                      Apakah kamu yakin ingin menyelesaikan quiz ini?
                    </p>
                    {/* <div className="text-red-700 bg-red-200 flex gap-2 w-fit py-3 px-5 rounded-lg text-sm items-center">
                    <BsExclamationCircleFill className="text-red-700 w-5 h-5" />{' '}
                    Sisa Waktu {formatTime(getRemainingTime - 1)}
                  </div> */}
                  </div>
                  <div className="flex gap-3 justify-center w-full mt-3">
                    <button
                      type="button"
                      onClick={closeModal}
                      className="w-[250px] text-sky-base px-5 py-2 bg-white rounded-lg border-2 border-sky-base border-solid hover:opacity-80 transition-all"
                    >
                      Batal
                    </button>
                    <button
                      type="button"
                      onClick={handleClickSubmit}
                      className="w-[250px] text-white px-5 py-2 bg-sky-base rounded-lg border-2 border-transparent border-solid hover:opacity-80 transition-all"
                    >
                      Yakin
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

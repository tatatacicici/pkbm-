'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Button } from '@kampus-gratis/components/atoms';
import Image from 'next/image';
import Link from 'next/link';
import { FC, Fragment } from 'react';
import {
  useQuizQuitPopup,
  useRemainingTimeQuiz,
} from '@kampus-gratis/apps/kg/hooks/try-out/quiz/hook';

export const PopUpQuit: FC = () => {
  const { getQuizQuitPopup, setQuizQuitPopup } = useQuizQuitPopup();
  const { getRemainingTime } = useRemainingTimeQuiz();

  function onClose() {
    setQuizQuitPopup({ ...getQuizQuitPopup, status: false });
  }

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
      <Transition appear show={getQuizQuitPopup.status} as={Fragment}>
        <Dialog as="div" className="relative z-[100]" onClose={onClose}>
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
                  <section className="flex flex-col items-center gap-y-5 my-8">
                    <Image
                      src={'/icons/rencana-studi/confirm.svg'}
                      alt="confirm-icon"
                      width={80}
                      height={80}
                    />
                    {/* <div className="text-red-700 bg-red-200 flex gap-2 w-fit py-3 px-5 rounded-lg text-sm items-center">
                      <BsExclamationCircleFill className="text-red-700 w-5 h-5" />{' '}
                      Sisa Waktu:
                      {formatTime(getRemainingTime)}
                    </div> */}
                    {/* <h5>
                      Kamu akan meninggalkan quiz ini. waktu yang tersisa akan
                      terus berjalan.
                    </h5> */}
                    <h5>
                      Apakah Kamu yakin akan meninggalkan Kuis ini? Waktu yang
                      tersisa akan terus berjalan.
                    </h5>
                  </section>
                  <section className="w-full flex justify-between mt-5 text-base gap-2">
                    <Button
                      onClick={onClose}
                      type="button"
                      className="w-full border-2 border-sky-base py-3 rounded-lg text-sky-base hover:opacity-80 transition-all"
                    >
                      Batal
                    </Button>
                    <Link
                      href={getQuizQuitPopup.link}
                      className="w-full py-3 rounded-lg bg-sky-base hover:opacity-80 transition-all"
                    >
                      <button
                        onClick={onClose}
                        className="w-full h-full text-white"
                      >
                        Yakin
                      </button>
                    </Link>
                  </section>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

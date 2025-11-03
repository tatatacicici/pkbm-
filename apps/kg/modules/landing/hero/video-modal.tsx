'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Button } from '@nextui-org/react';
import { Fragment, useState } from 'react';
import { BsBriefcaseFill } from 'react-icons/bs';
import { FaBook, FaPlay } from 'react-icons/fa6';
import { GiSpellBook } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';
import { MdComputer, MdQuestionAnswer } from 'react-icons/md';
import { RiAlarmWarningFill, RiArrowDownSLine } from 'react-icons/ri';
import { VideoPlayerPanduan } from './video-player';

export default function VideoPanduanModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState('panduan');

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      {/* <button
        onClick={openModal}
        className="text-white flex justify-center items-center bg-rose-500 py-2 px-4 lg:py-3 lg:px-8 text-xs lg:text-lg rounded-lg font-semibold hover:bg-rose-500/90 transition border border-rose-300"
      > */}
      <button
        onClick={openModal}
        className="text-white flex justify-center items-center bg-red-base py-2 px-4 md:py-3 md:px-6 lg:py-3 lg:px-8 text-xs md:text-lg lg:text-lg rounded-lg font-semibold hover:bg-red-base/80 transition border border-rose-300"
      >
        Tonton Panduan <FaPlay className="ml-2" />
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/40" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full max-w-[900px] mx-auto items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="absolute top-4 right-4">
                    <Button
                      type="button"
                      className="p-2 rounded-full hover:bg-gray-100 transition text-neutral-900"
                      onClick={closeModal}
                    >
                      <IoClose size={24} />
                    </Button>
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-bold leading-6 text-gray-900 max-w-[300px]"
                  >
                    Panduan Paket-C Gratis
                  </Dialog.Title>
                  <div className="flex justify-between mt-4 items-center gap-4 flex-col md:flex-row">
                    <div className="w-full">
                      <div className="font-semibold text-center text-md">
                        Pilih jenis video yang ingin kamu lihat
                      </div>
                      <div className="flex flex-col items-center gap-2 mt-4">
                        <button
                          onClick={() => setIsActive('panduan')}
                          className={`flex gap-4 items-center text-start md:max-w-[400px] w-full border border-neutral-400 rounded-lg p-4 text-sm transition ${
                            isActive === 'panduan'
                              ? 'bg-blue-base text-white hover:bg-blue-base/90'
                              : 'hover:bg-neutral-100'
                          }`}
                        >
                          <FaBook size={22} />
                          <div className="">
                            <h3 className="font-semibold">Panduan</h3>
                          </div>
                        </button>
                        <button
                          onClick={() => setIsActive('faq')}
                          className={`flex gap-4 items-center text-start md:max-w-[400px] w-full border border-neutral-400 rounded-lg p-4 text-sm transition ${
                            isActive === 'faq'
                              ? 'bg-blue-base text-white hover:bg-blue-base/90'
                              : 'hover:bg-neutral-100'
                          }`}
                        >
                          <MdQuestionAnswer size={22} />
                          <div className="">
                            <h3 className="font-semibold">FAQ</h3>
                          </div>
                        </button>
                        <button
                          onClick={() => setIsActive('bisnis')}
                          className={`flex gap-4 items-center text-start md:max-w-[400px] w-full border border-neutral-400 rounded-lg p-4 text-sm transition ${
                            isActive === 'bisnis'
                              ? 'bg-blue-base text-white hover:bg-blue-base/90'
                              : 'hover:bg-neutral-100'
                          }`}
                        >
                          <BsBriefcaseFill size={22} />
                          <div className="">
                            <h3 className="font-semibold">
                              Penjelasan Fakultas Bisnis
                            </h3>
                          </div>
                        </button>
                        <button
                          onClick={() => setIsActive('teknologi')}
                          className={`flex gap-4 items-center text-start md:max-w-[400px] w-full border border-neutral-400 rounded-lg p-4 text-sm transition ${
                            isActive === 'teknologi'
                              ? 'bg-blue-base text-white hover:bg-blue-base/90'
                              : 'hover:bg-neutral-100'
                          }`}
                        >
                          <MdComputer size={22} />
                          <div className="">
                            <h3 className="font-semibold">
                              Penjelasan Fakultas Teknologi Digital
                            </h3>
                          </div>
                        </button>
                        <button
                          onClick={() => setIsActive('rpl')}
                          className={`flex gap-4 items-center text-start md:max-w-[400px] w-full border border-neutral-400 rounded-lg p-4 text-sm transition ${
                            isActive === 'rpl'
                              ? 'bg-blue-base text-white hover:bg-blue-base/90'
                              : 'hover:bg-neutral-100'
                          }`}
                        >
                          <GiSpellBook size={28} />
                          <div className="">
                            <h3 className="font-semibold">Apa itu RPL?</h3>
                          </div>
                        </button>
                        <button
                          onClick={() => setIsActive('point-rpl')}
                          className={`flex gap-4 items-center text-start md:max-w-[400px] w-full border border-neutral-400 rounded-lg p-4 text-sm transition ${
                            isActive === 'point-rpl'
                              ? 'bg-blue-base text-white hover:bg-blue-base/90'
                              : 'hover:bg-neutral-100'
                          }`}
                        >
                          <RiAlarmWarningFill size={25} />
                          <div className="">
                            <h3 className="font-semibold">
                              {' '}
                              Apa Poin Penting dari RPL?
                            </h3>
                          </div>
                        </button>
                        <button
                          onClick={() => setIsActive('krs')}
                          className={`flex gap-4 items-center text-start md:max-w-[400px] w-full border border-neutral-400 rounded-lg p-4 text-sm transition ${
                            isActive === 'krs'
                              ? 'bg-blue-base text-white hover:bg-blue-base/90'
                              : 'hover:bg-neutral-100'
                          }`}
                        >
                          <RiAlarmWarningFill size={25} />
                          <div className="">
                            <h3 className="font-semibold"> Apa itu KRS?</h3>
                          </div>
                        </button>
                        <button
                          onClick={() => setIsActive('kampus-gratis')}
                          className={`flex gap-4 items-center text-start md:max-w-[400px] w-full border border-neutral-400 rounded-lg p-4 text-sm transition ${
                            isActive === 'kampus-gratis'
                              ? 'bg-blue-base text-white hover:bg-blue-base/90'
                              : 'hover:bg-neutral-100'
                          }`}
                        >
                          <RiAlarmWarningFill size={25} />
                          <div className="">
                            <h3 className="font-semibold">
                              {' '}
                              Apa itu Paket-C Gratis?
                            </h3>
                          </div>
                        </button>
                      </div>
                      <div className="mt-4 space-y-2 text-center">
                        <p className="text-sm">
                          Jika kamu memiliki pertanyaan lebih lanjut, kamu bisa
                          melihat pertanyaan yang sering ditanyakan
                        </p>
                        <a
                          href="#faq"
                          className="text-blue-base hover:underline text-sm flex gap-2 items-center justify-center"
                          onClick={closeModal}
                        >
                          Lihat pertanyaan yang sering ditanyakan (FAQ){' '}
                          <RiArrowDownSLine />
                        </a>
                      </div>
                    </div>
                    <VideoPlayerPanduan isActive={isActive} />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

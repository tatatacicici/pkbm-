import { Dialog, Transition } from '@headlessui/react';
import { LoadingButton } from '@kampus-gratis/components/molecules';
import { useState } from 'react';
import { IoPerson } from 'react-icons/io5';

enum STEPPER {
  STEP_1,
  STEP_2,
  STEP_3,
}

export default function ModalRegister({
  isOpen,
  setIsOpen,
  selection,
  setSelection,
  isLoading,
  onSubmit,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  selection: string;
  setSelection: (value: string) => void;
  isLoading: boolean;
  onSubmit: () => void;
}) {
  const [stepper, setStepper] = useState(STEPPER.STEP_1);

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => {
      setStepper(STEPPER.STEP_1);
    }, 300);
  };

  return (
    <Transition appear show={isOpen}>
      <Dialog
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={closeModal}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black/10">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              enter="ease-out duration-300"
              enterFrom="opacity-0 transform-[scale(95%)]"
              enterTo="opacity-100 transform-[scale(100%)]"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 transform-[scale(100%)]"
              leaveTo="opacity-0 transform-[scale(95%)]"
            >
              <Dialog.Panel className="sm:!w-[600px] rounded-xl bg-white">
                {stepper === STEPPER.STEP_1 ? (
                  <>
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-semibold text-black border-b border-gray-300 px-6 py-5"
                    >
                      Pilih Penilaian
                    </Dialog.Title>
                    <div className="px-6 pt-4 space-y-4">
                      <p className="mt-2 text-sm/6 text-black/50">
                        Pilih jenis penilaian yang anda inginkan
                      </p>
                      <div
                        className={`cursor-pointer p-4 rounded-lg bg-gray-100 hover:bg-gray-200/70 transition border-[1.5px] 
                       ${
                         selection === 'individual' &&
                         'border-black/60 !bg-white'
                       }
                      `}
                        onClick={() => setSelection('individual')}
                      >
                        <div className="flex items-center gap-2">
                          <IoPerson size={20} />
                          <h4 className="text-lg">Menilai Diri Sendiri</h4>
                        </div>
                        <p className="text-sm/6 text-black/50">
                          Penilaian dilakukan oleh diri sendiri
                        </p>
                      </div>
                      {/* <div
                        className={`cursor-pointer p-4 rounded-lg bg-gray-100 hover:bg-gray-200/70 transition border-[1.5px]
                       ${selection === 'partner' && 'border-black/60 !bg-white'}
                      `}
                        onClick={() => setSelection('partner')}
                      >
                        <div className="flex justify-between w-full">
                          <div className="flex items-center gap-2">
                            <BsFillPeopleFill size={20} />
                            <h4 className="text-lg">Dinilai oleh Orang Lain</h4>
                          </div>
                        </div>
                        <p className="text-sm/6 text-black/50">
                          Penilaian dilakukan oleh asesor
                        </p>
                      </div> */}
                    </div>
                    <div className="justify-end p-6 flex">
                      <button
                        className="bg-blue-base text-white px-6 py-2 rounded-md text-sm"
                        disabled={!selection}
                        onClick={() => {
                          selection === 'partner'
                            ? setStepper(STEPPER.STEP_2)
                            : setStepper(STEPPER.STEP_3);
                        }}
                      >
                        Selanjutnya
                      </button>
                    </div>
                  </>
                ) : stepper === STEPPER.STEP_2 ? (
                  <>
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-semibold text-black border-b border-gray-300 px-6 py-5"
                    >
                      Pilih Jadwal
                    </Dialog.Title>
                    <div className="px-6 pt-4 space-y-4">
                      <p className="mt-2 text-sm/6 text-black/50">
                        Pilih asesor dan jadwal yang anda inginkan
                      </p>
                      <div className="flex gap-4 mt-4">
                        <div className="w-full">
                          <label
                            htmlFor="teacher"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Pilih Asesor
                          </label>
                          <select
                            id="teacher"
                            name="teacher"
                            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md border"
                          >
                            <option value="1">Rizki Pratama</option>
                            <option value="2">Wisnu Adi Pradana</option>
                            <option value="3">Muhammad Fauzan</option>
                          </select>
                        </div>
                      </div>
                      <div className="flex gap-4 mt-4">
                        <div className="w-1/2">
                          <label
                            htmlFor="date"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Tanggal
                          </label>
                          <input
                            type="date"
                            name="date"
                            id="date"
                            className="mt-1 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-3 py-2 border"
                          />
                        </div>
                        <div className="w-1/2">
                          <label
                            htmlFor="time"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Waktu
                          </label>
                          <input
                            type="time"
                            name="time"
                            id="time"
                            className="mt-1 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-3 py-2 border"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="justify-between p-6 flex w-full">
                      <button
                        className="px-6 py-2 rounded-md border text-sm"
                        onClick={() => {
                          setStepper(STEPPER.STEP_1);
                        }}
                      >
                        Kembali
                      </button>
                      <button
                        className="bg-blue-base text-white px-6 py-2 rounded-md disabled:opacity-50 text-sm"
                        disabled={!selection}
                        onClick={() => {
                          setStepper(STEPPER.STEP_3);
                        }}
                      >
                        Selanjutnya
                      </button>
                    </div>
                  </>
                ) : stepper === STEPPER.STEP_3 ? (
                  <>
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-semibold text-black border-b border-gray-300 px-6 py-5"
                    >
                      Konfirmasi
                    </Dialog.Title>
                    <Dialog.Description className="px-6 pt-4 text-black">
                      <p className="text-lg">
                        Apakah anda yakin ingin mengikuti assesmen ini?
                      </p>
                    </Dialog.Description>
                    <div className="justify-between p-6 flex w-full">
                      <button
                        className="px-6 py-2 rounded-md border text-sm"
                        onClick={() => {
                          selection === 'partner'
                            ? setStepper(STEPPER.STEP_2)
                            : setStepper(STEPPER.STEP_1);
                        }}
                      >
                        Kembali
                      </button>
                      <button
                        className="bg-blue-base text-white px-6 py-2 rounded-md text-sm disabled:opacity-50 w-[100px]"
                        onClick={onSubmit}
                        disabled={isLoading}
                      >
                        {isLoading ? <LoadingButton /> : 'Ikuti'}
                      </button>
                    </div>
                  </>
                ) : null}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

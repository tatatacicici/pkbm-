import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

enum STEPPER {
  STEP_1,
  STEP_2,
}

export default function PopupModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const [stepper, setStepper] = useState(STEPPER.STEP_1);
  const [isFree, setIsFree] = useState('');

  return (
    <Transition appear show={isOpen}>
      <Dialog
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={() => setIsOpen(!isOpen)}
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
                        Atur jadwal konsultasi anda dengan konselor
                      </p>
                      <div
                        className={`cursor-pointer p-4 rounded-lg bg-gray-100 hover:bg-gray-200/70 transition border-[1.5px] 
                       ${isFree === 'free' && 'border-black/60 !bg-white'}
                      `}
                        onClick={() => setIsFree('free')}
                      >
                        <div className="flex items-center gap-2">
                          <Image
                            src="/images/simulasi-dan-roleplay/free-icon.png"
                            alt="icon"
                            width={20}
                            height={20}
                          />

                          <h4 className="font-semibold text-lg">Gratis</h4>
                        </div>
                        <p className="text-sm/6 text-black/50">
                          Penilaian berdasarkan Artificial Intelligence
                        </p>
                      </div>
                      <div
                        className={`cursor-pointer p-4 rounded-lg bg-gray-100 hover:bg-gray-200/70 transition border-[1.5px]
                       ${isFree === 'paid' && 'border-black/60 !bg-white'}
                      `}
                        onClick={() => setIsFree('paid')}
                      >
                        <div className="flex justify-between w-full">
                          <div className="flex items-center gap-2">
                            <Image
                              src="/images/simulasi-dan-roleplay/paid-icon.png"
                              alt="icon"
                              width={20}
                              height={20}
                            />
                            <h4 className="font-semibold text-lg">Berbayar</h4>
                          </div>
                          <p className="font-semibold text-lg text-orange-base">
                            Rp. 250.000
                          </p>
                        </div>
                        <p className="text-sm/6 text-black/50">
                          Penilaian dilakukan oleh konselor
                        </p>
                      </div>
                    </div>
                  </>
                ) : stepper === STEPPER.STEP_2 ? (
                  <>
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-semibold text-black border-b border-gray-300 px-6 py-5"
                    >
                      Konfirmasi
                    </Dialog.Title>
                    <Dialog.Description className="px-6 pt-4 text-black">
                      <p className="text-lg">
                        Apakah anda yakin jawaban anda sudah benar?
                      </p>
                    </Dialog.Description>
                  </>
                ) : null}
                <div
                  className={`flex p-6
                ${
                  stepper === STEPPER.STEP_1 ? 'justify-end' : 'justify-between'
                }
                `}
                >
                  {stepper === STEPPER.STEP_2 && (
                    <button
                      className="px-6 py-2 rounded-md border text-sm"
                      onClick={() => setStepper(STEPPER.STEP_1)}
                    >
                      Kembali
                    </button>
                  )}
                  <button
                    className="bg-blue-base text-white px-6 py-2 rounded-md disabled:opacity-50 text-sm"
                    disabled={!isFree}
                    onClick={() => {
                      stepper === STEPPER.STEP_1
                        ? setStepper(STEPPER.STEP_2)
                        : router.push(`${pathname}/pembayaran`);
                    }}
                  >
                    {stepper === STEPPER.STEP_1 ? 'Lanjut' : 'Simpan'}
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

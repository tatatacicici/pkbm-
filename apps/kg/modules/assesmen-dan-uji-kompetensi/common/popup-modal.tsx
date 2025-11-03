import { Dialog, Transition } from '@headlessui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function PopupModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) {
  const pathname = usePathname();
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
              <Dialog.Panel className="w-full max-w-lg rounded-xl bg-white space-y-4">
                <Dialog.Title
                  as="h3"
                  className="text-2xl font-semibold text-black text-center pt-8"
                >
                  Lanjutkan Pembayaran
                </Dialog.Title>
                <div className="border-2 rounded-full border-blue-base w-1/4 mx-auto"></div>
                <Dialog.Description className="px-6 text-black">
                  <p className="text-md text-gray-500 text-center">
                    Pelaksanaan uji asesmen dan kompetensi melibatkan kerjasama
                    dengan pihak eksternal dan memerlukan pembayaran biaya
                  </p>
                </Dialog.Description>
                <div className="flex gap-2 p-6">
                  <button
                    type="button"
                    className="px-4 py-2 rounded-md border w-full border-blue-base text-blue-base"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    Batal
                  </button>
                  <Link href={`${pathname}/pembayaran`} className="w-full">
                    <button
                      type="button"
                      className="px-4 py-2 rounded-md bg-blue-base text-white w-full"
                    >
                      Lanjutkan Pembayaran
                    </button>
                  </Link>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

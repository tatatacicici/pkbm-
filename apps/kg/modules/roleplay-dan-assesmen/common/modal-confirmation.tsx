import { Dialog, Transition } from '@headlessui/react';
import { LoadingButton } from '@kampus-gratis/components/molecules';

export default function ModalConfirmation({
  isOpen,
  setIsOpen,
  text,
  onSubmit,
  buttonText,
  isLoading,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  text?: string | JSX.Element;
  onSubmit?: () => void;
  buttonText?: string;
  isLoading?: boolean;
}) {
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
                <Dialog.Title
                  as="h3"
                  className="text-lg font-semibold text-black border-b border-gray-300 px-6 py-5"
                >
                  Konfirmasi
                </Dialog.Title>
                <Dialog.Description className="px-6 pt-4 text-black">
                  <p className="text-lg">{text}</p>
                </Dialog.Description>
                <div className="justify-end gap-2 p-6 flex w-full">
                  <button
                    className="px-6 py-2 rounded-md border text-sm"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    Batal
                  </button>
                  <button
                    className="bg-blue-base text-white px-6 py-2 rounded-md text-sm disabled:opacity-50 min-w-[100px]"
                    disabled={isLoading}
                    onClick={() => {
                      onSubmit && onSubmit();
                    }}
                  >
                    {isLoading ? <LoadingButton /> : buttonText || 'Konfirmasi'}
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

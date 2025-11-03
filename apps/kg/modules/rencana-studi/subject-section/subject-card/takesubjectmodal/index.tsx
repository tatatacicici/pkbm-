import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';

export default function TakeSubjectModal({
  subjectCategory,
  isOpen,
  closeModal,
  handleClick,
}: {
  subjectCategory: string | undefined;
  isOpen: boolean;
  closeModal: () => void;
  handleClick: () => void;
}) {
  return (
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
          <div className="flex min-h-full items-center justify-center px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full sm:min-w-[600px] max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-center align-middle shadow-xl transition-all flex justify-center items-center flex-col py-10">
                <BsCheckCircleFill size={50} color="#3EB449" className="mb-3" />
                <Dialog.Title
                  as="h3"
                  className="text-lg font-semibold leading-6 text-gray-900 mb-3 mt-2"
                >
                  Apakah Anda yakin ingin mengikuti {subjectCategory === "COLLEGE" ? "Mata Kuliah" : subjectCategory === "BOOTCAMP" ? "Bootcamp" : "Studi"} ini ?
                </Dialog.Title>
                <p className="text-sm text-gray-500">
                  Cek kembali pengajuan dengan benar!
                </p>
                <div className="flex gap-2 justify-center flex-col md:flex-row w-full md:w-1/2 mt-6 font-medium">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="text-primary-500 py-1.5 bg-white rounded-md border-2 border-primary-500 border-solid w-full"
                  >
                    Batal
                  </button>
                  <button
                    type="button"
                    onClick={handleClick}
                    className="text-white py-2 bg-primary-500 rounded-md w-full"
                  >
                    Daftar
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

import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

export default function ConfirmModalTeacherAssesment({
  isOpen,
  closeModal,
  confirmAction,
  title,
  description,
  confirmText,
  cancelText,
  isSubmitting,
}: {
  isOpen: boolean;
  closeModal: () => void;
  confirmAction: () => void;
  title: string;
  description: string;
  confirmText: string;
  cancelText: string;
  isSubmitting?: boolean;
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

        <div className="fixed inset-0">
          <div className="flex min-h-full items-center justify-center px-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white align-middle shadow-xl transition-all flex justify-center items-center flex-col">
                <div className="w-full p-6">
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {title}
                    </h3>
                    <p className="text-md text-gray-500 mt-2">{description}</p>
                  </div>
                  <div className="flex justify-center mt-6 gap-2">
                    <button
                      onClick={closeModal}
                      className="px-6 py-2 bg-gray-200 text-gray-600 rounded-md hover:bg-gray-300 transition-all"
                      disabled={isSubmitting}
                    >
                      {cancelText}
                    </button>
                    <button
                      onClick={confirmAction}
                      className="px-6 py-2 bg-sky-base text-white rounded-md hover:bg-sky-base/80 transition-all"
                      disabled={isSubmitting}
                    >
                      {confirmText}
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

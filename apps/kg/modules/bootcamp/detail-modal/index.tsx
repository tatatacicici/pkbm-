import { Dialog, Transition } from '@headlessui/react';
import { Button } from '@kampus-gratis/components/atoms';
import { LoadingButton } from '@kampus-gratis/components/molecules';
import { useTakeSubjectPlan } from 'apps/kg/hooks/rencana-studi/hooks';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Fragment, useState } from 'react';
import toast from 'react-hot-toast';

enum STEPPER {
  STEP_1,
  STEP_2,
  STEP_3,
}

export default function DetailBootcampModal({
  id,
  isOpen,
  setIsOpen,
  thumbnail,
  name,
  level,
  start_at,
  description,
  is_taken,
  is_available,
  total_session,
  brochure,
}: {
  id?: string;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  thumbnail: string;
  name: string;
  level: number;
  start_at?: string;
  description?: string;
  is_taken?: boolean;
  is_available?: boolean;
  total_session?: number;
  brochure?: string;
}) {
  const [stepper, setStepper] = useState(STEPPER.STEP_1);

  const { data: session } = useSession();
  const { mutate, isLoading } = useTakeSubjectPlan();

  const router = useRouter();

  const isOverdue = new Date(start_at || '').getTime() < new Date().getTime();

  const handleTakeSubject = () => {
    try {
      mutate(id as string, {
        onSuccess: () => {
          toast.success('Berhasil Mendaftar Pelatihan');
          setStepper(STEPPER.STEP_3);
        },
        onError: (error) => {
          if (
            error.response?.data &&
            error.response?.data.message === 'Subject cannot be taken yet'
          ) {
            toast.error('Pelatihan Ini Belum Tersedia');
          } else if (
            error.response?.data &&
            error.response?.data.message === 'You already enroll this Subject'
          ) {
            toast.error('Kamu Telah Memilih Pelatihan Ini');
          } else if (
            error.response?.data &&
            error.response?.data.message ===
              'You can only take 2 group subjects or skill'
          ) {
            toast.error('Hanya Bisa Memilih 2 Pelatihan');
          } else {
            const errorMessage = error.response?.data.message;
            toast.error(`${errorMessage}`);
          }
          setIsOpen(false);
        },
      });
    } catch (err) {
      return err;
    }
  };

  const redirectLogin = () => {
    closeModal();
    router.push(
      '/auth/login?callbackUrl=https%3A%2F%2Fkampusgratis.id%2Fbootcamp'
    );
  };

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => {
      setStepper(STEPPER.STEP_1);
    }, 300);
  };

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
                <Image
                  src={thumbnail}
                  loading="lazy"
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vh"
                  style={{
                    width: 'auto',
                    minWidth: '100%',
                    height: '150px',
                    objectFit: 'cover',
                  }}
                  className="rounded-t-lg w-full"
                />
                <div className="p-6 pt-4 w-full">
                  {stepper === STEPPER.STEP_1 ? (
                    <>
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-semibold leading-6 text-gray-900 mb-1 text-start"
                      >
                        {name}
                      </Dialog.Title>
                      <div className="flex gap-2 items-center justify-start">
                        <div
                          className={`text-white px-2 py-1 text-[10px] rounded-md font-semibold z-10
                        ${
                          level === 1
                            ? 'bg-blue-500'
                            : level === 2
                            ? 'bg-green-500'
                            : 'bg-rose-500'
                        }
                        `}
                        >
                          <span>
                            {level === 1
                              ? ' Basic'
                              : level === 2
                              ? ' Intermediate'
                              : ' Advance'}
                          </span>
                        </div>
                        {start_at && start_at && (
                          // <div className="w-max text-primary-base text-sm">
                          <div className="w-max text-sky-base text-sm">
                            <p>
                              Mulai :{' '}
                              {new Date(start_at).toLocaleDateString('id-ID', {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric',
                              })}
                            </p>
                          </div>
                        )}
                      </div>
                      {isOverdue && (
                        <p className="text-warning-base text-sm pt-1">
                          {' '}
                          Pelatihan ini sudah di mulai, silahkan mendaftar pada
                          batch di bulan september dan oktober
                        </p>
                      )}
                      <p className="text-sm text-gray-500 text-start  max-h-[180px]">
                        Klik Detail untuk melihat informasi lebih lanjut
                      </p>
                      <div className="flex items-center gap-2 w-full justify-between pt-4 flex-row">
                        <Link
                          href={brochure || ''}
                          target="_blank"
                          className="w-full"
                        >
                          {/* <Button
                            type="button"
                            className="inline-flex justify-center items-center w-full px-3 py-1.5 font-medium text-center text-primary-500 border-2 border-primary-500 rounded-lg hover:bg-gray-100 focus:outline-none"
                          > */}
                          <Button
                            type="button"
                            className="inline-flex justify-center items-center w-full px-3 py-1.5 font-medium text-center text-sky-base border-2 border-sky-base rounded-lg hover:bg-sky-base hover:text-white focus:outline-none transition-all"
                          >
                            Detail
                          </Button>
                        </Link>
                        <Button
                          type="button"
                          // className={`inline-flex justify-center items-center w-full px-3 py-2 font-medium text-center text-white bg-primary-500 rounded-lg hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-blue-300 disabled:bg-gray-300 disabled:cursor-not-allowed
                          //   ${is_taken ? '!bg-success-base/50' : ''}
                          //   `}
                          className={`inline-flex justify-center items-center w-full px-3 py-2 font-medium text-center text-white bg-sky-base rounded-lg hover:bg-sky-base/80 focus:ring-4 focus:outline-none focus:ring-blue-300 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all
                            ${is_taken ? '!bg-success-base/50' : ''}
                            `}
                          disabled={
                            is_taken ||
                            !is_available ||
                            total_session === 0 ||
                            isOverdue
                          }
                          onClick={() => {
                            setStepper(STEPPER.STEP_2);
                          }}
                        >
                          {is_taken
                            ? 'Terdaftar'
                            : !is_available || total_session === 0 || isOverdue
                            ? 'Tidak Tersedia'
                            : 'Daftar'}
                        </Button>
                      </div>
                    </>
                  ) : stepper === STEPPER.STEP_2 ? (
                    <>
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-semibold leading-6 text-gray-900 mb-1"
                      >
                        {session
                          ? `Apakah Anda yakin ingin mengikuti pelatihan ${name}`
                          : 'Anda harus login untuk mengikuti pelatihan'}
                      </Dialog.Title>
                      <p className="text-sm text-gray-500">
                        {session
                          ? 'Cek kembali pengajuan dengan benar!'
                          : 'Silahkan login terlebih dahulu'}
                      </p>
                      <div className="flex gap-2 justify-center w-full mt-6 font-medium">
                        <button
                          type="button"
                          onClick={() => setStepper(STEPPER.STEP_1)}
                          className="text-sky-base py-1.5 bg-white rounded-md border-2 border-sky-base border-solid w-full hover:bg-sky-base hover:text-white transition-all"
                        >
                          Kembali
                        </button>
                        <button
                          type="button"
                          onClick={session ? handleTakeSubject : redirectLogin}
                          className={`text-white py-2 bg-sky-base rounded-md w-full hover:opacity-80 transition-all ${
                            isLoading ? 'cursor-not-allowed' : ''
                          }`}
                        >
                          {isLoading ? (
                            <LoadingButton />
                          ) : session ? (
                            'Daftar'
                          ) : (
                            'Login '
                          )}
                        </button>
                      </div>
                    </>
                  ) : stepper === STEPPER.STEP_3 ? (
                    <>
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-semibold leading-6 text-gray-900 mb-1 mt-2"
                      >
                        Selamat kamu telah berhasil mendaftar pelatihan!
                      </Dialog.Title>
                      <p className="text-sm text-gray-500">
                        Silahkan cek
                        <span className="font-semibold text-warning-base">
                          {' '}
                          email{' '}
                        </span>
                        yang anda daftarkan untuk informasi lebih lanjut.
                      </p>
                      <div className="flex gap-2 justify-center flex-col md:flex-row w-full mt-4 font-medium">
                        <button
                          type="button"
                          onClick={() => router.push('/beranda')}
                          className="text-white py-2 bg-primary-500 rounded-md w-full"
                        >
                          Kembali ke Beranda
                        </button>
                      </div>
                    </>
                  ) : null}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

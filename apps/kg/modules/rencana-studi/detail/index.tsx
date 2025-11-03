'use client';

import { FC, Fragment, useState } from 'react';

import { Dialog, Transition } from '@headlessui/react';

import UndefinedImg from '../../../public/images/mystudy/mystudy-module/orang-bingung.svg';

import { Tab } from '@headlessui/react';
import {
  BreadCrumb,
  Button,
  LoadingSpinner,
} from '@kampus-gratis/components/atoms';
import Image from 'next/image';
import { BsCheckCircleFill } from 'react-icons/bs';
import { toast } from 'react-toastify';
import {
  useGetDetailStudyPlan,
  useTakeSubjectPlan,
} from '../../../hooks/rencana-studi/hooks';
import DeskripsiSection from './section/deskripsi';
import PertemuanSection from './section/pertemuan';
import SideSectionDetail from './section/side';

type PropsType = {
  id: string;
};

const DetailStudyplanModule: FC<PropsType> = ({ id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { data, isLoading } = useGetDetailStudyPlan(id);

  const { mutate } = useTakeSubjectPlan();

  const detailSubjects = data?.data;

  const detailStudyPlanBreadcrumb = [
    {
      name: 'Beranda',
      link: '/',
    },
    {
      name: 'Rencana Belajar',
      link: '/rencana-studi',
    },
    {
      name: `${detailSubjects?.name}`,
      link: `/rencana-studi/detail-rencana-studi/${detailSubjects?.id}`,
    },
  ];

  const [active, setactive] = useState('deskripsi');

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleClick = () => {
    try {
      if (detailSubjects?.id) {
        const subjectIdValue = detailSubjects.id;
        mutate(subjectIdValue, {
          onSuccess: () => {
            toast.success('Berhasil Mengajukan Mata kuliah', {
              position: 'top-right',
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'light',
            });
          },
          onError: (error) => {
            if (
              error.response?.data &&
              error.response?.data.message === 'Subject cannot be taken yet'
            ) {
              toast.error('Pembelajaran Ini Belum Tersedia', {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
              });
            } else if (
              error.response?.data &&
              error.response?.data.message === 'You already enroll this Subject'
            ) {
              toast.error('Kamu Telah Memilih Mata Kuliah Ini', {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
              });
            } else {
              const errorMessage = error.response?.data.message;
              toast.error(`Error: ${errorMessage}`, {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
              });
            }
          },
        });
        closeModal();
      }
    } catch (err) {
      return err;
    }
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <BreadCrumb bgColor="bg-neutral-50" items={detailStudyPlanBreadcrumb} />
      <main className="py-2 px-1 md:px-7 lg:px-16 bg-neutral-50 min-h-[calc(100vh-193px)] w-full overflow-hidden">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row gap-5 max-h-max">
            <section className="w-full h-max bg-white rounded-lg p-6">
              <Image
                src={detailSubjects?.detail?.thumbnail ?? UndefinedImg}
                alt="detail-matakuliah"
                width={1000}
                height={500}
                className="object-cover rounded-lg shadow-md max-h-[500px] w-full mx-auto"
                priority
                quality={100}
              />
              <div className="flex flex-col lg:flex-row mt-10">
                <section className="w-full flex flex-col gap-1">
                  <h1 className="text-xl md:text-2xl font-semibold">
                    {detailSubjects?.name}
                  </h1>
                </section>
                <section className="flex gap-2 lg:justify-end items-center my-7 lg:my-0">
                  <Button
                    type="button"
                    onClick={
                      detailSubjects?.detail?.is_taken ? undefined : openModal
                    }
                    disabled={detailSubjects?.detail?.is_taken}
                    className={`flex py-2 px-3 rounded-md gap-2 justify-center items-center ${
                      detailSubjects?.detail?.is_taken
                        ? 'bg-gray-300 text-gray-500 cursor-default'
                        : 'bg-primary-500 text-white'
                    }`}
                  >
                    {detailSubjects?.detail?.is_taken
                      ? 'Diambil'
                      : 'Mengajukan'}
                  </Button>

                  {/* Modal */}
                  <Transition appear show={isOpen} as={Fragment}>
                    <Dialog
                      as="div"
                      className="relative z-[100]"
                      onClose={closeModal}
                    >
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
                              <BsCheckCircleFill
                                size={30}
                                color="#3EB449"
                                className="mb-3"
                              />
                              <Dialog.Title
                                as="h3"
                                className="text-lg font-semibold leading-6 text-gray-900 mb-3"
                              >
                                Apakah Anda yakin ingin mengajukan Mata
                                Pelajaran ini ?
                              </Dialog.Title>
                              <p className="text-sm text-gray-500">
                                Cek kembali pengajuan dengan benar!
                              </p>
                              <div className="flex gap-3 justify-center w-full mt-6">
                                <button
                                  type="button"
                                  onClick={closeModal}
                                  className="text-primary-500 px-5 py-1 bg-white rounded-lg border-2 border-primary-500 border-solid"
                                >
                                  Batal
                                </button>
                                <button
                                  type="button"
                                  onClick={handleClick}
                                  className="text-white px-5 py-1 bg-primary-500 rounded-lg border-2 border-transparent border-solid"
                                >
                                  Ajukan
                                </button>
                              </div>
                            </Dialog.Panel>
                          </Transition.Child>
                        </div>
                      </div>
                    </Dialog>
                  </Transition>
                  {/* End Modal */}
                </section>
              </div>
              <div className="my-3">
                <Tab.Group>
                  <Tab.List
                    as={'div'}
                    className="flex gap-6 px-2 mb-10 text-lg font-medium border-b-2 text-neutral-400"
                  >
                    <Tab
                      className={`${
                        active === 'deskripsi'
                          ? 'border-b-2 outline-none  border-primary-500 text-primary-500'
                          : ''
                      } py-2 px-4 cursor-pointer`}
                      onClick={() => {
                        setactive('deskripsi');
                      }}
                    >
                      Deskripsi
                    </Tab>
                    <Tab
                      className={`${
                        active === 'pertemuan'
                          ? 'border-b-2 outline-none  border-primary-500 text-primary-500'
                          : ''
                      } py-2 px-4 cursor-pointer`}
                      onClick={() => {
                        setactive('pertemuan');
                      }}
                    >
                      Pertemuan
                    </Tab>
                  </Tab.List>
                  <Tab.Panels>
                    <Tab.Panel>
                      <DeskripsiSection data={detailSubjects} />
                    </Tab.Panel>
                    <Tab.Panel>
                      <PertemuanSection id={id} />
                    </Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>
              </div>
            </section>
            <section className="basis-1/2 py-2 px-4">
              <SideSectionDetail />
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default DetailStudyplanModule;

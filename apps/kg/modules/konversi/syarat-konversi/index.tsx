import { Dialog, Transition } from '@headlessui/react';
import { TSyaratKonversi } from '../../../types/konversi';
import { Fragment } from 'react';

const SyaratKonversi = ({ isOpen, handleClose }: TSyaratKonversi) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[100]" onClose={handleClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
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
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-5 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-xs lg:text-lg font-semibold leading-6 text-white bg-blue-base text-center py-2 px-1 rounded-lg"
                >
                  REKOGNISI PEMBELAJARAN LAMPAU (Konversi)
                </Dialog.Title>
                <div className="mt-2 text-sm h-80 overflow-y-auto">
                  <p>
                    Secara umum konversi mata kuliah dilakukan dengan mengikuti
                    tahapan berikut.
                  </p>
                  <br />
                  <p>
                    1. Menganalisis dan memetakan struktur Kurikulum sebelumnya
                    dengan Kurikulum Paket-C Gratis.
                  </p>
                  <p>
                    2. Melakukan konversi mata kuliah dari kurikulum sebelumnya
                    ke Kurikulum Paket-C Gratis menggunakan acuan sebagai
                    berikut:
                    <br />
                    <br />
                    <p>
                      2.1 Kesetaraan nama mata kuliah antara mata kuliah dalam
                      kurikulum sebelumnya ke Kurikulum Paket-C Gratis. Contoh
                      Mata Kuliah Pancasila dan Kewarganegaraan (2 sks) dan Mata
                      Kuliah Pendidikan Sosial Budaya (2 sks) disetarakan dengan
                      Mata Kuliah Pancasila (2 sks) dan Kewarganegaraan (2 sks).
                    </p>
                    <p>
                      2.2 Kesetaraan bobot sks antara mata kuliah dalam
                      kurikulum sebelumnya ke Kurikulum Paket-C Gratis ditinjau
                      dari aspek:
                      <br />
                      <br />
                      <p>
                        2.2.1 Waktu yang dibutuhkan oleh mahasiswa untuk dapat
                        mencapai suatu kompetensi/learning outcomes dengan
                        metode pembelajaran yang dipilih.
                      </p>
                      <p>
                        2.2.2 Waktu yang dibutuhkan mahasiswa untuk menguasai
                        bahan/ materi ajar dengan kedalaman dan keluasan yang
                        ditetapkan.
                      </p>
                      <p>
                        2.2.3 Besarnya beban belajar mahasiswa dalam pencapaian
                        kompetensi/ learning outcomes lulusan, yang ditunjukkan
                        oleh besarnya sks setiap mata kuliah dibandingkan dengan
                        keseluruhan beban studi di tiap semester.
                      </p>
                    </p>
                  </p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={handleClose}
                  >
                    Got it, thanks!
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default SyaratKonversi;

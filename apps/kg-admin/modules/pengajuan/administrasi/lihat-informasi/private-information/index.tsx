'use client';
import Image from 'next/image';
import { Accordion } from '../../../../../components/accordion/index';
import { optionsLastEducation } from '../../constant';

const PrivateInformation = ({ dataPribadi, dataAdm }: any) => {
  //Equates to constant value

  // Last Education
  const matchedOptionLastEducation = optionsLastEducation.find(
    (option) => option.value === dataPribadi?.last_education
  );
  return (
    <div>
      <Accordion idAccordion="private-information" title="Informasi Pribadi">
        <div className="bg-white shadow-lg rounded-lg mt-5 w-full p-5">
          {dataPribadi && dataAdm ? (
            <div>
              <div className="flex w-full gap-[55px]">
                <div className="w-full grid grid-cols-2 gap-5">
                  <div className="cols-left">
                    <div className="form-label mb-3">
                      <label className="text-neutral-700 text-[16px] font-semibold">
                        Nama Lengkap{' '}
                        <span className="ml-1 font-semibold text-error-600">
                          *
                        </span>
                      </label>
                      <div className="outline outline-none focus:outline-none !border-2 !border-grey-200 bg-grey-200 py-2 w-full rounded-md mt-3 ">
                        <div className="ml-4 text-neutral-700">
                          {dataPribadi?.full_name}
                        </div>
                      </div>
                    </div>
                    <div className="form-label mb-3">
                      <label className="text-neutral-700 text-[16px] font-semibold">
                        Jenis Kelamin{' '}
                        <span className="ml-1 font-semibold text-error-600">
                          *
                        </span>
                      </label>
                      <div className="outline outline-none focus:outline-none !border-2 !border-grey-200 bg-grey-200 py-2 w-full rounded-md mt-3 ">
                        <div className="ml-4 text-neutral-700">
                          {dataPribadi?.gender === 'MALE'
                            ? 'Laki-laki'
                            : 'Perempuan'}
                        </div>
                      </div>
                    </div>
                    <div className="form-label mb-3">
                      <label className="text-neutral-700 text-[16px] font-semibold">
                        Tempat Lahir{' '}
                        <span className="ml-1 font-semibold text-error-600">
                          *
                        </span>
                      </label>
                      <div className="outline outline-none focus:outline-none !border-2 !border-grey-200 bg-grey-200 py-2 w-full rounded-md mt-3 ">
                        <div className="ml-4 text-neutral-700">
                          {dataPribadi?.birthplace}
                        </div>
                      </div>
                    </div>
                    <div className="form-label mb-3">
                      <label className="text-neutral-700 text-[16px] font-semibold">
                        Alamat Lengkap{' '}
                        <span className="ml-1 font-semibold text-error-600">
                          *
                        </span>
                      </label>
                      <div className="outline outline-none focus:outline-none !border-2 !border-grey-200 bg-grey-200 py-2 w-full rounded-md mt-3 ">
                        <div className="ml-4 text-neutral-700">
                          {dataPribadi?.address}
                        </div>
                      </div>
                    </div>
                    <div className="form-label mb-3">
                      {/* <label className="text-neutral-700 text-[16px] font-semibold">
                        NIM atau NPM{' '}
                        <span className="font-normal">(opsional)</span>{' '}
                      </label> */}
                      <label className="text-neutral-700 text-[16px] font-semibold">
                        NISN <span className="font-normal">(opsional)</span>{' '}
                      </label>
                      <div className="outline outline-none focus:outline-none !border-2 !border-grey-200 bg-grey-200 py-2 w-full rounded-md mt-3 ">
                        <div className="ml-4 text-neutral-700">
                          {dataPribadi?.nim === null || dataPribadi?.nim === ''
                            ? 'Tidak Ada Data NIM atau NPM'
                            : dataPribadi?.nim}
                        </div>
                      </div>
                    </div>
                    <div className="form-label mb-3">
                      <label className="text-neutral-700 text-[16px] font-semibold">
                        Program Studi{' '}
                        <span className="font-normal">(opsional)</span>{' '}
                      </label>
                      <div className="outline outline-none focus:outline-none !border-2 !border-grey-200 bg-grey-200 py-2 w-full rounded-md mt-3 ">
                        <div className="ml-4 text-neutral-700">
                          {dataPribadi?.major === null ||
                          dataPribadi?.major === ''
                            ? 'Tidak Ada Data Program Studi'
                            : dataPribadi?.major}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="cols-right">
                    <div className="form-label mb-3">
                      <label className="text-neutral-700 text-[16px] font-semibold">
                        Alamat Email{' '}
                        <span className="ml-1 font-semibold text-error-600">
                          *
                        </span>
                      </label>
                      <div className="outline outline-none focus:outline-none !border-2 !border-grey-200 bg-grey-200 py-2 w-full rounded-md mt-3 ">
                        <div className="ml-4 text-neutral-700">
                          {dataAdm?.email}
                        </div>
                      </div>
                    </div>
                    <div className="form-label mb-3">
                      <label className="text-neutral-700 text-[16px] font-semibold">
                        Nomor Handphone{' '}
                        <span className="ml-1 font-semibold text-error-600">
                          *
                        </span>
                      </label>
                      <div className="outline outline-none focus:outline-none !border-2 !border-grey-200 bg-grey-200 py-2 w-full rounded-md mt-3 ">
                        <div className="ml-4 text-neutral-700">
                          {dataAdm?.phone_number}
                        </div>
                      </div>
                    </div>
                    <div className="form-label mb-3">
                      <label className="text-neutral-700 text-[16px] font-semibold">
                        Tanggal Lahir{' '}
                        <span className="ml-1 font-semibold text-error-600">
                          *
                        </span>
                      </label>
                      <div className="outline outline-none focus:outline-none !border-2 !border-grey-200 bg-grey-200 py-2 w-full rounded-md mt-3 ">
                        <div className="ml-4 text-neutral-700">
                          {dataPribadi?.birthdate.slice(0, 10)}
                        </div>
                      </div>
                    </div>
                    <div className="form-label mb-3">
                      <label className="text-neutral-700 text-[16px] font-semibold">
                        Pendidikan Terakhir{' '}
                        <span className="ml-1 font-semibold text-error-600">
                          *
                        </span>
                      </label>
                      <div className="outline outline-none focus:outline-none !border-2 !border-grey-200 bg-grey-200 py-2 w-full rounded-md mt-3 ">
                        <div className="ml-4 text-neutral-700">
                          {matchedOptionLastEducation
                            ? matchedOptionLastEducation.label
                            : 'Last Education not found'}
                        </div>
                      </div>
                    </div>
                    <div className="form-label mb-3">
                      <label className="text-neutral-700 text-[16px] font-semibold">
                        Universitas Asal{' '}
                        <span className="font-normal">(opsional)</span>{' '}
                      </label>
                      <div className="outline outline-none focus:outline-none !border-2 !border-grey-200 bg-grey-200 py-2 w-full rounded-md mt-3 ">
                        <div className="ml-4 text-neutral-700">
                          {dataPribadi?.university === null ||
                          dataPribadi?.university === ''
                            ? 'Tidak Ada Data Universitas'
                            : dataPribadi?.university}
                        </div>
                      </div>
                    </div>
                    <div className="form-label mb-3">
                      <label className="text-neutral-700 text-[16px] font-semibold">
                        Semester <span className="font-normal">(opsional)</span>{' '}
                      </label>
                      <div className="outline outline-none focus:outline-none !border-2 !border-grey-200 bg-grey-200 py-2 w-full rounded-md mt-3 ">
                        <div className="ml-4 text-neutral-700">
                          {dataPribadi?.semester === null ||
                          dataPribadi?.semester === ''
                            ? 'Tidak Ada Data Semester'
                            : dataPribadi?.semester}
                        </div>
                      </div>
                    </div>

                    {/* Data Baru Pendidikan SD */}
                    <div className="form-label mb-3">
                      <label className="text-neutral-700 text-[16px] font-semibold">
                        Nama Sekolah Dasar (SD){' '}
                        <span className="font-normal">(opsional)</span>{' '}
                      </label>
                      <div className="outline outline-none focus:outline-none !border-2 !border-grey-200 bg-grey-200 py-2 w-full rounded-md mt-3 ">
                        <div className="ml-4 text-neutral-700">
                          {dataPribadi?.school_name_sd === null ||
                          dataPribadi?.school_name_sd === ''
                            ? 'Tidak Ada Data Nama Sekolah Dasar (SD)'
                            : dataPribadi?.school_name_sd}
                        </div>
                      </div>
                    </div>
                    <div className="form-label mb-3">
                      <label className="text-neutral-700 text-[16px] font-semibold">
                        Tahun Masuk{' '}
                        <span className="font-normal">(opsional)</span>{' '}
                      </label>
                      <div className="outline outline-none focus:outline-none !border-2 !border-grey-200 bg-grey-200 py-2 w-full rounded-md mt-3 ">
                        <div className="ml-4 text-neutral-700">
                          {dataPribadi?.entry_year_sd === null ||
                          dataPribadi?.entry_year_sd === ''
                            ? 'Tidak Ada Data Tahun Masuk'
                            : dataPribadi?.entry_year_sd}
                        </div>
                      </div>
                    </div>
                    <div className="form-label mb-3">
                      <label className="text-neutral-700 text-[16px] font-semibold">
                        Tahun Lulus{' '}
                        <span className="font-normal">(opsional)</span>{' '}
                      </label>
                      <div className="outline outline-none focus:outline-none !border-2 !border-grey-200 bg-grey-200 py-2 w-full rounded-md mt-3 ">
                        <div className="ml-4 text-neutral-700">
                          {dataPribadi?.graduation_year_sd === null ||
                          dataPribadi?.graduation_year_sd === ''
                            ? 'Tidak Ada Data Tahun Lulus'
                            : dataPribadi?.graduation_year_sd}
                        </div>
                      </div>
                    </div>
                    <div className="form-label mb-3">
                      <label className="text-neutral-700 text-[16px] font-semibold">
                        Ijazah SD{' '}
                        <span className="font-normal">(opsional)</span>{' '}
                      </label>
                      <div className="outline outline-none focus:outline-none !border-2 !border-grey-200 bg-grey-200 py-2 w-full rounded-md mt-3 ">
                        <div className="ml-4 text-neutral-700">
                          {dataPribadi?.diploma_sd === null ||
                          dataPribadi?.diploma_sd === ''
                            ? 'Tidak Ada Data Ijazah SD'
                            : dataPribadi?.diploma_sd}
                        </div>
                      </div>
                    </div>

                    {/* Data Baru Pendidikan SMP */}
                    <div className="form-label mb-3">
                      <label className="text-neutral-700 text-[16px] font-semibold">
                        Nama Sekolah Menengah Pertama (SMP){' '}
                        <span className="font-normal">(opsional)</span>{' '}
                      </label>
                      <div className="outline outline-none focus:outline-none !border-2 !border-grey-200 bg-grey-200 py-2 w-full rounded-md mt-3 ">
                        <div className="ml-4 text-neutral-700">
                          {dataPribadi?.school_name_smp === null ||
                          dataPribadi?.school_name_smp === ''
                            ? 'Tidak Ada Data Nama Sekolah Menengah Pertama (SMP)'
                            : dataPribadi?.school_name_smp}
                        </div>
                      </div>
                    </div>
                    <div className="form-label mb-3">
                      <label className="text-neutral-700 text-[16px] font-semibold">
                        Tahun Masuk{' '}
                        <span className="font-normal">(opsional)</span>{' '}
                      </label>
                      <div className="outline outline-none focus:outline-none !border-2 !border-grey-200 bg-grey-200 py-2 w-full rounded-md mt-3 ">
                        <div className="ml-4 text-neutral-700">
                          {dataPribadi?.entry_year_smp === null ||
                          dataPribadi?.entry_year_smp === ''
                            ? 'Tidak Ada Data Tahun Masuk'
                            : dataPribadi?.entry_year_smp}
                        </div>
                      </div>
                    </div>
                    <div className="form-label mb-3">
                      <label className="text-neutral-700 text-[16px] font-semibold">
                        Tahun Lulus{' '}
                        <span className="font-normal">(opsional)</span>{' '}
                      </label>
                      <div className="outline outline-none focus:outline-none !border-2 !border-grey-200 bg-grey-200 py-2 w-full rounded-md mt-3 ">
                        <div className="ml-4 text-neutral-700">
                          {dataPribadi?.graduation_year_smp === null ||
                          dataPribadi?.graduation_year_smp === ''
                            ? 'Tidak Ada Data Tahun Lulus'
                            : dataPribadi?.graduation_year_smp}
                        </div>
                      </div>
                    </div>
                    <div className="form-label mb-3">
                      <label className="text-neutral-700 text-[16px] font-semibold">
                        Ijazah SMP{' '}
                        <span className="font-normal">(opsional)</span>{' '}
                      </label>
                      <div className="outline outline-none focus:outline-none !border-2 !border-grey-200 bg-grey-200 py-2 w-full rounded-md mt-3 ">
                        <div className="ml-4 text-neutral-700">
                          {dataPribadi?.diploma_smp === null ||
                          dataPribadi?.diploma_smp === ''
                            ? 'Tidak Ada Data Ijazah SMP'
                            : dataPribadi?.diploma_smp}
                        </div>
                      </div>
                    </div>

                    {/* Data Baru Pendidikan SMA */}
                    <div className="form-label mb-3">
                      <label className="text-neutral-700 text-[16px] font-semibold">
                        Nama Sekolah Menengah Atas (SMA){' '}
                        <span className="font-normal">(opsional)</span>{' '}
                      </label>
                      <div className="outline outline-none focus:outline-none !border-2 !border-grey-200 bg-grey-200 py-2 w-full rounded-md mt-3 ">
                        <div className="ml-4 text-neutral-700">
                          {dataPribadi?.school_name_sma === null ||
                          dataPribadi?.school_name_sma === ''
                            ? 'Tidak Ada Data Nama Sekolah Menengah Atas (SMA)'
                            : dataPribadi?.school_name_sma}
                        </div>
                      </div>
                    </div>
                    <div className="form-label mb-3">
                      <label className="text-neutral-700 text-[16px] font-semibold">
                        Tahun Masuk{' '}
                        <span className="font-normal">(opsional)</span>{' '}
                      </label>
                      <div className="outline outline-none focus:outline-none !border-2 !border-grey-200 bg-grey-200 py-2 w-full rounded-md mt-3 ">
                        <div className="ml-4 text-neutral-700">
                          {dataPribadi?.entry_year_sma === null ||
                          dataPribadi?.entry_year_sma === ''
                            ? 'Tidak Ada Data Tahun Masuk'
                            : dataPribadi?.entry_year_sma}
                        </div>
                      </div>
                    </div>
                    <div className="form-label mb-3">
                      <label className="text-neutral-700 text-[16px] font-semibold">
                        Rapor SMA{' '}
                        <span className="font-normal">(opsional)</span>{' '}
                      </label>
                      <div className="outline outline-none focus:outline-none !border-2 !border-grey-200 bg-grey-200 py-2 w-full rounded-md mt-3 ">
                        <div className="ml-4 text-neutral-700">
                          {dataPribadi?.report_card_sma === null ||
                          dataPribadi?.report_card_sma === ''
                            ? 'Tidak Ada Data Rapor SMA'
                            : dataPribadi?.report_card_sma}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid place-content-center">
              <Image
                src="/assets/ic-data-null.svg"
                alt="image-null"
                width={300}
                height={300}
              />
              <p className="text-center text-neutral-900 text-[18px] font-[500]">
                Tidak Ada Data
              </p>
            </div>
          )}
        </div>
      </Accordion>
    </div>
  );
};

export default PrivateInformation;

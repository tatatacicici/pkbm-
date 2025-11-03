'use client';
import Image from 'next/image';
import { Accordion } from '../../../../../components/accordion/index';
import Link from 'next/link';

const FileInformation = ({ dataFile }: any) => {
  return (
    <div>
      <Accordion idAccordion="file-information" title="Pemberkasan">
        <div className="bg-white shadow-lg rounded-lg mt-5 w-full p-5">
          {dataFile ? (
            <div className="w-full grid grid-cols-2 gap-5">
              <div className="cols-left">
                <div className="form-label mb-3">
                  <label className="text-neutral-700 text-[16px] font-semibold">
                    Kartu Tanda Penduduk (KTP)
                  </label>
                  <div className="outline outline-none focus:outline-none !border-2 !border-grey-200 bg-grey-200 py-2 w-full rounded-md mt-3 ">
                    <div className="ml-4 text-neutral-700">
                      {dataFile?.id_card_question === null ||
                      dataFile?.id_card_question === ''
                        ? 'Tidak Ada Data Kartu Tanda Penduduk (KTP)'
                        : dataFile?.id_card_question}
                    </div>
                  </div>
                </div>
                <div className="form-label mb-3">
                  <label className="text-neutral-700 text-[16px] font-semibold">
                    Berkas Kartu Tanda Penduduk (KTP){' '}
                    <span className="font-normal">(opsional)</span>{' '}
                    {/* <span className="ml-0.5 font-semibold text-error-600">
                      *
                    </span> */}
                  </label>
                  <Link href={dataFile.id_card} target="_blank">
                    <div className="cursor-pointer flex justify-between items-center px-4 outline outline-none focus:outline-none !border-2 !border-grey-200 bg-grey-200 hover:bg-grey-300 py-2 w-full rounded-md mt-3 ">
                      <div className="flex items-center gap-4">
                        <p className="text-neutral-700 text-[16px] font-normal">
                          Unduh Berkas
                        </p>
                      </div>
                      <Image
                        src={'/assets/ic-download.svg'}
                        alt="pdf"
                        width={20}
                        height={20}
                        className="cursor-pointer"
                      />
                    </div>
                  </Link>
                </div>
                <div className="form-label mb-3">
                  <label className="text-neutral-700 text-[16px] font-semibold">
                    Ijazah Terakhir{' '}
                    <span className="ml-0.5 font-semibold text-error-600">
                      *
                    </span>
                  </label>
                  <Link href={dataFile.diploma_certificate} target="_blank">
                    <div className="cursor-pointer flex justify-between items-center px-4 outline outline-none focus:outline-none !border-2 !border-grey-200 bg-grey-200 hover:bg-grey-300  py-2 w-full rounded-md mt-3 ">
                      <div className="flex items-center gap-4">
                        <p className="text-neutral-700 text-[16px] font-normal">
                          Unduh Berkas
                        </p>
                      </div>
                      <Image
                        src={'/assets/ic-download.svg'}
                        alt="pdf"
                        width={20}
                        height={20}
                        className="cursor-pointer"
                      />
                    </div>
                  </Link>
                </div>
                <div className="form-label mb-3">
                  <label className="text-neutral-700 text-[16px] font-semibold">
                    Kartu Keluarga (KK){' '}
                    <span className="ml-0.5 font-semibold text-error-600">
                      *
                    </span>
                  </label>
                  <Link href={dataFile.family_card} target="_blank">
                    <div className="cursor-pointer flex justify-between items-center px-4 outline outline-none focus:outline-none !border-2 !border-grey-200 bg-grey-200 hover:bg-grey-300  py-2 w-full rounded-md mt-3 ">
                      <div className="flex items-center gap-4">
                        <p className="text-neutral-700 text-[16px] font-normal">
                          Unduh Berkas
                        </p>
                      </div>
                      <Image
                        src={'/assets/ic-download.svg'}
                        alt="pdf"
                        width={20}
                        height={20}
                        className="cursor-pointer"
                      />
                    </div>
                  </Link>
                </div>
              </div>
              <div className="cols-right">
                <div className="form-label mb-3">
                  <label className="text-neutral-700 text-[16px] font-semibold">
                    Pas Foto{' '}
                    <span className="ml-0.5 font-semibold text-error-600">
                      *
                    </span>
                  </label>
                  <Link href={dataFile.photo} target="_blank">
                    <div className="cursor-pointer flex justify-between items-center px-4 outline outline-none focus:outline-none !border-2 !border-grey-200 bg-grey-200 hover:bg-grey-300  py-2 w-full rounded-md mt-3 ">
                      <div className="flex items-center gap-4">
                        <p className="text-neutral-700 text-[16px] font-normal">
                          Unduh Berkas
                        </p>
                      </div>
                      <Image
                        src={'/assets/ic-download.svg'}
                        alt="pdf"
                        width={20}
                        height={20}
                        className="cursor-pointer"
                      />
                    </div>
                  </Link>
                </div>
                <div className="form-label mb-3">
                  <label className="text-neutral-700 text-[16px] font-semibold">
                    Transkrip Nilai Terbaru{' '}
                    <span className="ml-0.5 font-semibold text-error-600">
                      *
                    </span>
                  </label>
                  <Link href={dataFile.transcript} target="_blank">
                    <div className="cursor-pointer flex justify-between items-center px-4 outline outline-none focus:outline-none !border-2 !border-grey-200 bg-grey-200 hover:bg-grey-300  py-2 w-full rounded-md mt-3 ">
                      <div className="flex items-center gap-4">
                        <p className="text-neutral-700 text-[16px] font-normal">
                          Unduh Berkas
                        </p>
                      </div>
                      <Image
                        src={'/assets/ic-download.svg'}
                        alt="pdf"
                        width={20}
                        height={20}
                        className="cursor-pointer"
                      />
                    </div>
                  </Link>
                </div>
                <div className="form-label mb-3">
                  <label className="text-neutral-700 text-[16px] font-semibold">
                    Surat Rekomendasi{' '}
                    <span className="ml-0.5 font-semibold text-error-600">
                      *
                    </span>
                  </label>
                  <Link
                    href={dataFile.letter_of_recommendation}
                    target="_blank"
                  >
                    <div className="cursor-pointer flex justify-between items-center px-4 outline outline-none focus:outline-none !border-2 !border-grey-200 bg-grey-200 hover:bg-grey-300  py-2 w-full rounded-md mt-3 ">
                      <div className="flex items-center gap-4">
                        <p className="text-neutral-700 text-[16px] font-normal">
                          Unduh Berkas
                        </p>
                      </div>
                      <Image
                        src={'/assets/ic-download.svg'}
                        alt="pdf"
                        width={20}
                        height={20}
                        className="cursor-pointer"
                      />
                    </div>
                  </Link>
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

export default FileInformation;

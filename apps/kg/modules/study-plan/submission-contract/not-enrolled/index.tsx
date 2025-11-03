'use client';

import Image from 'next/image';
import {
  useDataMajorContract,
  useMajorContract,
  useMajorEnroll,
  usePopupConfirmCardStudy,
} from '../../../../hooks/study-plan/hook';
import { Fragment } from 'react';
import { PopupModal } from '@kampus-gratis/components/molecules';

export const NotEnrolled = ({ id }: { id: string }) => {
  const { setPopupStatus, getPopupStatus } = usePopupConfirmCardStudy();
  const { getMajorContractData } = useDataMajorContract();

  const majorData = getMajorContractData?.dataMajor;
  const subjectData = getMajorContractData?.dataSubjects;

  const { mutate } = useMajorEnroll();
  const { refetch } = useMajorContract(id);

  const handleMajorContract = async () => {
    mutate(id, {
      onSuccess: () => {
        setPopupStatus(false);
        refetch();
      },
    });
  };

  return (
    <div className="flex flex-col max-w-[1440px] mx-auto">
      <div className="flex py-4 w-[100%]">
        <div className="flex flex-col py-4 pb-4 w-full">
          <div className="flex gap-6">
            <h1 className="flex items-center justify-center text-xl font-semibold lg:text-2xl">
              Pengajuan Kartu Rencana Studi
            </h1>
            <div>
              <button
                className="text-center px-3 lg:text-lg text-md py-2 text-white rounded-lg bg-[#3EB449] flex items-center justify-center"
                onClick={() => setPopupStatus(true)}
              >
                + Mengajukan
              </button>
            </div>
          </div>
          {/*isi span dari API */}
          <div className="flex py-2 lg:text-xl text-md">
            <div className="flex w-[300px] jutify-start">
              <span>Jurusan</span>
            </div>
            <div className="flex items-start justify-start w-full">
              <span> : {majorData?.name}</span>
            </div>
          </div>
          <div className="flex py-2 lg:text-xl text-md">
            <div className="flex w-[300px] jutify-start">
              <span>Semester saat ini</span>
            </div>
            <div className="flex items-start justify-start w-full">
              <span> : {majorData?.current_semester}</span>
            </div>
          </div>
          <div className="flex py-2 lg:text-xl text-md">
            <div className="flex w-[300px] jutify-start">
              <span>Total SKS</span>
            </div>
            <div className="flex items-start justify-start w-full">
              <span> : {majorData?.credit_count}</span>
            </div>
          </div>
          <div className="flex py-2 lg:text-xl text-md">
            <div className="flex w-[300px] jutify-start">
              <span>Kepala Prodi</span>
            </div>
            <div className="flex items-start justify-start w-full">
              <span> : {majorData?.head_of_major}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto md:w-full">
        <div className="flex mx-4 my-6">
          <div className="grid grid-cols-12 overflow-auto whitespace-nowrap mx-auto border border-[#E5E5E5] rounded-lg divide-neutral-400 dark:divide-gray-700 w-full text-[16px]">
            <div className="bg-gray-100 text-center md:text-[16px] rounded-md p-3 font-semibold col-span-1 lg:text-[16px] text-[12px] dark:bg-transparent">
              No.
            </div>
            <div className="lg:flex md:flex md:gap-[4px] md:text-[16px] lg:gap-[4px] bg-gray-100 lg:text-start text-center py-3 font-semibold col-span-6 lg:text-[16px] text-[12px] dark:bg-transparent">
              <p>Mata</p>
              <p> Pelajaran</p>
            </div>
            <div className="lg:flex md:flex md:gap-[4px] md:text-[16px] lg:gap-[4px] bg-gray-100 lg:text-start text-center py-3 font-semibold col-span-1 lg:text-[16px] text-[12px] dark:bg-transparent">
              <p>Kode </p>
              <p>Mapel</p>
            </div>
            <div className="bg-gray-100 lg:text-start text-center py-3 font-semibold col-span-1 lg:text-[16px] text-[12px] dark:bg-transparent">
              SKS
            </div>
            <div className="bg-gray-100 lg:text-start text-center py-3 font-semibold col-span-1 lg:text-[16px] md:text-[16px] text-[12px] dark:bg-transparent">
              Semester
            </div>
            <div className="lg:flex md:flex md:gap-[4px] lg:gap-[4px] bg-gray-100 lg:text-start text-center py-3 font-semibold col-span-2 md:text-[16px] lg:text-[16px] text-[12px] dark:bg-transparent">
              <p>Jumlah</p>
              <p>Pertemuan</p>
            </div>

            {subjectData &&
              subjectData?.map((x, i: number) => (
                <Fragment key={i}>
                  <div
                    key={i}
                    className={`p-3 text-center border-t ${
                      i % 2 != 0 && 'bg-[#F5F5F5]'
                    } border-[#E5E5E5] dark:divide-gray-700 col-span-1 lg:text-[16px] md:text-[16px] text-[12px] flex items-center justify-center`}
                  >
                    {i + 1}
                  </div>
                  <div
                    className={`border-t border-[#E5E5E5] ${
                      i % 2 != 0 && 'bg-[#F5F5F5]'
                    } dark:divide-gray-700 col-span-6 lg:text-[16px] md:text-[16px] text-[12px] flex items-center justify-center`}
                  >
                    <div className="w-full p-4 flex flex-col lg:flex-row  lg:justify-center lg:gap-4">
                      <Image
                        src={x.thumbnail || '/icons/rencana-studi/example1.svg'}
                        alt="User"
                        width={60}
                        height={60}
                      />
                      <div className="flex flex-col w-full truncate text-ellipsis">
                        <h1 className="font-bold text-start ">{x.name}</h1>
                        <p className="text-gray-400 text-start">
                          {x.enrolled_count} Mahasiswa terdaftar
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`border-t border-[#E5E5E5] ${
                      i % 2 != 0 && 'bg-[#F5F5F5]'
                    } dark:divide-gray-700 col-span-1 lg:text-[16px] md:text-[16px] text-[12px] lg:text-start text-center flex items-center justify-start`}
                  >
                    {x.subject_code || '-'}
                  </div>
                  <div
                    className={`border-t border-[#E5E5E5] ${
                      i % 2 != 0 && 'bg-[#F5F5F5]'
                    } dark:divide-gray-700 col-span-1 lg:text-[16px] md:text-[16px] text-[12px] lg:text-start text-center flex items-center justify-center lg:justify-start`}
                  >
                    {x.credit} SKS
                  </div>
                  <div
                    className={`border-t border-[#E5E5E5] ${
                      i % 2 != 0 && 'bg-[#F5F5F5]'
                    } dark:divide-gray-700 col-span-1 lg:text-[16px] md:text-[16px] text-[12px] lg:text-start text-center flex items-center justify-center lg:justify-start`}
                  >
                    {x.current_semester}
                  </div>
                  <div
                    className={`border-t border-[#E5E5E5] ${
                      i % 2 != 0 && 'bg-[#F5F5F5]'
                    } dark:divide-gray-700 col-span-2 lg:text-[16px] md:text-[16px] text-[12px] lg:text-start text-center flex items-center justify-start`}
                  >
                    {x.session_count} Pertemuan
                  </div>
                </Fragment>
              ))}
          </div>
        </div>
      </div>

      <PopupModal
        onClose={() => setPopupStatus(false)}
        icon={'/icons/rencana-studi/confirm.svg'}
        popupTitle="Konfirmasi"
        lookup={getPopupStatus}
        className="!h-80 lg:!w-[100%] text-md py-10"
      >
        <h1 className="py-2">
          Kamu akan mengajukan program study{' '}
          <span className="font-bold">Software Engineering</span>
        </h1>
        <div
          className="relative px-4 py-3 text-red-700 bg-red-100 border border-red-400 rounded"
          role="alert"
        >
          <div className="flex gap-2">
            <Image
              src={'/icons/rencana-studi/warning.svg'}
              alt="warning"
              width={20}
              height={20}
            />
            <span className="block sm:inline">
              Kamu tidak dapat mengganti Program Studi yang telah dipilih
            </span>
          </div>
        </div>
        <div className="flex gap-3 py-4 my-2">
          <button
            className="lg:w-[230px] lg:h-[56px] w-[100px] h-[56px] h border-[#106FA4] border-2 rounded-[8px] text-[#106FA4] "
            onClick={() => setPopupStatus(false)}
            type={'button'}
          >
            Batal
          </button>
          <button
            className="lg:w-[230px] lg:h-[56px] w-[110px] h-[56px] bg-[#106FA4] rounded-[8px] text-white"
            type={'button'}
            onClick={() => {
              handleMajorContract();
            }}
            // page={'/kontrak-krs/detail'}
          >
            Konfirmasi
          </button>
        </div>
      </PopupModal>
    </div>
  );
};

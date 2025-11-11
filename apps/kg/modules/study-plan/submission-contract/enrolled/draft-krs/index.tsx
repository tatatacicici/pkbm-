import { Button } from '@kampus-gratis/components/atoms';
import { PopupModal } from '@kampus-gratis/components/molecules';
import {
  useDataMajorContract,
  useMajorContract,
  usePopupAddStudy,
  usePopupConfirmStatus,
  usePopupSucces,
  useStudentSubjectDeletePlan,
  useStudentSubjectSendDraft,
} from '../../../../../hooks/study-plan/hook';
import Image from 'next/image';
import { FC, Fragment, MouseEventHandler, useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { Subject } from '../../../../../types/study-plan';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export type MoveProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  onMove: MouseEventHandler<HTMLButtonElement>;
  id: string;
};

export const DrafContractModule: FC<MoveProps> = ({ onClick, onMove, id }) => {
  const { setPopupAdd } = usePopupAddStudy();
  const { setPopupSuccess, getPopupSuccess } = usePopupSucces();
  const { setPopupStatus, getPopupStatus } = usePopupConfirmStatus();
  const { getMajorContractData } = useDataMajorContract();
  const [subject, setSubject] = useState<Pick<Subject, 'id' | 'name'>>({
    id: '',
    name: '',
  });
  const [popUpSend, setPopUpSend] = useState(false);
  // const [popUpSuccess, setPopupSuccess] = useState(false);
  const { refetch } = useMajorContract(id);

  const { mutate } = useStudentSubjectDeletePlan();
  const { mutate: sendDraft } = useStudentSubjectSendDraft();
  const subjectData = getMajorContractData?.dataSubjects;

  let totalCredit = 0;
  let totalSubject = 0;

  const filteredSubjectData = subjectData?.filter((x) => x.status === 'DRAFT');

  return (
    <>
      <div className="mx-auto md:w-full">
        <div className="flex  my-6 overflow-auto">
          {/* thead⬇️⬇️⬇️⬇️ */}
          <div className="min-w-[800px] grid grid-cols-12 overflow-auto whitespace-nowrap mx-auto border border-[#E5E5E5] rounded-lg divide-neutral-400 dark:divide-gray-700 w-full text-[16px]">
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
              Tindakan
            </div>
            {filteredSubjectData &&
              filteredSubjectData?.map((x, i: number) => {
                totalCredit += x.credit;
                totalSubject += 1;
                return (
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
                          src={
                            x.thumbnail || '/icons/rencana-studi/example1.svg'
                          }
                          alt="User"
                          width={60}
                          height={60}
                        />
                        <div className="flex flex-col w-full truncate whitespace-normal">
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
                      <button
                        onClick={() => {
                          setSubject({ id: x.id, name: x.name });
                          setPopupStatus(true);
                        }}
                        className={`flex gap-2 items-center p-4 font-semibold text-red-600 `}
                      >
                        <MdDelete className="w-6 h-6" />
                        Hapus
                      </button>
                    </div>
                    <div className="absolute">
                      <PopupModal
                        onClose={() => setPopupStatus(false)}
                        icon={'/icons/rencana-studi/Delete.svg'}
                        popupTitle="Konfirmasi"
                        lookup={getPopupStatus}
                        className="col-span-12 !h-80 !w-[100%] text-md"
                      >
                        <h1 className="py-2 text-2xl">
                          Apakah anda ingin menghapus mata pelajaran ini?
                        </h1>
                        <div className="flex justify-center gap-3 my-2 py-4">
                          <Button
                            className="w-[230px] h-[56px] border-[#106FA4] border-2 rounded-[8px] text-[#106FA4] "
                            onClick={() => {
                              // setPopupSuccess(true);
                              mutate(subject.id, {
                                onSuccess: () => {
                                  refetch();
                                  setPopupStatus(false);
                                },
                              });
                            }}
                            type={'button'}
                          >
                            Ya, Hapus
                          </Button>
                          <Button
                            className="w-[230px] h-[56px] bg-[#106FA4] rounded-[8px] text-white"
                            type={'button'}
                            onClick={() => {
                              setPopupStatus(false);
                            }}
                          >
                            Tidak
                          </Button>
                        </div>
                      </PopupModal>
                    </div>
                  </Fragment>
                );
              })}
            <div className="bg-gray-100 text-center md:text-[16px] rounded-md p-3 font-semibold col-span-12 grid grid-cols-12">
              <div className="col-span-8 lg:text-[16px] text-[12px] dark:bg-transparent">
                <strong>Total SKS</strong>
              </div>
              <div className="col-span-1 lg:text-[16px] md:text-[16px] text-[12px] lg:text-start text-center flex items-center justify-center lg:justify-start">
                <strong>{totalCredit} SKS</strong>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end w-full ">
          <Button
            className="w-[230px] h-[56px]  border-2 rounded-[8px] text-white bg-green-500 "
            onClick={() => {
              // setPopupSuccess(true);
              setPopUpSend(true);
            }}
            type={'button'}
          >
            Kirim
          </Button>
        </div>
        <PopupModal
          onClose={() => setPopUpSend(false)}
          icon={'/icons/rencana-studi/confirm.svg'}
          popupTitle="Konfirmasi"
          lookup={popUpSend}
          className="col-span-12 !h-80 !w-[100%] text-md"
        >
          <h1 className="py-2 text-2xl text-center">
            Apakah anda akan mengajukan Draf KRS sebanyak <br />
            <strong>
              {totalSubject} mata pelajaran {totalCredit} SKS
            </strong>
          </h1>
          <div className="flex justify-center gap-3 my-2 py-4">
            <Button
              className="w-[230px] h-[56px] border-[#106FA4] border-2 rounded-[8px] text-[#106FA4] "
              onClick={() => {
                setPopUpSend(false);
              }}
              type={'button'}
            >
              Kembali
            </Button>
            <Button
              className="w-[230px] h-[56px] bg-[#106FA4] rounded-[8px] text-white"
              type={'button'}
              onClick={() => {
                // setPopUpSend(false);
                sendDraft('', {
                  onSuccess: () => {
                    refetch();
                    setPopUpSend(false);
                    setPopupSuccess(true);
                  },
                  onError: (error) => {
                    toast.error(error?.response?.data?.message as string, {
                      position: 'top-right',
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: 'light',
                    });
                  },
                });
              }}
            >
              Lanjut
            </Button>
          </div>
        </PopupModal>
        <PopupModal
          onClose={() => setPopupSuccess(false)}
          icon={'/icons/rencana-studi/Success.svg'}
          popupTitle="Berhasil"
          lookup={getPopupSuccess}
          className="col-span-12 !h-80 !w-[100%] text-md py-10"
        >
          <h1 className="py-2 text-2xl">
            Draf KRS Anda telah ditambah ke <strong>Pengajuan</strong>
          </h1>
          <div className="flex gap-3 my-2 py-4 justify-center">
            <Button
              className="w-[230px] h-[56px] border-[#106FA4] border-2 rounded-[8px] text-[#106FA4] "
              onClick={(e) => {
                setPopupAdd(false);
                setPopupSuccess(false);
                onMove(e);
              }}
              type={'button'}
            >
              Lihat Pengajuan
            </Button>
            <Button
              className="w-[230px] h-[56px] bg-[#106FA4] rounded-[8px] text-white"
              type={'button'}
              onClick={() => setPopupAdd(false)}
            >
              Kembali
            </Button>
          </div>
        </PopupModal>
      </div>
    </>
  );
};

import { Button } from '@kampus-gratis/components/atoms';
import { PopupModal } from '@kampus-gratis/components/molecules';
import {
  useDataMajorContract,
  useMajorContract,
  usePopupAddStudy,
  usePopupConfirmStatus,
  usePopupSucces,
  useStudentSubjectPlan,
} from '../../../../../hooks/study-plan/hook';
import Image from 'next/image';
import { FC, Fragment, MouseEventHandler, useState } from 'react';
import { BiPlusCircle } from 'react-icons/bi';
import { Subject } from '../../../../../types/study-plan';

export type MoveProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  onMove: MouseEventHandler<HTMLButtonElement>;
  id: string;
};

export const SubmissionContractTable: FC<MoveProps> = ({
  onClick,
  onMove,
  id,
}) => {
  const { setPopupAdd, getPopupAdd } = usePopupAddStudy();
  const { setPopupSuccess } = usePopupSucces();
  const { setPopupStatus, getPopupStatus } = usePopupConfirmStatus();
  const { getMajorContractData } = useDataMajorContract();
  const [subject, setSubject] = useState<Pick<Subject, 'id' | 'name'>>({
    id: '',
    name: '',
  });
  const { refetch } = useMajorContract(id);

  const { mutate } = useStudentSubjectPlan();

  const majorData = getMajorContractData?.dataMajor;
  const subjectData = getMajorContractData?.dataSubjects;

  const filteredSubjectData = subjectData?.filter(
    (x) => x.status === 'AVAILABLE'
  );

  let totalCredit = 0;

  return (
    <>
      <div className="mx-auto md:w-full">
        <div className="flex my-6 overflow-auto">
          {/* thead⬇️⬇️⬇️⬇️ */}
          <div className="min-w-[800px] grid grid-cols-12 overflow-auto whitespace-nowrap mx-auto border border-[#E5E5E5] rounded-lg divide-neutral-400 dark:divide-gray-700 w-full text-[16px]">
            <div className="bg-gray-100 text-center md:text-[16px] rounded-md p-3 font-semibold col-span-1 lg:text-[16px] text-[12px] dark:bg-transparent">
              No.
            </div>
            <div className="lg:flex md:flex md:gap-[4px] md:text-[16px] lg:gap-[4px] bg-gray-100 lg:text-start text-center py-3 font-semibold col-span-6 lg:text-[16px] text-[12px] dark:bg-transparent">
              Mata Pelajaran
            </div>
            <div className="lg:flex md:flex md:gap-[4px] md:text-[16px] lg:gap-[4px] bg-gray-100 lg:text-start text-center py-3 font-semibold col-span-1 lg:text-[16px] text-[12px] dark:bg-transparent">
              Kode Mapel
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
            {filteredSubjectData?.map((x, i: number) => {
              totalCredit += x.credit;
              // let num = 1;
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
                    } dark:divide-gray-700 col-span-6 lg:text-[16px] md:text-[16px] text-[12px] flex items-center justify-center whitespace-normal`}
                  >
                    <div className="w-full p-4 flex flex-col lg:flex-row  lg:justify-center lg:gap-4">
                      <Image
                        src={x.thumbnail || '/icons/rencana-studi/example1.svg'}
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
                        setSubject(x);
                        setPopupStatus(true);
                      }}
                      className={`flex gap-2 items-center p-4 font-semibold text-blue-600 `}
                    >
                      <BiPlusCircle className="w-6 h-6" />
                      Tambah
                    </button>
                  </div>
                  <div className="absolute">
                    <PopupModal
                      onClose={() => setPopupStatus(false)}
                      icon={'/icons/rencana-studi/confirm.svg'}
                      popupTitle="Konfirmasi"
                      lookup={getPopupStatus}
                      className="col-span-12 !h-80 !w-[100%] text-md"
                    >
                      <h1 className="py-2 text-2xl">
                        Apakah anda sudah pernah mengambil dan lulus pada mata
                        pelajaran ini?
                      </h1>
                      <div className="flex justify-center gap-3 my-2 py-4">
                        <Button
                          className="w-[230px] h-[56px] border-[#106FA4] border-2 rounded-[8px] text-[#106FA4] "
                          onClick={() => {
                            // setPopupSuccess(true);
                            setPopupStatus(false);
                          }}
                          type={'button'}
                        >
                          Belum
                        </Button>
                        <Button
                          className="w-[230px] h-[56px] bg-[#106FA4] rounded-[8px] text-white"
                          type={'button'}
                          onClick={() => {
                            mutate(subject.id, {
                              onSuccess: () => {
                                setPopupAdd(true);
                                setPopupStatus(false);
                                refetch();
                              },
                            });
                          }}
                        >
                          Ambil pembelajarn ini
                        </Button>
                      </div>
                    </PopupModal>
                    {/* </SuspenseError>
    <SuspenseError> */}
                    <PopupModal
                      onClose={() => setPopupSuccess(false)}
                      icon={'/icons/rencana-studi/Success.svg'}
                      popupTitle="Berhasil"
                      lookup={getPopupAdd}
                      className="col-span-12 !h-80 !w-[100%] text-md py-10"
                    >
                      <h1 className="py-2 text-2xl">
                        Mata pelajaran <strong>{subject.name} </strong>
                        <br /> berhasil di tambah ke{' '}
                        <span className="font-bold">Draft KRS</span>
                      </h1>
                      <div className="flex gap-3 my-2 py-4 justify-center">
                        <Button
                          className="w-[230px] h-[56px] border-[#106FA4] border-2 rounded-[8px] text-[#106FA4] "
                          onClick={(e) => {
                            setPopupAdd(false);
                            onClick(e);
                          }}
                          type={'button'}
                        >
                          Lihat Draft KRS
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
                </Fragment>
              );
            })}

            <div className="bg-gray-100 text-center md:text-[16px] rounded-md p-3 font-semibold col-span-8 lg:text-[16px] text-[12px] dark:bg-transparent">
              <strong>Total SKS</strong>
            </div>
            <div
              className="border-[#E5E5E5] bg-[#F5F5F5]
                   dark:divide-gray-700 col-span-1 lg:text-[16px] md:text-[16px] text-[12px] lg:text-start text-center flex items-center justify-center lg:justify-start"
            >
              <strong>{totalCredit} SKS</strong>
            </div>
          </div>
        </div>

        {/* <tfoot>
        <tr>
          <th scope="row" className="px-6 py-3 text-base">
            Total SKS
          </th>
          <td></td>
          <td></td>
          <td className="font-bold">12 SKS</td>
        </tr>
      </tfoot> */}

        {/* <SuspenseError> */}

        {/* </SuspenseError>
    <SuspenseError> */}
      </div>
    </>
  );
};

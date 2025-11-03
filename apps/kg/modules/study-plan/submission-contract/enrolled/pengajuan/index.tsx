import { DataPenugasan } from '../../../../../types/study-plan';
import { useStudentSubjectPengajuan } from '../../../../../hooks/study-plan/hook';
import Image from 'next/image';
import { FC, Fragment, MouseEventHandler } from 'react';
import { BsClockFill } from 'react-icons/bs';
import { BiCheckCircle } from 'react-icons/bi';
import { AiFillCloseCircle } from 'react-icons/ai';
import {
  convertDataToSubjects,
  formatDate,
} from '../../../../../utils/studyPlanFunc';

export type MoveProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  onMove: MouseEventHandler<HTMLButtonElement>;
  id: string;
};

export const PengajuanModule: FC<MoveProps> = ({ onClick, onMove, id }) => {
  const { data } = useStudentSubjectPengajuan();

  let filteredData = null;
  if (data) {
    filteredData = convertDataToSubjects(data?.data as DataPenugasan);
  }

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
            <div className="lg:flex md:flex md:gap-[4px] md:text-[16px] lg:gap-[4px] bg-gray-100 lg:text-start text-center py-3 font-semibold col-span-3 lg:text-[16px] text-[12px] dark:bg-transparent">
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
              Waktu Pengajuan
            </div>
            <div className="lg:flex md:flex md:gap-[4px] lg:gap-[4px] bg-gray-100 lg:text-start text-center py-3 font-semibold col-span-1 md:text-[16px] lg:text-[16px] text-[12px] dark:bg-transparent">
              Status
            </div>
            <div className="lg:flex md:flex md:gap-[4px] lg:gap-[4px] bg-gray-100 lg:text-start text-center py-3 font-semibold col-span-2 md:text-[16px] lg:text-[16px] text-[12px] dark:bg-transparent">
              Waktu Selesai
            </div>
            {filteredData?.map((x, i: number) => {
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
                    } dark:divide-gray-700 col-span-3 lg:text-[16px] md:text-[16px] text-[12px] flex items-center justify-center`}
                  >
                    <div className="w-full p-4 flex flex-col lg:flex-row  lg:justify-center items-center lg:gap-4">
                      <Image
                        src={x.thumbnail || '/icons/rencana-studi/example1.svg'}
                        alt="User"
                        width={60}
                        height={60}
                      />
                      <div className="flex flex-col w-full truncate whitespace-normal">
                        <h1 className="font-bold text-start ">{x.name}</h1>
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
                    } dark:divide-gray-700 col-span-2 lg:text-[16px] md:text-[16px] text-[12px] lg:text-start text-center flex items-center justify-center lg:justify-start`}
                  >
                    {formatDate(new Date(x.date_taken))}
                  </div>
                  <div
                    className={`border-t border-[#E5E5E5] ${
                      i % 2 != 0 && 'bg-[#F5F5F5]'
                    } dark:divide-gray-700 col-span-1 lg:text-[16px] md:text-[16px] text-[12px] lg:text-start text-center flex items-center justify-center lg:justify-start gap-2`}
                  >
                    {x.status === 'Diproses' && (
                      <BsClockFill className="text-yellow-500 w-6 h-6" />
                    )}
                    {x.status === 'Disetujui' && (
                      <BiCheckCircle className="text-green-500 w-6 h-6" />
                    )}
                    {x.status === 'Ditolak' && (
                      <AiFillCloseCircle className="text-red-500 w-6 h-6" />
                    )}
                    {x.status}
                  </div>
                  <div
                    className={`border-t border-[#E5E5E5] ${
                      i % 2 != 0 && 'bg-[#F5F5F5]'
                    } dark:divide-gray-700 col-span-2 lg:text-[16px] md:text-[16px] text-[12px] lg:text-start text-center flex items-center justify-center lg:justify-start`}
                  >
                    {x.date_finished
                      ? formatDate(new Date(x.date_finished))
                      : '-'}
                  </div>
                </Fragment>
              );
            })}
            <div className="bg-[#F5F5F5] col-span-12 grid grid-cols-12">
              <div className="bg-gray-100 text-center md:text-[16px] rounded-md p-3 font-semibold col-span-5 lg:text-[16px] text-[12px] dark:bg-transparent">
                <strong>Total SKS</strong>
              </div>
              <div
                className="border-[#E5E5E5] bg-gray-100
                   dark:divide-gray-700 col-span-1 lg:text-[16px] md:text-[16px] text-[12px] lg:text-start text-center flex items-center justify-center lg:justify-start"
              >
                <strong>{totalCredit} SKS</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

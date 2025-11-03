'use client';

import Image from 'next/image';
import { useMajorById } from '../../../hooks/study-plan/hook';
import { FC, useEffect, useState } from 'react';
import { Card } from '@kampus-gratis/components/molecules';
import { MdClose } from 'react-icons/md';
import { BsExclamationCircleFill } from 'react-icons/bs';
import { TMajor } from '../../../types/study-plan';

type StudyProgramProps = {
  id: string;
};

export const StudyProgram: FC<StudyProgramProps> = ({ id: id_fakultas }) => {
  const { data } = useMajorById(id_fakultas as string);

  const [studyProgram, setStudyProgram] = useState<TMajor[] | undefined>(
    data?.data
  );

  const [query, setQuery] = useState<string>('');

  useEffect(() => {
    if (data) {
      setStudyProgram(data.data);
    }
  }, [data]);

  const filterStudyProgram = (input: string) => {
    if (studyProgram && input.trim() !== '') {
      const filteredPrograms = studyProgram.filter((program) =>
        program.name.toLowerCase().includes(input.toLowerCase())
      );
      setStudyProgram(filteredPrograms);
    } else {
      // If query is empty, show all studyProgram
      setStudyProgram(data?.data);
    }
  };

  const [isClose, setClose] = useState(false);
  return (
    <div className="bg-neutral-50 min-h-[100vh] w-full overflow-hidden  px-8 md:px-14 lg:px-16">
      <div className="max-w-[1440px]  mx-auto">
        <div className="flex flex-col items-center gap-2 my-4 justify-center ">
          <h3 className="text-gray-500 text-xl">Fakultas</h3>
          <h2 className="text-primary-500 text-2xl font-semibold">
            {studyProgram && studyProgram[0]?.faculty?.name}
          </h2>
        </div>
        <div className=" flex flex-col items-center justify-center">
          <div className="bg-gray-200 dark:bg-gray-300 dark:text-white  w-full md:w-3/4 h-[56px] mb-10 rounded-[8px]">
            <div className="flex py-4 ml-5">
              <Image
                src={'/icons/rencana-studi/search.svg'}
                alt={'search'}
                width={28}
                height={28}
              />
              <input
                type={'text'}
                value={query}
                className="w-full bg-transparent focus:outline-none"
                placeholder="Cari Program Studi"
                onChange={(event) => {
                  setQuery(event.target.value);
                  filterStudyProgram(event.target.value);
                }}
              />
            </div>
          </div>
        </div>

        <div
          className={`${
            isClose && 'hidden'
          } flex bg-yellow-100 dark:bg-yellow-300 border border-yellow-400 dark:border-yellow-100 dark:text-whitetext-yellow-700 py-3 rounded relative px-6 mb-6`}
          role="alert"
        >
          <BsExclamationCircleFill className="text-yellow-500 w-7 h-7" />
          <span className="block px-4 sm:inline">
            Kamu hanya bisa mengambil satu(1) program studi
          </span>
          <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
            <MdClose
              className="text-gray-500 w-7 h-7"
              onClick={() => setClose(true)}
            />
          </span>
        </div>
        <>
          {studyProgram?.length === 0 ? (
            <div className="flex flex-col justify-center h-[60vh]  items-center ">
              <div className="hidden w-auto h-auto p-1 bg-gray-100 rounded-full lg:flex dark:bg-gray-600 lg:p-4">
                <Image
                  src={'/icons/rencana-studi/data-kosong.png'}
                  width={250}
                  height={250}
                  alt="simulasi-null"
                />
              </div>
              <h1 className="text-xl font-bold mt-5">
                Tidak Ada Data Program Studi
              </h1>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 gap-4 pb-40 lg:grid-cols-4">
                {studyProgram?.map((x, i) => (
                  <Card
                    href={`/rencana-studi/${id_fakultas}/${x.id}?tab=kontrak-krs`}
                    key={i}
                    className="px-3 rounded-lg "
                    hasImage={true}
                    imgStyle="rounded-lg"
                    imgheight={1000}
                    imgwidth={820}
                    src={x.thumbnail}
                    titleStyle={'text-xl font-bold mt-0 text-[#106FA4]'}
                    icon={
                      <div className="flex flex-row gap-2 px-4 space-x-1">
                        <div className="lg:h-[22px] text-[#3EB449] px-2 my-[10px] text-[12px] rounded-[5px] justify-center bg-[#E3FBDA]">
                          {x.subject_count} Mata Kuliah
                        </div>
                        <div className="lg:h-[22px] text-[#ED3768] px-2 my-[10px] text-[12px] rounded-[5px] justify-center bg-[#FEDBD7]">
                          {x.total_credit} SKS
                        </div>
                      </div>
                    }
                  >
                    <div className="text-xl mt-0 text-[#106FA4] w-full">
                      {x.name}
                    </div>
                  </Card>
                ))}
              </div>
            </>
          )}
        </>
      </div>
    </div>
  );
};

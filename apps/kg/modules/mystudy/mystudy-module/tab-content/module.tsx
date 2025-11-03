import EmptyState from '@kampus-gratis/apps/kg/components/empty-state';
import { DM_Sans } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Avatar from 'react-avatar';
import { BsFillPeopleFill } from 'react-icons/bs';
import { FaArrowRight } from 'react-icons/fa';
import { FaFolderOpen, FaInbox } from 'react-icons/fa6';
import {
  TMyStudyV2Item,
  TMyStudyv2Response,
} from '../../../../types/mystudy-module';
import { SearchInput } from './search-input';

const font = DM_Sans({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const TabContentMyStudySection = (data: TMyStudyv2Response) => {
  const [filteredData, setFilteredData] = useState(data);
  const router = useRouter();

  return (
    <div className="w-full mx-auto">
      <SearchInput data={data.data} setFilteredData={setFilteredData} />
      {filteredData?.length === 0 && (
        <EmptyState text="Mata pelajaran atau pelatihan tidak ditemukan" />
      )}
      <div
        className={
          'relative grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-[30px] pb-40'
        }
      >
        {filteredData?.length === 0 ? (
          ''
        ) : (
          <>
            {filteredData?.length > 0 &&
              filteredData?.map((subject: TMyStudyV2Item) => {
                const thumbnailImg = subject.thumbnail.includes('.')
                  ? subject.thumbnail
                  : '';
                const isCollege =
                  subject.category &&
                  subject.category.toLocaleUpperCase() === 'COLLEGE';

                return (
                  <div
                    key={subject.id}
                    className="flex flex-col w-full gap-2 justify-between h-full rounded-lg p-4 shadow-xl relative border"
                  >
                    <div className="">
                      <Image
                        src={thumbnailImg}
                        alt={subject.name}
                        width={300}
                        height={200}
                        className="rounded-lg w-full h-32 object-cover"
                      />
                      <div className="mt-3">
                        <h1
                          className="text-lg font-bold w-full truncate hover:text-clip hover:whitespace-normal"
                          title={subject.name}
                        >
                          {subject.name}
                        </h1>
                        <p className="text-sm text-neutral-700">
                          {isCollege ? 'Mata Pelajaran' : 'Pelatihan'} -{' '}
                          {subject.subject_code}
                        </p>
                      </div>
                      <div
                        className={`grid grid-cols-2 gap-3 mt-2 border-t pt-3 ${font.className}`}
                      >
                        {/* {isCollege && (
                          <>
                            <div className="w-full text-sm font-semibold rounded-md flex items-center gap-2">
                              <div className="bg-yellow-100 text-yellow-600 rounded-2xl p-3">
                                <FaInbox />
                              </div>
                              {subject.credit} SKS
                            </div>
                          </>
                        )} */}
                        <div className="w-full text-sm font-semibold rounded-md flex items-center gap-2">
                          {/* <div className="bg-primary-100 text-primary-500 rounded-2xl p-3"> */}
                          <div className="bg-primary-100 text-sky-base rounded-2xl p-3">
                            <FaFolderOpen />
                          </div>
                          {subject.session_count} Pertemuan
                        </div>
                        <div className="w-full text-sm font-semibold rounded-md flex items-center gap-2">
                          <div className="bg-red-100 text-red-500 rounded-2xl p-3">
                            <BsFillPeopleFill />
                          </div>
                          {subject.student_count} Peserta
                        </div>
                      </div>
                    </div>
                    <div className="w-full space-y-2 border-t pt-2">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-semibold text-neutral-700">
                          Progress
                        </span>
                        <p className="text-sm font-semibold">
                          {subject.progress_percentage || 0}%
                        </p>
                      </div>
                      <div className="w-full mb-3">
                        <div className="relative w-full bg-neutral-300 rounded-full h-2.5">
                          <div
                            className="absolute bg-green-500 h-full rounded-full transition-all duration-300 ease-in-out"
                            style={{
                              width: `${
                                subject.progress_percentage > 100
                                  ? 100
                                  : subject.progress_percentage || 0
                              }%`,
                            }}
                          ></div>
                        </div>
                      </div>
                      <div className="flex justify-between gap-2">
                        <div className="mt-2 flex items-center gap-2">
                          <div className="bg-neutral-100 flex items-center justify-center overflow-hidden rounded-md h-9 w-9 cursor-pointer group">
                            <Avatar
                              name={subject.teacher_name}
                              size="36"
                              className="bg-white h-9 w-9 flex text-neutral-700 items-center justify-center font-[700] bg-center"
                            />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-sm font-semibold">
                              {subject.teacher_name}
                            </span>
                            <span className="text-xs text-neutral-500">
                              Pengajar
                            </span>
                          </div>
                        </div>
                        <Link
                          // className="text-white bg-primary-500 text-sm font-semibold flex items-center gap-1 px-4 py-2 rounded-lg mt-2"
                          className="text-white bg-sky-base text-sm font-semibold flex items-center gap-1 px-4 py-2 rounded-lg mt-2"
                          href={`/studi-ku/${subject.id}`}
                        >
                          Lanjut Belajar
                          <FaArrowRight />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
          </>
        )}
      </div>
    </div>
  );
};

'use client';

import { Assigment } from '../../../components/assigment/assignment-card';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { FC, ReactElement, useEffect, useState } from 'react';
import Clock from '../icon/ic-clock.svg';
import { StatusDokumenCard } from '../../../components/consultation-and-services/status-dokumen-card';

export const StatusDokumenModule: FC = (): ReactElement => {
  const query = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [active, setactive] = useState('semua-tugas');

  useEffect(() => {
    if (query.get('tab') === 'semua-tugas' || query.get('tab') === null) {
      setactive('semua-tugas');
    } else if (query.get('tab') === 'ditugaskan') {
      setactive('ONGOING');
    } else if (query.get('tab') === 'terlambat') {
      setactive('LATE');
    } else if (query.get('tab') === 'sedang-dinilai') {
      setactive('GRADING');
    } else if (query.get('tab') === 'selesai') {
      setactive('FINISHED');
    }
  }, [query, router, active]);

  return (
    <section className="lg:px-20 md:px-10 px-5 py-3 w-full mt-[36px] drop-shadow-md mb-3 min-h-screen max-w-[1440px] mx-auto">
      <div className="bg-white h-full rounded-[8px] dark:bg-gray-800 ">
        <div className="mb-5 lg:mb-8 text-[20px] font-semibold text-[#262626] border-b border-gray-200 hover:text-[#000]">
          <ul className="p-2 flex flex-wrap gap-5 justify-center items-center">
            <li className="mr-2">
              <Link
                href={pathname + '/?tab=semua-tugas'}
                className={`inline-block p-4 ${
                  query.get('tab') === 'semua-tugas' ||
                  query.get('tab') === null
                    ? 'text-[#0B568D] border-[#0B568D] dark:text-[#0B568D] dark:border-[#0B568D] border-b-2'
                    : ''
                }     rounded-t-lg active hover:border-gray-300 dark:hover:text-gray-300 dark:text-[#0B568D]  `}
                aria-current="page"
                onClick={() => setactive('semua-tugas')}
              >
                Semua Tugas
              </Link>
            </li>
            <li className="mr-2">
              <Link
                href={pathname + '/?tab=ditugaskan'}
                className={`inline-block p-4 ${
                  query.get('tab') === 'ditugaskan'
                    ? 'text-[#0B568D] border-[#0B568D] dark:text-[#0B568D] dark:border-[#0B568D] border-b-2'
                    : ''
                }     rounded-t-lg active hover:border-gray-300 dark:hover:text-gray-300  dark:text-[#0B568D] `}
                aria-current="page"
                onClick={() => setactive('ONGOING')}
              >
                Ditugaskan
              </Link>
            </li>
            <li className="mr-2">
              <Link
                href={pathname + '/?tab=terlambat'}
                className={`inline-block p-4 ${
                  query.get('tab') === 'terlambat'
                    ? 'text-[#0B568D] border-[#0B568D] dark:text-[#0B568D] dark:border-[#0B568D] border-b-2'
                    : ''
                }     rounded-t-lg active hover:border-gray-300 dark:hover:text-gray-300 dark:text-[#0B568D]  `}
                aria-current="page"
                onClick={() => setactive('LATE')}
              >
                Terlambat
              </Link>
            </li>
            <li className="mr-2">
              <Link
                href={pathname + '/?tab=sedang-dinilai'}
                className={`inline-block p-4 ${
                  query.get('tab') === 'sedang-dinilai'
                    ? 'text-[#0B568D] border-[#0B568D] dark:text-[#0B568D] dark:border-[#0B568D] border-b-2'
                    : ''
                }     rounded-t-lg active hover:border-gray-300 dark:hover:text-gray-300 dark:text-[#0B568D] `}
                aria-current="page"
                onClick={() => setactive('GRADING')}
              >
                Sedang Dinilai
              </Link>
            </li>
            <li className="mr-2">
              <Link
                href={pathname + '/?tab=selesai'}
                className={`inline-block p-4 ${
                  query.get('tab') === 'selesai'
                    ? 'text-[#0B568D] border-[#0B568D] dark:text-[#0B568D] dark:border-[#0B568D] border-b-2'
                    : ''
                }     rounded-t-lg active hover:border-gray-300 dark:hover:text-gray-300 dark:text-[#0B568D]`}
                aria-current="page"
                onClick={() => setactive('FINISHED')}
              >
                Selesai
              </Link>
            </li>
          </ul>
        </div>
        <div className="pb-8">
          <StatusDokumenCard
            titleCard={'Surat Keterangan Mahasiswa'}
            status={'ESTIMASI'}
            description={''}
            date={'3-5 Hari Lagi'}
            bgLine={'bg-[#0B568D]'}
            classNameStatus={'text-[#0B568D]'}
            imgCard={Clock}
          />
          <StatusDokumenCard
            titleCard={'Surat Keterangan Mahasiswa'}
            status={'Sedang Dinilai'}
            description={'awdawdawdawd'}
            date={'3-5 Hari Lagi'}
            bgLine={'bg-[#CD261E]'}
            classNameStatus={'text-[#CD261E]'}
            imgCard={Clock}
          />
        </div>
      </div>
    </section>
  );
};

import { usePathname, useSearchParams } from 'next/navigation';
import { FC, ReactElement } from 'react';
import { TQuizHistoryData2 } from '@kampus-gratis/apps/kg/types/quiz';
import { DetailCard } from '../score/DetailCard';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import Avatar from 'react-avatar';
import { useProfileComplete } from '@kampus-gratis/apps/kg/hooks/profile/hook';

export const HistoryCard: FC<{
  dataQuizHistory: TQuizHistoryData2;
  index: number;
}> = ({ dataQuizHistory, index }): ReactElement => {
  // TODO | tambahan start
  // untuk mengambil poto profile dan nama
  const { data: completeData } = useProfileComplete();

  const searchParams = useSearchParams();

  const quizId = searchParams.get('id');
  const score = searchParams.get('score');
  const right = searchParams.get('right');
  const wrong = searchParams.get('wrong');
  const timeElapsed = searchParams.get('time_elapsed');
  const totalQuestion = searchParams.get('total_question');
  const remainingAttempt = searchParams.get('remaining_attempt');
  const status = searchParams.get('status');
  // TODO | tambahan end

  const pathname = usePathname();

  function changeFormatByDate(iso: string): string {
    const date = new Date(iso);
    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    };
    return date.toLocaleDateString('id-ID', options);
  }

  function changeFormatByTime(iso: string): string {
    const time = new Date(iso);

    const hour = String(time.getHours()).padStart(2, '0');
    const minute = String(time.getMinutes()).padStart(2, '0');
    const second = String(time.getSeconds()).padStart(2, '0');

    return `${hour}:${minute}:${second}`;
  }

  function changeFormatByMinutes(second: number): string {
    const minutes: number = Math.floor(second / 60);
    const remainingSeconds: number = second % 60;

    return `${minutes} Menit ${remainingSeconds} Detik`;
  }

  const dateFormatted: string = changeFormatByDate(
    dataQuizHistory.timestamp_taken
  );

  const timeFormatted: string = changeFormatByTime(
    dataQuizHistory.timestamp_taken
  );

  const minutesFormatted: string = changeFormatByMinutes(
    dataQuizHistory.time_elapsed
  );

  const quizReviewLink = `/tes-minat-bakat/bakat/genderId/session/sessionId/quiz/quizId/mulai/nilai-quiz?id=${quizId}&score=${score}&right=${right}&wrong=${wrong}&time_elapsed=${timeElapsed}&total_question=${totalQuestion}&remaining_attempt=${remainingAttempt}&status=${status}`;

  return (
    <section className="w-full max-w-xl mx-auto bg-white shadow-md rounded-xl p-4">
      <div className="border border-gray-300 rounded-lg p-4">
        <div className="flex flex-row justify-between text-sm font-medium mb-2 text-left gap-1">
          <p>{dateFormatted}</p>
          <p>{timeFormatted}</p>
        </div>

        <hr className="border-t-2 border-gray-300 mb-4" />

        <div className="flex justify-center mb-4">
          <Image
            src="/images/tes-minat-bakat/tes-bakat.svg"
            alt="Tes Bakat"
            width={200}
            height={120}
            className="rounded-md"
          />
        </div>

        <div className="text-center mb-2">
          <h3 className="font-bold text-lg text-sky-base mb-2">
            {completeData?.data?.full_name}
          </h3>
          <p className="text-md font-semibold">Tes Ke - {index + 1}</p>
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
          <div className="flex items-center justify-center rounded-lg bg-[#425F2C] text-white text-center font-bold text-xs px-4 py-2 md:py-3">
            Paket-C Gratis
          </div>

          <p className="text-sm text-gray-600 font-medium text-center">
            Smk 5 Muhammadiyah
          </p>

          <Link
            href={quizReviewLink}
            className="text-white bg-sky-base hover:opacity-80 text-sm text-center font-semibold flex items-center justify-center gap-1 px-4 py-2 rounded-lg transition-all"
          >
            Lihat Detail
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

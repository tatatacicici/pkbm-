'use client';

import { LoadingSpinner } from '@kampus-gratis/components/atoms';
import EmptyState from '@kampus-gratis/apps/kg/components/empty-state';
import Link from 'next/link';
import { useParams, usePathname, useSearchParams } from 'next/navigation';
import { FC, ReactElement, useEffect, useState } from 'react';
import { useGetQuizHistoryById } from '@kampus-gratis/apps/kg/hooks/tes-minat-bakat/bakat/quiz/hook';
import { TQuizHistoryData2 } from '@kampus-gratis/apps/kg/types/quiz';
import { HistoryCard } from './HistoryCard';

type Props = {
  id: string;
};

export const QuizHistoryModule: FC<Props> = ({ id }): ReactElement => {
  // TODO | tambahan start
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const quizId = searchParams.get('id');
  const score = searchParams.get('score');
  const right = searchParams.get('right');
  const wrong = searchParams.get('wrong');
  const timeElapsed = searchParams.get('time_elapsed');
  const totalQuestion = searchParams.get('total_question');
  // const remainingAttempt = searchParams.get('remaining_attempt');
  const status = searchParams.get('status');
  const riwayatPath = pathname.replace('mulai/nilai-quiz', 'riwayat-quiz');

  const isMinatPage = pathname.includes('/tes-minat-bakat/minat/');
  const isBakatPage = pathname.includes('/tes-minat-bakat/bakat/');
  // TODO | tambahan end

  // TODO | pakai yg baru start
  const params = useParams();
  const [dataQuizHistories, setDataQuizHistories] = useState<
    TQuizHistoryData2[]
  >([]);
  const [remainingAttempt, setRemainingAttempt] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      const storedQuizHistory = localStorage.getItem(
        'quizTesMinatScoreHistory'
      );
      if (storedQuizHistory) {
        try {
          const parsedHistory: TQuizHistoryData2[] =
            JSON.parse(storedQuizHistory);

          if (Array.isArray(parsedHistory)) {
            const historyData = parsedHistory.filter((item) => item.id === id);
            setDataQuizHistories(historyData);
          }
        } catch (error) {
          console.error(
            'Gagal memparsing quizTesMinatScoreHistory dari localStorage:',
            error
          );
        }
      }

      const storedAttempts = localStorage.getItem('remainingAttempt');
      setRemainingAttempt(storedAttempts ? parseInt(storedAttempts) : 3);

      setIsLoading(false);
    }, 500);
  }, [id]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (dataQuizHistories.length === 0) {
    return <EmptyState text="Oops! Belum ada riwayat tes" />;
  }

  return (
    <div className="w-[90%] md:w-[85%] min-h-screen mx-auto my-20">
      <section className="px-6 md:px-14 2xl:px-0 border-b-2 border-gray-200">
        <div className="flex gap-x-8 mt-8 justify-center">
          <div className="text-center">
            <Link
              href={`/tes-minat-bakat/minat/session/sessionId/quiz/quizId/riwayat-quiz?total_question=${totalQuestion}`}
              className={`text-[16px] font-semibold ${
                isMinatPage ? 'text-[#43A7FF]' : 'text-gray-500'
              }`}
            >
              Tes Minat (Holland RIASEC)
            </Link>
            {isMinatPage && (
              <div className="h-[2px] w-full bg-[#43A7FF] mt-2 rounded-md"></div>
            )}
          </div>
          <div className="text-center">
            <Link
              href={`/tes-minat-bakat/bakat/session/sessionId/quiz/quizId/riwayat-quiz?total_question=${totalQuestion}`}
              className={`text-[16px] font-semibold ${
                isBakatPage ? 'text-[#43A7FF]' : 'text-gray-500'
              }`}
            >
              Tes Bakat
            </Link>
            {isBakatPage && (
              <div className="h-[2px] w-full bg-[#43A7FF] mt-2 rounded-md"></div>
            )}
          </div>
        </div>
      </section>
      <h1 className="text-lg sm:text-xl md:text-2xl font-bold mt-10 mb-5">
        Riwayat Tes Minat
      </h1>
      <section className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        {dataQuizHistories.map((historyData, index) => (
          <HistoryCard
            key={index}
            dataQuizHistory={historyData}
            index={index}
          />
        ))}
      </section>
      <div className="flex flex-col md:flex-row justify-center items-center mt-10 gap-10">
        <Link href={`/tes-minat-bakat/minat`} className="w-full md:w-auto">
          <button
            type="button"
            className="w-full md:w-auto text-sky-base border-2 border-sky-base bg-white hover:bg-sky-base hover:text-white px-6 py-3 rounded-md shadow-sm font-bold transition-colors ease-out duration-300"
          >
            Kembali ke Tes Minat
          </button>
        </Link>
        <Link href={`/tes-minat-bakat`} className="w-full md:w-auto">
          <button
            type="button"
            className="w-full md:w-auto text-sky-base border-2 border-sky-base bg-white hover:bg-sky-base hover:text-white px-6 py-3 rounded-md shadow-sm font-bold transition-colors ease-out duration-300"
          >
            Kembali ke Tes Minat & Bakat
          </button>
        </Link>
        {/* <Link href={`/tes-minat-bakat/minat`} className="w-full md:w-auto">
          <button
            className={`w-full md:w-auto px-6 py-3 rounded-md text-base font-bold text-white ${
              remainingAttempt === 0
                ? 'bg-neutral-300 cursor-not-allowed'
                : 'bg-sky-base hover:opacity-80 transition-all'
            }`}
            disabled={remainingAttempt === 0}
          >
            {remainingAttempt > 0
              ? `Coba Lagi (Sisa ${remainingAttempt - 1})`
              : 'Percobaan Habis'}
          </button>
        </Link> */}
      </div>
    </div>
    // TODO | pakai yg baru end

    //   const params = useParams();
    //   const { data, isLoading } = useGetQuizHistoryById(id);
    //   const dataQuizHistories = data?.data?.history_data as TQuizHistoryData[];

    //   if (isLoading) {
    //     return <LoadingSpinner />;
    //   }

    //   if (!Array.isArray(dataQuizHistories)) {
    //     return <EmptyState text="Oops! Belum ada riwayat kuis" />;
    //   }

    //   const reversedDataQuizHistories = [...dataQuizHistories].reverse();

    //   if (!data?.data) return <EmptyState text="Oops! Belum ada riwayat kuis" />;

    //   return (
    //     <div className="w-[90%] md:w-[85%] min-h-screen mx-auto my-20">
    //       <section className="grid grid-cols-1 gap-10 lg:grid-cols-2">
    //         {reversedDataQuizHistories ? (
    //           reversedDataQuizHistories?.map((historyData, index) => (
    //             <HistoryCard
    //               key={index}
    //               dataQuizHistory={historyData}
    //               index={index}
    //             />
    //           ))
    //         ) : (
    //           <EmptyState text="Oops! Belum ada riwayat kuis" />
    //         )}
    //       </section>
    //       <div className="w-full flex justify-center mt-9">
    //         <Link
    //           href={`/studi-ku/${params.subjectId}/session/${params.sessionId}/kuis/${id}`}
    //           className="w-full md:w-1/4 mx-auto"
    //         >
    //           <button
    //             className={`w-full py-4 rounded-lg text-base font-bold text-white ${
    //               data?.data?.remaining_attempt === 0
    //                 ? 'bg-neutral-300 cursor-not-allowed'
    //                 : 'bg-primary-500'
    //             }`}
    //             disabled={data?.data?.remaining_attempt === 0}
    //           >
    //             {data?.data?.remaining_attempt > 0
    //               ? `Coba Lagi (Sisa ${data?.data?.remaining_attempt}) `
    //               : 'Percobaan Habis'}
    //           </button>
    //         </Link>
    //       </div>
    //     </div>
    //   );
  );
};

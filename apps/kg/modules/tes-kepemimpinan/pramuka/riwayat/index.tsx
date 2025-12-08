'use client';

import { LoadingSpinner } from '@kampus-gratis/components/atoms';
import EmptyState from '../../../../components/empty-state';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { FC, ReactElement, useEffect, useState } from 'react';
import { useGetQuizHistoryById } from '@kampus-gratis/apps/kg/hooks/tes-kepemimpinan/quiz/hook';
import { TQuizHistoryData2 } from '../../../../types/quiz';
import { HistoryCard } from './HistoryCard';

type Props = {
  id: string;
};

export const QuizHistoryModule: FC<Props> = ({ id }): ReactElement => {
  // TODO | pakai yg baru start
  const params = useParams();
  const [dataQuizHistories, setDataQuizHistories] = useState<
    TQuizHistoryData2[]
  >([]);
  const [remainingAttempt, setRemainingAttempt] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulasi loading sebelum mengambil data
    setTimeout(() => {
      const storedQuizHistory = localStorage.getItem('quizPramukaScoreHistory');

      if (storedQuizHistory) {
        try {
          const parsedHistory: TQuizHistoryData2[] =
            JSON.parse(storedQuizHistory);

          // Pastikan parsedHistory adalah array, lalu ambil data yang sesuai dengan id
          if (Array.isArray(parsedHistory)) {
            const historyData = parsedHistory.filter((item) => item.id === id);
            setDataQuizHistories(historyData); // Tidak menggunakan reverse()
          }
        } catch (error) {
          console.error(
            'Gagal memparsing quizScoreHistory dari localStorage:',
            error
          );
        }
      }

      // Ambil sisa percobaan
      const storedAttempts = localStorage.getItem('remainingAttempt');
      setRemainingAttempt(storedAttempts ? parseInt(storedAttempts) : 3);

      setIsLoading(false);
    }, 500); // Simulasi delay 500ms
  }, [id]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (dataQuizHistories.length === 0) {
    return <EmptyState text="Oops! Belum ada riwayat kuis" />;
  }

  return (
    <div className="w-[90%] md:w-[85%] min-h-screen mx-auto my-20">
      <h1 className="text-lg sm:text-xl md:text-2xl text-center font-bold text-gray-900">
        Riwayat Tes Kepemimpinan Pramuka
      </h1>
      <hr className="w-2/6 md:w-1/6 mx-auto mb-10 xl:mb-16 border-t-4 border-sky-base rounded-full mt-4" />
      <section className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        {dataQuizHistories.map((historyData, index) => (
          <HistoryCard
            key={index}
            dataQuizHistory={historyData}
            index={index}
          />
        ))}
      </section>
      <div className="w-full flex justify-center mt-9">
        <Link
          href={`/tes-kepemimpinan/pramuka/session/sessionId/quiz/quizId`}
          className="w-full md:w-1/4 mx-auto"
        >
          <button
            className={`w-full py-4 rounded-lg text-base font-bold text-white ${
              remainingAttempt === 0
                ? 'bg-neutral-300 cursor-not-allowed'
                : 'bg-sky-base hover:opacity-80 transition-all'
            }`}
            disabled={remainingAttempt === 0}
          >
            {remainingAttempt > 0
              ? `Coba Lagi (Sisa ${remainingAttempt})`
              : 'Percobaan Habis'}
          </button>
        </Link>
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

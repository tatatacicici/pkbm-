'use client';

import { LoadingSpinner } from '@kampus-gratis/components/atoms';
import EmptyState from '../../../../components/empty-state';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { FC, ReactElement } from 'react';
import { useGetQuizHistoryById } from '../../../../hooks/mystudy/quiz/hook';
import { TQuizHistoryData } from '../../../../types/quiz';
import { HistoryCard } from './HistoryCard';

type Props = {
  id: string;
};

export const QuizHistoryModule: FC<Props> = ({ id }): ReactElement => {
  const params = useParams();

  const { data, isLoading } = useGetQuizHistoryById(id);

  const dataQuizHistories = data?.data?.history_data as TQuizHistoryData[];

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!Array.isArray(dataQuizHistories)) {
    return <EmptyState text="Oops! Belum ada riwayat kuis" />;
  }

  const reversedDataQuizHistories = [...dataQuizHistories].reverse();

  if (!data?.data) return <EmptyState text="Oops! Belum ada riwayat kuis" />;

  return (
    <div className="w-[90%] md:w-[85%] min-h-screen mx-auto my-20">
      <section className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        {reversedDataQuizHistories ? (
          reversedDataQuizHistories?.map((historyData, index) => (
            <HistoryCard
              key={index}
              dataQuizHistory={historyData}
              index={index}
            />
          ))
        ) : (
          <EmptyState text="Oops! Belum ada riwayat kuis" />
        )}
      </section>
      <div className="w-full flex justify-center mt-9">
        <Link
          href={`/studi-ku/${params.subjectId}/session/${params.sessionId}/kuis/${id}`}
          className="w-full md:w-1/4 mx-auto"
        >
          <button
            className={`w-full py-4 rounded-lg text-base font-bold text-white ${
              data?.data?.remaining_attempt === 0
                ? 'bg-neutral-300 cursor-not-allowed'
                : 'bg-sky-base hover:opacity-80 transition-all'
            }`}
            disabled={data?.data?.remaining_attempt === 0}
          >
            {data?.data?.remaining_attempt > 0
              ? `Coba Lagi (Sisa ${data?.data?.remaining_attempt}) `
              : 'Percobaan Habis'}
          </button>
        </Link>
      </div>
    </div>
  );
};

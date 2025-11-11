import { usePathname } from 'next/navigation';
import { FC, ReactElement } from 'react';
import { TQuizHistoryData } from '../../../../types/quiz';
import { DetailCard } from '../score/DetailCard';

export const HistoryCard: FC<{
  dataQuizHistory: TQuizHistoryData;
  index: number;
}> = ({ dataQuizHistory, index }): ReactElement => {
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

  const quizReviewLink = `${pathname}/${dataQuizHistory.id}`;

  return (
    <section className="bg-white shadow-sm rounded-md px-5 py-4 w-full">
      <section className="flex justify-between">
        <div className="font-bold">
          <h1>Percobaan {index + 1}</h1>
        </div>
        <div className="text-xs flex gap-2">
          <p className="mb-1">{dateFormatted}</p>
          <p>-</p>
          <p className="lg:text-end">{timeFormatted}</p>
        </div>
      </section>
      <section className="flex flex-col sm:flex-row justify-between items-center lg:gap-x-2 mt-3">
        <div className="flex flex-col w-full h-auto lg:w-28 py-2 lg:py-0 mb-2 lg:mb-0 items-center justify-center">
          <h1 className="text-4xl font-bold">{dataQuizHistory.score}</h1>
          <p className="text-xs">
            {dataQuizHistory.status === 'FINISHED' ? 'Lulus' : 'Tidak Lulus'}
          </p>
        </div>
        <div className="gap-2 grid grid-cols-1 md:grid-cols-2">
          <DetailCard type="trueAnswer" value={dataQuizHistory.correct} />
          <DetailCard type="timeFinished" value={minutesFormatted} />
          <DetailCard type="falseAnswer" value={dataQuizHistory.wrong} />
          <DetailCard
            type="totalQuestions"
            value={dataQuizHistory.total_question}
          />
        </div>
      </section>
    </section>
  );
};

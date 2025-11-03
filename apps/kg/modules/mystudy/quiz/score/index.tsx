'use client';

import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import Link from 'next/link';
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation';
import { FC, ReactElement } from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  useGetQuizDescById,
  useGetQuizScoreById,
} from '../../../../hooks/mystudy/quiz/hook';
import { TQuizScoreItem } from '../../../../types/quiz';
import { DetailCard } from './DetailCard';
import { StudiKuBreadCumbs } from 'apps/kg/utils/constantStudiKu';
import { BreadCrumb, LoadingSpinner } from '@kampus-gratis/components/atoms';
ChartJS.register(ArcElement, Tooltip, Legend);

export const QuizScoreModule = (): ReactElement => {
  const { subjectId, sessionId, quizId } = useParams();
  const { data: quizScoreData, isLoading } = useGetQuizScoreById(
    quizId as string
  );

  const { data: quizDetail } = useGetQuizDescById(
    subjectId as string,
    sessionId as string,
    quizId as string
  );

  const dataQuizScores: TQuizScoreItem = quizScoreData?.data as TQuizScoreItem;
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const totalQuestion = searchParams.get('total_question');
  const riwayatPath = pathname.replace('mulai/nilai-quiz', 'riwayat-quiz');
  function convertNumberToTens(num: number): number {
    const tens = (num / dataQuizScores?.total_question) * 100;
    return Math.round(tens);
  }
  function changeFormatByMinutes(second: number): string {
    const minutes: number = Math.floor(second / 60);
    const remainingSeconds: number = second % 60;

    return `${minutes} Menit ${remainingSeconds} Detik`;
  }

  const rightAnswer = convertNumberToTens(dataQuizScores?.right || 0);
  const wrongAnswer = convertNumberToTens(dataQuizScores?.wrong || 0);
  const timeElapsed = changeFormatByMinutes(dataQuizScores?.time_elapsed || 0);

  const data = {
    labels: ['Your Score'],
    datasets: [
      {
        data: [rightAnswer, wrongAnswer],
        backgroundColor: ['#43A7FF', '#E5E5E5'],
        borderWidth: 0,
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    elements: {
      arc: {
        borderRadius: 10,
      },
    },
    cutout: 150,
  };

  const scoreQuizBreadCrumb = [
    ...StudiKuBreadCumbs,
    {
      name: quizDetail?.data.subject.name,
      link: `/studi-ku/${subjectId}`,
    },
    {
      name: quizDetail?.data.quiz.title,
      link: `/studi-ku/${subjectId}/session/${sessionId}/kuis/${quizId}`,
    },
    {
      name: 'Hasil Quiz',
      link: `/studi-ku/${subjectId}/session/${sessionId}/kuis/${quizId}/mulai/nilai-quiz`,
    },
  ];

  if (isLoading) return <LoadingSpinner />;

  return (
    <>
      <BreadCrumb items={scoreQuizBreadCrumb} />
      <div className="pb-16 px-8 md:px-14 lg:px-16">
        <div className="max-w-[1440px] mx-auto h-[calc(100vh-190px)]">
          <div className="px-6 md:px-8 lg:px-16 xl:px-40 py-14 w-full flex flex-col">
            {quizScoreData && (
              <>
                <section className="w-full py-14 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-20 items-center justify-center">
                  <div className="w-full h-64 relative flex items-center justify-center">
                    <div className="absolute rounded-full border-8 border-neutral-200/70">
                      <Doughnut data={data} options={options} className="p-4" />
                    </div>
                    <div className="flex flex-col items-center">
                      <h1 className="text-4xl text-neutral-900 font-black">
                        {rightAnswer}
                      </h1>
                      <p className="text-xl text-neutral-800">Point</p>
                    </div>
                  </div>
                  <div className="flex justify-between flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4 ">
                      <DetailCard
                        type="trueAnswer"
                        value={dataQuizScores?.right || 0}
                      />
                      <DetailCard
                        type="falseAnswer"
                        value={dataQuizScores?.wrong || 0}
                      />
                      <DetailCard
                        type="timeFinished"
                        value={timeElapsed || 0}
                      />
                      <DetailCard
                        type="totalQuestions"
                        value={dataQuizScores?.total_question || 0}
                      />
                    </div>
                    <div className=" w-full flex justify-center gap-y-3 lg:justify-end mt-10 flex-wrap gap-x-2">
                      <div className="w-full">
                        <Link
                          href={`${riwayatPath}?total_question=${totalQuestion}`}
                        >
                          <button
                            type="button"
                            className="text-sky-base border-2 border-sky-base bg-white hover:opacity-80 w-full h-12 rounded-md shadow-sm font-bold transition-colors ease-out duration-300"
                          >
                            Riwayat Pengerjaan Kuis
                          </button>
                        </Link>
                      </div>
                      {dataQuizScores?.remaining_attempt > 0 && (
                        <div className="w-full ">
                          <Link
                            href={`/studi-ku/${subjectId}/session/${sessionId}/kuis/${quizId}`}
                          >
                            <button
                              type="button"
                              className="bg-sky-base border-2 border-sky-base text-white hover:opacity-80  w-full h-12 rounded-md shadow-sm font-bold  transition-colors ease-out duration-300"
                            >
                              Coba Kembali (Sisa{' '}
                              {dataQuizScores?.remaining_attempt})
                            </button>
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </section>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

'use client';

import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import Link from 'next/link';
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation';
import { FC, ReactElement, useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  TQuizHistoryData2,
  TQuizScoreItem,
} from '@kampus-gratis/apps/kg/types/quiz';
import { DetailCard } from './DetailCard';
import { TesMinatBakatBreadcrumb } from '../../../constant';
import { BreadCrumb, LoadingSpinner } from '@kampus-gratis/components/atoms';
import {
  useGetQuizDescById,
  useGetQuizScoreById,
} from '@kampus-gratis/apps/kg/hooks/tes-minat-bakat/bakat/quiz/hook';
import Image from 'next/image';
import { useProfileComplete } from '@kampus-gratis/apps/kg/hooks/profile/hook';
import Avatar from 'react-avatar';

ChartJS.register(ArcElement, Tooltip, Legend);

export const QuizScoreModule = (): ReactElement => {
  const { subjectId, sessionId, quizId } = useParams();
  //   const { data: quizScoreData, isLoading } = useGetQuizScoreById(
  //     quizId as string
  //   );

  const { data: quizScoreData, isLoading } = useGetQuizScoreById();

  // untuk mengambil poto profile dan nama
  const { data: completeData } = useProfileComplete();

  // ? | untuk menyimpan nilai skor user
  console.log('Data dari useGetQuizScoreById:', quizScoreData);

  //   const { data: quizDetail } = useGetQuizDescById(
  //     subjectId as string,
  //     sessionId as string,
  //     quizId as string
  //   );
  const { data: quizDetail } = useGetQuizDescById();

  // const dataQuizScores: TQuizScoreItem = quizScoreData?.data as TQuizScoreItem;
  // ? | untuk menyimpan nilai skor user
  const [dataQuizScores, setDataQuizScores] = useState<TQuizScoreItem | null>(
    null
  );

  // ? | untuk menyimpan nilai skor user
  useEffect(() => {
    const storedQuizScore = localStorage.getItem('quizTesBakatScoreHistory');
    if (storedQuizScore) {
      try {
        const quizHistory = JSON.parse(storedQuizScore);
        if (Array.isArray(quizHistory) && quizHistory.length > 0) {
          setDataQuizScores(quizHistory[quizHistory.length - 1]);
        }
      } catch (error) {
        console.error('Error parsing quiz score history:', error);
      }
    }
  }, []);

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const totalQuestion = searchParams.get('total_question');
  const riwayatPath = pathname.replace('mulai/nilai-quiz', 'riwayat-quiz');

  // function convertNumberToTens(num: number): number {
  //   const tens = (num / dataQuizScores?.total_question) * 100;
  //   return Math.round(tens);
  // }

  // ? | untuk menyimpan nilai skor user
  function convertNumberToTens(num: number): number {
    const tens = (num / (dataQuizScores?.total_question || 1)) * 100;
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
        backgroundColor: ['#106FA4', '#E5E5E5'],
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

  // TODO: untuk bagian tanggal
  const [singleHistory, setSingleHistory] = useState<TQuizHistoryData2 | null>(
    null
  );
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);

  useEffect(() => {
    const storedQuizHistory = localStorage.getItem('quizTesBakatScoreHistory');
    if (storedQuizHistory) {
      try {
        const parsedHistory: TQuizHistoryData2[] =
          JSON.parse(storedQuizHistory);

        const lastIndex = parsedHistory.length - 1;
        const latest = parsedHistory[lastIndex];

        setSingleHistory(latest);
        setHistoryIndex(lastIndex);
      } catch (err) {
        console.error('Error parsing:', err);
      }
    }
  }, []);

  function changeFormatByDate(iso: string): string {
    const date = new Date(iso);
    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    };
    return date.toLocaleDateString('id-ID', options);
  }

  const scoreQuizBreadCrumb = [
    ...TesMinatBakatBreadcrumb,
    {
      name: quizDetail.quiz.categoryQuiz,
      // name: 'Tes Bakat',
      link: `/tes-minat-bakat/bakat`,
    },
    {
      name: 'Hasil Tes',
      link: `/tes-minat-bakat/bakat/session/sessionId/quiz/quizId/mulai/nilai-quiz`,
    },
  ];

  // if (isLoading) return <LoadingSpinner />;

  // ? | untuk menyimpan nilai skor user
  // console.log('Quiz Score Data dari API:', quizScoreData);
  console.log('Data dari localStorage:', dataQuizScores);

  if (!dataQuizScores) return <LoadingSpinner />;

  return (
    <>
      <BreadCrumb
        items={scoreQuizBreadCrumb}
        className="bg-white px-8 md:px-14 lg:px-16 py-4"
      />
      {/* <div className="pb-16 px-8 md:px-14 lg:px-16">
        <div className="max-w-[1440px] mx-auto h-[calc(100vh-190px)]"> */}

      <div className="w-full min-h-screen">
        {/* bg blue */}
        <section className="bg-sky-base text-white py-10 px-4">
          {singleHistory && historyIndex !== null && (
            <div>
              <p className="text-sm text-right mb-2">
                {changeFormatByDate(singleHistory.timestamp_taken)}
              </p>
            </div>
          )}

          {/* Isi Tengah */}
          <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold">
              <span className="text-yellowPrimary-base">Hasil Tes</span> Kamu
            </h1>
            {singleHistory && historyIndex !== null && (
              <p className="mt-1 text-sm md:text-base font-bold">
                Tes Ke - {historyIndex + 1}
              </p>
            )}
            <p className="mt-2 text-white/90 max-w-xl text-sm md:text-base font-medium">
              Tes IQ Ini Memberikan Gambaran Jelas Kemampuan Intelektual Kamu.
            </p>

            {/* Avatar */}
            <div className="mt-6">
              <figure className="rounded-full bg-neutral-300 border-4 border-white w-[120px] h-[120px] overflow-hidden">
                <Image
                  src={completeData?.data?.avatar || '/default-user.png'}
                  alt="Profile"
                  width={120}
                  height={120}
                  className="object-cover w-full h-full"
                />
              </figure>
            </div>
            <span className="text-base font-bold text-white mt-2 capitalize">
              {completeData?.data?.full_name}
            </span>
          </div>
        </section>

        {/* bg white */}
        <section className="bg-white text-gray-800 py-10 px-6 justify-center">
          <div className="max-w-3xl mx-auto">
            {/* Score IQ */}
            <div className="text-center">
              <h3 className="text-xl font-bold text-sky-base border-t-2 border-sky-base mb-2">
                Score IQ Kamu
              </h3>
              <div className="mt-6 flex justify-center">
                <div className="relative w-[150px] h-[150px]">
                  <Image
                    src="/images/tes-minat-bakat/tes-bakat-hasil-tes.svg"
                    alt="Hasil Tes"
                    fill
                    className="object-contain"
                  />
                  <span className="absolute inset-0 flex items-center justify-center text-[32px] font-extrabold text-orange-base [text-shadow:2px_2px_0_#fff,-2px_2px_0_#fff,2px_-2px_0_#fff,-2px_-2px_0_#fff]">
                    81
                  </span>
                </div>
              </div>
              <p className="mt-5 text-lg font-bold text-sky-base border-b-2 border-sky-base pb-2">
                Normal
              </p>
            </div>

            {/* Gambaran Umum */}
            <h3 className="text-center text-xl font-bold text-sky-base border-t-2 border-sky-base mt-10">
              Gambaran Umum
            </h3>
            <div className="mt-4 text-sm md:text-base space-y-4 text-center font-medium border-b-2 border-sky-base pb-2">
              <p>
                Menyukai pekerjaan yang berhubungan dengan kesehatan dan
                kesejahteraan orang lain, serta memiliki ketertarikan dalam
                membantu penyembuhan dan perawatan pasien.
              </p>
              <p>
                Lebih nyaman berinteraksi dengan orang dibandingkan bekerja
                dengan objek, mesin, atau data.
              </p>
              <p>
                Menunjukkan kecenderungan dalam pemecahan masalah, pengambilan
                keputusan cepat, dan kerja sama tim.
              </p>
            </div>

            {dataQuizScores?.remaining_attempt > 0 && (
              <div className="flex flex-col md:flex-row justify-center items-center mt-5 gap-3">
                <Link
                  href={`${riwayatPath}?total_question=${totalQuestion}`}
                  className="w-full md:w-auto"
                >
                  <button
                    type="button"
                    className="w-full md:w-auto text-sky-base border-2 border-sky-base bg-white px-6 py-3 rounded-md shadow-sm font-bold hover:opacity-80 transition-all"
                  >
                    Riwayat Pengerjaan Tes
                  </button>
                </Link>
                <Link
                  href={`/tes-minat-bakat/bakat`}
                  className="w-full md:w-auto"
                >
                  <button
                    type="button"
                    className="w-full md:w-auto bg-sky-base border-2 border-sky-base text-white px-6 py-3 rounded-md shadow-sm font-bold hover:opacity-80 transition-all"
                  >
                    Coba Kembali (Sisa {dataQuizScores?.remaining_attempt})
                  </button>
                </Link>
              </div>
            )}
          </div>
        </section>
      </div>

      {/* </div> */}
      {/* </div> */}
    </>
  );
};

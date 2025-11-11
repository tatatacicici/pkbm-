'use client';

import React, { useEffect, useState } from 'react';
import EmptyState from '@kampus-gratis/apps/kg/components/empty-state';
import { BreadCrumb, LoadingSpinner } from '@kampus-gratis/components/atoms';
import Link from 'next/link';
import { usePathname, useParams } from 'next/navigation';
import {
  FaArrowLeft,
  FaClock,
  FaQuestionCircle,
  FaRedo,
  FaTrophy,
} from 'react-icons/fa';
// import { useGetQuizDescById } from '@kampus-gratis/apps/kg/hooks/try-out/quiz/hook';
import {
  quizTryoutInfoDummyData,
  quizTryoutTakeDummyData,
  TryOutBreadcrumb,
} from './constant';
import { BaseLayout } from '@kampus-gratis/apps/kg/components';

const QuizInfoCard = ({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string | number;
}) => (
  <div className="bg-white p-3 sm:p-4 rounded-lg shadow-md flex items-center space-x-3">
    <div className="text-sky-base text-xl">{icon}</div>
    <div>
      <h3 className="font-semibold text-gray-700 text-xs sm:text-sm">
        {title}
      </h3>
      <p className="text-sm sm:text-base font-bold text-sky-base">{value}</p>
    </div>
  </div>
);

const formatDuration = (minutes: number): string => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = Math.floor(minutes % 60);
  const remainingSeconds = Math.round((minutes * 60) % 60);

  let result = '';

  if (hours > 0) {
    result += `${hours} jam `;
  }

  if (remainingMinutes > 0) {
    result += `${remainingMinutes} menit`;
  }

  if (remainingSeconds > 0) {
    if (result.length > 0) {
      result += ' ';
    }
    result += `${remainingSeconds} detik`;
  } else if (remainingMinutes === 0 && hours === 0) {
    result = '0 detik'; // If only seconds are present and no hours or minutes, display "0 detik"
  }

  return result.trim() || '0 detik'; // Default to '0 detik' if no duration is provided
};

const formatNumber = (num: number | string | undefined): string => {
  if (num === undefined || num === null) return 'Tidak tersedia';
  const parsedNum = typeof num === 'string' ? parseFloat(num) : num;
  if (isNaN(parsedNum)) return 'Tidak tersedia';
  return Number.isInteger(parsedNum)
    ? parsedNum.toString()
    : parsedNum.toFixed(0);
};

export const QuizDetailModule = () => {
  // const { subjectId, sessionId, quizId } = useParams();
  // const { data, isLoading } = useGetQuizDescById(
  //   subjectId?.toString() || '',
  //   sessionId?.toString() || '',
  //   quizId?.toString() || ''
  // );
  // const data = { data: quizTryoutInfoDummyData };

  const { quizId } = useParams();
  // Cari data quiz berdasarkan display_id
  const quizData = quizTryoutInfoDummyData.find(
    (item) => String(item.display_id) === String(quizId)
  );
  const isLoading = false;

  const pathname = usePathname();
  const quizDesc = quizData?.quiz;

  // Cari data soal quiz berdasarkan display_id
  const quizQuestionData = quizTryoutTakeDummyData.find(
    (item) => String(item.display_id) === String(quizId)
  );
  const quizQuestionId = quizQuestionData?.display_id;

  // TODO | tambahan start
  const [isQuizInProgress, setIsQuizInProgress] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedStatus = localStorage.getItem('selectedAnswers-tryout');

      if (storedStatus) {
        const parsedStatus = JSON.parse(storedStatus);
        setIsQuizInProgress(parsedStatus?.progress || false);
      }
    }
  }, []);
  // TODO | tambahan end

  useEffect(() => {
    if (quizData?.quiz?.title) {
      let title = quizData.quiz.title.trim();

      const titleUpper = title.toLocaleUpperCase();

      if (titleUpper.startsWith('QUIZ') || titleUpper.startsWith('KUIS')) {
        title = title.slice(4).trim();
      }

      document.title = `Kuis ${title} - ${quizData.quiz.categoryQuiz} | Paket-C Gratis`;

      if (typeof window !== 'undefined') {
        window.gtag('config', 'G-YWYY60L1FX', {
          page_title: document.title,
          page_location: window.location.href,
          page_path: window.location.pathname,
        });
      }
    }
  }, [quizData]);

  if (isLoading) return <LoadingSpinner />;
  if (!quizData || !quizDesc)
    return <EmptyState text="Oops! Kuis tidak ditemukan" />;

  const detailQuizBreadcrumbs = [
    ...TryOutBreadcrumb,
    {
      name: `${quizDesc.categoryQuiz}`,
      link: `/try-out/session/${quizData.display_session_no}/quiz/${quizData.display_id}`,
    },
  ];

  const totalPoints = quizDesc.total_questions * (quizDesc.question_point || 0);

  return (
    <BaseLayout>
      <div className="bg-gray-100 min-h-screen">
        <BreadCrumb bgColor="bg-grey-50" items={detailQuizBreadcrumbs} />
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-3 sm:py-6">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-4 sm:p-6">
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1">
                {quizDesc.title}
              </h1>
              <p className="text-sm sm:text-base font-semibold text-gray-600 mb-3 sm:mb-4">
                {quizDesc.categoryQuiz}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 mb-4 sm:mb-6">
                <QuizInfoCard
                  icon={<FaQuestionCircle />}
                  title="Jumlah Pertanyaan"
                  value={quizDesc.total_questions || 0}
                />
                <QuizInfoCard
                  icon={<FaTrophy />}
                  title="Poin per Pertanyaan"
                  value={quizDesc.question_point}
                />
                <QuizInfoCard
                  icon={<FaClock />}
                  title="Durasi"
                  value={formatDuration(quizDesc.duration / 60)}
                />
                <QuizInfoCard
                  icon={<FaRedo />}
                  title="Sisa Kesempatan"
                  value={quizDesc.remaining_attempts || 0}
                />
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-2 sm:p-5 mb-3 sm:mb-4">
                <h3 className="text-lg sm:text-md md:text-lg font-bold text-sky-base mb-1">
                  Tentang {quizDesc.title} {quizDesc.categoryQuiz}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Tryout ini bertujuan untuk menguji pemahaman Anda terhadap
                  materi yang telah dipelajari, dengan soal-soal yang dirancang
                  agar Anda dapat mengetahui seberapa siap menghadapi ujian
                  sebenarnya!
                </p>
              </div>
              <div className="space-y-2 sm:space-y-3 text-gray-700 text-xs sm:text-sm">
                <p></p>
                <p className="text-sm sm:text-base">
                  Try out ini bertujuan untuk menguji pengetahuan Anda tentang
                  materi yang telah dipelajari di pertemuan ini.
                </p>
                <p className="text-sm sm:text-base">
                  Beberapa ketentuannya sebagai berikut:
                </p>
                <p className="text-sm sm:text-base">
                  Terdapat{' '}
                  <strong>{quizDesc.total_questions} pertanyaan</strong> yang
                  harus dikerjakan dalam try out ini dan setiap pertanyaan
                  mempunyai bobot{' '}
                  <strong>Nilai {quizDesc.question_point} Poin.</strong>
                </p>
                <p className="text-sm sm:text-base font-bold">
                  Total nilai maksimum yang bisa didapatkan adalah{' '}
                  {formatNumber(totalPoints)} poin.
                </p>
                <p className="text-sm sm:text-base font-bold">
                  Syarat Nilai Kelulusan :{' '}
                  {formatNumber(quizDesc.passing_score)} Poin
                  <br />
                  Durasi : {formatDuration(quizDesc.duration / 60)}
                </p>
                <p className="text-sm sm:text-base">
                  Setelah dimulai, try out tidak dapat dihentikan, Anda harus
                  menyelesaikan try out hingga selesai.
                </p>
                <p className="text-sm sm:text-base">
                  Anda mempunyai {quizDesc.remaining_attempts} kali kesempatan
                  untuk mengulang try out.
                </p>
                <p className="text-sm sm:text-base">
                  Apabila tidak memenuhi syarat kelulusan, maka Anda harus
                  menunggu selama 1 menit untuk mengulang pengerjaan try out
                  kembali.
                </p>
                <p className="font-bold text-sm sm:text-base">
                  Selamat Mengerjakan!
                </p>
              </div>

              <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
                {quizDesc.remaining_attempts > 0 && !isQuizInProgress && (
                  <Link
                    href={`${pathname}/mulai?total_question=${quizDesc.total_questions}&quiz_id=${quizQuestionData?.display_id}`}
                    className="block"
                    onClick={() => {
                      localStorage.setItem(
                        'selectedAnswers-tryout',
                        JSON.stringify({ progress: true })
                      );
                      setIsQuizInProgress(true);
                    }}
                  >
                    <button className="w-full py-2 bg-sky-base text-white text-sm sm:text-base font-semibold rounded-lg hover:opacity-80 transition duration-300">
                      Mulai Try Out (Sisa {quizDesc.remaining_attempts})
                    </button>
                  </Link>
                )}

                {quizDesc.remaining_attempts > 0 && isQuizInProgress && (
                  <Link
                    href={`${pathname}/mulai?total_question=${quizDesc.total_questions}&quiz_id=${quizQuestionData?.display_id}`}
                    className="block"
                  >
                    <button className="w-full py-2 bg-yellow-500 text-white text-sm sm:text-base font-semibold rounded-lg hover:bg-yellow-600 transition duration-300">
                      Try Out Sedang Berlangsung ...
                    </button>
                  </Link>
                )}

                {quizDesc.remaining_attempts === 0 && (
                  <button
                    disabled
                    className="w-full py-2 bg-gray-400 text-white text-sm sm:text-base font-semibold rounded-lg cursor-not-allowed"
                  >
                    Kesempatan Habis!
                  </button>
                )}

                {quizDesc.remaining_attempts < 20 && (
                  <Link
                    href={`${pathname}/riwayat-quiz?total_question=${quizDesc.total_questions}&quiz_id=${quizQuestionData?.display_id}`}
                    className="block"
                  >
                    <button className="w-full py-2 border-2 border-sky-base text-sky-base text-sm sm:text-base font-semibold rounded-lg hover:opacity-80 transition-all duration-300">
                      Riwayat Pengerjaan Try Out
                    </button>
                  </Link>
                )}

                <Link
                  href={`/try-out`}
                  className="inline-flex items-center text-sky-base hover:opacity-80 transition-all font-medium text-xs sm:text-sm"
                >
                  <FaArrowLeft className="mr-1 sm:mr-2" /> Kembali
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

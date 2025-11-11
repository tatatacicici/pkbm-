'use client';

import React, { useEffect } from 'react';
import EmptyState from '@kampus-gratis/apps/kg/components/empty-state';
import { BreadCrumb, LoadingSpinner } from '@kampus-gratis/components/atoms';
import { StudiKuBreadCumbs } from 'apps/kg/utils/constantStudiKu';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import {
  FaArrowLeft,
  FaClock,
  FaQuestionCircle,
  FaRedo,
  FaTrophy,
} from 'react-icons/fa';
import { useGetQuizDescById } from '../../../../hooks/mystudy/quiz/hook';

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
  const { subjectId, sessionId, quizId } = useParams();
  const { data, isLoading } = useGetQuizDescById(
    subjectId?.toString() || '',
    sessionId?.toString() || '',
    quizId?.toString() || ''
  );
  const pathname = usePathname();
  const quizDesc = data?.data?.quiz;

  useEffect(() => {
    if (data?.data?.subject?.name && quizDesc?.title) {
      let title = quizDesc.title.trim();

      const titleUpper = title.toLocaleUpperCase();

      if (titleUpper.startsWith('QUIZ') || titleUpper.startsWith('KUIS')) {
        title = title.slice(4).trim();
      }

      document.title = `Kuis ${title} Pertemuan ${data.data.session.session_no} - ${data.data.subject.name} | Paket-C Gratis`;

      if (typeof window !== 'undefined') {
        window.gtag('config', 'G-YWYY60L1FX', {
          page_title: document.title,
          page_location: window.location.href,
          page_path: window.location.pathname,
        });
      }
    }
  }, [data, quizDesc]);

  if (isLoading) return <LoadingSpinner />;
  if (!data || !quizDesc)
    return <EmptyState text="Oops! Kuis tidak ditemukan" />;

  const detailQuizBreadcrumbs = [
    ...StudiKuBreadCumbs,
    { name: data.data.subject.name, link: `/studi-ku/${subjectId}` },
    {
      name: quizDesc.title,
      link: `/studi-ku/${subjectId}/session/${sessionId}/kuis/${quizId}`,
    },
  ];

  const totalPoints = quizDesc.total_questions * (quizDesc.question_point || 0);

  return (
    <div className="bg-gray-100 min-h-screen">
      <BreadCrumb
        bgColor="bg-white"
        className="px-3 py-2 sm:px-4 sm:py-3"
        items={detailQuizBreadcrumbs}
      />

      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-3 sm:py-6">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-4 sm:p-6">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1">
              Kuis: {quizDesc.title}
            </h1>
            <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
              Pertemuan {data.data.session.session_no}
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
                value={formatNumber(quizDesc.question_point)}
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

            <div className="bg-blue-50 border-l-4 border-blue-500 p-2 sm:p-3 mb-3 sm:mb-4">
              <p className="text-blue-700 text-xs sm:text-sm">
                Kuis ini bertujuan untuk menguji pengetahuan Anda tentang materi
                yang telah dipelajari di pertemuan ini. Setelah dimulai, kuis
                tidak dapat dihentikan, Anda harus menyelesaikan kuis hingga
                selesai.
              </p>
            </div>

            <div className="space-y-2 sm:space-y-3 text-gray-700 text-xs sm:text-sm">
              <p>
                Total nilai maksimum yang bisa didapatkan adalah{' '}
                <strong>{formatNumber(totalPoints)} poin</strong>.
              </p>
              <p>
                Apabila tidak memenuhi syarat kelulusan, maka Anda harus
                menunggu selama 1 menit untuk mengulang pengerjaan Kuis kembali.
              </p>
              <p className="font-semibold text-sm sm:text-base">
                Selamat Mengerjakan!
              </p>
            </div>

            <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
              {quizDesc.remaining_attempts > 0 &&
                !localStorage.getItem(`selectedAnswers-${quizId}`) && (
                  <Link
                    href={`${pathname}/mulai?total_question=${quizDesc.total_questions}`}
                    className="block"
                  >
                    <button className="w-full py-2 bg-sky-base text-white text-sm sm:text-base font-semibold rounded-lg hover:opacity-80 transition duration-300">
                      Mulai Kuis (Sisa {quizDesc.remaining_attempts})
                    </button>
                  </Link>
                )}

              {quizDesc.remaining_attempts > 0 &&
                localStorage.getItem(`selectedAnswers-${quizId}`) && (
                  <Link
                    href={`${pathname}/mulai?total_question=${quizDesc.total_questions}`}
                    className="block"
                  >
                    <button className="w-full py-2 bg-yellow-500 text-white text-sm sm:text-base font-semibold rounded-lg hover:bg-yellow-600 transition duration-300">
                      Kuis Sedang Berlangsung ...
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
                  href={`${pathname}/riwayat-quiz?total_question=${quizDesc.total_questions}`}
                  className="block"
                >
                  <button className="w-full py-2 border-2 border-sky-base text-sky-base text-sm sm:text-base font-semibold rounded-lg hover:opacity-80 transition duration-300">
                    Riwayat Pengerjaan Kuis
                  </button>
                </Link>
              )}

              <Link
                href={`/studi-ku/${subjectId}`}
                className="inline-flex items-center text-sky-base hover:opacity-80 font-medium text-xs sm:text-sm"
              >
                <FaArrowLeft className="mr-1 sm:mr-2" /> Kembali ke List
                Pertemuan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

'use client';

import React, { useEffect, useState } from 'react';
import EmptyState from '@kampus-gratis/apps/kg/components/empty-state';
import { BreadCrumb, LoadingSpinner } from '@kampus-gratis/components/atoms';
import Link from 'next/link';
// import { useParams, usePathname } from 'next/navigation';
import { usePathname } from 'next/navigation';
import {
  FaArrowLeft,
  FaClock,
  FaQuestionCircle,
  FaRedo,
  FaTrophy,
} from 'react-icons/fa';
// import { useGetQuizDescById } from '@kampus-gratis/apps/kg/hooks/tes-minat-bakat/bakat/quiz/hook';
import {
  quizTesMinatInfoDummyData,
  TesMinatBakatBreadcrumb,
} from '../../constant';
import { BaseLayout } from '@kampus-gratis/apps/kg/components';
import Image from 'next/image';

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
      <h3 className="text-md font-bold text-gray-700 text-xs sm:text-sm">
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
    result = '0 detik';
  }

  return result.trim() || '0 detik';
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
  const data = { data: quizTesMinatInfoDummyData };
  const isLoading = false;

  const pathname = usePathname();
  const quizDesc = data?.data?.quiz;

  // TODO | tambahan start
  const [isQuizInProgress, setIsQuizInProgress] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedStatus = localStorage.getItem('selectedAnswers-tes-minat');

      if (storedStatus) {
        const parsedStatus = JSON.parse(storedStatus);
        setIsQuizInProgress(parsedStatus?.progress || false);
      }
    }
  }, []);
  // TODO | tambahan end

  // useEffect(() => {
  //   if (data?.data?.subject?.name && quizDesc?.title) {
  //     let title = quizDesc.title.trim();

  //     const titleUpper = title.toLocaleUpperCase();

  //     if (titleUpper.startsWith('QUIZ') || titleUpper.startsWith('KUIS')) {
  //       title = title.slice(4).trim();
  //     }

  //     document.title = `Kuis ${title} Pertemuan ${data.data.session.session_no} - ${data.data.subject.name} | Paket-C Gratis`;

  //     if (typeof window !== 'undefined') {
  //       window.gtag('config', 'G-YWYY60L1FX', {
  //         page_title: document.title,
  //         page_location: window.location.href,
  //         page_path: window.location.pathname,
  //       });
  //     }
  //   }
  // }, [data, quizDesc]);

  useEffect(() => {
    if (
      quizTesMinatInfoDummyData.subject.name &&
      quizTesMinatInfoDummyData.quiz.title
    ) {
      let title = quizTesMinatInfoDummyData.quiz.title.trim();

      const titleUpper = title.toLocaleUpperCase();

      if (titleUpper.startsWith('QUIZ') || titleUpper.startsWith('KUIS')) {
        title = title.slice(4).trim();
      }

      document.title = `${title} - ${quizTesMinatInfoDummyData.quiz.categoryQuiz} | Paket-C Gratis`;

      if (typeof window !== 'undefined') {
        window.gtag('config', 'G-YWYY60L1FX', {
          page_title: document.title,
          page_location: window.location.href,
          page_path: window.location.pathname,
        });
      }
    }
  }, [quizTesMinatInfoDummyData]);

  if (isLoading) return <LoadingSpinner />;
  if (!data || !quizDesc)
    return <EmptyState text="Oops! Kuis tidak ditemukan" />;

  const detailQuizBreadcrumbs = [
    ...TesMinatBakatBreadcrumb,
    {
      name: `${quizDesc.categoryQuiz}`,
      link: `/tes-minat-bakat/minat`,
    },
  ];

  const totalPoints = quizDesc.total_questions * (quizDesc.question_point || 0);

  return (
    <div className="bg-gray-100 min-h-screen">
      <BreadCrumb bgColor="bg-grey-50" items={detailQuizBreadcrumbs} />

      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-3 sm:py-6">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-4 sm:p-6">
            <div className="bg-sky-base text-white rounded-md p-8 w-full shadow-md items-center lg:items-start mb-5">
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-3">
                {quizDesc.title}
              </h1>
              <p className="text-sm sm:text-base font-semibold">
                {quizDesc.categoryQuiz}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-6">
              <QuizInfoCard
                icon={<FaQuestionCircle />}
                title="Jumlah Pertanyaan"
                value={quizDesc.total_questions || 0}
              />
              {/* <QuizInfoCard
                  icon={<FaTrophy />}
                  title="Poin per Pertanyaan"
                  value={formatNumber(quizDesc.question_point)}
                /> */}
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
                Tentang Tes Minat (Holland RIASEC)
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm">
                Tes minat ini menggunakan metode Holland RIASEC untuk
                mengidentifikasi tipe minat dan kepribadian kerja Anda. Hasilnya
                akan membantu Anda untuk memahami jurusan kuliah dan pekerjaan
                yang cocok.
              </p>
            </div>

            <div className="space-y-2 sm:space-y-3 text-gray-700 text-xs sm:text-sm">
              <p className="text-sm sm:text-base">
                Tes minat Holland RIASEC adalah tes minat dan kepribadian yang
                dibuat oleh John L. Holland. Tes ini membantu Anda mengenali
                kecenderungan diri dalam dunia kerja, dengan mengelompokkan
                kepribadian menjadi 6 tipe utama, misalnya apakah Anda lebih
                cenderung praktis, analitis, kreatif, sosial, suka memimpin,
                atau teratur. Hasilnya bisa menjadi panduan untuk memilih
                jurusan kuliah maupun karier yang paling sesuai dengan diri
                Anda.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                <div className="bg-white p-3 rounded-lg border border-gray-200">
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-2">🔧</span>
                    <h4 className="text-lg font-bold text-blue-600">
                      Realistic (R)
                    </h4>
                  </div>
                  <p className="text-md">
                    Suka bekerja dengan benda, mesin, alat, atau hewan
                  </p>
                </div>
                <div className="bg-white p-3 rounded-lg border border-gray-200">
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-2">🔬</span>
                    <h4 className="text-lg font-bold text-green-600">
                      Investigative (I)
                    </h4>
                  </div>
                  <p className="text-md">
                    Suka mengamati, belajar, menganalisis, dan memecahkan
                    masalah
                  </p>
                </div>
                <div className="bg-white p-3 rounded-lg border border-gray-200">
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-2">🎨</span>
                    <h4 className="text-lg font-bold text-purple-600">
                      Artistic (A)
                    </h4>
                  </div>
                  <p className="text-md">
                    Suka bekerja dengan ide, seni, musik, sastra, atau desain
                  </p>
                </div>
                <div className="bg-white p-3 rounded-lg border border-gray-200">
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-2">🤝</span>
                    <h4 className="text-lg font-bold text-orange-600">
                      Social (S)
                    </h4>
                  </div>
                  <p className="text-md">
                    Suka bekerja dengan orang lain, membantu, mengajar, atau
                    melayani
                  </p>
                </div>
                <div className="bg-white p-3 rounded-lg border border-gray-200">
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-2">💼</span>
                    <h4 className="text-lg font-bold text-red-600">
                      Enterprising (E)
                    </h4>
                  </div>
                  <p className="text-md">
                    Suka memimpin, meyakinkan, atau menjual
                  </p>
                </div>
                <div className="bg-white p-3 rounded-lg border border-gray-200">
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-2">📊</span>
                    <h4 className="text-lg font-bold text-gray-600">
                      Conventional (C)
                    </h4>
                  </div>
                  <p className="text-md">
                    Suka bekerja dengan data, angka, atau dokumen
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base font-bold">
                Petunjuk mengerjakan Tes
              </p>
              <p className="text-sm sm:text-base">
                Untuk setiap pernyataan yang tersedia, berikan penilaian
                berdasarkan seberapa setuju Anda dengan pernyataan tersebut
                menggunakan Skala Likert
              </p>
              <div className="bg-white p-4 rounded-lg border border-gray-200 mb-4">
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 text-center">
                  <div className="p-2 bg-red-100 hover:bg-red-300 rounded transition-all">
                    <div className="text-lg font-bold text-red-600">1</div>
                    <p className="text-md font-medium">Sangat Tidak Setuju</p>
                  </div>
                  <div className="p-2 bg-orange-100 hover:bg-orange-300 rounded transition-all">
                    <div className="text-lg font-bold text-orange-600">2</div>
                    <p className="text-md font-medium">Tidak Setuju</p>
                  </div>
                  <div className="p-2 bg-yellow-100 hover:bg-yellow-300 rounded transition-all">
                    <div className="text-lg font-bold text-yellow-600">3</div>
                    <p className="text-md font-medium">Netral</p>
                  </div>
                  <div className="p-2 bg-green-100 hover:bg-green-300 rounded transition-all">
                    <div className="text-lg font-bold text-green-600">4</div>
                    <p className="text-md font-medium">Setuju</p>
                  </div>
                  <div className="p-2 bg-blue-100 hover:bg-blue-300 rounded transition-all">
                    <div className="text-lg font-bold text-blue-600">5</div>
                    <p className="text-md font-medium">Sangat Setuju</p>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base">
                Beberapa ketentuannya sebagai berikut:
              </p>
              <p className="text-sm sm:text-base">
                Terdapat <strong>{quizDesc.total_questions} pertanyaan</strong>{' '}
                yang harus dikerjakan dalam tes ini (10 soal per tipe RIASEC).
              </p>
              <p className="text-sm sm:text-base font-bold">
                Durasi Tes Minat : {formatDuration(quizDesc.duration / 60)}
              </p>
              <p className="text-sm sm:text-base">
                Setelah dimulai, tes tidak dapat dihentikan, Anda harus
                menyelesaikan tes hingga selesai.
              </p>
              <p className="text-sm sm:text-base">
                Anda mempunyai{' '}
                <strong>{quizDesc.remaining_attempts} kali kesempatan </strong>
                untuk mengulangi tes.
              </p>
              <p className="font-bold text-sm sm:text-base">
                Selamat Mengerjakan!
              </p>
            </div>

            <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
              {/* {quizDesc.remaining_attempts > 0 &&
                !localStorage.getItem(`selectedAnswers-${quizId}`) && (
                  <Link
                    href={`${pathname}/mulai?total_question=${quizDesc.total_questions}`}
                    className="block"
                  >
                    <button className="w-full py-2 bg-primary-500 text-white text-sm sm:text-base font-semibold rounded-lg hover:bg-primary-600 transition duration-300">
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
                )} */}

              {quizDesc.remaining_attempts > 0 && !isQuizInProgress && (
                <Link
                  // href={`${pathname}/mulai?total_question=${quizDesc.total_questions}`}
                  href={`/tes-minat-bakat/minat/session/sessionId/quiz/quizId/mulai?total_question=${quizDesc.total_questions}`}
                  className="block"
                  onClick={() => {
                    localStorage.setItem(
                      'selectedAnswers-tes-minat',
                      JSON.stringify({ progress: true })
                    );
                    setIsQuizInProgress(true);
                  }}
                >
                  <button className="w-full py-2 bg-sky-base text-white text-sm sm:text-base font-semibold rounded-lg hover:opacity-80 transition-all duration-300">
                    Mulai Tes (Sisa {quizDesc.remaining_attempts})
                  </button>
                </Link>
              )}

              {quizDesc.remaining_attempts > 0 && isQuizInProgress && (
                <Link
                  // href={`${pathname}/mulai?total_question=${quizDesc.total_questions}`}
                  href={`/tes-minat-bakat/minat/session/sessionId/quiz/quizId/mulai?total_question=${quizDesc.total_questions}`}
                  className="block"
                >
                  <button className="w-full py-2 bg-yellow-500 text-white text-sm sm:text-base font-semibold rounded-lg hover:bg-yellow-600 transition duration-300">
                    Tes Sedang Berlangsung ...
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
                  // href={`${pathname}/riwayat-quiz?total_question=${quizDesc.total_questions}`}
                  href={`/tes-minat-bakat/minat/session/sessionId/quiz/quizId/riwayat-quiz?total_question=${quizDesc.total_questions}`}
                  className="block"
                >
                  <button className="w-full py-2 border-2 border-sky-base text-sky-base text-sm sm:text-base font-semibold rounded-lg hover:opacity-80 transition-all duration-300">
                    Riwayat Pengerjaan Tes
                  </button>
                </Link>
              )}

              <Link
                // href={`/studi-ku/${subjectId}`}
                href={`/tes-minat-bakat`}
                className="inline-flex items-center text-sky-base hover:opacity-80 transition-all font-medium text-xs sm:text-sm"
              >
                <FaArrowLeft className="mr-1 sm:mr-2" /> Kembali
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

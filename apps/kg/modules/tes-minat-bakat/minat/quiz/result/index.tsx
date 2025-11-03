'use client';

import React, { useEffect, useState } from 'react';
import { BreadCrumb, LoadingSpinner } from '@kampus-gratis/components/atoms';
import Link from 'next/link';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { FaArrowLeft, FaShare, FaDownload, FaPrint } from 'react-icons/fa';
import { BaseLayout } from '@kampus-gratis/apps/kg/components';
import {
  TesMinatBakatBreadcrumb,
  quizTesMinatScoreDummyData,
  calculateRIASECScore,
  RIASECType,
} from '../../../constant';
import {
  CareerRecommendations,
  RIASECRadarChart,
} from '@kampus-gratis/apps/kg/components/tes-minat-bakat';
import { useProfile } from '@kampus-gratis/apps/kg/hooks/profile/hook';

const formatDuration = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  let result = '';

  if (hours > 0) {
    result += `${hours} jam `;
  }

  if (minutes > 0) {
    result += `${minutes} menit`;
  }

  if (remainingSeconds > 0) {
    if (result.length > 0) {
      result += ' ';
    }
    result += `${remainingSeconds} detik`;
  } else if (minutes === 0 && hours === 0) {
    result = '0 detik';
  }

  return result.trim() || '0 detik';
};

export const QuizResultModule = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [resultData, setResultData] = useState(quizTesMinatScoreDummyData);

  const searchParams = useSearchParams();
  const indexParam = searchParams.get('index');

  const { data: profileData } = useProfile();

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const storedResults = localStorage.getItem('quizTesMinatScoreHistory');
    if (!storedResults) {
      setIsLoading(false);
      return;
    }

    const scoreHistory = JSON.parse(storedResults) as any[];

    if (indexParam === null) {
      let newestIdx = 0;
      let newestTime = -Infinity;

      for (let i = 0; i < scoreHistory.length; i++) {
        const t = new Date(scoreHistory[i]?.timestamp_taken ?? 0).getTime();
        if (t > newestTime) {
          newestTime = t;
          newestIdx = i;
        }
      }

      router.replace(`${pathname}?index=${newestIdx}`);
      return;
    }

    const idx = (() => {
      const n = Number(indexParam);
      return Number.isInteger(n) && n >= 0 && n < scoreHistory.length
        ? n
        : scoreHistory.reduce(
            (bestIdx, curr, i, arr) =>
              new Date(arr[bestIdx]?.timestamp_taken ?? 0) >
              new Date(curr?.timestamp_taken ?? 0)
                ? bestIdx
                : i,
            0
          );
    })();

    const selected = scoreHistory[idx];
    if (selected) {
      if (selected.scores && selected.dominantCode && selected.dominantTypes) {
        setResultData({
          ...quizTesMinatScoreDummyData,
          scores: selected.scores,
          dominantCode: selected.dominantCode,
          dominantTypes: selected.dominantTypes,
          allScores: selected.allScores ?? selected.scores,
          time_elapsed: selected.time_elapsed,
          total_question: selected.total_question,
          remaining_attempt: selected.remaining_attempt,
        });
      } else {
        const riasecResult = calculateRIASECScore(
          selected.req?.questions_answers ?? []
        );
        setResultData({
          ...quizTesMinatScoreDummyData,
          scores: riasecResult.scores,
          dominantCode: riasecResult.dominantCode,
          dominantTypes: riasecResult.dominantTypes,
          allScores: riasecResult.allScores,
          time_elapsed: selected.time_elapsed,
          total_question: selected.total_question,
          remaining_attempt: selected.remaining_attempt,
        });
      }
    }

    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, [indexParam, pathname, router]);

  useEffect(() => {
    document.title = `Tes Minat & Bakat - Tes Minat (Holland RIASEC) - Hasil Tes - ${resultData.dominantCode} | Paket-C Gratis`;

    if (typeof window !== 'undefined') {
      window.gtag?.('config', 'G-YWYY60L1FX', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: window.location.pathname,
      });
    }
  }, [resultData.dominantCode]);

  const handleShare = async () => {
    const shareText = `Hasil Tes Minat (Holland RIASEC) di Paket-C Gratis!\n\nSaya baru saja mengikuti Tes Minat menggunakan metode Holland RIASEC dan mendapatkan kode dominan ${resultData.dominantCode}! \n\nAnda juga harus mencoba Tes Minat di paketcgratis.id`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Hasil Tes Holland RIASEC Saya',
          text: shareText,
          // url: window.location.origin + "/tes-minat-bakat",
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      await navigator.clipboard.writeText(
        shareText + '\n' + window.location.origin + '/tes-minat-bakat'
      );
      alert('Link hasil tes telah disalin ke clipboard!');
    }
  };

  const handleDownload = () => {
    setShowPopup(true);
  };

  const handlePrint = () => {
    window.print();
  };

  if (isLoading) return <LoadingSpinner />;

  const resultBreadcrumbs = [
    ...TesMinatBakatBreadcrumb,
    {
      name: 'Tes Minat (Holland RIASEC)',
      link: '/tes-minat-bakat/minat',
    },
    {
      name: 'Mulai Tes',
      link: '/tes-minat-bakat/minat/session/sessionId/quiz/quizId/mulai',
    },
    {
      name: 'Hasil Tes',
      link: pathname,
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <BreadCrumb bgColor="bg-grey-50" items={resultBreadcrumbs} />
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-3 sm:py-6">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
          <div className="bg-gradient-to-r from-sky-base to-red-base text-white p-6">
            <div className="text-center">
              <h1 className="text-2xl sm:text-3xl font-bold mb-2">
                Selamat! Tes Minat (Holland RIASEC) Anda Selesai!
              </h1>
              <p className="text-gray-100 text-lg font-medium">
                Berikut adalah hasil analisis kepribadian kerja Anda
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-gray-800">
              Data Peserta
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="border-2 p-2 rounded-lg text-center">
                <div className="text-md font-medium text-gray-500 mb-1">
                  Nama
                </div>
                <div className="font-semibold text-gray-800">
                  {profileData?.data?.user.full_name}
                </div>
              </div>
              <div className="border-2 p-2 rounded-lg text-center">
                <div className="text-md font-medium text-gray-500 mb-1">
                  Jenis Kelamin
                </div>
                <div className="font-semibold text-gray-800">
                  {profileData?.data?.user.gender}
                </div>
              </div>
              <div className="border-2 p-2 rounded-lg text-center">
                <div className="text-md font-medium text-gray-500 mb-1">
                  Email
                </div>
                <div className="font-semibold text-gray-800">
                  {profileData?.data?.user.email}
                </div>
              </div>
              <div className="border-2 p-2 rounded-lg text-center">
                <div className="text-md font-medium text-gray-500 mb-1">
                  Nomor Telepon
                </div>
                <div className="font-semibold text-gray-800">
                  {profileData?.data?.user?.phone_number}
                </div>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 mb-1">
                  {resultData.dominantCode}
                </div>
                <div className="text-md text-gray-600">Kode Dominan</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-green-600 mb-1">
                  {formatDuration(Math.round(resultData.time_elapsed))}
                </div>
                <div className="text-md text-gray-600">Waktu Pengerjaan</div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-purple-600 mb-1">
                  {resultData.total_question}
                </div>
                <div className="text-md text-gray-600">Total Soal</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-6">
          <RIASECRadarChart
            scores={resultData.scores}
            dominantTypes={resultData.dominantTypes}
            dominantCode={resultData.dominantCode}
          />
        </div>
        <div className="mb-6">
          <CareerRecommendations
            dominantCode={resultData.dominantCode}
            dominantTypes={resultData.dominantTypes}
          />
        </div>
        <div className="bg-white rounded-lg p-6 shadow-lg mb-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">
            Bagikan Hasil Anda
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <button
              onClick={handleShare}
              className="flex items-center justify-center space-x-2 bg-blue-500 text-white px-4 py-3 rounded-lg hover:bg-blue-600 transition-colors"
            >
              <FaShare />
              <span>Bagikan</span>
            </button>
            <button
              onClick={handleDownload}
              className="flex items-center justify-center space-x-2 bg-green-500 text-white px-4 py-3 rounded-lg hover:bg-green-600 transition-colors"
            >
              <FaDownload />
              <span>Download</span>
            </button>
            {showPopup && (
              <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
                <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm w-full">
                  <h2 className="text-lg font-semibold mb-2">
                    Fitur segera hadir!
                  </h2>
                  <p className="text-sm text-gray-600 mb-4">
                    Fitur download akan segera tersedia.
                  </p>
                  <button
                    onClick={() => setShowPopup(false)}
                    className="w-full bg-green-500 text-white rounded-lg py-2 hover:bg-green-600 transition-colors"
                  >
                    Tutup
                  </button>
                </div>
              </div>
            )}
            <button
              onClick={handlePrint}
              className="flex items-center justify-center space-x-2 bg-purple-500 text-white px-4 py-3 rounded-lg hover:bg-purple-600 transition-colors"
            >
              <FaPrint />
              <span>Print</span>
            </button>
          </div>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <Link
              href="/tes-minat-bakat/minat"
              className="inline-flex items-center text-sky-base hover:opacity-80 transition-all font-medium"
            >
              <FaArrowLeft className="mr-2" /> Kembali ke Tes Minat
            </Link>

            <div className="flex space-x-3">
              <Link
                href="/tes-minat-bakat"
                className="px-4 py-2 bg-sky-base text-white rounded-lg hover:opacity-80 transition-all"
              >
                Kembali ke Tes Minat & Bakat
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

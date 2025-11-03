import { usePathname, useSearchParams } from 'next/navigation';
import { FC, ReactElement, useEffect, useRef, useState } from 'react';
import { TQuizHistoryData2 } from '@kampus-gratis/apps/kg/types/quiz';
// import { DetailCard } from '../score/DetailCard';
// import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
// import Avatar from 'react-avatar';
import { useProfileComplete } from '@kampus-gratis/apps/kg/hooks/profile/hook';
// import { RIASECRadarChart } from '@kampus-gratis/apps/kg/components/tes-minat-bakat';
// import { calculateRIASECScore, RIASECType } from '../../../constant';

export const HistoryCard: FC<{
  dataQuizHistory: TQuizHistoryData2;
  index: number;
}> = ({ dataQuizHistory, index }): ReactElement => {
  // TODO | tambahan start
  const { data: completeData } = useProfileComplete();

  const searchParams = useSearchParams();

  const quizId = searchParams.get('id');
  const score = searchParams.get('score');
  const right = searchParams.get('right');
  const wrong = searchParams.get('wrong');
  const timeElapsed = searchParams.get('time_elapsed');
  const totalQuestion = searchParams.get('total_question');
  const remainingAttempt = searchParams.get('remaining_attempt');
  const status = searchParams.get('status');
  // TODO | tambahan end

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

  const radarDominantCode = (dataQuizHistory as any)?.dominantCode ?? '-';

  function MiniRadarChart({
    scores,
  }: {
    scores: {
      R: number;
      I: number;
      A: number;
      S: number;
      E: number;
      C: number;
    };
  }) {
    const maxScore = 100;

    const containerRef = useRef<HTMLDivElement | null>(null);
    const [chartSize, setChartSize] = useState(180);

    useEffect(() => {
      if (!containerRef.current) return;
      const el = containerRef.current;

      const update = () => {
        setChartSize(Math.max(140, Math.min(240, el.clientWidth)));
      };

      update();
      const ro = new ResizeObserver(update);
      ro.observe(el);
      return () => ro.disconnect();
    }, []);

    const centerX = chartSize / 2;
    const centerY = chartSize / 2;
    const radius = Math.round(chartSize * 0.38);

    const angles = {
      R: -Math.PI / 2,
      I: -Math.PI / 6,
      A: Math.PI / 6,
      S: Math.PI / 2,
      E: (5 * Math.PI) / 6,
      C: (-5 * Math.PI) / 6,
    };
    const getPoint = (angle: number, value: number) => {
      const x = centerX + Math.cos(angle) * (radius * (value / maxScore));
      const y = centerY + Math.sin(angle) * (radius * (value / maxScore));
      return { x, y };
    };
    const createRadarPath = () => {
      const points = Object.entries(scores).map(([type, score]) => {
        const angle = angles[type as keyof typeof angles];
        return getPoint(angle, score);
      });
      const pathData =
        points
          .map((point, index) => {
            if (index === 0) return `M ${point.x} ${point.y}`;
            return `L ${point.x} ${point.y}`;
          })
          .join(' ') + ' Z';
      return pathData;
    };
    const createConcentricCircles = () => {
      const circles = [];
      for (let i = 1; i <= 5; i++) {
        const r = (radius * i) / 5;
        circles.push(
          <circle
            key={i}
            cx={centerX}
            cy={centerY}
            r={r}
            fill="none"
            stroke="#E5E7EB"
            strokeWidth="2"
            opacity="1"
          />
        );
      }
      return circles;
    };
    const createRadialLines = () => {
      return Object.entries(angles).map(([type, angle]) => {
        const endPoint = getPoint(angle, maxScore);
        return (
          <line
            key={type}
            x1={centerX}
            y1={centerY}
            x2={endPoint.x}
            y2={endPoint.y}
            stroke="#E5E7EB"
            strokeWidth="2"
            opacity="1"
          />
        );
      });
    };
    const createDataPoints = () => {
      return Object.entries(scores).map(([type, score]) => {
        const angle = angles[type as keyof typeof angles];
        const point = getPoint(angle, score);
        return (
          <circle
            key={type}
            cx={point.x}
            cy={point.y}
            r={4}
            fill="#3B82F6"
            stroke="white"
            strokeWidth="2"
          />
        );
      });
    };
    return (
      <div ref={containerRef} className="w-full flex justify-center">
        <svg
          width={chartSize}
          height={chartSize}
          viewBox={`0 0 ${chartSize} ${chartSize}`}
          className="block mx-auto max-w-full"
        >
          <defs>
            <linearGradient
              id="radarGradientMini"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
              <stop offset="50%" stopColor="rgba(139, 92, 246, 0.3)" />
              <stop offset="100%" stopColor="rgba(239, 68, 68, 0.3)" />
            </linearGradient>
          </defs>
          {createConcentricCircles()}
          {createRadialLines()}
          <path
            d={createRadarPath()}
            fill="url(#radarGradientMini)"
            stroke="rgba(59, 130, 246, 0.8)"
            strokeWidth="2"
            opacity="0.7"
          />
          {createDataPoints()}
        </svg>
      </div>
    );
  }

  const quizReviewLink = `/tes-minat-bakat/minat/session/sessionId/quiz/quizId/mulai/result?index=${index}`;

  return (
    <section className="w-full mx-auto bg-white shadow-md rounded-xl p-4">
      <div className="border border-gray-300 rounded-lg p-4 flex flex-col md:flex-row items-center gap-6">
        <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center items-center">
          <MiniRadarChart
            scores={
              (dataQuizHistory as any)?.scores ?? {
                R: 0,
                I: 0,
                A: 0,
                S: 0,
                E: 0,
                C: 0,
              }
            }
          />
        </div>
        <div className="flex-1 flex flex-col gap-3 items-center md:items-start w-full">
          <div className="text-center md:text-left">
            <h3 className="font-bold text-lg text-sky-base mb-1">
              Tes Ke - {index + 1}
            </h3>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-2">
              <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                {dateFormatted}
              </span>
              <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">
                {timeFormatted}
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-2 w-full text-center md:text-start">
            <div className="flex items-center gap-2 mx-auto md:mx-0">
              <span className="font-semibold text-gray-700">Kode Dominan:</span>
              <span className="text-blue-700 font-bold">
                {radarDominantCode}
              </span>
            </div>
            <div className="flex items-center gap-2 mx-auto md:mx-0">
              <span className="font-semibold text-gray-700">
                Waktu Pengerjaan:
              </span>
              <span className="text-green-700 font-bold">
                {minutesFormatted}
              </span>
            </div>
            <div className="flex items-center gap-2 mx-auto md:mx-0">
              <span className="font-semibold text-gray-700">Total Soal:</span>
              <span className="text-purple-700 font-bold">
                {dataQuizHistory.total_question}
              </span>
            </div>
          </div>
          <div className="mt-3 w-full flex justify-center md:justify-start">
            <Link
              href={quizReviewLink}
              className="text-white bg-sky-base hover:opacity-80 text-sm text-center font-semibold flex items-center justify-center gap-1 px-4 py-2 rounded-lg transition-all"
            >
              Lihat Detail
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

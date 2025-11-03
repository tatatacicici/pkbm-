'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  riasecCharacteristics,
  RIASECType,
} from '../../modules/tes-minat-bakat/constant';

interface RIASECRadarChartProps {
  scores: {
    R: number;
    I: number;
    A: number;
    S: number;
    E: number;
    C: number;
  };
  dominantTypes: RIASECType[];
  dominantCode: string;
}

export const RIASECRadarChart: React.FC<RIASECRadarChartProps> = ({
  scores,
  dominantTypes,
  dominantCode,
}) => {
  // Ukuran responsive
  const chartContainerRef = useRef<HTMLDivElement | null>(null);
  const [chartSize, setChartSize] = useState(400);

  useEffect(() => {
    if (!chartContainerRef.current) return;
    const containerElement = chartContainerRef.current;

    const updateChartSize = () => {
      const containerWidth = containerElement.clientWidth;
      setChartSize(Math.max(260, Math.min(480, containerWidth)));
    };

    updateChartSize();
    const resizeObserver = new ResizeObserver(updateChartSize);
    resizeObserver.observe(containerElement);
    return () => resizeObserver.disconnect();
  }, []);

  const centerX = useMemo(() => chartSize / 2, [chartSize]);
  const centerY = useMemo(() => chartSize / 2, [chartSize]);
  const chartRadius = useMemo(() => Math.round(chartSize * 0.38), [chartSize]);
  const maxScore = 100;

  // Untuk menghitung posisi titik pada radar chart
  const getPoint = (angle: number, value: number) => {
    const pointRadius = chartRadius * (value / maxScore);
    const x = centerX + Math.cos(angle) * pointRadius;
    const y = centerY + Math.sin(angle) * pointRadius;
    return { x, y };
  };

  // Sudut untuk setiap tipe RIASEC (dalam radian)
  const angles: Record<RIASECType, number> = {
    R: -Math.PI / 2, // 12 o'clock
    I: -Math.PI / 6, // 2 o'clock
    A: Math.PI / 6, // 4 o'clock
    S: Math.PI / 2, // 6 o'clock
    E: (5 * Math.PI) / 6, // 8 o'clock
    C: (-5 * Math.PI) / 6, // 10 o'clock
  } as const;

  // Membuat path untuk area radar (daerah yg diarsir)
  const createRadarPath = () => {
    const points = (Object.entries(scores) as [RIASECType, number][]).map(
      ([type, score]) => {
        const angle = angles[type];
        return getPoint(angle, score);
      }
    );

    const pathData =
      points
        .map((point, i) =>
          i === 0 ? `M ${point.x} ${point.y}` : `L ${point.x} ${point.y}`
        )
        .join(' ') + ' Z';

    return pathData;
  };

  // Membuat lingkaran konsentris untuk skala (garis lingkaran)
  const createConcentricCircles = () => {
    const circles = [] as React.ReactNode[];
    for (let i = 1; i <= 5; i++) {
      const circleRadius = (chartRadius * i) / 5;
      circles.push(
        <circle
          key={i}
          cx={centerX}
          cy={centerY}
          r={circleRadius}
          fill="none"
          stroke="#E5E7EB"
          strokeWidth="2"
          opacity="1"
        />
      );
    }
    return circles;
  };

  // Membuat garis radial (garis yg lurus)
  const createRadialLines = () => {
    return (Object.entries(angles) as [RIASECType, number][]).map(
      ([type, angle]) => {
        const endPoint = getPoint(angle, 100);
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
      }
    );
  };

  // Membuat label untuk setiap tipe
  const createLabels = () => {
    const labelDistance = chartRadius + Math.max(16, chartSize * 0.08);

    return (Object.entries(angles) as [RIASECType, number][]).map(
      ([type, angle]) => {
        const labelPoint = {
          x: centerX + Math.cos(angle) * labelDistance,
          y: centerY + Math.sin(angle) * labelDistance,
        };
        const characteristic = riasecCharacteristics[type];
        return (
          <g key={type}>
            <text
              x={labelPoint.x}
              y={labelPoint.y - 5}
              textAnchor="middle"
              dominantBaseline="middle"
              className="font-bold text-md md:text-lg lg:text-xl"
              style={{ fill: characteristic.color }}
            >
              {type}
            </text>
            <text
              x={labelPoint.x}
              y={labelPoint.y + 14}
              textAnchor="middle"
              dominantBaseline="middle"
              className="text-gray-400 text-md lg:text-lg font-semibold"
            >
              {scores[type]}
            </text>
          </g>
        );
      }
    );
  };

  // Membuat titik-titik data
  const createDataPoints = () => {
    return (Object.entries(scores) as [RIASECType, number][]).map(
      ([type, score]) => {
        const angle = angles[type];
        const point = getPoint(angle, score);
        const characteristic = riasecCharacteristics[type];
        const isDominant = dominantTypes.includes(type);

        return (
          <g key={type}>
            <circle
              cx={point.x}
              cy={point.y}
              r={isDominant ? 7 : 5.5}
              fill={characteristic.color}
              stroke="white"
              strokeWidth="2"
              className="drop-shadow"
            />
            {isDominant && (
              <circle
                cx={point.x}
                cy={point.y}
                r={9}
                fill="none"
                stroke={characteristic.color}
                strokeWidth="3"
                className="animate-pulse"
              />
            )}
          </g>
        );
      }
    );
  };

  const extraVerticalPadding = 7;

  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg">
      <div className="text-center mb-4 sm:mb-6">
        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
          Hasil Tes Minat (Holland RIASEC)
        </h3>
        <div className="bg-gradient-to-r from-sky-base to-red-base text-white px-3 py-0.5 sm:px-4 sm:py-1 rounded-full inline-block">
          <span className="text-base sm:text-lg font-bold">{dominantCode}</span>
        </div>
      </div>
      <div
        ref={chartContainerRef}
        className="w-full flex justify-center mb-4 sm:mb-6 overflow-x-auto"
      >
        <svg
          width={chartSize}
          height={chartSize + extraVerticalPadding * 2}
          viewBox={`0 -${extraVerticalPadding} ${chartSize} ${
            chartSize + extraVerticalPadding * 2
          }`}
          className="max-w-full"
        >
          <defs>
            <linearGradient
              id="radarGradient"
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
            fill="url(#radarGradient)"
            stroke="rgba(59, 130, 246, 0.8)"
            strokeWidth="2"
            opacity="0.7"
          />
          {createDataPoints()}
          {createLabels()}
        </svg>
      </div>
      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">
        Keterangan Kode RIASEC
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {Object.entries(riasecCharacteristics).map(([type, characteristic]) => {
          const isDominant = dominantTypes.includes(type as RIASECType);
          return (
            <div
              key={type}
              className={`p-3 sm:p-4 rounded-lg border-2 transition-all backdrop-blur-[1px] ${
                isDominant ? 'border-opacity-100' : 'border-opacity-50'
              }`}
              style={{
                borderColor: characteristic.color,
                background: characteristic.color,
              }}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-xl sm:text-2xl">
                  {characteristic.icon}
                </span>
                <span
                  className="font-semibold text-base sm:text-lg"
                  style={{ color: '#fff' }}
                >
                  {characteristic.name}
                </span>
                {isDominant && (
                  <span className="ml-auto text-xs sm:text-sm bg-white text-black font-semibold px-2.5 py-0.5 rounded-full shadow">
                    Dominan
                  </span>
                )}
              </div>
              <div className="text-xs sm:text-sm text-white leading-relaxed">
                {characteristic.description}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

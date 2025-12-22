'use client';

import { FC, ReactElement } from 'react';
import { Line } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
} from 'chart.js';
import { TChartProps } from '../types';
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler
);

export const LineChart: FC<TChartProps> = ({
  data,
  option,
  className,
}): ReactElement => {
  return (
    <Line
      data={data}
      options={option}
      className={`h-full w-full ${className}`}
    />
  );
};

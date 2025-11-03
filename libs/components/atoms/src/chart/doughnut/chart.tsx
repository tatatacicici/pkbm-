'use client';

import { FC, ReactElement } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { TChartProps } from '../types';
ChartJS.register(ArcElement, Tooltip, Legend);

export const DoughnutChart: FC<TChartProps> = ({
  data,
  className,
  option,
}): ReactElement => {
  return <Doughnut data={data} options={option} className={`${className}`} />;
};

import {
  ArcElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
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

import Dropdown from '../../components/dropdown/Dropdown';
import { IconArrowDown } from '../icons/ic-arrow-down';

const labels = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'Mei',
  'Jun',
  'Jul',
  'Agust',
  'Sept',
  'Oktob',
  'Nov',
  'Des',
];

const dataLine = {
  labels: labels,
  datasets: [
    {
      label: '',
      data: [100, 200, 220, 380, 430, 420, 400, 600, 780, 700, 850, 1000],
      borderColor: '#106FA4',
      tension: 0.1,
      fill: true,
      backgroundColor: (context: any) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(200, 0, 200, 500);
        gradient.addColorStop(0, '#106FA4');
        gradient.addColorStop(1, '#B0DBD4');
        return gradient;
      },
      hoverBackgroundColor: '#B0DBD4',
      hoverBorderColor: '#B0DBD4',
      pointRadius: 6,
      pointHoverRadius: 20,
      pointStyle: 'circle',
      pointBackgroundColor: 'white',
      borderWidth: 2,
    },
  ],
};

export const RequestChart = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between px-4">
        <Dropdown
          dataOptions={undefined}
          placeholder="Semua"
          icons={<IconArrowDown />}
          reverse={false}
          textCentre={false}
          shadow={false}
          bold={false}
          onChange={() => ''}
        />
        <div className="flex gap-3">
          <button className="border border-primary-500 rounded-full w-6 h-6 text-md">
            +
          </button>
          <button className="border border-primary-500 rounded-full w-6 h-6  text-md">
            -
          </button>
        </div>
      </div>
      <div className="h-full flex justify-center pt-5">
        <Line width={'100%'} height={70} data={dataLine} />
      </div>
    </div>
  );
};

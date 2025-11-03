import { DoughnutChart } from '@kampus-gratis/components/atoms';
import Image from 'next/image';
import { FC, ReactElement, useEffect, useRef } from 'react';
import { Matkul } from './matkul';
import dummyFavorite from './constant';

export const FavoriteMatkulChart: FC = (): ReactElement => {
  const data = {
    labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5', 'Label 6'],
    datasets: [
      {
        data: [5, 15, 13, 27, 20, 30], // Ganti data dengan 6 nilai yang Anda inginkan
        backgroundColor: (context: any) => {
          const index = context.dataIndex;
          const value = context.dataset.data[index];
          const colors = [
            '#737373',
            '#6AD26A',
            '#F4677F',
            '#106FA4',
            '#FBCB50',
            '#FDB415',
          ]; // Ganti warna dengan 6 warna yang Anda inginkan
          return colors[index];
        },
        borderWidth: 0,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    rotation: 75,
    cutout: 60,
  };

  return (
    <section className="grid grid-cols-3 bg-white shadow-md rounded-md  px-4 py-6">
      <div className="col-span-3 text-start">
        {' '}
        <h1 className="text-sm font-bold">
          Mata Kuliah yang paling kamu Minati
        </h1>{' '}
      </div>
      <div className="col-span-3 md:col-span-1  border-neutral-200 py-2 mb-6">
        <div className=" flex items-center justify-center p-4">
          <DoughnutChart data={data} option={options} />
          <Image
            src={'images/logo-kg-new.svg'}
            width={85}
            height={36}
            alt="logo-kg"
            className="absolute"
          />
        </div>
      </div>
      <div className="col-span-3 md:col-span-2 gap-x-4 gap-y-8 md:gap-y-0  grid grid-cols-2 md:grid-cols-3 py-4 h-[300px] md:h-full">
        {dummyFavorite.map((item, index) => (
          <Matkul title={item.title} value={item.value} key={index}/>
        ))}
      </div>
    </section>
  );
};

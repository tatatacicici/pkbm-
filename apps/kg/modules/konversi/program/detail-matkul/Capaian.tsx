import React from 'react';
import { tablePembelajaranHeader } from './constant';
import { useRecoilState } from 'recoil';
import { detailMatkuConversionState } from '../../../../recoil/atoms/konversi';

const Capaian = () => {
  const [get] = useRecoilState(detailMatkuConversionState);

  const { data } = get;

  const { subject_outcomes, subject } = data;

  return (
    <div className="flex flex-col gap-2 bg-white">
      <h2 className="font-semibold text-[24px] text-neutral-900">
        Capaian Pembelajaran Lulusan
      </h2>
      <p className="text-[14px] text-neutral-500">
        Detail Pencapaian Pembelajaran Pada Mata Kuliah {subject?.name}
      </p>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {tablePembelajaranHeader.map((item, index) => (
                <th scope="col" className="px-6 py-3" key={index}>
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {subject_outcomes?.map((item, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-4">{index + 1}</td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.criteria}
                </th>
                <td className="px-6 py-4">{item.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Capaian;

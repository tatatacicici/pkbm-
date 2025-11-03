import React from 'react';
import { assignmentTableHeader } from './constant';
import { useRecoilState } from 'recoil';
import { detailMatkuConversionState } from '../../../../recoil/atoms/konversi';

const DetailPenilaian = () => {
  const [get] = useRecoilState(detailMatkuConversionState);
  const { data } = get;

  const { sessions_scores, subject } = data;

  const sortedSession_scores = sessions_scores
    ?.slice()
    .sort(
      (a: { session_no: number }, b: { session_no: number }) =>
        a.session_no - b.session_no
    );

  return (
    <div className="flex flex-col gap-2 bg-white">
      <h2 className="font-semibold text-[24px] text-neutral-900">Penilaian</h2>
      <p className="text-[14px] text-neutral-500">
        Detail penilaian pembelajaran pada mata kuliah {subject?.name} di setiap
        pertemuan
      </p>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {assignmentTableHeader.map((item, index) => (
                <th scope="col" className="px-6 py-3" key={index}>
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedSession_scores.map((item, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-4">{index + 1}</td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Pertemuan {item.session_no}
                </th>
                <td className="px-6 py-4">{item?.assignment_score}</td>
                <td className="px-6 py-4">{item?.quiz_score}</td>
                <td className="px-6 py-4">{item.module_score}</td>
                <td className="px-6 py-4">80.0</td>
                <td className="px-6 py-4">85.0</td>
                <td className="px-6 py-4">{item.average_score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DetailPenilaian;

import React from 'react';
import { tableHeader } from './constant';
import { useRecoilState } from 'recoil';
import { detailMatkuConversionState } from '../../../../recoil/atoms/konversi';

const DetailPertemuan = () => {
  const [get] = useRecoilState(detailMatkuConversionState);

  const { data } = get;

  const { subject, sessions_details } = data;
  const sortedSesssion_details = sessions_details
    ?.slice()
    .sort(
      (a: { session_no: number }, b: { session_no: number }) =>
        a.session_no - b.session_no
    );

  return (
    <div className="flex flex-col gap-2 bg-white">
      <h2 className="font-semibold text-[24px] text-neutral-900">
        {subject?.name}
      </h2>
      <p className="text-[14px] text-neutral-500">
        Detail Pertemuan pada Mata Kuliah {subject?.name}
      </p>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {tableHeader.map((item, index) => (
                <th scope="col" className="px-6 py-3" key={index}>
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {
              /* make sort base on sessions_details[].session_no */
              // sessions_details.sort((a,b) => a.session_no - b.session_no)
            }
            {sortedSesssion_details?.map((item, index) => (
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
                <td className="px-6 py-4">{item.total_videos}</td>
                <td className="px-6 py-4">60 Menit</td>
                <td className="px-6 py-4">{item.total_documents}</td>
                <td className="px-6 py-4">60 Menit</td>
                <td className="px-6 py-4">{item.total_assignments}</td>
                <td className="px-6 py-4">60 Menit</td>
                <td className="px-6 py-4">2</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DetailPertemuan;

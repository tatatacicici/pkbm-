'use client';

import Link from 'next/link';
import { useGetRiwayatKonversi } from '../../../../../hooks/konversi/riwayat-konversi/hook';
import { TRiwayatKonversi } from '../../../../../types/riwayat-konversi';
import Image from 'next/image';

const TransferKonversiSection = () => {
  const { data, isLoading } = useGetRiwayatKonversi();
  console.log(data);

  const dataRiwayat = data?.data;
  return (
    <div className="bg-white lg:mx-0 md:mx-6 mx-3 px-6 lg:py-8 py-5 rounded-sm shadow-md">
      <div className="flex flex-col lg:gap-12 gap-9">
        <div className="flex flex-col gap-3">
          <h1 className="lg:text-2xl text-xl font-bold">
            Riwayat Permintaan Transfer Konversi SKS
          </h1>
          <p className="lg:text-sm text-xs text-neutral-500">
            Berisi Riwayat Permintaan Transfer Konversi SKS
          </p>
        </div>
        <div className="relative overflow-auto shadow-md sm:rounded-lg max-h-screen">
          <table className="w-full text-sm text-left text-black dark:text-gray-400">
            <thead className="lg:text-sm text-xs text-black uppercase bg-neutral-100 border border-b-neutral-200">
              <tr>
                <th scope="col" className="px-6 py-3">
                  No
                </th>
                <th scope="col" className="px-6 py-3">
                  Tanggal Permintaan
                </th>
                <th scope="col" className="px-6 py-3">
                  Total Permintaan
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody className="lg:text-sm text-xs">
              {dataRiwayat ? (
                dataRiwayat?.map((item: TRiwayatKonversi, index: number) => {
                  const date = new Date(item.created_at.slice(0, 10));
                  const formattedDate = new Intl.DateTimeFormat('id', {
                    dateStyle: 'full',
                  }).format(date);
                  return (
                    <tr
                      key={index}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <td className="px-6 py-4">
                        <span className="font-medium">{index + 1}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="font-medium">
                          {formattedDate} {item.created_at.slice(11, 16)}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="font-thin text-neutral-600">
                          {item.total_subject} Mata Kuliah
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div
                          className={`rounded-lg p-2 text-center w-max ${
                            item.status === 'DONE'
                              ? 'bg-green-100 text-green-600'
                              : item.status === 'REJECTED'
                              ? 'bg-red-100 text-red-600'
                              : 'bg-yellow-100 text-yellow-600'
                          }`}
                        >
                          {item.status === 'DONE'
                            ? 'Selesai'
                            : item.status === 'REJECTED'
                            ? 'Ditolak'
                            : 'Menunggu'}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <Link
                          href={
                            item.file_convertion === null
                              ? '#'
                              : item.file_convertion
                          }
                          className={`${
                            item.status === 'DONE' || item.status === 'REJECTED'
                              ? 'hover:underline text-blue-base'
                              : 'hidden'
                          } `}
                        >
                          Unduh
                        </Link>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={5} className="text-center py-4">
                    <span className="text-neutral-500">Tidak ada data</span>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="flex items-center lg:pl-4 pl-0">
          <p className="text-base font-normal text-neutral-800">
            Total Data: {dataRiwayat?.length} data
          </p>
        </div>
      </div>
    </div>
  );
};

export default TransferKonversiSection;

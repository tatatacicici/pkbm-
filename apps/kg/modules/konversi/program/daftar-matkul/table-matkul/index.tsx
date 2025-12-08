'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  useGetListMatkulConvercions,
  usePostMatkulConversion,
} from '../../../../../hooks/konversi/daftar-matkul/hook';
import { TMatkulConversionPayload } from '../../../../../types/konversi';
import { TableHeader } from '../constant';
import DropdownTable from '../dropdown';
import { useRouter } from 'next/navigation';
import { Button } from '@kampus-gratis/components/atoms';

const TableMatkul = () => {
  const { data } = useGetListMatkulConvercions();
  const [selected, setSelected] = useState<string[]>([]);
  const { mutate, isLoading } = usePostMatkulConversion();
  const router = useRouter();

  const handleSelect = (subject_id: string) => {
    setSelected((prevSelected: string[]) => {
      if (prevSelected.includes(subject_id)) {
        return prevSelected.filter((itemId: string) => itemId !== subject_id);
      } else {
        return [...prevSelected, subject_id];
      }
    });
  };

  const handleSelectAll = () => {
    if (selected.length === data?.data?.length) {
      setSelected([]);
    } else {
      setSelected(data?.data?.map((item) => item.subject_id) || []);
    }
  };

  const onSubmit = () => {
    try {
      if (selected.length <= 0) {
        return;
      }
      const payload: TMatkulConversionPayload = {
        subject_ids: selected,
      };
      mutate(payload, {
        onSuccess: () => {
          router.push('/konversi/program/riwayat-konversi');
        },
        onError: (error) => {
          console.log(error);
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left">
          <thead className="bg-neutral-100 border border-b-neutral-200">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-md focus:ring-blue-500 focus:ring-2"
                    checked={selected.length === data?.data?.length}
                    onChange={handleSelectAll}
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              {TableHeader.map((item, index) => (
                <th
                  key={index}
                  scope="col"
                  className="px-6 py-4 font-medium text-gray-900 tracking-wider"
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data?.data &&
              data?.data?.length > 0 &&
              data?.data?.map((item, index) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id={`checkbox-table-search-${index}`}
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        checked={selected.includes(item.subject_id)}
                        onChange={() => handleSelect(item.subject_id)}
                      />
                      <label
                        htmlFor={`checkbox-table-search-${index}`}
                        className="sr-only"
                      >
                        checkbox
                      </label>
                    </div>
                  </td>
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4">{item.subject_name}</td>
                  <td className="px-6 py-4">{item.total_session}</td>
                  <td className="px-6 py-4">{item.semester}</td>
                  <td className="px-6 py-4">{item.total_credit}</td>
                  <td className={``}>
                    <p
                      className={`px-3 py-2 text-center rounded-md ${
                        item.status === 'LULUS'
                          ? 'bg-success-100 text-success-600'
                          : 'bg-warning-100 text-warning-600'
                      }`}
                    >
                      {item.status}
                    </p>
                  </td>
                  <td className="px-6 py-4 tex">{item.score_letter}</td>
                  <td className="flex items-center px-6 py-4 space-x-3">
                    <Link
                      href={`/konversi/program/daftar-mata-kuliah/${item.subject_id}`}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Lihat Detail
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-5">
        <div className="flex justify-between items-center gap-2">
          <p>Item per halaman</p>
          <DropdownTable />
        </div>
        <Button
          href={`${
            selected.length === 0 ? '#' : '/konversi/program/riwayat-konversi'
          }`}
          type={`${isLoading ? 'button' : 'submit'}`}
          className={`px-6 py-2 font-semibold rounded-lg text-white hover:opacity-80 ${
            selected.length === 0
              ? 'bg-neutral-400 cursor-not-allowed'
              : 'bg-primary-500'
          }`}
          onClick={onSubmit}
          disabled={selected.length === 0}
        >
          Ajukan Konversi
        </Button>
      </div>
    </div>
  );
};

export default TableMatkul;

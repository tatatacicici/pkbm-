'use client';

import React from 'react';
import { TableBody, TableHeader } from './constants';
import Image from 'next/image';
import { TTableEvaluasi } from '../../../../types/konversi';

const TableComponent = () => {
  const showAlert = () => {
    alert('show alert');
  };

  return (
    <div className="mx-1 mt-5 p-5 border border-neutral-200 rounded-lg bg-neutral-100">
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-y-auto h-[850px]">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="border rounded-lg overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-primary-900">
                  <tr>
                    {TableHeader.map((item, index) => (
                      <th
                        key={index}
                        scope="col"
                        className="px-4 py-3 text-left font-semibold text-white tracking-wider"
                      >
                        {item}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {TableBody.map((item: TTableEvaluasi) => (
                    <tr key={item.id} className="text-black">
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-center">
                        {item.id}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm">
                        {item.kode}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm">
                        {item.nama_matkul}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm">
                        {item.sks}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm">
                        <input
                          type="text"
                          value={item.nama_matkul_asal}
                          className="text-center w-fit py-2  border border-neutral-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary-900 focus:border-primary-900"
                        />
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm">
                        <input
                          type="text"
                          value={item.sks_asal}
                          className="text-center w-5/6 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary-900 focus:border-primary-900"
                        />
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm">
                        <input
                          type="text"
                          value={item.nilai_akhir}
                          className="text-center w-5/6 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary-900 focus:border-primary-900"
                        />
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm flex justify-center">
                        <Image
                          src={item.form_evaluasi_diri}
                          alt="form evaluasi diri"
                          width={25}
                          height={25}
                          className="cursor-pointer hover:opacity-80"
                          onClick={showAlert}
                        />
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm">
                        <div
                          className={`rounded-md px-6 py-2 text-center font-semibold ${
                            item.status_evaluasi_diri === 'sudah'
                              ? 'bg-success-100 text-success-700'
                              : 'bg-error-100 text-warning-500'
                          }`}
                        >
                          {item.status_evaluasi_diri === 'sudah'
                            ? 'Sudah Melengkapi'
                            : 'Belum Terisi'}
                        </div>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm flex justify-center">
                        <Image
                          src={item.action}
                          alt="action"
                          width={25}
                          height={25}
                          className="cursor-pointer hover:opacity-70"
                          onClick={showAlert}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableComponent;

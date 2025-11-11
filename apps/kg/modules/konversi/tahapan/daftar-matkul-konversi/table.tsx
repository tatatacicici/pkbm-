'use client';

import React from 'react';
import { TableBody, TableHeader } from './constant';

const TableComponent = () => {
  const showAlert = () => {
    alert('show alert');
  };

  return (
    <div className="mx-1 mt-5 border border-neutral-200 rounded-lg bg-neutral-100 max-w-fit">
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
                  {TableBody.map((item: any) => (
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
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-center">
                        {/* checkbox with color green, condition checked is from item.ajukan_konversi */}

                        <input
                          type="checkbox"
                          checked={item.ajukan_konversi}
                          className="w-5 h-5 rounded-full border border-neutral-200"
                        />
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

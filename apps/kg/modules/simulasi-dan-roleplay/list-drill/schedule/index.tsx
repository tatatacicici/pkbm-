'use client';

import { BaseLayout } from '@kampus-gratis/apps/kg/components';
import { BreadCrumb } from '@kampus-gratis/components/atoms';
import Image from 'next/image';
import { useParams, usePathname } from 'next/navigation';
import { useState } from 'react';
import { IoPersonOutline } from 'react-icons/io5';
import PopupModal from '../../common/popup-modal';
import { DrillListBreadcrumb } from '../../constant';

export default function ScheduleDrillModule() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { id } = useParams();
  const pathname = usePathname();

  const BreadCrumbData = {
    name: 'Atur Jadwal',
    link: pathname,
  };

  return (
    <BaseLayout>
      <BreadCrumb
        items={[...DrillListBreadcrumb, BreadCrumbData]}
        bgColor="bg-grey-100"
      />
      <div className="bg-grey-100">
        <div className="w-full max-w-[1440px] mt-4 mb-12 mx-auto min-h-[80vh] space-y-4 px-8 md:px-14 lg:px-16 2xl:px-0 ">
          <div className="bg-white rounded-md p-8 w-full shadow-sm">
            <h2 className="text-2xl font-bold">Jadwal Drill</h2>
          </div>
          <div className="flex gap-4">
            <div className="bg-white shadow-md rounded-lg overflow-hidden relative w-2/5">
              <div className="absolute top-2 left-3 bg-lime-500 text-white px-2 py-1 rounded-lg">
                <p className="text-xs">Drill Matkul 1</p>
              </div>
              <Image
                className="w-full h-40 object-cover object-center"
                width={300}
                height={150}
                src="/images/card-image.png"
                alt="avatar"
              />
              <div className="p-4 space-y-4">
                <p className="text-xl font-semibold text-black">
                  Drill Matkul 1
                </p>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <IoPersonOutline />
                  <p className="">Aryo Bimo</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-md p-8 w-full shadow-md">
              <p className="text-xl font-semibold">Pilih Jadwal</p>
              <div className="flex gap-4 mt-4">
                <div className="w-1/2">
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Tanggal
                  </label>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    className="mt-1 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-3 py-2 border"
                  />
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor="time"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Waktu
                  </label>
                  <input
                    type="time"
                    name="time"
                    id="time"
                    className="mt-1 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-3 py-2 border"
                  />
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor="teacher"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Pilih Mentor
                  </label>
                  <select
                    id="teacher"
                    name="teacher"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md border"
                  >
                    <option value="1">Rizki Pratama</option>
                    <option value="2">Wisnu Adi Pradana</option>
                    <option value="3">Muhammad Fauzan</option>
                  </select>
                </div>
              </div>
              <div className="mt-4 flex justify-end">
                <button
                  className="px-4 py-2 rounded-md bg-blue-base text-white w-max"
                  onClick={() => setIsModalOpen(true)}
                >
                  Atur Jadwal
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PopupModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </BaseLayout>
  );
}

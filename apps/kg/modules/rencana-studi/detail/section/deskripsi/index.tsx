import { Disclosure } from '@headlessui/react';
import React, { FC } from 'react';

import { RiArrowUpSLine } from 'react-icons/ri';

const DeskripsiSection: FC<any> = ({ data }) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2 border-b-2 border-gray-200 pb-6">
        <h2 className="text-2xl font-bold">Tentang Mata Pelajaran</h2>
        <p className="text-justify text-sm md:text-base text-gray-500">
          {data?.description}
        </p>
      </div>
      <div className="flex flex-col gap-3 border-b-2 border-gray-200 pb-6 ">
        <h2 className="text-2xl font-bold">Detail Mata Pelajaran</h2>
        <div className="flex gap-3 md:gap-10 pt-1">
          <span>
            <p className="font-medium md:font-normal text-sm md:text-base">
              Jurusan
            </p>
            <p className="font-medium md:font-normal text-sm md:text-base">
              Semester
            </p>
            <p className="font-medium md:font-normal text-sm md:text-base">
              Jenis
            </p>
            {/* <p className="font-medium md:font-normal text-sm md:text-base">
              Total SKS
            </p> */}
            <p className="font-medium md:font-normal text-sm md:text-base">
              Persentase Penilaian
            </p>
          </span>
          <span>
            <p className="text-gray-500 text-sm md:text-base">
              : {data?.detail.major_name}
            </p>
            <p className="text-gray-500 text-sm md:text-base">
              : {data?.detail.semester}
            </p>
            <p className="text-gray-500 text-sm md:text-base">
              : {data?.detail.type}
            </p>
            {/* <p className="text-gray-500 text-sm md:text-base">
              : {data?.detail.credit} SKS
            </p> */}
            <p className="text-gray-500 text-sm md:text-base">
              : {data?.detail.indicator}
            </p>
          </span>
        </div>
      </div>
      <div className="my-3">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-primary-500 p-4 text-left text-sm md:text-base font-medium text-white">
                <span>Tujuan</span>
                <RiArrowUpSLine
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-white`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm md:text-base text-gray-500">
                {data?.goals.split('\n').map((item: string, index: number) => (
                  <p key={index}>{item}</p>
                ))}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="my-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full rounded-lg justify-between bg-primary-500 p-4 text-left text-sm md:text-base font-medium text-white">
                <span>Output (Portofolio Penugasan)</span>
                <RiArrowUpSLine
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-white`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm md:text-base text-gray-500">
                {data?.outputs
                  .split('\n')
                  .map((item: string, index: number) => (
                    <p key={index}>{item}</p>
                  ))}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full rounded-lg justify-between bg-primary-500 p-4 text-left text-sm md:text-base font-medium text-white">
                <span>Kriteria Kelulusan</span>
                <RiArrowUpSLine
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-white`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pb-2 pt-4 rounded-lg text-sm md:text-base text-gray-500">
                {data?.criterias
                  .split('\n')
                  .map((item: string, index: number) => (
                    <p key={index}>{item}</p>
                  ))}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default DeskripsiSection;

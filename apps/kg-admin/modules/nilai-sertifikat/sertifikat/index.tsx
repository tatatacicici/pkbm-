'use client';
import React from 'react';
import { SectionSertificate } from './section/index';
import { FileUploader } from '../../../components/fileuploader';
export const SertifikatModule = () => {
  const orang = [
    { id: 1, name: 'Durward Reynolds', unavailable: false },
    { id: 2, name: 'Kenton Towne', unavailable: false },
    { id: 3, name: 'Therese Wunsch', unavailable: false },
    { id: 4, name: 'Benedict Kessler', unavailable: true },
    { id: 5, name: 'Katelyn Rohan', unavailable: false },
  ];
  const fakultas = [
    { id: 1, name: 'Durward Reynolds', unavailable: false },
    { id: 2, name: 'Kenton Towne', unavailable: false },
    { id: 3, name: 'Therese Wunsch', unavailable: false },
    { id: 4, name: 'Benedict Kessler', unavailable: true },
    { id: 5, name: 'Katelyn Rohan', unavailable: false },
  ];
  const prodi = [
    { id: 1, name: 'Durward Reynolds', unavailable: false },
    { id: 2, name: 'Kenton Towne', unavailable: false },
    { id: 3, name: 'Therese Wunsch', unavailable: false },
    { id: 4, name: 'Benedict Kessler', unavailable: true },
    { id: 5, name: 'Katelyn Rohan', unavailable: false },
  ];
  return (
    <div className="flex flex-col bg-white rounded-md py-4 px-5 gap-5">
      <SectionSertificate fakultas={fakultas} prodi={prodi} name={orang} />
      <div className="w-full gap-5 flex flex-col">
        <FileUploader accept=".jpg" />
        <div className="flex justify-end items-center gap-3">
          <button className="px-4 font-semibold py-[6px] border-2 rounded-md text-primary-600 border-primary-600">
            Batal
          </button>
          <button className="px-4 py-2  font-semibold bg-primary-600 rounded-md text-white">
            Tambahkan Sertifikat
          </button>
        </div>
      </div>
    </div>
  );
};

'use client';

import { AiFillCheckCircle } from 'react-icons/ai';
import { ContentFooter } from '../../../components/footer';
import { BaseLayout } from '../../../components/layouts/base/section';
import { FC } from 'react';
import { useSearchParams } from 'next/navigation';
import { ValidasiKampusModule } from './validasi-kampus';
import { BerkasModule } from './berkas';
import { DaftarMatkulKonversiModule } from './daftar-matkul-konversi';
import { StatusPengajuanModule } from './status-pengajuan';

export const TahapanKonversiModule: FC = () => {
  const searchParams = useSearchParams();

  const tahap = searchParams.get('tahap') ?? 'perguruan-tinggi';

  const stepperDataState = [
    {
      title: 'Validasi Perguruan Tinggi',
      description: 'Lakukan Validasi Perguruan Tinggi',
      isActive: tahap.includes('perguruan-tinggi'),
      isDone: true,
    },
    {
      title: 'Unggah Berkas Validasi',
      description: 'Lakukan Unggah Berkas Validasi',
      isActive: tahap.includes('unggah-berkas'),
      isDone: true,
    },
    {
      title: 'Daftar Mata Kuliah Konversi',
      description: 'Lakukan Daftar Mata Kuliah Konversi',
      isActive: tahap.includes('daftar-mata-kuliah'),
      isDone: false,
    },
    {
      title: 'Status Pengajuan',
      description: 'Lakukan Status Pengajuan',
      isActive: tahap.includes('status-pengajuan'),
      isDone: false,
    },
  ];
  return (
    <BaseLayout title="Tahapan Konversi">
      <div className="relative">
        <div className="bg-neutral-100 h-[calc(94vh-72px)] w-2/5 absolute left-0 top-0 -z-10"></div>
        <div className="bg-neutral-50 h-[calc(94vh-72px)] w-3/5 absolute right-0 top-0 -z-10"></div>
        <div className="px-6 md:px-14 lg:px-16 w-full min-h-[calc(94vh-72px)] flex">
          <div className="max-w-[1440px] mx-auto flex w-full">
            <div className="bg-neutral-100 h-[calc(94vh-72px)] w-2/5 py-10 pr-10 flex flex-col">
              <h3 className="text-primary-500 text-2xl mb-4 font-bold">
                Pegajuan Konversi Mahasiswa Paket-C Gratis
              </h3>
              <p className="text-sm font-medium mb-[45px]">
                Lakukan Registrasi Mahasiswa baru dengan melengkapi Isian dan
                langkah langkah berikut
              </p>
              <div className="flex flex-col gap-11">
                {stepperDataState.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className={`flex gap-4 items-center relative ${
                        item.isActive
                          ? 'text-primary-500 font-bold'
                          : item.isDone
                          ? 'text-green-500 font-bold'
                          : 'text-gray-300 font-bold'
                      }`}
                    >
                      {item.isDone ? (
                        <AiFillCheckCircle className="text-2xl h-[36px] w-[36px]" />
                      ) : (
                        <span
                          className={`text-2xl h-[36px] w-[36px] border-[3px] ${
                            item.isActive
                              ? 'border-primary-500'
                              : 'border-gray-300'
                          } rounded-full flex justify-center items-center`}
                        >
                          {index + 1}
                        </span>
                      )}
                      <span>{item.title}</span>
                      {item.isDone && (
                        <span className="border-l-[3px] border-gray-500 h-[30px] absolute left-4 -bottom-9 border-dotted"></span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="w-3/5 min-h-[calc(94vh-72px)] bg-neutral-50">
              {tahap.includes('perguruan-tinggi') && <ValidasiKampusModule />}
              {tahap.includes('unggah-berkas') && <BerkasModule />}
              {tahap.includes('daftar-mata-kuliah') && (
                <DaftarMatkulKonversiModule />
              )}
              {tahap.includes('status-pengajuan') && <StatusPengajuanModule />}
            </div>
          </div>
        </div>
      </div>
      <ContentFooter />
    </BaseLayout>
  );
};

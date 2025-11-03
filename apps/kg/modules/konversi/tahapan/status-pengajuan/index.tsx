import Link from 'next/link';
import { FC, ReactElement } from 'react';

export const StatusPengajuanModule: FC = (): ReactElement => {
  const StatusPengajuan = false;

  return (
    <div className="w-full h-full bg-neutral-50">
      <div className="flex justify-center w-full">
        <div className="mt-14 border w-[750px] bg-white rounded-xl">
          {StatusPengajuan ? (
            <div className="font-bold py-10 px-12">
              <h1 className="f text-xl">
                Selamat, Pengajuan Konversi anda diterima
              </h1>
              <p className="text-gray-500 pt-5">
                Berikut update status validasi berkasmu
              </p>
              <div className=" pt-5 flex-col space-y-5">
                <p>Tanggal Submit : 17/08/2023</p>
                <p>
                  Status Validasi :{' '}
                  <span className="text-blue-500">Diterima</span>
                </p>
                <p>Tanggal Validasi : 25/08/2023</p>
              </div>
              <div className="pt-20 text-gray-500 flex-row space-y-20">
                <p>
                  Klik{' '}
                  <span className="text-blue-600 pr-1">
                    <Link href={''}>Disini</Link>
                  </span>
                  untuk melihat status pengajuan konversi mata kuliah yang
                  disetujui dan Ditolak
                </p>
                <p>
                  Klik tombol{' '}
                  <strong className=" pr-1 text-black">Selanjutnya</strong>
                  untuk melihat Kartu Rencana Studi Kamu
                </p>
                <p></p>
              </div>
            </div>
          ) : (
            <div className="font-bold py-10 px-12">
              <h1 className=" text-xl">
                Status Pengajuan anda sedang dalam Proses Validasi
              </h1>
              <p className="text-gray-500 pt-5">
                Berikut update status validasi berkasmu
              </p>
              <div className=" pt-5 flex-col space-y-5">
                <p>Tanggal Submit : 17/08/2023</p>
                <p>
                  Status Validasi :{' '}
                  <span className="text-yellow-500">Proses Validasi</span>
                </p>
                <p>Tanggal Validasi : -/-/-</p>
              </div>
              <div className="pt-20 text-gray-500 flex-row space-y-20">
                <p>
                  Klik{' '}
                  <span className="text-blue-600 pr-1">
                    <Link href={''}>Disini</Link>
                  </span>
                  untuk melihat status pengajuan konversi mata kuliah yang
                  disetujui dan Ditolak
                </p>
                <p>
                  Klik tombol{' '}
                  <strong className=" pr-1 text-black">Selanjutnya</strong>
                  untuk melihat Kartu Rencana Studi Kamu
                </p>
                <p></p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

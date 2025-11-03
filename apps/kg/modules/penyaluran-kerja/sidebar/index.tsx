import { useJobConstants } from '../../../hooks/penyalurankerja/constants/hook';
import { FC, MouseEventHandler, ReactElement } from 'react';

type blabla = {
  onclick?: MouseEventHandler<HTMLDivElement>;
};

export const JobSibeBar: FC = ({ onclick }: blabla): ReactElement => {
  const { data } = useJobConstants();

  const useConstantsType = data?.data?.type?.values;
  const useConstantsExperience = data?.data?.experience?.values;
  const useConstantsLocation = data?.data?.location?.values;
  const useConstantsTag = data?.data?.tag?.values;
  return (
    <>
      <div
        className={`bg-white w-[378px] h-[800px] overflow-y-scroll rounded-md my-6 p-12 gap-3 hidden md:block`}
      >
        <h1 className="text-[18px] font-bold">Daftar Lowongan</h1>
        <p className="text-neutral-500 py-3">
          Temukan beragam informasi karir yang menarik, hanya di halaman ini.
        </p>
        <h1 className="text-[18px] font-bold py-4">Urut Berdasarkan</h1>
        <div className="flex gap-2">
          <button
            type="button"
            className="flex justify-center items-center w-[140px] h-[36px] bg-blue-300 border border-blue-700 text-blue-700 rounded-md"
          >
            Paling Sering
          </button>
          <button
            type="button"
            className="flex justify-center hover: items-center w-[120px] h-[36px] bg-neutral-100 border border-neutral-600 text-neutral-600 rounded-md "
          >
            Paling Baru
          </button>
        </div>
        <h1 className="text-[18px] font-bold py-6">Tipe Pekerjaan</h1>
        <div className="flex flex-col gap-3">
          {useConstantsType &&
            useConstantsType?.map((item: any, index: number) => (
              <>
                <div className="flex gap-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                      onClick={onclick}
                    />
                  </div>
                  <p key={index}>{item}</p>
                </div>
              </>
            ))}
        </div>
        <h1 className="text-[18px] font-bold py-6">Kota</h1>
        <div className="flex flex-col gap-3">
          {useConstantsLocation &&
            useConstantsLocation?.map((item: any, index: number) => (
              <>
                <div className="flex gap-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                    />
                  </div>
                  <p key={index}>{item}, Indonesia</p>
                </div>
              </>
            ))}
        </div>
        <h1 className="text-[18px] font-bold py-6">Pengalaman</h1>
        <div className="flex flex-col gap-3">
          {useConstantsExperience &&
            useConstantsExperience?.map((item: any, index: number) => (
              <>
                <div className="flex gap-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                    />
                  </div>
                  <p key={index}>{item}</p>
                </div>
              </>
            ))}
        </div>
        <h1 className="text-[18px] font-bold py-6">Kategori Pekerjaan</h1>
        <div className="flex flex-col gap-3">
          {useConstantsTag &&
            useConstantsTag?.map((item: any, index: number) => (
              <>
                <div className="flex gap-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                    />
                  </div>
                  <p key={index}>{item}</p>
                </div>
              </>
            ))}
        </div>
      </div>
    </>
  );
};

import { BaseLayout } from '../../../components';
import React from 'react';
import Information from './information';
import { Button, Search } from '@kampus-gratis/components/atoms';
import TableComponent from './table';
import Image from 'next/image';

const EvaluasiModule = () => {
  return (
    <BaseLayout>
      <main className="bg-grey-100">
        <div className="w-full max-w-[1440px] mx-auto h-full">
          <div className="my-10 mx-5 p-5">
            <Information />
            <div className="mt-6">
              <Search placeholder="Cari Mata Kuliah" />
            </div>
            <TableComponent />
            <div className="w-full flex justify-end mt-5 gap-5">
              <Button
                type="button"
                className="border-2 border-primary-500 rounded-lg text-primary-500 font-semibold py-3 w-52 flex justify-center items-center gap-2"
              >
                <Image
                  src="/icons/right-arrow.svg"
                  alt="arrow"
                  width={15}
                  height={15}
                  className="rotate-180"
                />
                Kembali
              </Button>
              <Button
                type="button"
                className="bg-primary-500 rounded-lg text-white font-semibold py-3 w-52 flex justify-center items-center gap-2"
              >
                <Image
                  src="/icons/konversi/save.svg"
                  alt="save"
                  width={20}
                  height={20}
                />
                Simpan
              </Button>
            </div>
          </div>
        </div>
      </main>
    </BaseLayout>
  );
};

export default EvaluasiModule;

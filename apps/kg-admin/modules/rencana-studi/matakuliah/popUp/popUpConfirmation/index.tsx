import React, { FC } from 'react';
import Image from 'next/image';
import { Button } from '@kampus-gratis/components/atoms';
import { useRecoilState } from 'recoil';
import { modalConfirmation } from '../../../../../recoil/atoms/rencana-studi';

export const ModalPopUpConfirmation: FC = () => {
  const [isModalConfirmOpen, setIsModalConfirmOpen] =
    useRecoilState(modalConfirmation);
  return (
    <div className="flex flex-col items-center justify-center pb-4 px-4 w-[500px]">
      <div className="w-full pb-3 flex flex-col gap-y-2 justify-center items-center">
        <Image
          src="/assets/ic-lock-1.svg"
          alt="image-popup"
          width={40}
          height={40}
        />
        <p className="font-bold">Konfirmasi</p>
        <p>Apakah anda ingin mengunci mata pelajaran ini?</p>
      </div>
      <div className="flex gap-4 pt-5 w-full justify-center">
        <Button
          type="button"
          className="bg-white border-2 font-semibold py-2 border-blue-base px-12 text-blue-base rounded-md"
        >
          Kunci
        </Button>
        <Button
          type="button"
          className="bg-blue-base font-semibold py-2 px-12 text-white rounded-md"
          onClick={() => setIsModalConfirmOpen(false)}
        >
          Kembali
        </Button>
      </div>
    </div>
  );
};

import React from 'react';
import Image from 'next/image';
import { Button } from '@kampus-gratis/components/atoms';
import { useRecoilState } from 'recoil';
import { modalEditSuccess } from '../../../../../recoil/atoms/rencana-studi';

export const ModalEditSuccess = ({title}: { title: string }) => {
  const [isModalEditSuccessOpen, setIsModalEditSuccessOpen] =
  useRecoilState(modalEditSuccess);

  return (
    <div className="flex flex-col items-center justify-center pb-4 px-4 w-[500px]">
      <div className="w-full pb-3 flex flex-col justify-center items-center">
      <Image src={'/assets/ic-accept.svg'} alt='image-popup' width={60} height={60}/>
      <Image src={'/assets/popup-confirm.svg'} alt='image-popup' width={200} height={200}/>
      <p className='font-bold'>{title}</p>
      </div>      
      <div className="flex pt-5 gap-x-4 w-full justify-center">
          <Button
            type="button"
            className="py-2.5 px-24 min-w-[122px] text-sm font-bold transition-colors ease-in-out relative z-10 rounded-md duration-300  flex items-center justify-center gap-2 bg-white text-blue-base  hover:border-version2-300 border-2 border-blue-base"
            onClick={() => setIsModalEditSuccessOpen(false)}
          >
            Kembali
          </Button>
        </div>
    </div>
  );
};

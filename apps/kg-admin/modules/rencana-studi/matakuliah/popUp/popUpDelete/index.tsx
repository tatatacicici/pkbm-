'use client';

import React, { FC } from 'react';
import Image from 'next/image';
import { Button } from '@kampus-gratis/components/atoms';
import { useDeleteSubject } from '../../../../../hooks/rencana-studi/hook';
import { useQueryClient } from '@tanstack/react-query';
import { useRecoilState } from 'recoil';
import {
  modalDelete,
  modalDeleteSuccess,
} from '../../../../../recoil/atoms/rencana-studi';

interface ModalPopUpDeleteProps {
  jumlahProdi: number;
  jumlahMatkul: number;
  subjectId: string;
}

export const ModalPopUpDelete: FC<ModalPopUpDeleteProps> = ({
  jumlahProdi = 0, // Provide default values here
  jumlahMatkul = 0,
  subjectId,
}) => {
  const queryClient = useQueryClient();
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useRecoilState(modalDelete);
  const [isModalDeleteSuccessOpen, setIsModalDeleteSuccessOpen] =
    useRecoilState(modalDeleteSuccess);
  const { mutate } = useDeleteSubject();

  const handleSubmitDelete = async () => {
    // console.log(subjectId);

    await mutate(subjectId, {
      onSuccess: () => {
        setIsModalDeleteOpen(false);
        queryClient.invalidateQueries(['get-subject-pagination']);
        setIsModalDeleteSuccessOpen(true);
      },
    });
  };

  return (
    <div className="flex flex-col items-center justify-center pb-4 px-4 w-[500px]">
      <div className="w-full pb-3 flex flex-col gap-y-2 justify-center items-center text-center">
        <Image
          src="/assets/ic-trash.svg"
          alt="image-popup"
          width={30}
          height={30}
        />
        <p className="font-bold">Peringatan</p>
        <p>
          Mata pelajaran ini akan terhapus, Apakah anda ingin menghapus mata
          pelajaran ini?
        </p>
        {/* <p>Terdapat <span className='font-bold'>{jumlahMatkul}</span> Mata Kuliah</p> */}
      </div>
      <form action="">
        <div className="flex gap-4 pt-5 w-full justify-center">
          <Button
            type="button"
            className="bg-white border-2 font-semibold py-2 border-blue-base px-12 text-blue-base rounded-md"
            onClick={handleSubmitDelete}
          >
            Ya, Hapus
          </Button>
          <Button
            type="button"
            className="bg-blue-base font-semibold py-2 px-12 text-white rounded-md"
            onClick={() => setIsModalDeleteOpen(false)}
          >
            Tidak
          </Button>
        </div>
      </form>
    </div>
  );
};

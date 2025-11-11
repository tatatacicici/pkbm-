"use client"

import React, { FC } from 'react';
import Image from 'next/image';
import { Button } from '@kampus-gratis/components/atoms';
import { useQueryClient } from '@tanstack/react-query';
import { useDeleteFaculty } from '../../../../../hooks/rencana-studi/hook';
import { useRecoilState } from 'recoil';
import { modalDelete, modalDeleteSuccess } from '../../../../../recoil/atoms/rencana-studi';

interface ModalPopUpDeleteProps {
  jumlahProdi: string;
  jumlahMatkul: number;
  faculty_id?: string
}

export const ModalPopUpDelete: FC<ModalPopUpDeleteProps> = ({
  jumlahProdi = 0, // Provide default values here
  jumlahMatkul = 0,
  faculty_id = ''
}) => {

  const queryClient = useQueryClient();
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useRecoilState(modalDelete);
   const [isDeleteSuccessOpen, setIsDeleteSuccessOpen] =
    useRecoilState(modalDeleteSuccess);
  const {mutate} = useDeleteFaculty();

  const handleSubmitDelete = async () => {
    await mutate(faculty_id, {
      onSuccess: () => {
        setIsModalDeleteOpen(false);
        queryClient.invalidateQueries(['get-faculty-pagination']);
        setIsDeleteSuccessOpen(true);
      },
    });
  };

  // console.log(faculty_id);
  
  return (
    <div className="flex flex-col items-center justify-center pb-4 px-4 w-[500px]">
      <div className="w-full pb-3 flex flex-col gap-y-2 justify-center items-center text-center">
        <Image src="/assets/ic-trash.svg" alt="image-popup" width={30} height={30} />
        <p className="font-bold">Peringatan</p>
        <p>Semua item pada fakultas akan terhapus, Apakah anda ingin menghapus item ini?</p>
        <p>Terdapat <span className='font-bold'>{jumlahProdi}</span> Prodi</p>
      </div>
      <form>
      <div className="flex gap-4 pt-5 w-full justify-center">
        <Button
          type="button"
          className='bg-white border-2 font-semibold py-2 border-blue-base px-12 text-blue-base rounded-md'
          onClick={handleSubmitDelete}
        >
          Ya, Hapus
        </Button>
        <Button
          type="button"
          className='bg-blue-base font-semibold py-2 px-12 text-white rounded-md'
          onClick={() => setIsModalDeleteOpen(false)}
        >
          Tidak
        </Button>
      </div>
      </form>
    </div>
  );
};

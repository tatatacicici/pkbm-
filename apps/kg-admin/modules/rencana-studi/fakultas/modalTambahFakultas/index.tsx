"use client"

import React, { useState } from 'react';
import { Button } from '../../../../../../libs/components/atoms/src/button/index';
import { useRecoilState } from 'recoil';
import {
  modalBerhasil,
  modalOpenState,
} from '../../../../recoil/atoms/rencana-studi';
import { TextField, UploadField } from '@kampus-gratis/components/atoms';
import { useForm } from 'react-hook-form';
import {z} from 'zod';
import { validationAddFaculty } from '../../../../config/validation/rencana-studi';
import { zodResolver } from '@hookform/resolvers/zod';
import { usePostFaculty } from '../../../../hooks/rencana-studi/hook';
import { useQueryClient } from '@tanstack/react-query';
import { TAddFacultyPayload } from '../../../../types/rencatastudi';

export const ModalTambahFakultas = () => {
    const queryClient = useQueryClient();
    type ValidationSchema = z.infer<typeof validationAddFaculty>;


    const {control, handleSubmit, formState: {isValid, errors}, reset} = useForm<ValidationSchema>({
      resolver: zodResolver(validationAddFaculty),
      mode: "all",
      defaultValues: {
        faculty_name: '',
        faculty_image: null,
      }
    });

  const [isModalOpen, setIsModalOpen] = useRecoilState(modalOpenState);
  const [isModalBerhasilOpen, setIsModalBerhasilOpen] =
    useRecoilState(modalBerhasil);
  const {mutate} = usePostFaculty()


    const onSubmit = handleSubmit((data) => {
      const formData = new FormData();
    formData.append('name', data.faculty_name);
    formData.append(`thumbnail`, data.faculty_image[0]);

      try {
        mutate(
          formData as unknown as TAddFacultyPayload,
          {
            onSuccess: () => {
              setIsModalOpen(false);
              queryClient.invalidateQueries(['get-faculty-pagination']);
              setIsModalBerhasilOpen(true);
              reset();
              
            },
          }
        );
        setIsModalOpen(true);
      } catch (err) {
        // setPrivateStatus(false);
        console.log(err);
        
      }
    });

  
    

  return (
    <form action="" onSubmit={onSubmit}>
      <div className="flex flex-col items-center justify-center pb-4 px-4  w-[500px]">
        <div className="w-full pb-3 flex flex-col gap-y-4 font">
          <TextField
            label="Nama Fakultas"
            name="faculty_name"
            placeholder={'Nama Fakultas'}
            required
            variant="md"
            control={control}
            status={errors.faculty_name ? 'error' : 'none'}
            message={errors.faculty_name?.message}
          />
          <UploadField
            name="faculty_image"
            variant="md"
            control={control}
            accepted=".jpg"
            label="Gambar"
            message={errors?.faculty_image?.message?.toString()}
            status={errors.faculty_image ? 'error' : 'none'}
          />
        </div>
        <div className="w-full"></div>
        <div className="flex pt-5 gap-x-4 w-full justify-center">
          <Button
            type="submit"
            className="py-2.5 px-24    min-w-[122px] text-sm font-bold transition-colors ease-in-out relative z-10 rounded-md duration-300  flex items-center justify-center gap-2 bg-blue-base text-white hover:border-version2-300 "
          
          >
            Tambah
          </Button>
          <Button
            type="button"
            className="py-2.5 px-24 min-w-[122px] text-sm font-bold transition-colors ease-in-out relative z-10 rounded-md duration-300  flex items-center justify-center gap-2 bg-white text-blue-base  hover:border-version2-300 border-2 border-blue-base"
            onClick={() => setIsModalOpen(false)}
          >
            Kembali
          </Button>
        </div>
      </div>
    </form>
  );
};

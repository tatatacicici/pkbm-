'use client';

import React, { FC, useEffect, useState } from 'react';

import { useRecoilState } from 'recoil';

import {
  Button,
  LoadingSpinner,
  SelectField,
  TextField,
  UploadField,
} from '@kampus-gratis/components/atoms';
import { useForm } from 'react-hook-form';
import { useUser } from '../../../../../hooks/user/hook';
import { usePutMajor } from '../../../../../hooks/rencana-studi/hook';
import { useQueryClient } from '@tanstack/react-query';
import {
  TAddMajorPayload,
  TMajorItem,
  TUpdateMajorPayload,
} from '../../../../../types/rencatastudi';
import { validationUpdateMajor } from '../../../../../config/validation/rencana-studi';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  modalBerhasil,
  modalEdit,
  modalEditSuccess,
  modalOpenState,
} from '../../../../../recoil/atoms/rencana-studi';
import { RiCloseLine } from 'react-icons/ri';
import { MdOutlineZoomInMap } from 'react-icons/md';
import { MdOutlineZoomOutMap } from 'react-icons/md';
import { useSearchParams } from 'next/navigation';

interface ModalPopUpEditProps {
  majorData: TMajorItem;
}

export const ModalEditProdi: FC<ModalPopUpEditProps> = ({ majorData }) => {
  // console.log(majorData);
  const [selectedFile, setSelectedFile] = useState<string | null>(
    String(majorData.thumbnail)
  );
  const [filePreview, setFilePreview] = useState<string | null>(
    String(majorData.thumbnail)
  );
  const [fullSize, setFullSize] = useState<boolean>(false);

  const queryClient = useQueryClient();

  const defaultPlaceholder = 'Nama Kaprodi';
  const defaultDataOptions = ['Nama Kaprodi'];

  const [isModalOpen, setIsModalOpen] = useRecoilState(modalOpenState);
  const [isModalBerhasilOpen, setIsModalBerhasilOpen] =
    useRecoilState(modalBerhasil);
  const [isModalEditOpen, setIsModalEditOpen] = useRecoilState(modalEdit);
  const [isModalEditSuccessOpen, setIsModalEditSuccessOpen] =
    useRecoilState(modalEditSuccess);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const searchParams = useSearchParams();
  const page = searchParams.get('page') || '1';
  const { data: userData } = useUser(
    Number(page),
    1000,
    searchQuery,
    'TEACHER'
  );
  console.log(userData);

  const { mutate } = usePutMajor(majorData.id);
  type ValidationSchema = z.infer<typeof validationUpdateMajor>;

  // const thumbnailArray = [majorData.thumbnail];
  // console.log(thumbnailArray);

  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
    reset,
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationUpdateMajor),
    mode: 'all',
    defaultValues: {
      name: majorData.name,
      degree: majorData.degree,
      description: majorData.description,
      thumbnail: undefined,
      major_head_name: '',
    },
  });

  // useEffect(() => {
  //   reset(majorData);
  //   console.log(errors);

  // }, [reset, majorData]);

  const onSubmit = handleSubmit((data) => {
    const formData = new FormData();
    const selectedTeacher = userData?.data?.users?.find(
      (teacher) => teacher.full_name === data.major_head_name
    );
    if (selectedTeacher) {
      const teacherId = selectedTeacher.id;
      formData.append('faculty_id', majorData.faculty_id);
      formData.append('name', data.name);
      formData.append('degree', data.degree);
      formData.append('major_head_id', teacherId.toString());
      formData.append('description', data.description);
      if (data.thumbnail) {
        formData.append(`thumbnail`, data.thumbnail[0]);
      }
    } else {
      formData.append('faculty_id', majorData.faculty_id);
      formData.append('name', data.name);
      formData.append('degree', data.degree);
      formData.append('major_head_id', majorData.major_head_id);
      formData.append('description', data.description);
      if (data.thumbnail) {
        formData.append(`thumbnail`, data.thumbnail[0]);
      }
    }
    try {
      // console.log(data);

      mutate(formData as unknown as TUpdateMajorPayload, {
        onSuccess: () => {
          setIsModalEditOpen(false);
          queryClient.invalidateQueries(['get-all-major']);
          setIsModalEditSuccessOpen(true);
        },
      });

      // Invalidasi query di luar try-catch
      queryClient.invalidateQueries(['get-all-major']);
    } catch (err) {
      console.log(err);
    }
  });

  const options =
    userData?.data?.users?.map((teacher) => ({
      value: teacher.full_name,
      label: teacher.full_name,
    })) ?? [];

  console.log(options);

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setFilePreview(null);
  };

  const handleFullSize = (event: any) => {
    event.preventDefault();
    setFullSize(!fullSize);
  };

  return (
    <div className="flex flex-col items-center justify-center pb-4 px-4  w-[500px]">
      <form action="" onSubmit={onSubmit} className="w-full">
        <div className="w-full pb-3 flex flex-col gap-y-4 font">
          <TextField
            label="Nama Program Studi"
            name="name"
            placeholder={'Nama Program'}
            required
            variant="md"
            control={control}
            status={errors.name ? 'error' : 'none'}
            message={errors.name?.message}
          />
          <TextField
            label="Degree"
            name="degree"
            placeholder={'Degree'}
            isTextArea
            textAreaRow={4}
            required
            className="p-2 rounded-md"
            variant="md"
            control={control}
            status={errors.degree ? 'error' : 'none'}
            message={errors.degree?.message}
          />

          <SelectField
            name="major_head_name"
            label="Nama Kaprodi"
            placeholder={'Nama Kaprodi'}
            options={options}
            variant="md"
            control={control}
            required={true}
            error={errors.major_head_name?.message?.toString()}
          />

          <TextField
            label="Deskripsi"
            name="description"
            placeholder={'Deskripsi'}
            required
            variant="md"
            control={control}
            status={errors.description ? 'error' : 'none'}
            message={errors.description?.message}
          />
          {!selectedFile ? (
            <UploadField
              name="thumbnail"
              variant="md"
              control={control}
              accepted=".jpg"
              label="Gambar"
              required={false}
              message={errors?.thumbnail?.message?.toString()}
              status={errors.thumbnail ? 'error' : 'none'}
            />
          ) : (
            <div className="w-full relative" style={{ height: '100%' }}>
              {filePreview && (
                <div className="w-full h-full overflow-hidden rounded-md">
                  <img
                    src={filePreview}
                    alt="Pratinjau"
                    className={`w-full ${
                      fullSize ? 'h-[100%]' : 'h-[100px]'
                    }  object-cover `}
                  />
                </div>
              )}

              <div className="absolute top-[18px] right-16 ">
                <button
                  className="rounded-full p-2 bg-neutral-300"
                  onClick={handleRemoveFile}
                >
                  <RiCloseLine color="white" size={20} />
                </button>
              </div>
              {/* <div className="absolute top-5 left-5 ">
              <div className="bg-neutral-300 text-white rounded-md px-4 py-3">
                {originalFileName}
              </div>
            </div> */}
              <div className="absolute top-5 right-5">
                {fullSize ? (
                  <button
                    className="rounded-md p-2 bg-neutral-300 "
                    onClick={handleFullSize}
                  >
                    <MdOutlineZoomInMap size={15} color="white" />
                  </button>
                ) : (
                  <button
                    className="rounded-md p-2 bg-neutral-300"
                    onClick={handleFullSize}
                  >
                    {' '}
                    <MdOutlineZoomOutMap color="white" size={15} />
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
        <div className="w-full"></div>
        <div className="flex pt-5 gap-x-4 w-full justify-center">
          <Button
            type="submit"
            className="py-2.5 px-24    min-w-[122px] text-sm font-bold transition-colors ease-in-out relative z-10 rounded-md duration-300  flex items-center justify-center gap-2 bg-blue-base text-white hover:border-version2-300 "
            // onClick={() => {
            //   setIsModalOpen(false)
            //   setIsModalBerhasilOpen(true);
            // }}
          >
            Ubah
          </Button>
          <Button
            type="button"
            className="py-2.5 px-24 min-w-[122px] text-sm font-bold transition-colors ease-in-out relative z-10 rounded-md duration-300  flex items-center justify-center gap-2 bg-white text-blue-base  hover:border-version2-300 border-2 border-blue-base"
            onClick={() => setIsModalEditOpen(false)}
          >
            Kembali
          </Button>
        </div>
      </form>
    </div>
  );
};

'use client';

import React, { FC, useEffect, useState } from 'react';

import { useRecoilState } from 'recoil';
import {
  Button,
  SelectField,
  TextField,
  UploadField,
} from '@kampus-gratis/components/atoms';
import { useForm } from 'react-hook-form';
import {
  validationAddSubject,
  validationUpdateSubject,
} from '../../../../../config/validation/rencana-studi';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useUser } from '../../../../../hooks/user/hook';
import {
  useGetAllMajor,
  usePostSubject,
  usePutSubject,
} from '../../../../../hooks/rencana-studi/hook';
import {
  TAddSubjectPayload,
  TSubjectItem,
} from '../../../../../types/rencatastudi';
import { useQueryClient } from '@tanstack/react-query';
import {
  modalBerhasil,
  modalEdit,
  modalEditSuccess,
  modalOpenState,
} from '../../../../../recoil/atoms/rencana-studi';
import { RiCloseLine } from 'react-icons/ri';
import { MdOutlineZoomInMap } from 'react-icons/md';
import { MdOutlineZoomOutMap } from 'react-icons/md';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

interface ModalPopUpEditProps {
  subjectData: TSubjectItem;
}

export const ModalEditMatkul: FC<ModalPopUpEditProps> = ({ subjectData }) => {
  // console.log(subjectData);
  const [selectedFile, setSelectedFile] = useState<string | null>(
    String(subjectData.thumbnail)
  );
  const [filePreview, setFilePreview] = useState<string | null>(
    String(subjectData.thumbnail)
  );
  const [fullSize, setFullSize] = useState<boolean>(false);
  type ValidationSchema = z.infer<typeof validationUpdateSubject>;
  const queryClient = useQueryClient();
  const [isModalEditOpen, setIsModalEditOpen] = useRecoilState(modalEdit);
  const [isModalBerhasilOpen, setIsModalBerhasilOpen] =
    useRecoilState(modalBerhasil);
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

  const {
    data: majorData,
    refetch: refecthMajor,
    isLoading: isLoadingMajor,
  } = useGetAllMajor();
  const { mutate } = usePutSubject(subjectData.id);

  console.log(subjectData);
  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
    reset,
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationUpdateSubject),
    mode: 'all',
    defaultValues: {
      name: subjectData.name,
      subject_code: subjectData.subject_code,
      thumbnail: undefined,
      credit: subjectData.credit,
      teacher_name: '',
      teacher_id: subjectData.teacher_id,
    },
  });

  const onSubmit = handleSubmit((data) => {
    const formData = new FormData();
    const selectedTeacher = userData?.data?.users?.find(
      (teacher) => teacher.full_name === data.teacher_name
    );
    if (selectedTeacher) {
      const teacherId = selectedTeacher.id;
      formData.append('teacher_id', teacherId.toString());
      formData.append('name', data.name);
      formData.append('subject_code', data.subject_code);
      if (data.thumbnail) {
        formData.append(`thumbnail`, data.thumbnail[0]);
      }
      formData.append('credit', data.credit);
    } else {
      formData.append('teacher_id', subjectData.teacher_id);
      formData.append('name', data.name);
      formData.append('subject_code', data.subject_code);
      if (data.thumbnail) {
        formData.append(`thumbnail`, data.thumbnail[0]);
      }
      formData.append('credit', data.credit);
    }

    try {
      mutate(formData as unknown as TAddSubjectPayload, {
        onSuccess: () => {
          setIsModalEditOpen(false);
          queryClient.invalidateQueries(['get-subject-pagination']);
          setIsModalEditSuccessOpen(true);
        },
      });
      queryClient.invalidateQueries(['get-subject-pagination']);
    } catch (err) {
      console.log(err);
    }
  });

  const options =
    (userData?.data?.users &&
      userData?.data?.users?.map((teacher) => ({
        value: teacher.full_name,
        label: teacher.full_name,
      }))) ??
    [];

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
        <div className="w-full pb-3 flex flex-col gap-y-4">
          <TextField
            label="Nama Mata Kuliah"
            name="name"
            placeholder={'Nama Mata Kuliah'}
            required
            variant="md"
            control={control}
            status={errors.name ? 'error' : 'none'}
            message={errors.name?.message}
          />
          <TextField
            label="Kode Mata Kuliah"
            name="subject_code"
            placeholder={'Kode Mata Kuliah'}
            required
            variant="md"
            control={control}
            status={errors.subject_code ? 'error' : 'none'}
            message={errors.subject_code?.message}
          />
          {/* <TextField
            label="Waktu"
            name="duration_hours"
            placeholder={'Waktu'}
            required
            type="number"
            variant="md"
            control={control}
            status={errors.duration_hours ? 'error' : 'none'}
            message={errors.duration_hours?.message?.toString()}
          />
          <TextField
            label="Level"
            name="level"
            placeholder={'Level'}
            required
            type="number"
            variant="md"
            control={control}
            status={errors.level ? 'error' : 'none'}
            message={errors.level?.message?.toString()}
          />
          <TextField
            label="Indikator"
            name="indicator"
            placeholder={'Indikator'}
            required
            variant="md"
            control={control}
            status={errors.indicator ? 'error' : 'none'}
            message={errors.indicator?.message}
          />
          <TextField
            label="Pengalaman Pembelajaran"
            name="study_experience"
            placeholder={'Pengalaman Pembelajaran'}
            required
            variant="md"
            control={control}
            status={errors.study_experience ? 'error' : 'none'}
            message={errors.study_experience?.message}
          />
          <TextField
            label="Materi Ajar"
            name="teaching_materials"
            placeholder={'Materi Ajar'}
            required
            variant="md"
            control={control}
            status={errors.teaching_materials ? 'error' : 'none'}
            message={errors.teaching_materials?.message}
          />
          <TextField
            label="Kompetensi Dasar"
            name="basic_competencies"
            placeholder={'Kompetensi Dasar'}
            required
            variant="md"
            control={control}
            status={errors.basic_competencies ? 'error' : 'none'}
            message={errors.basic_competencies?.message}
          />
          <TextField
            label="Alat, Bahan, Sumber Belajar"
            name="tools_needed"
            placeholder={'Alat, Bahan, Sumber Belajar'}
            required
            variant="md"
            control={control}
            status={errors.tools_needed ? 'error' : 'none'}
            message={errors.tools_needed?.message}
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
          <TextField
            label="Penilaian"
            name="scoring"
            placeholder={'Penilaian'}
            required
            variant="md"
            control={control}
            status={errors.scoring ? 'error' : 'none'}
            message={errors.scoring?.message}
          /> */}
          <TextField
            label="Jumlah SKS"
            name="credit"
            placeholder={'Jumlah SKS'}
            required
            type="number"
            variant="md"
            control={control}
            status={errors.credit ? 'error' : 'none'}
            message={errors.credit?.message as any}
          />
          <SelectField
            name="teacher_name"
            label="Nama Dosen"
            placeholder={'Nama Dosen'}
            options={options}
            variant="md"
            control={control}
            required={true}
            error={errors.teacher_name?.message?.toString()}
          />
          {!selectedFile ? (
            <UploadField
              name="thumbnail"
              variant="md"
              control={control}
              accepted=".jpg"
              label="Gambar"
              message={errors?.thumbnail?.message?.toString()}
              status={errors.thumbnail ? 'error' : 'none'}
            />
          ) : (
            <div className="w-full relative" style={{ height: '100%' }}>
              {filePreview && (
                <div className="w-full h-full overflow-hidden rounded-md">
                  <Image
                    src={filePreview}
                    width={200}
                    height={200}
                    alt="Pratinjau"
                    sizes="100vw"
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

        <div className="flex pt-5 gap-x-4 w-full justify-center">
          <Button
            type="submit"
            className="py-2.5 px-24    min-w-[122px] text-sm font-bold transition-colors ease-in-out relative z-10 rounded-md duration-300  flex items-center justify-center gap-2 bg-blue-base text-white hover:border-version2-300 "
            // onClick={() => {
            //   setIsModalOpen(false);
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

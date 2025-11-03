'use client';

import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import {
  modalBerhasil,
  modalOpenState,
} from '../../../../recoil/atoms/rencana-studi';
import {
  Button,
  SelectField,
  TextField,
  UploadField,
} from '@kampus-gratis/components/atoms';
import { useForm } from 'react-hook-form';
import { validationAddSubject } from '../../../../config/validation/rencana-studi';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useUser } from '../../../../hooks/user/hook';
import {
  useGetAllMajor,
  usePostSubject,
} from '../../../../hooks/rencana-studi/hook';
import { TAddSubjectPayload } from '../../../../types/rencatastudi';
import { useQueryClient } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';

export const ModalTambahMatkul = ({ majorId }: { majorId: string }) => {
  // console.log(majorId);
  type ValidationSchema = z.infer<typeof validationAddSubject>;
  const queryClient = useQueryClient();
  const [isModalOpen, setIsModalOpen] = useRecoilState(modalOpenState);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const searchParams = useSearchParams();
  const page = searchParams.get('page') || '1';
  const [isModalBerhasilOpen, setIsModalBerhasilOpen] =
    useRecoilState(modalBerhasil);
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
  const { mutate } = usePostSubject();

  const firstMajorId =
    majorData?.data && majorData?.data.map((major) => major.id.toString())[0];

  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
    reset,
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationAddSubject),
    mode: 'all',
    defaultValues: {
      name: '',
      subject_code: '',
      duration_hours: '',
      level: '',
      indicator: '',
      study_experience: '',
      teaching_materials: '',
      basic_competencies: '',
      tools_needed: '',
      description: '',
      scoring: '',
      thumbnail: undefined,
      credit: '',
    },
  });

  // useEffect(() => {
  //   console.log(errors);

  // }, [errors])

  const onSubmit = handleSubmit((data) => {
    const formData = new FormData();
    const selectedTeacher = userData?.data?.users?.find(
      (teacher) => teacher.full_name === data.teacher_name
    );
    if (selectedTeacher) {
      const teacherId = selectedTeacher.id;
      formData.append('teacher_id', teacherId.toString());
      if (!majorId) {
        formData.append('major_id', firstMajorId || '');
      } else {
        formData.append('major_id', majorId);
      }
      formData.append('name', data.name);
      formData.append('subject_code', data.subject_code);
      formData.append('duration_hours', data.duration_hours);
      formData.append('level', data.level);
      formData.append('indicator', data.indicator);
      formData.append('study_experience', data.study_experience);
      formData.append('teaching_materials', data.teaching_materials);
      formData.append('basic_competencies', data.basic_competencies);
      formData.append('tools_needed', data.tools_needed);
      formData.append('description', data.description);
      formData.append('scoring', data.scoring);
      formData.append(`thumbnail`, data.thumbnail[0]);
      formData.append('credit', data.credit);
    }
    try {
      // console.log(data);

      mutate(formData as unknown as TAddSubjectPayload, {
        onSuccess: () => {
          setIsModalOpen(false);
          setIsModalBerhasilOpen(true);
          queryClient.invalidateQueries(['get-subject-pagination']);
        },
      });

      // Invalidasi query di luar try-catch
      queryClient.invalidateQueries(['get-subject-pagination']);
    } catch (err) {
      console.log(err);
    }
  });

  const options =
    userData?.data?.users?.map((teacher) => ({
      value: teacher.full_name,
      label: teacher.full_name,
    })) ?? [];

  return (
    <div className="flex flex-col items-center justify-center pb-4 px-4  w-[500px]">
      <form action="" onSubmit={onSubmit}>
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
          <TextField
            label="Waktu"
            name="duration_hours"
            placeholder={'Waktu'}
            required
            type="number"
            variant="md"
            control={control}
            status={errors.duration_hours ? 'error' : 'none'}
            message={errors.duration_hours?.message}
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
            message={errors.level?.message}
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
          />
          <TextField
            label="Jumlah SKS"
            name="credit"
            placeholder={'Jumlah SKS'}
            required
            type="number"
            variant="md"
            control={control}
            status={errors.credit ? 'error' : 'none'}
            message={errors.credit?.message}
          />
          <SelectField
            name="teacher_name"
            label="Nama Dosen"
            placeholder={'Nama Dosen'}
            options={options}
            variant="md"
            control={control}
            required={true}
            error={errors.teacher_name?.message}
          />
          <UploadField
            name="thumbnail"
            variant="md"
            control={control}
            accepted=".jpg"
            label="Gambar"
            message={errors?.thumbnail?.message?.toString()}
            status={errors.thumbnail ? 'error' : 'none'}
          />
        </div>

        <div className="flex pt-5 gap-x-4 w-full justify-center">
          <Button
            type="submit"
            className="py-2.5 px-24    min-w-[122px] text-sm font-bold transition-colors ease-in-out relative z-10 rounded-md duration-300  flex items-center justify-center gap-2 bg-blue-base text-white hover:border-version2-300 "
            // onClick={() => {
            //   setIsModalOpen(false)
            //   setIsModalBerhasilOpen(true);
            // }}
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
      </form>
    </div>
  );
};

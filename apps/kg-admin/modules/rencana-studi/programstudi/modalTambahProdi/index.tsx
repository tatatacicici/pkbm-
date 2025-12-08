'use client';

import React, { useState } from 'react';
import { Button } from '../../../../../../libs/components/atoms/src/button/index';
import InputText from '../../../../components/input/text/InputText';
import { useRecoilState } from 'recoil';
import {
  modalBerhasil,
  modalOpenState,
} from '../../../../recoil/atoms/rencana-studi';
import {
  LoadingSpinner,
  TextField,
  UploadField,
} from '@kampus-gratis/components/atoms';
import { useForm } from 'react-hook-form';
import Dropdown from '../../../../components/dropdown/Dropdown';
import { useUser } from '../../../../hooks/user/hook';
import { IconArrowDown } from '../../../../components/icons/ic-arrow-down';
import {
  useGetFaculty,
  usePostMajor,
} from '../../../../hooks/rencana-studi/hook';
import { useQueryClient } from '@tanstack/react-query';
import { TAddMajorPayload } from '../../../../types/rencatastudi';
import { validationAddMajor } from '../../../../config/validation/rencana-studi';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSearchParams } from 'next/navigation';

export const ModalTambahProdi = ({ facultyId }: { facultyId: string }) => {
  const {
    data: facultyData,
    refetch: refecthFaculty,
    isLoading: isLoadingFaculty,
  } = useGetFaculty();

  const firstFacultyId =
    facultyData?.data &&
    facultyData?.data.map((faculty) => faculty.id.toString())[0];

  const queryClient = useQueryClient();

  const defaultPlaceholder = 'Nama Kaprodi';
  const defaultDataOptions = ['Nama Kaprodi'];

  const [isModalOpen, setIsModalOpen] = useRecoilState(modalOpenState);
  const [isModalBerhasilOpen, setIsModalBerhasilOpen] =
    useRecoilState(modalBerhasil);

  const [searchQuery, setSearchQuery] = useState<string>('');
  const searchParams = useSearchParams();
  const page = searchParams.get('page') || '1';
  const { data: userData } = useUser(
    Number(page),
    1000,
    searchQuery,
    'TEACHER'
  );
  const { mutate } = usePostMajor();
  type ValidationSchema = z.infer<typeof validationAddMajor>;

  const [selectedTeacherId, setSelectedTeacherId] = useState('');

  const [selectedTeacherName, setSelectedTeacherName] = useState('');

  const handleDropdownChange = (selectedValue: any) => {
    const selectedTeacher = userData?.data?.users?.find(
      (teacher) => teacher.full_name === selectedValue
    );

    if (selectedTeacher) {
      setSelectedTeacherId(selectedTeacher.id.toString()); // Menggunakan toString() untuk memastikan tipe string
      setSelectedTeacherName(selectedTeacher.full_name.toString()); // Menggunakan toString() untuk memastikan tipe string
    }
  };

  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
    reset,
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationAddMajor),
    mode: 'all',
    defaultValues: {
      name: '',
      degree: '',
      description: '',
      thumbnail: null,
    },
  });

  const onSubmit = handleSubmit((data) => {
    // console.log(data);

    const formData = new FormData();
    if (!facultyId) {
      formData.append('faculty_id', firstFacultyId || '');
    } else {
      formData.append('faculty_id', facultyId);
    }
    formData.append('name', data.name);
    formData.append('degree', data.degree);
    formData.append('major_head_id', selectedTeacherId);
    formData.append('description', data.description);
    formData.append(`thumbnail`, data.thumbnail[0]);

    try {
      mutate(formData as unknown as TAddMajorPayload, {
        onSuccess: () => {
          setIsModalOpen(false);
          queryClient.invalidateQueries(['get-all-major']);
          setIsModalBerhasilOpen(true);
          // reset();
        },
      });
      setIsModalOpen(true);
    } catch (err) {
      // setPrivateStatus(false);
      console.log(err);
    }
  });

  return (
    <div className="flex flex-col items-center justify-center pb-4 px-4  w-[500px]">
      <form action="" onSubmit={onSubmit}>
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
            required
            variant="md"
            control={control}
            status={errors.degree ? 'error' : 'none'}
            message={errors.degree?.message}
          />
          <div className="flex flex-col gap-y-2">
            <label htmlFor="Nama Kaprodi" className={`font-bold`}>
              Nama Kaprodi
              <span className="ml-1 font-bold text-error-600">*</span>
            </label>

            <Dropdown
              dataOptions={userData?.data?.users?.map(
                (teacher) => teacher.full_name
              )}
              placeholder="Nama Kaprodi"
              onChange={handleDropdownChange}
              reverse={false}
              textCentre={false}
              icons={<IconArrowDown />}
              shadow={false}
              bold={false}
            />
            {/* <TextField
            label="ID Fakultas"
            name="faculty_id"
            placeholder={'ID Fakultas'}
            required
            variant="md"
            control={control}
            defaultValue={facultyId}
            status={errors.faculty_name ? 'error' : 'none'}
            message={errors.faculty_name?.message}
          /> */}
          </div>
          <TextField
            label="Deskripsi"
            name="description"
            placeholder={'Deskripsi'}
            required
            isTextArea
            textAreaRow={4}
            className="p-2 rounded-md"
            variant="md"
            control={control}
            status={errors.description ? 'error' : 'none'}
            message={errors.description?.message}
          />
          {/* <TextField
            label="ID Fakultas"
            name="faculty_id"
            placeholder={'ID Fakultas'}
            required
            variant="md"
            control={control}
            defaultValue={facultyId}
            status={errors.faculty_name ? 'error' : 'none'}
            message={errors.faculty_name?.message}
          /> */}
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

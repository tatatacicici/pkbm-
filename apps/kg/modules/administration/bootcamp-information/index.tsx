'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  Button,
  SelectField,
  TextField,
} from '@kampus-gratis/components/atoms';
import { LoadingButton } from '@kampus-gratis/components/molecules';
import { useQueryClient } from '@tanstack/react-query';
import { FC, ReactElement, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
import { z } from 'zod';
import { validationSchemaBootcampInformation } from '../../../config/validation/administration';
import {
  useAdministrationStatus,
  useConstants,
  useGetAllAdministration,
  usePrivateInformation,
  usePrivateInformationStatus,
} from '../../../hooks/administration/hook';
import {
  useGetDistrict,
  useGetProvince,
  useGetRegency,
  useGetVillage,
} from '../../../hooks/administrative/hook';
import { useProfile } from '../../../hooks/profile/hook';
import { optionsGender, optionsLastEducation } from '../constant';

export const BootcampInformation: FC = (): ReactElement => {
  type ValidationSchema = z.infer<typeof validationSchemaBootcampInformation>;

  const queryClient = useQueryClient();
  const { setPrivateStatus } = usePrivateInformationStatus();
  const { setAdministrationStatus } = useAdministrationStatus();
  const { mutate, isLoading } = usePrivateInformation();
  const { data: getProfil } = useProfile();
  const { data: getAll, refetch } = useGetAllAdministration();

  const getUserMe = getProfil?.data?.user;
  const administrationData = getAll?.data?.biodatas;

  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
    watch,
    reset,
    setValue,
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchemaBootcampInformation),
    mode: 'all',
    defaultValues: {
      full_name: '',
      gender: '',
      phone_number: '',
      birthdate: '',
      birthplace: '',
      address: '',
      last_education: '',
      nim: '',
      university: '',
      major: '',
      semester: '',
      identity_number: '',
      province_id: '',
      regency_id: '',
      district_id: '',
      village_id: '',
      postal_code: '',
      current_occupation: '',
    },
  });

  const onSubmit = handleSubmit((data) => {
    const payload = {
      ...data,
      semester: data.semester ? parseInt(data.semester) : null,
      birthdate: data.birthdate ? new Date(data.birthdate).toISOString() : null,
    };

    try {
      mutate(
        {
          ...payload,
        },
        {
          onSuccess: () => {
            refetch();
            toast.success('Berhasil Menyimpan Data');
            queryClient.invalidateQueries(['get-all-administration']);
            setAdministrationStatus('onProgress');
          },
          onError: (error) => {
            toast.error(error?.response?.data?.message as string);
          },
        }
      );
    } catch (err) {
      setPrivateStatus(false);
    }
  });

  const watchProvince = watch('province_id');
  const watchRegency = watch('regency_id');
  const watchDistrict = watch('district_id');

  const { data: constant } = useConstants();
  const { data: province } = useGetProvince();
  const { data: regency } = useGetRegency(watchProvince as string);
  const { data: district } = useGetDistrict(watchRegency as string);
  const { data: village } = useGetVillage(watchDistrict as string);

  const optionsOccupation = constant?.data?.occupation?.values.map(
    (item: string | number, index: number) => ({
      label: item,
      value: constant?.data?.occupation?.keys[index],
    })
  );

  const optionsProvince = province
    ? province?.data?.map((item) => ({
        label: item.name,
        value: item.code,
      }))
    : [];

  const optionsRegency = regency
    ? regency?.data?.map((item) => ({
        label: item.name,
        value: item.code,
      }))
    : [];

  const optionsDistrict = district
    ? district?.data?.map((item) => ({
        label: item.name,
        value: item.code,
      }))
    : [];

  const optionsVillage = village
    ? village?.data?.map((item) => ({
        label: item.name,
        value: item.code,
      }))
    : [];

  const resetProvince = (e: string | number) => {
    setValue('province_id', e as string);
    setValue('regency_id', '');
    setValue('district_id', '');
    setValue('village_id', '');
  };

  const resetRegency = (e: string | number) => {
    setValue('province_id', watchProvince);
    setValue('regency_id', e as string);
    setValue('district_id', '');
    setValue('village_id', '');
  };

  useEffect(() => {
    reset(getUserMe);
    reset({
      ...administrationData,
      birthdate: administrationData?.birthdate?.split('T')[0],
      semester: administrationData?.semester?.toString(),
    });
  }, [reset, getUserMe, administrationData]);

  return (
    <div className="mb-16 border border-neutral-300 p-6 rounded-lg">
      <form onSubmit={onSubmit}>
        <div className="cursor-text">
          <h2 className="text-2xl font-bold">Informasi Pribadi</h2>
          <p className="text-sm text-error-400 font-medium">
            <span className="mr-1 font-semibold">*</span>Wajib
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[55px] gap-y-0">
          <div className="form-label mb-3">
            <TextField
              variant="md"
              control={control}
              className="outline outline-none focus:outline-none !border-2 !border-grey-200"
              type="text"
              label={'Nama Lengkap Sesuai KTP'}
              name="full_name"
              placeholder={'Masukkan nama lengkap'}
              status={errors.full_name ? 'error' : 'none'}
              message={errors.full_name?.message}
              required
            />
          </div>
          <div className="form-label mb-3">
            <TextField
              variant="md"
              control={control}
              className="outline outline-none focus:outline-none !border-2 !border-grey-200"
              type="number"
              label={'Nomor Induk Kependudukan'}
              name="identity_number"
              placeholder={'Masukkan nomor induk kependudukan'}
              status={errors.identity_number ? 'error' : 'none'}
              message={errors.identity_number?.message}
              required
            />
          </div>
          <div className="form-label mb-3">
            <TextField
              variant="md"
              control={control}
              className="outline outline-none focus:outline-none !border-2 !border-grey-200"
              type={'number'}
              label={'Nomor Handphone'}
              name={'phone_number'}
              placeholder={'Masukkan nomor handphone'}
              status={errors.phone_number ? 'error' : 'none'}
              message={errors.phone_number?.message}
              required
            />
          </div>
          <div className="form-label mb-3">
            <SelectField
              control={control}
              label="Jenis Kelamin"
              name="gender"
              placeholder="Pilih jenis kelamin"
              options={optionsGender}
              variant={'md'}
              styletext=" text-[10px]"
              required
            />
          </div>
          <div className="form-label mb-3">
            <TextField
              variant="md"
              control={control}
              className="outline outline-none focus:outline-none !border-2 !border-grey-200"
              type="text"
              label={'Tempat Lahir'}
              name="birthplace"
              placeholder={'Masukkan tempat lahir'}
              status={errors.birthplace ? 'error' : 'none'}
              message={errors.birthplace?.message}
              required
            />
          </div>
          <div className="form-label mb-3">
            <TextField
              variant="md"
              control={control}
              className="outline outline-none focus:outline-none !border-2 !border-grey-200"
              type={'date'}
              label={'Tanggal Lahir'}
              name={'birthdate'}
              placeholder={'Masukkan tanggal lahir'}
              status={errors.birthdate ? 'error' : 'none'}
              message={errors.birthdate?.message}
              required
            />
          </div>
        </div>
        <div className="my-4 cursor-text">
          <h2 className="text-2xl font-bold">Alamat</h2>
          <p className="text-sm text-error-400 font-medium">
            <span className="mr-1 font-semibold">*</span>Wajib
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[55px] gap-y-0 ">
          <div className="form-label mb-3">
            <SelectField
              control={control}
              label="Provinsi"
              name="province_id"
              placeholder="Pilih provinsi"
              options={optionsProvince}
              variant={'md'}
              error={errors.province_id ? 'Provinsi harus diisi' : ''}
              styletext=" text-[10px]"
              helper={(e) => resetProvince(e)}
              required
            />
          </div>
          <div className="form-label mb-3">
            <SelectField
              disabled={!watchProvince}
              control={control}
              name="regency_id"
              label="Kota"
              placeholder="Pilih Kota"
              options={optionsRegency}
              variant={'md'}
              error={errors.regency_id ? 'Kota harus diisi' : ''}
              styletext={`${
                !watchProvince ? '!text-grey-400' : ''
              }  text-[10px]`}
              helper={(e) => resetRegency(e)}
              required
            />
          </div>
          <div className="form-label mb-3 ">
            <SelectField
              disabled={!watchRegency}
              control={control}
              label="Kecamatan"
              name="district_id"
              placeholder="Pilih Kecamatan"
              options={optionsDistrict}
              variant={'md'}
              styletext={`${
                !watchRegency ? '!text-grey-400' : ''
              }  text-[10px]`}
              required
            />
          </div>
          <div className="form-label mb-3">
            <SelectField
              disabled={!watchDistrict}
              control={control}
              label="Kelurahan / Desa"
              name="village_id"
              placeholder="Pilih Kelurahan"
              options={optionsVillage}
              variant={'md'}
              error={errors.village_id ? 'Kelurahan harus diisi' : ''}
              styletext={`${
                !watchDistrict ? '!text-grey-400' : ''
              }  text-[10px]`}
              required
            />
          </div>
          <div className="form-label mb-3">
            <TextField
              variant="md"
              control={control}
              className="outline outline-none focus:outline-none !border-2 !border-grey-200"
              type="text"
              label={'Alamat Lengkap'}
              name={'address'}
              placeholder={'Masukkan alamat lengkap'}
              status={errors.address ? 'error' : 'none'}
              message={errors.address?.message}
              required
            />
          </div>
          <div className="form-label mb-3">
            <TextField
              variant="md"
              control={control}
              className="outline outline-none focus:outline-none !border-2 !border-grey-200"
              type="number"
              label={'Kode Pos'}
              name={'postal_code'}
              placeholder={'Masukkan kode pos'}
              status={errors.postal_code ? 'error' : 'none'}
              message={errors.postal_code?.message}
              required
            />
          </div>
        </div>
        <div className="my-4 cursor-text">
          <h2 className="text-2xl font-bold">
            Pekerjaan & Pendidikan Terakhir
          </h2>
          <p className="text-sm text-error-400 font-medium">
            <span className="mr-1 font-semibold">*</span>Wajib
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[55px] gap-y-0 ">
          <div className="form-label mb-3">
            <SelectField
              control={control}
              label="Pekerjaan Terakhir"
              name="current_occupation"
              placeholder="Pilih pekerjaan terakhir"
              options={optionsOccupation}
              variant={'md'}
              styletext=" text-[10px]"
              required
            />
          </div>
          <div className="form-label mb-3">
            <SelectField
              placeholder="Pilih pendidikan terakhir"
              control={control}
              label="Pendidikan Terakhir"
              name="last_education"
              options={optionsLastEducation}
              variant={'md'}
              styletext=" text-[10px]"
              required
            />
          </div>
          <div className="form-label mb-3">
            <TextField
              control={control}
              type="text"
              className="outline outline-none focus:outline-none !border-2 !border-grey-200"
              variant="md"
              label={`Universitas Asal (Optional)`}
              name={'university'}
              placeholder={'Masukkan universitas asal'}
              status={errors.university ? 'error' : 'none'}
            />
          </div>
          <div className="form-label mb-3">
            <TextField
              variant="md"
              control={control}
              className="outline outline-none focus:outline-none !border-2 !border-grey-200"
              type={'text'}
              label={`Program Studi Asal (Optional)`}
              name={'major'}
              placeholder={'Masukkan Program Studi'}
              status={errors.major ? 'error' : 'none'}
            />
          </div>
          <div className="form-label mb-3">
            <TextField
              control={control}
              type="number"
              className="outline outline-none focus:outline-none !border-2 !border-grey-200"
              variant="md"
              label={` Semester (Optional)`}
              name={'semester'}
              placeholder={'Masukkan semester'}
              status={errors.semester ? 'error' : 'none'}
            />
          </div>
          <div className="form-label mb-3">
            <TextField
              variant="md"
              control={control}
              type={'text'}
              className="outline outline-none focus:outline-none !border-2 !border-grey-200"
              name={'nim'}
              label={`NIM atau NPM (Optional)`}
              placeholder={'Masukkan NIM atau NPM'}
              status={errors.nim ? 'error' : 'none'}
            />
          </div>
        </div>
        <div className="flex w-full mt-6 justify-end">
          <Button
            className={`w-[211px] rounded-[8px] disabled:bg-grey-300 disabled:text-white bg-primary-500 text-white font-bold p-3 text-1xl 
            ${isLoading && 'cursor-not-allowed'}
            `}
            disabled={!isValid}
            type={'submit'}
            loading={isLoading && <LoadingButton />}
          >
            Simpan Administrasi
          </Button>
        </div>
      </form>
    </div>
  );
};

'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  Button,
  SelectField,
  TextField,
} from '@kampus-gratis/components/atoms';
import { Accordion, LoadingButton } from '@kampus-gratis/components/molecules';
import { useQueryClient } from '@tanstack/react-query';
import { FC, ReactElement, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
import { z } from 'zod';
import { validationSchemaPrivateInformation } from '../../../config/validation/administration';
import {
  useAdministrationStatus,
  useFacultyInformationStatus,
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

export const PrivateInformation: FC = (): ReactElement => {
  type ValidationSchema = z.infer<typeof validationSchemaPrivateInformation>;

  const queryClient = useQueryClient();
  const { getFacultyStatus } = useFacultyInformationStatus();
  const { setPrivateStatus } = usePrivateInformationStatus();
  const { setAdministrationStatus } = useAdministrationStatus();
  const { mutate, isLoading } = usePrivateInformation();
  const { data: getProfil } = useProfile();
  const { data: getAll } = useGetAllAdministration();

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
    resolver: zodResolver(validationSchemaPrivateInformation),
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

      // tambahan
      school_name_sd: '',
      entry_year_sd: '',
      graduation_year_sd: '',
      diploma_sd: '',
      school_name_smp: '',
      entry_year_smp: '',
      graduation_year_smp: '',
      diploma_smp: '',
      school_name_sma: '',
      entry_year_sma: '',
      report_card_sma: '',
    },
  });

  const onSubmit = handleSubmit((data) => {
    try {
      mutate(
        {
          ...data,
          birthdate: new Date(data.birthdate).toISOString(),
          semester: parseInt(data.semester as string),
        },
        {
          onSuccess: () => {
            setPrivateStatus(true);
            queryClient.invalidateQueries(['get-all-administration']);
            setAdministrationStatus('onProgress');
            toast.success('Berhasil Menyimpan Data');
          },
          onError: (error) => {
            toast.error(error.response?.data.message || 'Gagal Menyimpan Data');
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

  const { data: province } = useGetProvince();
  const { data: regency } = useGetRegency(watchProvince);
  const { data: district } = useGetDistrict(watchRegency);
  const { data: village } = useGetVillage(watchDistrict);

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
    <Accordion
      idAccordion={'private-information'}
      title="Informasi Pribadi"
      disabled={!getFacultyStatus}
    >
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
              label={'Nama Lengkap Sesuai Kartu Keluarga'}
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
          <h2 className="text-2xl font-bold">Pendidikan Terakhir</h2>
          <p className="text-sm text-error-400 font-medium">
            <span className="mr-1 font-semibold">*</span>Wajib
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[55px] gap-y-0 ">
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
              // border="w-full h-[1px] bg-neutral-100"
            />
          </div>

          {/* <div className="form-label mb-3">
            <TextField
              control={control}
              type="text"
              className="outline outline-none focus:outline-none !border-2 !border-grey-200"
              variant="md"
              label={`Sekolah Asal (Optional)`}
              name={'university'}
              placeholder={'Masukkan sekolah asal'}
              status={errors.university ? 'error' : 'none'}
              hint="Isi: belum pernah, jika belum pernah sekolah SMA"
            />
          </div> */}
          {/* <div className="form-label mb-3">
            <TextField
              variant="md"
              control={control}
              className="outline outline-none focus:outline-none !border-2 !border-grey-200"
              type={'text'}
              label={`Jurusan Asal (Optional)`}
              name={'major'}
              placeholder={'Masukkan Jurusan'}
              status={errors.major ? 'error' : 'none'}
              hint="Isi: belum pernah, jika belum pernah sekolah SMA"
            />
          </div> */}
          {/* <div className="form-label mb-3">
            <TextField
              control={control}
              type="number"
              className="outline outline-none focus:outline-none !border-2 !border-grey-200"
              variant="md"
              label={` Semester (Optional)`}
              name={'semester'}
              placeholder={'Masukkan semester'}
              status={errors.semester ? 'error' : 'none'}
              hint="Isi: belum pernah, jika belum pernah sekolah SMA"
            />
          </div> */}

          <div className="form-label mb-3">
            <TextField
              variant="md"
              control={control}
              type={'text'}
              className="outline outline-none focus:outline-none !border-2 !border-grey-200"
              name={'nim'}
              label={`NISN / Nomor Induk Siswa Nasional SD/SMP/SMA (yang Anda punya)`}
              placeholder={'Masukkan Nomor Induk Siswa Nasional'}
              status={errors.nim ? 'error' : 'none'}
              // hint="Isi: belum pernah, jika belum pernah sekolah SMA"
            />
          </div>
        </div>
        <hr className="my-8 text-[#D9D9D9]" />
        <div className="my-4 cursor-text">
          <h2 className="text-2xl font-bold">Pendidikan SD</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[55px] gap-y-0 ">
          <div className="form-label mb-3">
            <TextField
              control={control}
              type="text"
              className="outline outline-none focus:outline-none !border-2 !border-grey-200"
              variant="md"
              label={`Nama Sekolah Dasar (SD)`}
              name={'school_name_sd'}
              placeholder={'Masukkan nama sekolah dasar'}
              status={errors.school_name_sd ? 'error' : 'none'}
              hint="Kosongkan jika kamu tidak pernah bersekolah di SD"
            />
          </div>
          <div className="form-label mb-3">
            <TextField
              control={control}
              type="text"
              className="outline outline-none focus:outline-none !border-2 !border-grey-200"
              variant="md"
              label={`Tahun Masuk`}
              name={'entry_year_sd'}
              placeholder={'Masukkan tahun masuk'}
              status={errors.entry_year_sd ? 'error' : 'none'}
              hint="Kosongkan jika kamu tidak pernah masuk SD"
            />
          </div>
          <div className="form-label mb-3">
            <TextField
              control={control}
              type="text"
              className="outline outline-none focus:outline-none !border-2 !border-grey-200"
              variant="md"
              label={`Tahun Lulus`}
              name={'graduation_year_sd'}
              placeholder={'Masukkan tahun lulus'}
              status={errors.graduation_year_sd ? 'error' : 'none'}
              hint="Kosongkan jika kamu tidak pernah menyelesaikan SD"
            />
          </div>
          <div className="form-label mb-3">
            <TextField
              control={control}
              type="text"
              className="outline outline-none focus:outline-none !border-2 !border-grey-200"
              variant="md"
              label={`Apakah Kamu memiliki ijazah SD / setingkat? Jika iya, masukkan rata-rata nilai ijazah`}
              name={'diploma_sd'}
              placeholder={'Masukkan rata-rata nilai ijazah SD'}
              status={errors.diploma_sd ? 'error' : 'none'}
              hint="Kosongkan jika kamu tidak memiliki ijazah SD"
            />
          </div>
        </div>
        <hr className="my-8 text-[#D9D9D9]" />
        <div className="my-4 cursor-text">
          <h2 className="text-2xl font-bold">Pendidikan SMP</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[55px] gap-y-0 ">
          <div className="form-label mb-3">
            <TextField
              control={control}
              type="text"
              className="outline outline-none focus:outline-none !border-2 !border-grey-200"
              variant="md"
              label={`Nama Sekolah Menengah Pertama (SMP)`}
              name={'school_name_smp'}
              placeholder={'Masukkan nama sekolah menengah pertama'}
              status={errors.school_name_smp ? 'error' : 'none'}
              hint="Kosongkan jika kamu tidak pernah bersekolah di SMP"
            />
          </div>
          <div className="form-label mb-3">
            <TextField
              control={control}
              type="text"
              className="outline outline-none focus:outline-none !border-2 !border-grey-200"
              variant="md"
              label={`Tahun Masuk`}
              name={'entry_year_smp'}
              placeholder={'Masukkan tahun masuk'}
              status={errors.entry_year_smp ? 'error' : 'none'}
              hint="Kosongkan jika kamu tidak pernah masuk SMP"
            />
          </div>
          <div className="form-label mb-3">
            <TextField
              control={control}
              type="text"
              className="outline outline-none focus:outline-none !border-2 !border-grey-200"
              variant="md"
              label={`Tahun Lulus`}
              name={'graduation_year_smp'}
              placeholder={'Masukkan tahun lulus'}
              status={errors.graduation_year_smp ? 'error' : 'none'}
              hint="Kosongkan jika kamu tidak pernah menyelesaikan SMP"
            />
          </div>
          <div className="form-label mb-3">
            <TextField
              control={control}
              type="text"
              className="outline outline-none focus:outline-none !border-2 !border-grey-200"
              variant="md"
              label={`Apakah Kamu memiliki ijazah SMP / setingkat? Jika iya, masukkan rata-rata nilai ijazah`}
              name={'diploma_smp'}
              placeholder={'Masukkan rata-rata nilai ijazah SMP'}
              status={errors.diploma_smp ? 'error' : 'none'}
              hint="Kosongkan jika kamu tidak memiliki ijazah SMP"
            />
          </div>
        </div>
        <hr className="my-8 text-[#D9D9D9]" />
        <div className="my-4 cursor-text">
          <h2 className="text-2xl font-bold">Pendidikan SMA</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[55px] gap-y-0 ">
          <div className="form-label mb-3">
            <TextField
              control={control}
              type="text"
              className="outline outline-none focus:outline-none !border-2 !border-grey-200"
              variant="md"
              label={`Nama Sekolah Menengah Atas (SMA)`}
              name={'school_name_sma'}
              placeholder={'Masukkan nama sekolah menengah atas'}
              status={errors.school_name_sma ? 'error' : 'none'}
              hint="Kosongkan jika kamu tidak pernah bersekolah di SMA"
            />
          </div>
          <div className="form-label mb-3">
            <TextField
              control={control}
              type="text"
              className="outline outline-none focus:outline-none !border-2 !border-grey-200"
              variant="md"
              label={`Tahun Masuk`}
              name={'entry_year_sma'}
              placeholder={'Masukkan tahun masuk'}
              status={errors.entry_year_sma ? 'error' : 'none'}
              hint="Kosongkan jika kamu tidak pernah masuk SMA"
            />
          </div>
          <div className="form-label mb-3">
            <TextField
              control={control}
              type="text"
              className="outline outline-none focus:outline-none !border-2 !border-grey-200"
              variant="md"
              label={`Apakah Kamu memiliki rapor SMA / setingkat tahun terakhir? Jika iya, masukkan rata-rata nilai rapor`}
              name={'report_card_sma'}
              placeholder={'Masukkan rata-rata nilai rapor SMA'}
              status={errors.report_card_sma ? 'error' : 'none'}
              hint="Kosongkan jika kamu tidak memiliki rapor SMA"
            />
          </div>
        </div>
        <div className="flex w-full mt-4 justify-end">
          <Button
            // className={`w-[211px] rounded-[8px] disabled:bg-grey-300 disabled:text-white bg-primary-500 text-white font-bold p-3 text-1xl
            // ${isLoading && 'cursor-not-allowed'}
            // `}
            className={`w-[211px] rounded-[8px] disabled:bg-grey-300 disabled:text-white bg-sky-base text-white font-bold p-3 text-1xl 
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
    </Accordion>
  );
};

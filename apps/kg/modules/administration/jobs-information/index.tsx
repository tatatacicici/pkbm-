'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  Button,
  SelectField,
  TextField,
} from '@kampus-gratis/components/atoms';
import { Accordion } from '@kampus-gratis/components/molecules';
import { useQueryClient } from '@tanstack/react-query';
import { FC, ReactElement, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
import { z } from 'zod';
import { validationSchemaJobsInformation } from '../../../config/validation/administration';
import {
  useFamilyInformation,
  useGetAllAdministration,
  useJobInformationStatus,
  usePrivateInformationStatus,
} from '../../../hooks/administration/hook';
import {
  optionCollegeFeesPaid,
  optionLiveWith,
  optionOccupation,
  optionSalary,
} from '../constant';

export const JobsInformation: FC = (): ReactElement => {
  const { setJobStatus } = useJobInformationStatus();
  const { getPrivateStatus } = usePrivateInformationStatus();
  const { mutate } = useFamilyInformation();
  const { data } = useGetAllAdministration();
  const queryClient = useQueryClient();
  const administrationData = data?.data?.familials;

  type ValidationSchema = z.infer<typeof validationSchemaJobsInformation>;

  const {
    control,
    handleSubmit,
    formState: { isValid },
    reset,
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchemaJobsInformation),
    mode: 'all',
    defaultValues: {
      father_name: '',
      father_occupation: '',
      father_salary: '',
      mother_name: '',
      mother_occupation: '',
      mother_salary: '',
      self_salary: '',
      self_occupation: '',
      live_with: '',
      tuition_payer: '',
    },
  });

  const onSubmit = handleSubmit((data) => {
    try {
      mutate(data, {
        onSuccess: () => {
          setJobStatus(true);
          queryClient.invalidateQueries(['get-all-administration']);
          toast.success('Berhasil Menyimpan Data');
        },
        onError: (error) => {
          toast.error(error.response?.data.message || 'Gagal Menyimpan Data');
        },
      });
    } catch (err) {
      setJobStatus(false);
    }
  });
  useEffect(() => {
    reset(administrationData);
  }, [reset, administrationData]);

  return (
    <Accordion
      title="Informasi Pekerjaan"
      idAccordion={'jobs-information'}
      disabled={!getPrivateStatus}
    >
      <form className="flex w-full flex-col" onSubmit={onSubmit}>
        <h2 className="text-2xl font-bold mb-4">Informasi Pekerjaan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[55px] gap-y-3">
          <SelectField
            variant="md"
            control={control}
            options={optionOccupation}
            name={'self_occupation'}
            label={'Pekerjaan Kamu'}
            required
            placeholder="Pilih pekerjaan kamu"
            styletext="!text-black text-[10px]"
          />
          <SelectField
            variant="md"
            control={control}
            options={optionLiveWith}
            name={'live_with'}
            label={'Tinggal Dengan'}
            required
            placeholder="Pilih tinggal dengan"
            styletext="!text-black text-[10px]"
          />
          <SelectField
            variant="md"
            control={control}
            options={optionSalary}
            name={'self_salary'}
            label={'Penghasilan Kamu'}
            required
            placeholder="Pilih penghasilan kamu"
            styletext="!text-black text-[10px]"
          />
          <SelectField
            variant="md"
            control={control}
            options={optionCollegeFeesPaid}
            name={'tuition_payer'}
            label={'Biaya Hidup Selama Sekolah Ditanggung Oleh'}
            required
            placeholder="Pilih Hidup Selama Kuliah Ditanggung Oleh"
            styletext="!text-black text-[10px]"
          />
        </div>
        <hr className="my-8 text-[#D9D9D9]" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[55px] gap-y-3">
          <TextField
            name={'father_name'}
            control={control}
            label={'Nama Ayah'}
            type={'text'}
            variant="md"
            required
            placeholder={'Masukan nama ayah'}
            className="outline outline-none focus:outline-none !border-2 !border-grey-200"
          />
          <SelectField
            variant="md"
            control={control}
            options={optionOccupation}
            name={'father_occupation'}
            label={'Pekerjaan Ayah'}
            required
            placeholder="Pilih pekerjaan ayah"
            styletext="!text-black text-[10px]"
          />
          <SelectField
            variant="md"
            control={control}
            options={optionSalary}
            name={'father_salary'}
            label={'Penghasilan Ayah / Pasangan'}
            required
            placeholder="Pilih penghasilan ayah / pasangan"
          />
          <TextField
            name={'mother_name'}
            control={control}
            label={'Nama Ibu'}
            variant="md"
            type={'text'}
            required
            placeholder={'Masukan nama ibu'}
            className="outline outline-none focus:outline-none !border-2 !border-grey-200"
          />
          <SelectField
            variant="md"
            control={control}
            options={optionOccupation}
            name={'mother_occupation'}
            label={'Pekerjaan Ibu'}
            required
            placeholder="Pilih pekerjaan ibu"
          />
          <SelectField
            variant="md"
            control={control}
            options={optionSalary}
            name={'mother_salary'}
            label={'Penghasilan Ibu / Pasangan'}
            required
            placeholder="Pilih penghasilan ibu / pasangan"
            styletext="!text-black text-[10px]"
          />
        </div>

        <div className="flex w-full mt-6 justify-end">
          <Button
            disabled={!isValid}
            // className="w-[211px] rounded-[8px] disabled:bg-grey-300 disabled:text-white bg-primary-500 text-white font-bold p-3 text-1xl"
            className="w-[211px] rounded-[8px] disabled:bg-grey-300 disabled:text-white bg-sky-base text-white font-bold p-3 text-1xl"
            type={'submit'}
          >
            Simpan Informasi Pekerjaan
          </Button>
        </div>
      </form>
    </Accordion>
  );
};

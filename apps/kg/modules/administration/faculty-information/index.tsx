'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useGetAllMajor } from '@kampus-gratis/apps/kg/hooks/rencana-studi/hooks';
import { useFaculty } from '@kampus-gratis/apps/kg/hooks/study-plan/hook';
import { TMajorItem } from '@kampus-gratis/apps/kg/types/rencana-studi';
import { Button, SelectField } from '@kampus-gratis/components/atoms';
import { Accordion, LoadingButton } from '@kampus-gratis/components/molecules';
import { useQueryClient } from '@tanstack/react-query';
import clsx from 'clsx';
import { FC, ReactElement, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FaInfoCircle } from 'react-icons/fa';
import { FaTelegram, FaWhatsapp } from 'react-icons/fa6';
import { z } from 'zod';
import { validationSchemaFacultyInformation } from '../../../config/validation/administration';
import {
  useFacultyInformation,
  useFacultyInformationStatus,
  useGetAllAdministration,
} from '../../../hooks/administration/hook';
import { ErrorMessage } from './error-message';
import { optionPrograms } from '../constant';

export const FacultyInformation: FC = (): ReactElement => {
  const { setFacultyStatus, getFacultyStatus } = useFacultyInformationStatus();
  const { mutate, isLoading } = useFacultyInformation();
  const { data: facultyData } = useFaculty();
  const { data: majorData } = useGetAllMajor();
  const { data } = useGetAllAdministration();
  const queryClient = useQueryClient();
  const administrationData = data?.data?.studies;
  const isEligibleChangeMajor = data?.data?.is_eligible_change_major;
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  type ValidationSchema = z.infer<typeof validationSchemaFacultyInformation>;

  const {
    control,
    handleSubmit,
    watch,
    formState: { isValid, errors },
    reset,
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchemaFacultyInformation),
    mode: 'all',
    defaultValues: {
      program_id: '',
      // faculty_id: '',
      // major_id: '',
    },
  });

  // const watchFaculty = watch('faculty_id');

  const facultyOption = facultyData?.data.map((item) => ({
    label: item.name,
    value: item.id,
  }));

  // const majorOption = majorData?.data
  //   .filter((item: TMajorItem) => item.faculty_id === watchFaculty)
  //   .map((item: TMajorItem) => ({
  //     label: item.name,
  //     value: item.id,
  //   }));

  const onSubmit = handleSubmit((data) => {
    try {
      mutate(data, {
        onSuccess: () => {
          setFacultyStatus(true);
          queryClient.invalidateQueries(['get-all-administration']);
          // toast.success('Berhasil menyimpan data fakultas dan jurusan');
          toast.success('Berhasil menyimpan data program');
          setErrorMessage(null);
        },
        onError: (err) => {
          if (err.response?.data.message) {
            setErrorMessage(err.response?.data.message);
            return;
          }
          setErrorMessage('Terjadi kesalahan saat menyimpan data');
        },
      });
    } catch (err) {
      setFacultyStatus(false);
    }
  });

  // useEffect(() => {
  //   if (administrationData?.length > 0) {
  //     setFacultyStatus(true);
  //   }
  // }, [administrationData]);

  useEffect(() => {
    if (administrationData?.[0]) {
      reset({
        program_id: administrationData[0].program_id || '',
        // faculty_id: administrationData[0].faculty_id || '',
        // major_id: administrationData[0].major_id || '',
      });
      setFacultyStatus(true);
    }
  }, [administrationData, reset]);

  if (!administrationData?.length) {
    return (
      <Accordion
        // title="Informasi Fakultas dan Program Pembelajaran"
        title="Informasi Program"
        idAccordion={'faculty-information'}
        defaultOpen
      >
        <div className="px-6 py-4 rounded-lg bg-error-100 text-error-600 mb-4">
          {/* <p className="font-medium flex items-center gap-2">
            <FaInfoCircle size={14} className="flex-shrink-0" />
            Silakan pilih fakultas dan program studi yang ingin kamu ambil
          </p> */}
          <p className="font-medium flex items-center gap-2">
            <FaInfoCircle size={14} className="flex-shrink-0" />
            Silakan pilih program yang ingin kamu ambil
          </p>
        </div>
        <form className="flex w-full flex-col" onSubmit={onSubmit}>
          {errorMessage && <ErrorMessage message={errorMessage} />}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-[55px] gap-y-3">
            <SelectField
              variant="md"
              control={control}
              options={facultyOption}
              name={'faculty_id'}
              label={'Pilih Fakultas'}
              required
              placeholder="Pilih Fakultas"
              error={errors.faculty_id?.message}
            />
            <SelectField
              variant="md"
              control={control}
              options={majorOption}
              name={'major_id'}
              label={'Pilih Jurusan'}
              disabled={!watchFaculty}
              placeholder="Pilih Jurusan"
              required
              hint="Mata kuliah otomatis dipaketkan sesuai dengan jurusan yang dipilih"
              error={errors.major_id?.message}
            />
          </div> */}
          <div className="grid grid-cols-1 gap-[55px] gap-y-3">
            <SelectField
              variant="md"
              control={control}
              options={optionPrograms}
              name={'program_id'}
              label={'Pilih Program'}
              required
              placeholder="Pilih Program"
              error={errors.program_id?.message}
            />
          </div>
          <div className="flex w-full mt-2 justify-end">
            <Button
              className="my-4 w-[250px] rounded-[8px] disabled:bg-grey-300 disabled:text-white bg-sky-base text-white font-bold p-3 text-1xl disabled:cursor-not-allowed"
              type={'submit'}
              disabled={!isValid || isLoading}
            >
              {isLoading ? <LoadingButton /> : 'Simpan dan Lanjutkan'}
            </Button>
          </div>
          {/* <div className="flex w-full mt-2 justify-end">
            <Button
              className="my-4 w-[250px] rounded-[8px] disabled:bg-grey-300 disabled:text-white bg-primary-500 text-white font-bold p-3 text-1xl disabled:cursor-not-allowed"
              type={'submit'}
              disabled={!isValid || isLoading}
            >
              {isLoading ? <LoadingButton /> : 'Simpan dan Lanjutkan'}
            </Button>
          </div> */}
        </form>
      </Accordion>
    );
  }

  return (
    <Accordion
      title="Informasi Paket dan Program Pembelajaran"
      idAccordion={'faculty-information'}
      defaultOpen
    >
      <div className="px-6 py-4 rounded-lg bg-success-100 text-success-600 mb-4 space-y-2 md:space-y-0">
        <p className="font-bold text-[16px]">
          Kamu sudah mengambil
          <span className=""> Program {administrationData[0].major_name}</span>
        </p>
        {isEligibleChangeMajor ? (
          <p className="text-blue-base flex items-center gap-2 font-medium">
            <FaInfoCircle size={14} className="flex-shrink-0 hidden md:block" />
            Kamu bisa mengganti program yang sudah dipilih sebelum pembelajaran
            dimulai.
          </p>
        ) : (
          <p className="text-warning-600 flex items-center gap-2 font-medium">
            <FaInfoCircle size={14} className="flex-shrink-0 hidden md:block" />
            Kamu tidak dapat mengganti program karena pembelajaran sudah
            dimulai.
          </p>
        )}
      </div>

      {isEligibleChangeMajor && (
        <form className="flex w-full flex-col" onSubmit={onSubmit}>
          {errorMessage && <ErrorMessage message={errorMessage} />}
          <div className="grid grid-cols-1 gap-[55px] gap-y-3">
            <SelectField
              variant="md"
              control={control}
              options={optionPrograms}
              name={'program_id'}
              label={'Pilih Program'}
              required
              placeholder="Pilih Program"
              error={errors.program_id?.message}
            />
            {/* <SelectField
              variant="md"
              control={control}
              options={facultyOption}
              name={'faculty_id'}
              label={'Pilih Fakultas'}
              required
              placeholder="Pilih Fakultas"
              error={errors.faculty_id?.message}
            />
            <SelectField
              variant="md"
              control={control}
              options={majorOption}
              name={'major_id'}
              label={'Pilih Jurusan'}
              disabled={!watchFaculty}
              placeholder="Pilih Jurusan"
              required
              hint="Mata kuliah otomatis dipaketkan sesuai dengan jurusan yang dipilih"
              error={errors.major_id?.message}
            /> */}
          </div>
          <div className="flex w-full mt-2 justify-end">
            <Button
              className="my-4 w-[250px] rounded-[8px] disabled:bg-grey-300 disabled:text-white bg-primary-500 text-white font-bold p-3 text-1xl disabled:cursor-not-allowed"
              type={'submit'}
              disabled={!isValid || isLoading}
            >
              {isLoading ? <LoadingButton /> : 'Simpan dan Lanjutkan'}
            </Button>
          </div>
        </form>
      )}

      <div className="flex flex-col w-full">
        <div className="mt-4 rounded-lg">
          <div className="flex gap-2 flex-col sm:flex-row justify-center">
            <CommunityCard
              title="Grup WhatsApp"
              description="Bergabung dengan kami di WhatsApp."
              className="bg-green-600 text-white"
              icon={<FaWhatsapp size={32} className="text-white" />}
              buttonText="Gabung"
              href="https://chat.whatsapp.com/EkFyI1IU7diJXqbLKPnroE"
            />
            <CommunityCard
              title="Grup Telegram"
              description="Bergabung dengan kami di Telegram."
              className="bg-[#24A1DE] text-white"
              icon={<FaTelegram size={32} className="text-white" />}
              buttonText="Gabung"
              href="https://t.me/+GY8KkO-tDyo3OWI1"
            />
          </div>
        </div>
      </div>
    </Accordion>
  );
};

const CommunityCard = ({
  title,
  description,
  icon,
  className,
  buttonText,
  href,
}: {
  title: string;
  description: string;
  icon: ReactElement;
  className?: string;
  buttonText: string;
  href: string;
}) => {
  return (
    <Button
      type="button"
      className={clsx(
        className,
        'group relative overflow-hidden rounded-lg p-4 max-w-[350px] w-full border text-left shadow-sm transition-all hover:shadow-md'
      )}
      onClick={() => window.open(href, '_blank')}
    >
      <div className="flex items-center gap-3 pl-2">
        {icon}
        <div>
          <div className="font-semibold">{title}</div>
          <div className="text-xs text-muted-foreground font-medium">
            {description}
          </div>
        </div>
      </div>
    </Button>
  );
};

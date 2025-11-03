'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  Button,
  TextField,
  UploadField,
} from '@kampus-gratis/components/atoms';
import { Accordion, LoadingButton } from '@kampus-gratis/components/molecules';
import { useQueryClient } from '@tanstack/react-query';
import { FC, ReactElement, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
import { z } from 'zod';
import { validationSchemaFileInformation } from '../../../config/validation/administration';
import {
  useAdministrationStatus,
  useFileInformation,
  useFileInformationStatus,
  useGetAllAdministration,
  useJobInformationStatus,
} from '../../../hooks/administration/hook';
import { FaInfoCircle } from 'react-icons/fa';

export const FileInformation: FC = (): ReactElement => {
  const { setAdministrationStatus } = useAdministrationStatus();
  const { setFileStatus } = useFileInformationStatus();
  const { getJobStatus } = useJobInformationStatus();

  type ValidationSchema = z.infer<typeof validationSchemaFileInformation>;
  const { mutate, isLoading } = useFileInformation();
  const { data, refetch } = useGetAllAdministration();
  const queryClient = useQueryClient();
  const administrationData = data?.data?.files;

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ValidationSchema>({
    mode: 'onSubmit',
    resolver: zodResolver(validationSchemaFileInformation),
    defaultValues: {
      id_card: undefined,
      diploma_certificate: undefined,
      family_card: undefined,
      photo: undefined,
      transcript: undefined,
      student_card: undefined,

      // tambahan
      id_card_question: '',
    },
  });

  const onSubmit = handleSubmit((data) => {
    toast.dismiss();
    try {
      const payload = {
        id_card: data.id_card ? data.id_card[0] : null,
        diploma_certificate: data.diploma_certificate
          ? data.diploma_certificate[0]
          : null,
        family_card: data.family_card ? data.family_card[0] : null,
        photo: data.photo ? data.photo[0] : null,
        transcript: data.transcript ? data.transcript[0] : null,
        student_card: data.student_card ? data.student_card[0] : null,
      };

      mutate(payload, {
        onSuccess: () => {
          queryClient.invalidateQueries(['get-all-administration']);
          setAdministrationStatus('finished');
          refetch();
          toast.success('Berhasil Menyimpan Data');
        },
        onError: (error) => {
          toast.error(error.response?.data.message || 'Terjadi Kesalahan');
        },
      });
    } catch (err) {
      setFileStatus(false);
      toast.error('Terjadi Kesalahan saat memproses');
    }
  });

  useEffect(() => {
    if (administrationData?.status === 'SUBMITTED') {
      setFileStatus(true);
    }
  }, [administrationData, setFileStatus]);

  useEffect(() => {
    reset(administrationData);
  }, [reset, administrationData]);

  return (
    <>
      <Accordion
        title="Informasi Berkas"
        idAccordion={'file-information'}
        disabled={!getJobStatus}
      >
        <form onSubmit={onSubmit}>
          <div className="cursor-text">
            <h2 className="text-2xl font-bold">Informasi Berkas</h2>
            <div className="p-4 bg-error-100 rounded-lg my-4 flex items-center gap-2 text-error-500">
              <FaInfoCircle size={18} />
              <p className="text-sm font-semibold">
                Saat mengumpulkan berkas, pastikan ukuran file maksimal 2MB.
                Jika file kamu lebih besar dari 2MB, kamu bisa memperkecil
                ukurannya dengan cara mengirimkan file tersebut ke WhatsApp,
                lalu download kembali dari WhatsApp dan upload lagi di sini.
              </p>
            </div>
          </div>
          <div className="form-label mb-3">
            <TextField
              control={control}
              type="text"
              className="outline outline-none focus:outline-none !border-2 !border-grey-200"
              variant="md"
              label={`Apakah kamu punya KTP?`}
              name={'id_card_question'}
              placeholder={'Masukkan jawabanmu di sini'}
              status={errors.id_card_question ? 'error' : 'none'}
              hint="Isi: sudah punya / belum punya"
            />
          </div>
          <UploadField
            control={control}
            name={'id_card'}
            accepted=".jpg, .png, .pdf"
            label={
              'Foto Kartu Tanda Penduduk (KTP) / Kartu Pelajar / Bukti NISN'
            }
            variant={'md'}
            message={errors.id_card?.message?.toString()}
            status={errors.id_card ? 'error' : 'none'}
            hint="Kosongkan jika belum ada"
          />
          <UploadField
            variant="md"
            control={control}
            name={'family_card'}
            accepted=".jpg, .png, .pdf"
            label={'Foto Kartu Keluarga (KK)'}
            message={errors.family_card?.message?.toString()}
            status={errors.family_card ? 'error' : 'none'}
          />
          <UploadField
            variant="md"
            control={control}
            name={'photo'}
            accepted=".jpg, .png, .pdf"
            label={'Foto Diri'}
            hint="Mohon unggah pas foto menghadap depan untuk keperluan Kartu Pelajar ( Warna latar bebas )"
            message={errors.photo?.message?.toString()}
            status={errors.photo ? 'error' : 'none'}
          />
          <UploadField
            variant="md"
            control={control}
            name={'student_card'}
            accepted=".jpg, .png, .pdf"
            label={'Foto Kartu Pelajar'}
            message={errors.student_card?.message?.toString()}
            status={errors.student_card ? 'error' : 'none'}
            hint="Kosongkan jika belum ada"
          />
          <UploadField
            variant="md"
            control={control}
            name={'transcript'}
            accepted=".jpg, .png, .pdf"
            label={'Foto Transkrip Nilai Terbaru'}
            message={errors.transcript?.message?.toString()}
            status={errors.transcript ? 'error' : 'none'}
            hint="Kosongkan jika belum ada"
          />
          <UploadField
            variant="md"
            control={control}
            name={'diploma_certificate'}
            accepted=".jpg, .png, .pdf"
            label={'Foto Ijazah SMP / setingkat'}
            message={errors.diploma_certificate?.message?.toString()}
            status={errors.diploma_certificate ? 'error' : 'none'}
            hint="Kosongkan jika belum ada"
          />
          <div className="flex w-full mt-4 justify-end">
            <Button
              // className="w-[211px] rounded-[8px] bg-primary-500 disabled:bg-grey-300 text-white font-bold p-3 text-1xl"
              className="w-[211px] rounded-[8px] bg-sky-base disabled:bg-grey-300 text-white font-bold p-3 text-1xl"
              type={'submit'}
              disabled={isLoading}
            >
              {isLoading ? <LoadingButton /> : 'Simpan Informasi Berkas'}
            </Button>
          </div>
        </form>
      </Accordion>
    </>
  );
};

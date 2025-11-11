import { zodResolver } from '@hookform/resolvers/zod';
import { validationSchemaBerkasConvertion } from '../../../../config/validation/konversi';
import { ChangeEventHandler, FC, ReactElement, useState } from 'react';
import { useForm } from 'react-hook-form';
import { BiSave } from 'react-icons/bi';
import { BsArrowLeft } from 'react-icons/bs';
import { FaEye, FaUpload } from 'react-icons/fa';
import { z } from 'zod';
import {
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';
type ValidationSchema = z.infer<typeof validationSchemaBerkasConvertion>;

export const BerkasModule: FC = (): ReactElement => {
  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
    watch,
    reset,
  } = useForm<ValidationSchema>({
    mode: 'all',
    resolver: zodResolver(validationSchemaBerkasConvertion),
    defaultValues: {
      transkrip_nilai: undefined,
      pengunduran_diri: undefined,
      pernyataan_lulus: undefined,
    },
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div className="w-full bg-neutral-50 h-full flex items-center justify-center">
      <div className="w-3/4 bg-neutral-100 rounded-lg p-[10px]">
        <div className="bg-primary-500 w-full rounded-t-2xl text-xl font-bold py-3 text-white text-center">
          Validasi Perguruan Tinggi Asal
        </div>
        <form onSubmit={onSubmit} className="bg-white p-5 w-full">
          <div className="flex flex-col gap-[30px]">
            <InputBerkas
              control={control}
              required
              name={'transkrip_nilai'}
              accepted=".pdf"
              label={'Transkrip Nilai Terakhir'}
              variant={'md'}
              message={errors.transkrip_nilai?.message?.toString()}
              status={errors.transkrip_nilai ? 'error' : 'none'}
            />
            <InputBerkas
              control={control}
              required
              name={'pengunduran_diri'}
              accepted=".pdf"
              label={'Surat Pengunduran Diri Universitas Asal'}
              variant={'md'}
              message={errors.pengunduran_diri?.message?.toString()}
              status={errors.pengunduran_diri ? 'error' : 'none'}
            />
            <InputBerkas
              control={control}
              required
              name={'pernyataan_lulus'}
              accepted=".pdf"
              label={'Surat Pernyataan Lulus PDDIKTI'}
              variant={'md'}
              message={errors.pernyataan_lulus?.message?.toString()}
              status={errors.pernyataan_lulus ? 'error' : 'none'}
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mt-7">
            <div className="py-2 flex gap-2 border-primary-500 border-2 rounded-md text-primary-500 items-center justify-center">
              <BsArrowLeft />
              <span>Kembali</span>
            </div>
            <button
              type="submit"
              disabled={!isValid}
              className="py-2 border-2 border-transparent rounded-md text-white bg-primary-500 flex gap-2 justify-center items-center disabled:text-gray-400"
            >
              <BiSave className="w-[24px] h-6" />
              <span>Simpan & Selanjutnya</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

type TInputBerkas<T extends FieldValues> = UseControllerProps<T> & {
  multiple?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  name: string;
  className?: string;
  disabled?: boolean;
  required?: boolean;
  label?: string;
  files?: string;
  value?: string;
  accepted?: string;
  onDrop?: (acceptedFiles: any) => void;
  path?: File;
  type?: string;
  variant: 'sm' | 'md' | 'lg';
  status?: 'error' | 'success' | 'warning' | 'none';
  message?: string;
};

export const InputBerkas = <T extends FieldValues>(
  props: TInputBerkas<T>
): ReactElement => {
  const { field } = useController(props);
  const [getName, setName] = useState('');
  const [fileURL, setFileURL] = useState<string | null>(null);

  const handleViewFile = () => {
    // Check if a file has been uploaded
    if (fileURL) {
      window.open(fileURL, '_blank');
    }
  };
  return (
    <div>
      <div className="flex justify-between  items-center">
        <label htmlFor="nilai-terakhir" className="text-sm font-bold">
          {props.label}
          {props.required && <span className="text-red-500">*</span>}
        </label>
        <div className="flex gap-2 items-center">
          <label htmlFor={props.name} className="cursor-pointer">
            <div
              className={`flex items-center space-x-2 rounded-md ${
                getName ? 'px-2' : 'px-5'
              } ${
                props.status === 'error'
                  ? 'border-red-500 text-red-500'
                  : 'border-primary-500 text-primary-500'
              } border-2  py-1`}
            >
              <FaUpload />
              <span>{getName ? 'Ubah' : 'Unggah'}</span>
            </div>
          </label>
          {getName && (
            <button
              type="button"
              className={` bg-primary-500 text-white rounded-md px-2 py-1 flex items-center`}
              onClick={handleViewFile}
            >
              <FaEye />
            </button>
          )}
          <input
            {...props}
            type="file"
            id={props.name}
            className="hidden"
            onChange={(event) => {
              field.onChange(event.target.files);
              // check if type of file is pdf
              console.log(event.target.files?.[0]?.type);

              if (event.target.files?.[0]?.type.includes('application/pdf')) {
                setName(event.target?.files?.[0]?.name as string);
                setFileURL(
                  URL.createObjectURL(event.target.files?.[0] as Blob)
                );
              }
              props?.onChange?.(event);
            }}
          />
        </div>
      </div>
      <span
        className={`${
          props.status === 'error'
            ? 'text-error-base'
            : props.status === 'success'
            ? 'text-success-base'
            : props.status === 'warning'
            ? 'text-warning-base'
            : 'hidden'
        } text-xs`}
      >
        {props.message}
      </span>
    </div>
  );
};

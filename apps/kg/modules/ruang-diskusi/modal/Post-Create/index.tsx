import { zodResolver } from '@hookform/resolvers/zod';
import { FC, ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button, TextField } from '@kampus-gratis/components/atoms';
import { useQueryClient } from '@tanstack/react-query';
import { RiSendPlaneFill } from 'react-icons/ri';
import { RxCross1 } from 'react-icons/rx';
import { toast } from 'react-toastify';
import { useSetRecoilState } from 'recoil';
import { DraggableImageInput } from '../../../../components/draggableImageInput';
import { useCreateDiscussion } from '../../../../hooks/ruang-diskusi/hooks';
import { TDiscussionPayload } from '../../../../types/ruang-diskusi';
import { isModalOpen } from '../../store';

type ImagesError = {
  message: string;
}[];

export const PostCreateModal: FC = (): ReactElement => {
  type ValidationSchema = z.infer<typeof validationSchema>;
  const setOptionOpen = useSetRecoilState(isModalOpen);
  const { mutate, isLoading } = useCreateDiscussion();
  const queryClient = useQueryClient();

  const MAX_FILE_SIZE = 3 * 1024 * 1024;
  const ACCEPTED_MEDIA_TYPES = [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/webp',
    'video/mp4',
  ];

  const validationSchema = z.object({
    // title: z
    //   .string()
    //   .min(5, { message: 'Min. 5 Karakter' })
    //   .max(250, { message: 'Maks. 250 Karakter' }),
    content: z.string().max(1000, { message: 'Isi diskusi melebihi batas' }),
    images: z
      .array(
        z
          .any()
          .refine(
            (files: File) =>
              files !== undefined && files?.size <= MAX_FILE_SIZE,
            'Ukuran maksimum adalah 3mb.'
          )
          .refine(
            (files: File) => ACCEPTED_MEDIA_TYPES.includes(files?.type),
            'hanya menerima .jpg, .jpeg, .png, .webp, dan .mp4.'
          )
      )
      .max(5, { message: 'Maks. 5 gambar' })
      .optional(),
  });

  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { isValid, errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
    mode: 'all',
    defaultValues: {
      // title: '',
      content: '',
      images: undefined,
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    const formData = new FormData();

    // Append title and content as usual
    // formData.append('title', data.title);
    formData.append('content', data.content);
    // Append all image files as an array under the 'images' key
    if (data.images && data.images.length > 0) {
      data.images.forEach((file, index) => {
        formData.append(`images`, file);
      });
    }

    try {
      mutate(formData as unknown as TDiscussionPayload, {
        onSuccess: () => {
          queryClient.invalidateQueries(['get-all-discussion']);
          setOptionOpen(false);
          reset();
          toast.success('Berhasil Membuat Diskusi');
        },
      });
    } catch (err) {
      console.log('Gagal Mengunggah');
    }
  });

  return (
    <section className="bg-neutral-50 min-w-[200px] w-[500px] p-3 md:p-5">
      <header className=" flex justify-center border-b-[0.5px] pt-2 pb-4 border-neutral-300  relative">
        <h1 className="text-lg font-bold text-neutral-900">
          Buat Diskusi Baru
        </h1>
        <RxCross1
          className="absolute right-0 text-xl cursor-pointer text-neutral-400"
          onClick={() => {
            setOptionOpen(false);
          }}
        />
      </header>
      <main className="px-4 py-5">
        <form onSubmit={onSubmit}>
          {/* <TextField
            required
            labelClassName="!text-sm text-left !font-normal"
            type="text"
            variant="md"
            control={control}
            name={'title'}
            placeholder="Ketik judul diskusi kamu"
            label="Judul Diskusi"
            className="!h-[46px] text-sm !rounded-[8px] !border-[1px] !border-neutral-300"
            status={errors.title ? 'error' : undefined}
            message={errors.title?.message}
          />
          <p className="mb-5 -mt-2 text-xs text-neutral-400">
            Maks. 250 karakter
          </p> */}

          <h1 className="mb-2 text-sm text-left">Isi Diskusi</h1>
          <section className="border-[1px] border-neutral-300 rounded-md">
            <TextField
              labelClassName="!text-sm text-left !font-normal"
              type="text"
              variant="md"
              control={control}
              name={'content'}
              placeholder="Mau diskusi apa hari ini?"
              className="h-[80px] border-none text-sm outline-none px-4 py-2"
              isTextArea={true}
              status={errors.content ? 'error' : undefined}
              message={errors.content?.message}
            />
            <section className="border-[1px] p-2 -mt-2 border-neutral-300 rounded-md flex flex-col justify-center items-center m-4 gap-2">
              <DraggableImageInput
                className="border-none min-h-[80px]"
                name={'images'}
                variant={'lg'}
                control={control}
                status={errors.images ? 'error' : undefined}
                postType="discussion"
              />
            </section>
          </section>
          {errors.images && (
            <p className="mt-2 mb-4 text-xs text-red-500">
              {errors.images.message}
            </p>
          )}

          <section className="grid mt-2 place-items-end">
            <Button
              disabled={!isValid}
              type="submit"
              className="relative z-10 flex items-center justify-center gap-2 px-4 py-2 text-sm font-bold transition-colors duration-300 ease-in-out border-2 rounded-md border-version2-500 disabled:bg-neutral-300 bg-success-500 text-neutral-100 hover:opacity-75"
            >
              <RiSendPlaneFill />
              <h1>{isLoading ? 'Sedang Mengirim' : 'Kirim'} </h1>
            </Button>
          </section>
        </form>
      </main>
    </section>
  );
};

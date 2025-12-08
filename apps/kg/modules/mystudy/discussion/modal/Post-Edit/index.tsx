import { zodResolver } from '@hookform/resolvers/zod';
import { FC, ReactElement, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button, TextField } from '@kampus-gratis/components/atoms';
import { useQueryClient } from '@tanstack/react-query';
import Image from 'next/image';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { IoAddCircleOutline } from 'react-icons/io5';
import { RiSendPlaneFill } from 'react-icons/ri';
import { RxCross1 } from 'react-icons/rx';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { DraggableImageInput } from '../../../../../components/draggableImageInput';
import {
  useGetCommentById,
  useUpdateComment,
  useUpdateDiscussion,
} from '../../../../../hooks/ruang-diskusi/hooks';
import { TDiscussionUpdatePayload } from '../../../../../types/ruang-diskusi';
import { isModalOpen, selectedPostId } from '../../store';
import { toast } from 'react-toastify';

export const PostEditModal: FC = (): ReactElement => {
  const getSelectedPostId = useRecoilValue(selectedPostId);
  const queryClient = useQueryClient();
  const [deletedImages, setDeletedImages] = useState<number[]>([]);

  type ValidationSchema = z.infer<typeof validationSchema>;
  const { data } = useGetCommentById(getSelectedPostId as string);
  const discussionData = data?.data;

  const MAX_FILE_SIZE = 3 * 1024 * 1024;
  const ACCEPTED_MEDIA_TYPES = [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/webp',
    'video/mp4',
  ];
  const { mutate, isLoading } = useUpdateDiscussion(getSelectedPostId);
  // const { mutate: mutateComment } = useUpdateComment(getSelectedPostId);

  const [isEdit, setIsEdit] = useState(false);
  const setOptionOpen = useSetRecoilState(isModalOpen);
  const validationSchema = z.object({
    title: z
      .string()
      .min(5, { message: 'Min. 5 Karakter' })
      .max(250, { message: 'Maks. 250 Karakter' }),
    content: z.string().max(1000, { message: 'Isi diskusi melebihi batas' }),
    images: z.any().optional(),
    imagesToDelete: z.any().optional(),
  });

  const handleDeleteImage = (image: string) => {
    setValue('imagesToDelete', [...getValues('imagesToDelete'), image]);

    const imageIndex = discussionData?.images.indexOf(image);
    if (imageIndex !== -1) {
      setDeletedImages([...deletedImages, imageIndex]);
    }
  };

  const {
    control,
    handleSubmit,
    reset,
    formState: { isValid, errors },
    getValues,
    setValue,
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
    mode: 'all',
    defaultValues: {
      title: discussionData?.title,
      content: discussionData?.content,
      images: [],
      imagesToDelete: [],
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    const formData = new FormData();

    formData.append('title', data.title);
    formData.append('content', data.content);

    if (data.images && data.images.length > 0) {
      data.images.forEach((file: string, index: number) => {
        formData.append(`images`, file);
      });
    }
    data.imagesToDelete &&
      data.imagesToDelete.map((image: string, index: number) => {
        formData.append(`imagesToDelete[${index}]`, image);
      });

    try {
      await mutate(formData as unknown as TDiscussionUpdatePayload, {
        onSuccess: () => {
          queryClient.invalidateQueries(['get-all-discussion']);
          setOptionOpen(false);
          reset(data);
          toast.success('Berhasil Mengedit Diskusi');
        },
      });
    } catch (err) {
      console.log('Gagal Mengunggah');
    }
  });

  return (
    <section className="bg-neutral-50 min-w-[200px] w-[500px] p-3 md:p-5">
      <header className="flex justify-center border-b-[0.5px] pt-2 pb-4 border-neutral-300  relative">
        <h1 className="text-lg font-bold text-neutral-900">Edit Diskusi</h1>
        <RxCross1
          className="absolute right-0 text-xl cursor-pointer text-neutral-400"
          onClick={() => {
            setOptionOpen(false);
          }}
        />
      </header>
      <main className="px-4 py-8">
        <form onSubmit={onSubmit}>
          <TextField
            required
            labelClassName="!text-sm text-left !font-normal"
            type="text"
            variant="md"
            control={control}
            name={'title'}
            placeholder="Ketik judul diskusi kamu"
            label="Judul Diskusi"
            className="!h-[46px] text-sm !rounded-[8px] !border-[1px] !border-[#c8bdbd]"
            status={errors.title ? 'error' : undefined}
            message={errors.title?.message}
          />
          <p className="mb-5 -mt-2 text-xs text-neutral-400 text-left">
            Maks. 250 karakter
          </p>

          <h1 className="mb-2 text-sm text-left">Isi Diskusi</h1>
          <section className="border-[1px] border-[#D4D4D4] rounded-md">
            <TextField
              labelClassName="!text-sm text-left !font-normal"
              type="text"
              variant="md"
              control={control}
              name={'content'}
              placeholder="Mau diskusi apa hari ini?"
              className="h-[80px] !border-[0px] text-sm px-4 py-2"
              isTextArea={true}
              status={errors.content ? 'error' : undefined}
              message={errors.content?.message}
            />
            <section className="border-[1px] p-2 -mt-2 border-neutral-300 rounded-md flex flex-col justify-center items-center m-4 gap-2">
              {data?.data?.images && !isEdit ? (
                <div className="w-full min-h-[200px] justify-center">
                  <div
                    onClick={() => setIsEdit(true)}
                    className="flex py-2 px-4 border rounded-2xl justify-center items-center"
                  >
                    <IoAddCircleOutline size={20} />{' '}
                    <span>Tambah foto/video</span>
                  </div>
                  {data?.data?.images &&
                    data?.data?.images.map((image: string, key: number) => (
                      <div key={key} className="relative">
                        {deletedImages.includes(key) ? null : (
                          <div className="relative w-full h-32 my-2 overflow-hidden rounded-lg shadow-md">
                            <Image
                              src={image}
                              alt="image"
                              width={0}
                              height={0}
                              sizes="100vw"
                              fill={true}
                              style={{ objectFit: 'cover' }}
                            />
                          </div>
                        )}
                        <button
                          type="button"
                          onClick={() => handleDeleteImage(image)}
                          className="absolute top-2 right-2 p-1 bg-white rounded-full cursor-pointer"
                        >
                          <AiOutlineCloseCircle color="#e63a3a" size={20} />{' '}
                        </button>
                      </div>
                    ))}
                </div>
              ) : isEdit && data?.data?.images ? (
                <div className="w-full">
                  {data?.data?.images.map((image: string, key: number) => (
                    <div key={key} className="relative m-2">
                      {deletedImages.includes(key) ? null : (
                        <div className="relative w-full h-32 overflow-hidden rounded-lg shadow-md">
                          <Image
                            src={image}
                            alt="image"
                            width={0}
                            height={0}
                            sizes="100vw"
                            fill={true}
                            style={{ objectFit: 'cover' }}
                          />
                        </div>
                      )}

                      <button
                        type="button"
                        className="absolute top-2 right-2 p-1 bg-white rounded-full cursor-pointer"
                        onClick={() => handleDeleteImage(image)}
                      >
                        <AiOutlineCloseCircle color="#e63a3a" size={20} />{' '}
                      </button>
                    </div>
                  ))}
                  <DraggableImageInput
                    className="border-none min-h-[80px]"
                    name={'images'}
                    variant={'lg'}
                    control={control}
                    status={errors.images ? 'error' : undefined}
                  />
                </div>
              ) : (
                <DraggableImageInput
                  className="border-none min-h-[80px]"
                  name={'images'}
                  variant={'lg'}
                  control={control}
                  status={errors.images ? 'error' : undefined}
                />
              )}
            </section>
          </section>
          <p className="mt-2 mb-4 text-xs text-neutral-400 text-left">
            Maks. 1000 karakter
          </p>
          <section className="grid mt-2 place-items-end">
            <Button
              disabled={!isValid}
              type="submit"
              className="relative z-10 flex items-center justify-center gap-2 px-4 py-2 text-sm font-bold transition-colors duration-300 ease-in-out border-2 rounded-md border-version2-500 disabled:bg-neutral-300 bg-[#3EB449] text-neutral-100 hover:opacity-75"
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

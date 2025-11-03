import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@kampus-gratis/components/atoms';
import { useQueryClient } from '@tanstack/react-query';
import { FC, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { FaTelegramPlane } from 'react-icons/fa';
import { MdCameraAlt } from 'react-icons/md';
import { toast } from 'react-toastify';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { z } from 'zod';
import { DraggableImageInput } from '../../../components/draggableImageInput';
import {
  useCreateComment,
  useCreateReply,
} from '../../../hooks/ruang-diskusi/hooks';
import { isImageInputOpen, selectedPostId } from '../store';

type TCommentInputProps = {
  id: string;
  type: string;
  discussion_id: string;
};

type ImagesError = {
  message: string;
}[];

export const CommentInput: FC<TCommentInputProps> = ({
  id,
  type,
  discussion_id,
}) => {
  type ValidationSchema = z.infer<typeof validationSchema>;
  const { mutate, isLoading, isSuccess } = useCreateComment(id);
  const {
    mutate: mutateReply,
    isLoading: isLoadingReply,
    isSuccess: isSuccessReply,
  } = useCreateReply(discussion_id, id);

  const [isImageOpen, setIsImageOpen] = useRecoilState(isImageInputOpen);
  const setSelectedPosId = useSetRecoilState(selectedPostId);
  const getSelectedPostId = useRecoilValue(selectedPostId);
  const queryClient = useQueryClient();

  const [file, setFile] = useState<any>();
  const [fileAvatar, setFileAvatar] = useState();

  const MAX_FILE_SIZE = 3 * 1024 * 1024;
  const ACCEPTED_MEDIA_TYPES = [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/webp',
    'video/mp4',
  ];

  const validationSchema = z.object({
    content: z
      .string()
      .max(1000, { message: 'Isi diskusi melebihi batas' })
      .min(1, { message: 'Isi diskusi tidak boleh kosong' }),
    image: z
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
      .max(5, { message: 'Maksimal 5 gambar' })
      .optional(),
  });

  const {
    control,
    handleSubmit,
    reset,

    formState: { isValid, errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
    mode: 'all',
    defaultValues: {
      content: '',
      image: undefined,
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    const tempData = {
      ...data,
      image: data.image ? data.image[0] : undefined,
    };

    try {
      type === 'comment'
        ? mutate(tempData, {
            onSuccess: () => {
              queryClient.invalidateQueries(['get-all-comment', id]);
              queryClient.invalidateQueries(['comment-get-by-id', id]);
              reset();
              toast.success('Komentar terkirim');
              setIsImageOpen(false);
            },
          })
        : mutateReply(tempData, {
            onSuccess: () => {
              queryClient.invalidateQueries([
                'comment-get-by-id',
                discussion_id,
              ]);
              reset();
              toast.success('Balasan terkirim');
              setIsImageOpen(false);
            },
          });
    } catch (err) {
      console.log('Gagal Create Comment');
    }
  });

  return (
    <div className="h-fit">
      <form onSubmit={onSubmit} className="h-fit">
        <div>
          <div className="flex items-center justify-between w-full gap-4 px-3 py-3 rounded-md bg-neutral-100 text-neutral-500 z-40">
            <Controller
              name="content"
              control={control}
              render={({ field }) => (
                <div className="w-full px-2 text-xs bg-transparent outline-none bg-neutral-100 text-neutral-700 md:text-sm z-50">
                  <input
                    {...field}
                    type="text"
                    className="w-full text-xs bg-transparent outline-none bg-neutral-100 text-neutral-700 md:text-sm z-50"
                    placeholder="Ketikan Balasan Disini"
                  />
                  {errors.content && (
                    <p className="mt-2  text-xs text-red-500">
                      {errors.content.message}
                    </p>
                  )}
                </div>
              )}
            />

            <section className="flex items-center gap-2 text-lg lg:text-xl z-10">
              <Button
                disabled={!isValid}
                type="button"
                //   type="submit"
                className="flex items-center justify-center text-sm font-bold transition-colors duration-300 ease-in-out hover:opacity-75 z-50"
                onClick={() => {
                  setSelectedPosId(id);
                  if (getSelectedPostId === id) {
                    setIsImageOpen(!isImageOpen);
                  }
                }}
              >
                <MdCameraAlt className="text-neutral-600 " size={20} />
              </Button>

              <Button
                disabled={!isValid}
                type="submit"
                className="flex items-center justify-center text-sm font-bold transition-colors duration-300 ease-in-out hover:opacity-75"
              >
                <FaTelegramPlane
                  // className="text-version3-500 text-[#106FA4]"
                  className="text-version3-500 text-sky-base"
                  size={20}
                />
              </Button>
            </section>
          </div>
        </div>
        <section
          className={`border-[1px] border-neutral-300 rounded-md flex flex-col justify-center items-center ${
            isImageOpen && getSelectedPostId === id
              ? 'block max-h-[1000px] transition-all duration-500 opacity-100 ease-in-out translate-y-3 p-2 m-4 -mt-2'
              : 'none max-h-0 transition-all duration-300 opacity-0 ease-out -translate-y-12'
          }`}
        >
          <DraggableImageInput
            className={`border-none  ${
              !(isImageOpen && getSelectedPostId === id)
                ? '!cursor-default none !h-0 -z-50'
                : 'min-h-[80px]'
            }`}
            name={'image'}
            variant={'lg'}
            control={control}
            status={errors.image ? 'error' : undefined}
            disabled={!(isImageOpen && getSelectedPostId === id)}
            labelStyle={isImageOpen ? 'cursor-pointer' : ''}
          />
          {errors.image &&
            (errors.image as ImagesError).map((error, index) =>
              error && error.message ? (
                <p key={index} className="mt-2 mb-4 text-xs text-red-500">
                  {error.message}
                </p>
              ) : null
            )}
        </section>
      </form>
    </div>
  );
};

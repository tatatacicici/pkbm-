import { zodResolver } from '@hookform/resolvers/zod';
import { FC, ReactElement, use, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button, TextField } from '@kampus-gratis/components/atoms';
import { useQueryClient } from '@tanstack/react-query';
import Image from 'next/image';
import { RiSendPlaneFill } from 'react-icons/ri';
import { RxCross1 } from 'react-icons/rx';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
  useGetCommentById,
  useUpdateComment,
  useUpdateReply,
} from '../../../../../hooks/ruang-diskusi/hooks';
import {
  isModalOpen,
  selectedCommentId,
  selectedPostId,
  selectedReplyId,
} from '../../store';
// import { TPostEditProps } from './type';
import { DraggableImageInput } from '../../../../../components/draggableImageInput';
import {
  TCommentResponse,
  TCommentsPayload,
} from '../../../../../types/ruang-diskusi';
import { TPostEditCommentProps } from './types';
import { toast } from 'react-toastify';
import {
  useEditComment,
  useEditReply,
  useGetSingleComment,
  useGetSingleReply,
} from '../../../../../hooks/mystudy/discussion/hooks';

type ImagesError = {
  message: string;
}[];

export const PostEditCommentModal: FC<TPostEditCommentProps> = ({
  type,
  subject_id,
  session_id,
}): ReactElement => {
  const getSelectedPostId = useRecoilValue(selectedPostId);
  const getSelectedCommentId = useRecoilValue(selectedCommentId);
  const getSelectedReplyId = useRecoilValue(selectedReplyId);

  const queryClient = useQueryClient();

  type ValidationSchema = z.infer<typeof validationSchema>;

  const { data } = useGetSingleComment(
    subject_id,
    session_id,
    getSelectedPostId,
    getSelectedCommentId
  );
  const discussionData = data?.data;

  const { data: replyData } = useGetSingleReply(
    subject_id,
    session_id,
    getSelectedPostId,
    getSelectedCommentId,
    getSelectedReplyId
  );
  const replyDiscussionData = replyData?.data;
  const selectedCommentData = discussionData?.comment;
  const selectedReplyData = replyDiscussionData?.reply;

  const MAX_FILE_SIZE = 3 * 1024 * 1024;
  const ACCEPTED_MEDIA_TYPES = [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/webp',
    'video/mp4',
    undefined,
  ];

  const { mutate, isLoading } = useEditComment(
    subject_id,
    session_id,
    getSelectedPostId,
    getSelectedCommentId
  );
  const { mutate: mutateReply, isLoading: isLoadingReply } = useEditReply(
    subject_id,
    session_id,
    getSelectedPostId,
    getSelectedCommentId,
    getSelectedReplyId
  );

  const [isEdit, setIsEdit] = useState(false);
  const setOptionOpen = useSetRecoilState(isModalOpen);

  const validationSchema = z.object({
    content: z.string().max(1000, { message: 'Isi diskusi melebihi batas' }),
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
      .optional(),
  });

  const {
    control,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { isValid, errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
    mode: 'all',
    defaultValues: {
      content:
        type === 'comment'
          ? selectedCommentData?.content
          : selectedReplyData?.content,
      image: undefined,
    },
  });

  const watchImage = watch('image');

  const onSubmit = handleSubmit(async (data) => {
    const formData = new FormData();

    formData.append('content', data.content);

    if (data.image) {
      formData.append(`image`, data.image[0]);
    }
    try {
      type === 'comment'
        ? await mutate(formData as unknown as TCommentsPayload, {
            onSuccess: () => {
              queryClient.invalidateQueries([
                'get-comments',
                subject_id,
                session_id,
                getSelectedPostId,
              ]);
              setOptionOpen(false);
              reset(data);
              toast.success('Berhasil Mengedit Komentar');
            },
          })
        : await mutateReply(formData as unknown as TCommentsPayload, {
            onSuccess: () => {
              queryClient.invalidateQueries([
                'get-replies',
                subject_id,
                session_id,
                getSelectedPostId,
                getSelectedCommentId,
              ]);
              setOptionOpen(false);
              reset(data);
              toast.success('Berhasil Mengedit Komentar');
            },
          });
    } catch (err) {
      console.log('Gagal Mengunggah');
    }
  });

  useEffect(() => {
    if (selectedCommentData?.content) {
      if (type === 'comment') {
        setValue('content', selectedCommentData?.content);
      } else {
        setValue('content', selectedReplyData?.content || '');
      }
    }
  }, [data, replyData]);

  return (
    <section className="bg-neutral-50 min-w-[200px] w-[500px] p-3 md:p-5">
      <header className=" flex justify-center border-b-[0.5px] pt-2 pb-4 border-neutral-300  relative">
        <h1 className="text-lg font-bold text-neutral-900">Edit Komentar</h1>
        <RxCross1
          className="absolute right-0 text-xl cursor-pointer text-neutral-400"
          onClick={() => {
            setOptionOpen(false);
          }}
        />
      </header>
      <main className="px-4 py-8">
        <form onSubmit={onSubmit}>
          <h1 className="mb-2 text-sm text-left">Isi Komentar</h1>
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
            <p className="mt-2 mb-4 text-xs text-neutral-400 text-left">
              Maks. 250 karakter
            </p>
            <section className="border-[1px] p-2 -mt-2 border-neutral-300 rounded-md flex flex-col justify-center items-center m-4 gap-2 min-h-[200px]">
              {selectedCommentData?.image ||
              (selectedReplyData?.image && !isEdit) ? (
                watchImage === undefined || watchImage === null ? (
                  <div
                    className="w-full flex gap-2 flex-wrap  justify-center"
                    // onClick={() => setIsEdit(true)}
                  >
                    <div className="relative w-full h-32 my-2 overflow-hidden rounded-lg shadow-md">
                      <Image
                        src={
                          type === 'comment'
                            ? selectedCommentData?.image?.url || ''
                            : selectedReplyData?.image?.url || ''
                        }
                        alt={`imageby${selectedCommentData?.author.full_name}`}
                        width={0}
                        height={0}
                        sizes="100vw"
                        fill={true}
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    {/* <DraggableImageInput
                      className="border-none min-h-[80px]"
                      name={'image'}
                      variant={'lg'}
                      control={control}
                      status={errors.image ? 'error' : undefined}
                    /> */}
                  </div>
                ) : errors.image ? (
                  <div></div>
                ) : (
                  // <DraggableImageInput
                  //   className="border-none min-h-[80px]"
                  //   name={'image'}
                  //   variant={'lg'}
                  //   control={control}
                  //   status={errors.image ? 'error' : undefined}
                  // />
                  <div className="relative w-full h-32 my-2 overflow-hidden rounded-lg shadow-md">
                    <div className="w-full">
                      <Image
                        src={URL.createObjectURL(watchImage[0])}
                        alt={`imageby${selectedCommentData?.author.full_name}`}
                        width={0}
                        height={0}
                        sizes="100vw"
                        fill={true}
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                )
              ) : (
                <div>
                  {/* <DraggableImageInput
                    className="border-none min-h-[80px]"
                    name={'image'}
                    variant={'lg'}
                    control={control}
                    status={errors.image ? 'error' : undefined}
                  /> */}
                </div>
              )}
            </section>
            {errors.image &&
              (errors.image as ImagesError).map((error, index) =>
                error && error.message ? (
                  <p key={index} className="m-4 text-xs text-red-500">
                    {error.message}
                  </p>
                ) : null
              )}
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

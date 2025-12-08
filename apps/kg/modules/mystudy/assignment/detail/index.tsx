'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import EmptyState from '@kampus-gratis/apps/kg/components/empty-state';
import {
  BreadCrumb,
  Button,
  LoadingSpinner,
  TextField,
  UploadDragbleField,
} from '@kampus-gratis/components/atoms';
import { LoadingButton } from '@kampus-gratis/components/molecules';
import { useQueryClient } from '@tanstack/react-query';
import { StudiKuBreadCumbs } from 'apps/kg/utils/constantStudiKu';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { FC, Fragment, ReactElement, ReactNode, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { FaCheck, FaFilePdf, FaPencilAlt } from 'react-icons/fa';
import { IoWarning } from 'react-icons/io5';
import { MdOutlineRemoveCircle } from 'react-icons/md';
import { z } from 'zod';
import {
  useDeleteFileMyStudyAssigment,
  useGetMyStudyAssignmentById,
  useUpdateSubmissionMyStudyAssigment,
} from '../../../../hooks/mystudy/assignment/hook';
import {
  TMyStudyAssignmentItem,
  TMyStudyAssignmentSubmissionPayload,
} from '../../../../types/mystudy-assignment';
import { motion, AnimatePresence } from 'framer-motion';

const AssignmentDetails = ({
  getMyStudyAssignmentItem,
  setIsEdit,
  isEdit,
  renderFileList,
}: {
  getMyStudyAssignmentItem: TMyStudyAssignmentItem;
  setIsEdit: (value: boolean) => void;
  isEdit: boolean;
  renderFileList: () => ReactNode;
}) => {
  const [showFullText, setShowFullText] = useState(false);

  if (getMyStudyAssignmentItem?.assignment?.progress?.status !== 'GRADING') {
    return null;
  }

  const { text, files } = getMyStudyAssignmentItem.assignment.progress;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white border-2 rounded-lg p-6 mb-6 shadow-md"
    >
      <h3 className="text-xl font-bold mb-4 text-blue-800">
        Detail Jawaban Tugas yang Kamu Kirim Saat Ini
      </h3>

      {text && (
        <div className="mb-6">
          <h4 className="font-semibold mb-2 text-gray-700">Jawaban Teks:</h4>
          <motion.div
            initial={false}
            animate={{ height: showFullText ? 'auto' : '100px' }}
            className="bg-gray-50 p-4 rounded-md overflow-hidden"
          >
            <p className="text-gray-800">
              {showFullText ? text : `${text.slice(0, 200)}...`}
            </p>
          </motion.div>
          {text.length > 200 && (
            <button
              onClick={() => setShowFullText(!showFullText)}
              className="mt-2 text-blue-600 hover:text-blue-800 transition-colors duration-200"
            >
              {showFullText
                ? 'Tampilkan Lebih Sedikit'
                : 'Tampilkan Lebih Banyak'}
            </button>
          )}
        </div>
      )}

      {files && files.length > 0 && (
        <div className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <h4 className="font-semibold text-gray-700">Unggahan Dokumen:</h4>
            <button
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200 flex items-center gap-2 ${
                isEdit
                  ? 'bg-green-100 text-green-700 hover:bg-green-200'
                  : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
              }`}
              onClick={() => setIsEdit(!isEdit)}
            >
              {isEdit ? (
                <>
                  <FaCheck /> Selesai
                </>
              ) : (
                <>
                  <FaPencilAlt /> Edit File
                </>
              )}
            </button>
          </div>
          <AnimatePresence>{renderFileList()}</AnimatePresence>
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex items-start gap-3 p-3 bg-yellow-50 rounded-md border border-yellow-600"
      >
        <IoWarning className="text-yellow-500 text-xl" />
        <p className="text-sm text-yellow-700">
          Status tugas kamu saat ini <b>sedang dinilai</b>. Kamu masih bisa
          melakukan perubahan jika diperlukan.
        </p>
      </motion.div>
    </motion.div>
  );
};

export const StudyPlanAssigmentDetailModule: FC = (): ReactElement => {
  const { subjectId, sessionId, assignmentId } = useParams();
  const [isEdit, setIsEdit] = useState(false);
  const {
    data,
    isLoading: isLoadingGetAssignment,
    isError,
  } = useGetMyStudyAssignmentById(
    subjectId as string,
    sessionId as string,
    assignmentId as string
  );
  const { mutate, isLoading } = useUpdateSubmissionMyStudyAssigment(
    subjectId as string,
    sessionId as string,
    assignmentId as string
  );
  const { mutate: deleteFile, isLoading: isLoadingDeleteFile } =
    useDeleteFileMyStudyAssigment(
      subjectId as string,
      sessionId as string,
      assignmentId as string
    );
  const getMyStudyAssignmentItem = data?.data as TMyStudyAssignmentItem;
  const queryClient = useQueryClient();

  const MAX_FILE_SIZE = 5 * 1024 * 1024;
  const ACCEPTED_MEDIA_TYPES = ['application/pdf'];

  const validationSchema = z
    .object({
      text_answer: z.string().optional(),
      files: z
        .any()
        .optional()
        .refine(
          (files) =>
            !files || files?.every((file: File) => file.size <= MAX_FILE_SIZE),
          'Semua berkas harus memiliki ukuran maksimum 5mb.'
        )
        .refine(
          (files) =>
            !files ||
            files?.every((file: File) =>
              ACCEPTED_MEDIA_TYPES.includes(file.type)
            ),
          'Semua berkas harus memiliki tipe .pdf'
        ),
    })
    .refine(
      (data) => data.text_answer || (data.files && data.files.length > 0),
      {
        message:
          'Anda harus mengisi jawaban teks atau mengunggah file, atau keduanya.',
        path: ['text_answer'],
      }
    );

  type TValidationSchema = z.infer<typeof validationSchema>;

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TValidationSchema>({
    resolver: zodResolver(validationSchema),
    mode: 'all',
  });

  const onSubmitHandler = handleSubmit(async (data) => {
    const { files, text_answer } = data;
    try {
      if (!text_answer && (!files || files.length === 0)) {
        toast.error(
          'Anda harus mengisi jawaban teks atau mengunggah file, atau keduanya.'
        );
        return;
      }

      const payload: TMyStudyAssignmentSubmissionPayload = {};

      if (text_answer) {
        payload.text = text_answer;
      }

      if (files && files.length > 0) {
        payload.files = files;
      }

      await mutate(payload, {
        onSuccess: () => {
          queryClient.invalidateQueries(['mystudy-assignment-get']);
          toast.success('Berhasil Mengirim Tugas');
          reset();
        },
        onError: (error) => {
          toast.error(error?.response?.data?.message || 'Gagal Mengirim Tugas');
        },
      });

      await queryClient.refetchQueries(['mystudy-assignment-get']);
    } catch (error) {
      console.error('Error submitting assignment:', error);
      toast.error('Gagal Mengirim Tugas');
    }
  });

  const onRemoveFileHandler = async (fileId: string) => {
    try {
      await deleteFile(fileId, {
        onSuccess: () => {
          queryClient.invalidateQueries(['mystudy-assignment-get']);
          toast.success('Berhasil Menghapus Berkas');
        },
        onError: (error) => {
          toast.error(
            error?.response?.data?.message || 'Gagal Menghapus Berkas'
          );
        },
      });
    } catch (error) {
      toast.error('Gagal Menghapus Berkas');
    }
  };

  function timestampRemainingHandler(deadline: string) {
    const now = new Date().getTime();
    const countDownDate = new Date(deadline).getTime();
    const remainingTime = countDownDate - now;

    if (getMyStudyAssignmentItem?.assignment?.progress?.timestamp_submitted) {
      return '-';
    }

    if (remainingTime < 0) {
      return 'Telah Melewati Batas Waktu';
    }
    const minutes = Math.floor((remainingTime / (1000 * 60)) % 60);
    const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));

    return `${days} hari ${hours} jam ${minutes} menit`;
  }

  const timestamp_remaining = timestampRemainingHandler(
    getMyStudyAssignmentItem?.assignment?.progress?.deadline as string
  );

  const tabelState: {
    namaTabel: string;
    response: string | string[] | number | ReactNode;
  }[] = [
    {
      namaTabel: 'Status Pengumpulan',
      response:
        getMyStudyAssignmentItem?.assignment?.progress?.files?.length === 0 &&
        !getMyStudyAssignmentItem?.assignment?.progress?.text
          ? 'Belum Mengumpulkan'
          : 'Sudah Dikumpulkan',
    },
    {
      namaTabel: 'Status Penilaian',
      response:
        getMyStudyAssignmentItem?.assignment?.progress?.score !== null
          ? `${getMyStudyAssignmentItem?.assignment?.progress?.score}`
          : 'Belum dinilai',
    },
    {
      namaTabel: 'Tanggal batas pengumpulan',
      response: getMyStudyAssignmentItem?.assignment?.progress?.deadline
        ? new Date(
            getMyStudyAssignmentItem.assignment.progress.deadline
          ).toLocaleString('id-ID', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            timeZone: 'Asia/Jakarta',
          }) + ' WIB'
        : '-',
    },
    {
      namaTabel: 'Waktu tersisa',
      response: timestamp_remaining,
    },
    {
      namaTabel: 'Terakhir diubah',
      response: getMyStudyAssignmentItem?.assignment?.progress
        ?.timestamp_submitted
        ? new Date(
            getMyStudyAssignmentItem.assignment.progress.timestamp_submitted
          ).toLocaleString('id-ID', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            timeZone: 'Asia/Jakarta',
          }) + ' WIB'
        : '-',
    },
    // {
    //   namaTabel: 'Text Tugas',
    //   response: getMyStudyAssignmentItem?.assignment?.progress?.text || '-',
    // },
    // {
    //   namaTabel: 'Pengiriman Tugas',
    //   response: getMyStudyAssignmentItem?.assignment?.progress?.files?.length > 0
    //     ? getMyStudyAssignmentItem.assignment.progress.files.map((file) => [
    //         file.document_url,
    //         file.document_filename,
    //         file.id,
    //       ])
    //     : [],
    // },
  ];

  const lateState = (): string => {
    if (tabelState[3].response === 'Telah Melewati Batas Waktu') {
      return 'bg-warning-550';
    }
    return 'bg-transparent';
  };

  const renderFileList = () => {
    const files = getMyStudyAssignmentItem?.assignment?.progress?.files || [];

    return (
      <div className="flex flex-col gap-2 mt-4">
        {files.map((file, index) => (
          <div key={index} className="flex items-center gap-2">
            {isEdit && (
              <MdOutlineRemoveCircle
                className={`text-lg ${
                  !isLoadingDeleteFile
                    ? 'text-warning-base cursor-pointer'
                    : 'text-neutral-300 cursor-not-allowed'
                }`}
                onClick={() => {
                  !isLoadingDeleteFile && onRemoveFileHandler(file.id);
                }}
              />
            )}
            <Link
              href={file.document_url}
              target="_blank"
              className="flex items-center gap-2 text-blue-600 hover:underline"
            >
              <FaFilePdf size={20} />
              {file.document_filename}
            </Link>
          </div>
        ))}
      </div>
    );
  };

  const studyAssigmentBreadcrumb = [
    ...StudiKuBreadCumbs,
    {
      name: data?.data?.detail?.subject_name,
      link: `/studi-ku/${subjectId}`,
    },
    {
      name: getMyStudyAssignmentItem?.assignment?.title as string,
      link: `/studi-ku/${subjectId}/session/${sessionId}/tugas/${assignmentId}`,
    },
  ];

  if (isLoadingGetAssignment) return <LoadingSpinner />;

  if (!data?.data) return <EmptyState text="Oops! Tugas tidak ditemukan" />;

  return (
    <div className="bg-neutral-50">
      <BreadCrumb items={studyAssigmentBreadcrumb} bgColor="bg-neutral-50" />
      <section className="max-w-[1440px] mx-auto lg:pt-12 lg:pb-20 md:py-10 py-5 lg:px-32 md:px-14 px-7">
        <div className="bg-white w-full py-5 md:py-10 lg:py-12 px-6 md:px-12">
          <p className="text-[20px] font-semibold mb-[8px]">
            {getMyStudyAssignmentItem?.assignment?.title}
          </p>
          <p className="text-[16px] font-medium mb-[8px]">
            Tugas [Pertemuan ke-
            {getMyStudyAssignmentItem?.detail?.session_no}]
          </p>
          <p className="text-[14px] font-medium mb-[8px] text-neutral-500">
            {getMyStudyAssignmentItem?.assignment?.desc}
          </p>
          <p className="text-[14px] mb-[35px] font-normal">
            {new Date(
              getMyStudyAssignmentItem?.assignment?.progress?.deadline as string
            ).toLocaleDateString('id-ID', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}{' '}
            WIB
          </p>
          <p className="text-[14px] font-normal">
            Silahkan baca dan kerjakan tugas pada modul berikut ini.
          </p>
          <div className="flex-col gap-y-2 mt-4">
            {getMyStudyAssignmentItem?.assignment?.documents &&
              getMyStudyAssignmentItem?.assignment?.documents?.map(
                (document, i) => (
                  <div key={i} className="w-full">
                    <Link
                      href={document.document_url}
                      target="_blank"
                      // className="w-fit overflow-hidden whitespace-nowrap text-ellipsis hover:underline hover:text-primary-500 flex gap-2 items-center border border-blue-base rounded-md px-4 py-2 text-sm text-blue-base"
                      className="w-fit overflow-hidden whitespace-nowrap text-ellipsis hover:underline hover:text-sky-base flex gap-2 items-center border border-sky-base rounded-md px-4 py-2 text-sm text-sky-base"
                    >
                      <FaFilePdf size={20} />
                      {document.document_filename}
                    </Link>
                  </div>
                )
              )}
          </div>

          <div className="mt-[36px]">
            <p className="text-[20px] font-semibold mb-[25px]">
              Status Penugasan
            </p>
            <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-5 lg:text-[12px] text-[10px]">
              {tabelState.map((row, index) => {
                return (
                  <Fragment key={index}>
                    <div className="lg:col-span-1 md:col-span-1 col-span-2 bg-neutral-100 dark:bg-[#1B1E21] py-[20px] px-[20px] border-solid border-b-[1px] border-neutral-300 font-semibold">
                      {row.namaTabel}
                    </div>
                    <div
                      className={`flex items-center col-span-3 py-[20px] px-[20px] border-solid border-b-[1px] border-neutral-300 font-medium ${
                        row.namaTabel === 'Pengiriman Tugas' &&
                        'text-primary-500 flex-col gap-y-2'
                      }
                  ${
                    row.response === 'Belum Mengumpulkan'
                      ? lateState()
                      : row.response === 'Sudah Dikumpulkan' && 'bg-success-200'
                  }
                  ${
                    row.response === 'Telah Melewati Batas Waktu' &&
                    'text-warning-base'
                  }`}
                    >
                      {row.namaTabel === 'Pengiriman Tugas' ? (
                        row.response instanceof Array &&
                        row.response.length > 0 ? (
                          <div className="flex w-full justify-between">
                            <div className="flex flex-col gap-2">
                              {row.response instanceof Array &&
                                row.response.map((link, index) => (
                                  <div
                                    className="flex items-center gap-2"
                                    key={index}
                                  >
                                    {isEdit && (
                                      <MdOutlineRemoveCircle
                                        className={`text-lg ${
                                          !isLoadingDeleteFile
                                            ? 'text-warning-base cursor-pointer'
                                            : 'text-neutral-300 cursor-not-allowed'
                                        }`}
                                        onClick={() => {
                                          !isLoadingDeleteFile &&
                                            onRemoveFileHandler(link[2]);
                                        }}
                                      />
                                    )}
                                    <Link
                                      href={link[0]}
                                      target="_blank"
                                      key={index}
                                      className="block w-full hover:underline"
                                    >
                                      {link[1]}
                                    </Link>
                                  </div>
                                ))}
                            </div>
                            <div className="w-max">
                              <p
                                className="text-blue-base cursor-pointer hover:underline"
                                onClick={() => setIsEdit(!isEdit)}
                              >
                                {isEdit ? 'Batal' : 'Edit'}
                              </p>
                            </div>
                          </div>
                        ) : (
                          ''
                        )
                      ) : (
                        row.response
                      )}
                    </div>
                  </Fragment>
                );
              })}
            </div>
          </div>

          <div className="mt-8">
            <AssignmentDetails
              getMyStudyAssignmentItem={getMyStudyAssignmentItem}
              setIsEdit={setIsEdit}
              isEdit={isEdit}
              renderFileList={renderFileList}
            />

            <form onSubmit={onSubmitHandler}>
              <div className="border-2 border-neutral-300 w-full rounded-lg mt-[36px]">
                <TextField
                  variant="md"
                  control={control}
                  className="w-full h-[100px] p-4 rounded-t-lg border-none focus:outline-none focus:ring-0"
                  type="text"
                  isTextArea
                  name="text_answer"
                  placeholder={'Masukan jawaban... '}
                  required
                />
                <UploadDragbleField
                  control={control}
                  name="files"
                  className="-mt-4 rounded-t-none !border-x-0 !border-b-0 !border-t-2 border-dashed border-neutral-300"
                  variant={'sm'}
                  multiple
                />
              </div>
              {errors.files?.message && (
                <p className="text-[14px] text-red-500 mt-[8px] pt-2">
                  *{String(errors.files?.message)}
                </p>
              )}
              {errors.text_answer?.message && (
                <p className="text-[14px] text-red-500 mt-[8px] pt-2">
                  *{String(errors.text_answer?.message)}
                </p>
              )}
              <p className="text-neutral-base text-[14px] font-medium my-[24px]">
                <span className="font-semibold">Note</span> : Pastikan berkas
                sudah sesuai dengan ketentuan
              </p>
              <Button
                type={'submit'}
                // className={`mx-auto py-6 lg:py-0 w-full h-[27px] md:w-[160px] md:h-[48px] text-[16px] font-medium text-white flex gap-x-2 rounded justify-center items-center hover:opacity-50 ${
                //   isLoading
                //     ? 'bg-neutral-300 cursor-not-allowed'
                //     : 'bg-primary-500 cursor-pointer'
                // }`}
                className={`mx-auto py-6 lg:py-0 w-full h-[27px] md:w-[160px] md:h-[48px] text-[16px] font-medium text-white flex gap-x-2 rounded justify-center items-center transition-all hover:opacity-80 ${
                  isLoading
                    ? 'bg-neutral-300 cursor-not-allowed'
                    : 'bg-sky-base cursor-pointer'
                }`}
                disabled={isLoading}
                loading={isLoading && <LoadingButton />}
              >
                {isLoading ? 'Mengirim...' : 'Kirim Tugas'}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudyPlanAssigmentDetailModule;

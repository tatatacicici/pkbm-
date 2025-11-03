'use client';
import { PopupModal } from '@kampus-gratis/components/molecules';
import { useQueryClient } from '@tanstack/react-query';
import { FC, ReactElement, useRef, useState } from 'react';
import { toast } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
import {
  useConfirmModul,
  usePopupConfirmModul,
  useSubmitModuleResumeById,
} from '../../../../../hooks/mystudy/module/hook';
import { TModuleResumePayload } from '../../../../../types/module-content';
import { ModuleButton } from '../../components/button';

export const ModulePopup: FC<{ moduleId: string }> = ({
  moduleId,
}): ReactElement => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const queryClient = useQueryClient();
  const { setPopupStatus, getPopupStatus } = usePopupConfirmModul();
  const { setConfirmModul } = useConfirmModul();
  const { mutate } = useSubmitModuleResumeById();
  const [isTextValid, setTextValid] = useState<boolean>(false);

  function onSendHandler() {
    const payload: TModuleResumePayload = {
      id: moduleId,
      req: { module_answer: textareaRef.current?.value as string },
    };

    mutate(payload, {
      onSuccess: () => {
        toast.success('Selamat! Kamu Berhasil Menyelesaikan Modul');
        queryClient.invalidateQueries(['module-content-get']);
        setPopupStatus(false);
      },
      onError: (error) => {
        toast.error(
          error?.response?.data?.message || 'Gagal mengirimkan jawaban'
        );
      },
    });
  }

  function handleTextareaChange() {
    const textLength = textareaRef.current?.value.length || 0;
    setTextValid(textLength >= 52);
  }

  return (
    <PopupModal
      onClose={() => setPopupStatus(false)}
      lookup={getPopupStatus}
      className="!h-max !w-[100%] text-md !py-0"
    >
      <h1 className="flex p-4 rounded-md bg-primary-base text-white w-full font-semibold">
        Apa pelajaran yang kamu dapat dari modul ini?
      </h1>
      <p className="text-neutral-600 text-sm my-3 text-start">
        Buatlah rangkuman pemahaman anda dari modul yang telah dipelajari.
      </p>
      <div className="shadow flex justify-start p-2 w-full my-3">
        <textarea
          ref={textareaRef}
          className={`w-full h-auto p-2 rounded-md outline-none min-h-[100px] border ${
            isTextValid ? 'border-neutral-600' : 'border-red-500'
          }`}
          placeholder="Tulis materi yang kamu dapat"
          onChange={handleTextareaChange}
        />
      </div>
      <p
        className={`text-sm font-semibold ${
          isTextValid ? 'text-success-600' : 'text-red-500'
        } text-end mb-5`}
      >
        {isTextValid
          ? 'Silahkan menulis lebih banyak lagi, walaupun yang ada sudah cukup!'
          : 'Silahkan menulis lebih banyak lagi, karna teks kurang dari 52 karakter!'}
      </p>
      <p className="text-neural-600 text-sm text-start">
        Materi kamu akan ditinjau oleh guru atau pengajar kamu. Pastikan kamu
        mengisi dengan sesuai!
      </p>
      <div className="py-4 flex w-full justify-end items-end">
        {isTextValid ? (
          <ModuleButton
            onClick={onSendHandler}
            text="Kirim"
            color="blue"
            size="base"
          />
        ) : (
          <ModuleButton text="Kirim" color="gray" size="base" disabled />
        )}
      </div>
    </PopupModal>
  );
};

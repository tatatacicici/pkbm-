'use client';
import { z } from 'zod';
import { validationArticle } from '../../../config/validation/article';
import { FC, ReactElement } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Checklist from '../../../public/assets/ic-checklist.svg';
import { PopupModal } from '../../../components/popup';
import {
  Button,
  SelectField,
  TextField,
  UploadField,
} from '@kampus-gratis/components/atoms';
import { useRouter } from 'next/navigation';

// import FroalaEditor from 'react-froala-wysiwyg';
import {
  useCreateArticle,
  usePopUpSuccesAddArticle,
} from '../../../hooks/article/addarticle/hooks';
import { useQueryClient } from '@tanstack/react-query';
import InputBadge from '../../../components/badge';
import { useCategories } from '../../../hooks/article/categories/hook';
import dynamic from 'next/dynamic';
import { toast } from 'react-toastify';

import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

const FroalaEditorComponent = dynamic(() => import('react-froala-wysiwyg'), {
  ssr: false,
});

type NameCategories = {
  id: string;
  name: string;
};

export const AddArticleModule: FC = (): ReactElement => {
  const { getSuccesStatus, setSuccesStatus } = usePopUpSuccesAddArticle();
  const { mutate, isLoading } = useCreateArticle();
  const queryClient = useQueryClient();
  type ValidationSchema = z.infer<typeof validationArticle>;
  const { data } = useCategories();
  const getNameCategories =
    data?.data &&
    data?.data.map((item: NameCategories) => {
      return {
        value: item.id,
        label: item.name,
      };
    });

  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
    reset,
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationArticle),
    mode: 'all',
    defaultValues: {
      thumbnail: undefined,
      title: '',
      tags: '',
      category_id: '',
      content: '',
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('content', data.content.toString());
    formData.append('category_id', data.category_id);
    formData.append('tags', data.tags.toLowerCase());
    formData.append('thumbnail', data.thumbnail[0]);
    try {
      mutate(formData, {
        onSuccess: () => {
          console.log(formData);
          queryClient.invalidateQueries(['Create-Article']);
          setSuccesStatus(true);
          toast.success('Berhasil Mengunggah');
          reset();
        },
      });
    } catch (err) {
      console.log('Gagal Mengunggah');
    }
  });

  const handleCancelAddArticle = () => {
    router.back();
  };

  return (
    <>
      <div className="flex justify-center place-items-center py-5">
        <div className="bg-white w-full h-full shadow-lg px-3 py-3">
          <div className="px-2 py-2">
            <form onSubmit={onSubmit}>
              <TextField
                name={'title'}
                control={control}
                label={'Judul Artikel'}
                type={'text'}
                variant="md"
                required
                placeholder={'Masukan judul artikel'}
                className="outline outline-none focus:outline-none !border-2 !border-grey-200"
                message={errors.title?.message?.toString()}
                status={errors.title ? 'error' : 'none'}
              />
              <div className="grid grid-cols-2 gap-5">
                <InputBadge
                  label="Tags"
                  control={control}
                  name={'tags'}
                  required
                  placeholder="ex: #tags"
                  status={errors.tags ? 'error' : 'none'}
                  message={errors.tags?.message?.toString()}
                />
                <SelectField
                  variant="md"
                  control={control}
                  options={getNameCategories}
                  name={'category_id'}
                  label={'Kategori'}
                  required
                  placeholder="Pilih Kategori"
                  styletext="!text-black text-[10px]"
                  error={errors.category_id?.message}
                />
              </div>
              <UploadField
                variant="md"
                control={control}
                required
                name={'thumbnail'}
                accepted=".png, .jpg, .jpeg,"
                label={'Blog Image'}
                message={errors.thumbnail?.message?.toString()}
                status={errors.thumbnail ? 'error' : 'none'}
              />
              <p className="font-bold">
                Desription <span className="text-warning-700">*</span>
              </p>
              <Controller
                name={'content'}
                control={control}
                render={({ field }) => {
                  return (
                    <textarea
                      {...field}
                      className="outline-none border-1 border-solid border-black shadow-md focus:outline-none w-full text-[#000] text-sm h-44"
                    />
                    // <FroalaEditorComponent
                    //   tag="textarea"
                    //   model={field.value}
                    //   onModelChange={field.onChange}
                    //   config={{
                    //     placeholderText: 'Masukkan isi artikel',
                    //     charCounterCount: false,
                    //     heightMin: 200,
                    //   }}
                    // />
                  );
                }}
              />

              {errors?.content && (
                <p className="text-error-500">{errors?.content?.message}</p>
              )}

              <div className="flex flex-row gap-5 place-items-center justify-end m-4">
                <Button
                  type="button"
                  className="border rounded-md text-primary-600 px-5 py-2 font-semibold"
                  onClick={handleCancelAddArticle}
                >
                  Batal
                </Button>
                <Button
                  type="submit"
                  className="bg-primary-600 text-white px-5 py-2 font-semibold rounded-md"
                  onClick={onSubmit}
                  disabled={!isValid}
                >
                  <h1>{isLoading ? 'Sedang Mengunggah' : 'Unggah'}</h1>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <PopupModal
        icon={Checklist}
        lookup={getSuccesStatus}
        image={Checklist as string}
        popupTitle={'Sukes Menambah Artikel'}
        className={''}
      >
        <div className="flex items-center justify-center w-full gap-10">
          <Button
            type="button"
            className={
              'text-white hover:bg-primary-600 transition-colors ease-in-out duration-300 py-3 w-72 bg-primary-500 font-bold border-2 border-primary-500 rounded-md'
            }
            onClick={() => {
              setSuccesStatus(false);
            }}
          >
            Tutup
          </Button>
        </div>
      </PopupModal>
    </>
  );
};

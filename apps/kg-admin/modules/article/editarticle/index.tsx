'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { validationEditArticle } from '../../../config/validation/article';
import { FC, Fragment, ReactElement, useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';
import 'froala-editor/js/froala_editor.pkgd.min.js';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import { PopupModal } from '../../../components/popup';
import Checklist from '../../../public/assets/ic-checklist.svg';
import {
  Button,
  SelectField,
  TextField,
  UploadField,
} from '@kampus-gratis/components/atoms';
import dynamic from 'next/dynamic';
// import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView';

const FroalaEditor = dynamic(() => import('react-froala-wysiwyg'), {
  ssr: false,
});
import {
  useEditArticle,
  useGetArticleBySlug,
  usePopUpEditArticle,
} from '../../../hooks/article/editarticle/hooks';
import { useParams, useRouter } from 'next/navigation';
import 'froala-editor/js/froala_editor.pkgd.min.js';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import { useCategories } from '../../../hooks/article/categories/hook';
import InputBadge from '../../../components/badge';
import Image from 'next/image';
import { TEditArticlePayload } from '../../../hooks/article/editarticle/type';
import { toast } from 'react-toastify';

export const EditArticleModule: FC = (): ReactElement => {
  type TCategories = {
    id: string;
    name: string;
  };
  type ValidationSchema = z.infer<typeof validationEditArticle>;
  const { data: categories } = useCategories();
  const getNameCategories =
    categories?.data &&
    categories?.data.map((item: TCategories) => {
      return {
        value: item.id,
        label: item.name,
      };
    });
  // console.log(getNameCategories);
  const { getEditStatus, setEditStatus } = usePopUpEditArticle();
  const [fullSize, setFullSize] = useState<boolean>(false);
  const [filePreview, setFilePreview] = useState<boolean>(true);
  const router = useRouter();
  const params = useParams();
  const { slug } = params;

  const { data, isLoading: LoadingArticle } = useGetArticleBySlug(slug);

  const useArticle = data?.data;
  // console.log(useArticle);
  const { mutate } = useEditArticle(useArticle ? useArticle?.id : '');

  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
    reset,
    watch,
    setValue,
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationEditArticle),
    mode: 'all',
    defaultValues: {
      title: '',
      tags: [],
      category_id: undefined,
      thumbnail: [],
      content: '',
    },
  });

  useEffect(() => {
    if (useArticle) {
      const defaultValues = {
        title: useArticle?.title ?? '',
        tags: useArticle?.tags ?? '',
        category_id: useArticle?.category ?? '',
        thumbnail: undefined,
        content: useArticle?.content || '',
      };
      reset(defaultValues);
    }
  }, [useArticle, reset]);

  const onSubmit = handleSubmit(async (data) => {
    console.log('submit');
    console.log(data);
    const formData = new FormData();
    formData.append('title', data.title);
    if (data.tags && data.tags.length > 0) {
      formData.append('tags', data.tags.join(','));
    }
    const category =
      (await getNameCategories.filter(
        (item: { value: string; label: string }) =>
          item.label === data.category_id
      ).length) > 0
        ? await getNameCategories.filter(
            (item: { value: string; label: string }) =>
              item.label === data.category_id
          )[0].value
        : await getNameCategories.filter(
            (item: { value: string; label: string }) =>
              item.value === data.category_id
          )[0].value;

    formData.append('category_id', category);
    if (data.thumbnail) {
      formData.append(`thumbnail`, data.thumbnail[0]);
    }
    // formData.append('category_id', data.category_id);

    formData.append('content', data.content);
    console.log(formData);
    try {
      await mutate(formData as unknown as TEditArticlePayload, {
        onSuccess: () => {
          reset(data);
          router.push('/sekilas-ilmu');
          // router.push(`/sekilas-ilmu/editarticle/${response.data?.slug}`);
          toast.success('Berhasil Mengubah Artikel');
        },
      });
    } catch (err) {
      console.log('Gagal Mengunggah');
    }
  });
  const handleCancelEditArticle = () => {
    router.back();
  };
  const handleFullSize = (e: any) => {
    e.preventDefault();
    setFullSize(!fullSize);
  };

  const handleRemoveFile = () => {
    setFilePreview(false);
  };

  console.log(watch('category_id'));

  const updateTags = (newTags: Array<string>) => {
    // Update the tags field in the form
    setValue('tags', newTags);
  };

  return LoadingArticle ? (
    <p>Loading...</p>
  ) : (
    <Fragment>
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
                className="outline outline-none focus:outline-none !border-2 !border-grey-200"
                message={errors.title?.message as string}
                status={errors.title ? 'error' : 'none'}
              />
              <div className="grid grid-cols-2 gap-5">
                <InputBadge
                  label="Tags"
                  control={control}
                  name={'tags'}
                  required
                  placeholder={'ex : #tags1'}
                  className="outline outline-none focus:outline-none !border-2 !border-grey-200"
                  status={errors.tags ? 'error' : 'none'}
                  message={errors.tags?.message?.toString()}
                  defaultValue={useArticle?.tags}
                  updateTags={updateTags}
                />
                <SelectField
                  variant="md"
                  control={control}
                  options={getNameCategories || []}
                  name={'category_id'}
                  label={'Kategori'}
                  required
                  styletext="!text-black text-[10px]"
                  className="z-20"
                  error={errors.category_id?.message}
                  defaultValue={useArticle?.category}
                />
              </div>

              {filePreview ? (
                <div className="relative pt-5">
                  <p className="absolute text-white top-7 left-1 bg-slate-500 px-2 py-1 rounded z-10">
                    Thumbnail
                  </p>
                  <button
                    onClick={handleFullSize}
                    className="absolute top-7 right-2 bg-red-500 px-2 py-1 rounded text-white z-10"
                  >
                    {!fullSize ? 'Lihat' : 'Tutup'}
                  </button>
                  <button
                    onClick={handleRemoveFile}
                    className="absolute top-7 right-20 bg-red-500 px-2 py-1 rounded text-white z-10"
                  >
                    Hapus
                  </button>
                  <div
                    className={`rounded-md w-full ${
                      fullSize ? `h-[100%]` : `h-[150px]`
                    } overflow-hidden rounded-lg shadow-md `}
                  >
                    <Image
                      src={useArticle ? useArticle?.thumbnail : ''}
                      alt="thumbnail"
                      width={0}
                      height={0}
                      className={`rounded-lg w-full  ${
                        fullSize ? `object-fill` : ``
                      }`}
                      sizes="100vw"
                      objectFit={'cover'}
                    />
                  </div>
                </div>
              ) : (
                <UploadField
                  // onChange={handleFIleChange}
                  variant="md"
                  control={control}
                  required
                  name={'thumbnail'}
                  accepted=".png, .jpg, .jpeg,"
                  label={'Blog Image'}
                  message={errors.thumbnail?.message?.toString()}
                  status={errors.thumbnail ? 'error' : 'none'}
                />
              )}

              <p className="font-bold mt-5">
                Description <span className="text-warning-700">*</span>
              </p>
              <Controller
                name={'content'}
                defaultValue={'test'}
                control={control}
                render={({ field }) => (
                  <textarea
                    {...field}
                    className="w-full h-44 outline-none border-1 border-solid shadow-md border-black focus:outline-none text-[#000] text-sm"
                  />
                  // <FroalaEditor
                  //   model={field?.value}
                  //   onModelChange={field.onChange}
                  //   config={{
                  //     placeholderText: 'Masukkan isi artikel',
                  //     charCounterCount: false,
                  //     heightMin: 200,
                  //   }}
                  // />
                )}
              />
              {errors?.content && <p>{errors?.content?.message}</p>}
              <div className="flex flex-row gap-5 place-items-center justify-end m-4">
                <Button
                  type="button"
                  className="border rounded-md text-primary-600 px-5 py-2 font-semibold"
                  onClick={handleCancelEditArticle}
                >
                  Batal
                </Button>
                <Button
                  type="submit"
                  className="bg-primary-600 text-white px-5 py-2 font-semibold rounded-md"
                  // onClick={onSubmit}
                  disabled={!isValid}
                >
                  Edit Article
                  {/* <h1>{isLoading ? 'Sedang Mengunggah' : 'Unggah'}</h1> */}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <PopupModal
        icon={Checklist}
        lookup={getEditStatus}
        image={Checklist as string}
        popupTitle={'Sukes Mengedit Artikel'}
        className={''}
      >
        <div className="flex items-center justify-center w-full gap-10">
          <Button
            type="button"
            className={
              'text-white hover:bg-primary-600 transition-colors ease-in-out duration-300 py-3 w-72 bg-primary-500 font-bold border-2 border-primary-500 rounded-md'
            }
            onClick={() => {
              setEditStatus(false);
            }}
          >
            Tutup
          </Button>
        </div>
      </PopupModal>
    </Fragment>
  );
};

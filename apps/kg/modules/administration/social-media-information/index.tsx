'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  useFileInformationStatus,
  useGetAllAdministration,
  useSocialMediaInformation,
  useSocialMediaInformationStatus,
} from '@kampus-gratis/apps/kg/hooks/administration/hook';
import {
  Button,
  SelectField,
  TextField,
} from '@kampus-gratis/components/atoms';
import { Accordion, LoadingButton } from '@kampus-gratis/components/molecules';
import { useQueryClient } from '@tanstack/react-query';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { FC, ReactElement, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { FaInfoCircle } from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css';
import { z } from 'zod';

// Error message keys
const ERROR_KEYS = {
  INSTAGRAM_FOLLOW_REQUIRED: 'INSTAGRAM_FOLLOW_REQUIRED',
  TIKTOK_FOLLOW_REQUIRED: 'TIKTOK_FOLLOW_REQUIRED',
  YOUTUBE_SUBSCRIBE_REQUIRED: 'YOUTUBE_SUBSCRIBE_REQUIRED',
  USERNAME_REQUIRED: 'USERNAME_REQUIRED',
} as const;

// Social media links
const SOCIAL_MEDIA = {
  INSTAGRAM: {
    url: 'https://www.instagram.com/kampus.gratis/',
    platform: 'Instagram',
  },
  TIKTOK: {
    url: 'https://www.tiktok.com/@kampusgratis.id',
    platform: 'TikTok',
  },
  YOUTUBE: {
    url: 'https://www.youtube.com/@KampusGratis1',
    platform: 'YouTube',
  },
} as const;

// Custom error message component
const ErrorMessage: FC<{ errorKey: string | undefined; platform?: string }> = ({
  errorKey,
  platform,
}) => {
  switch (errorKey) {
    case ERROR_KEYS.INSTAGRAM_FOLLOW_REQUIRED:
      return (
        <div className="flex items-center text-sm font-medium text-error-500">
          <span>Anda harus follow </span>
          <Link
            href={SOCIAL_MEDIA.INSTAGRAM.url}
            className="ml-1 text-blue-500 hover:underline flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram Paket-C Gratis
            <ExternalLink className="w-3 h-3 ml-1" />
          </Link>
        </div>
      );
    case ERROR_KEYS.TIKTOK_FOLLOW_REQUIRED:
      return (
        <div className="flex items-center text-sm font-medium text-error-500">
          <span>Anda harus follow </span>
          <Link
            href={SOCIAL_MEDIA.TIKTOK.url}
            className="ml-1 text-blue-500 hover:underline flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            TikTok Paket-C Gratis
            <ExternalLink className="w-3 h-3 ml-1" />
          </Link>
        </div>
      );
    case ERROR_KEYS.YOUTUBE_SUBSCRIBE_REQUIRED:
      return (
        <div className="flex items-center text-sm font-medium text-error-500">
          <span>Anda harus subscribe </span>
          <Link
            href={SOCIAL_MEDIA.YOUTUBE.url}
            className="ml-1 text-blue-500 hover:underline flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube Paket-C Gratis
            <ExternalLink className="w-3 h-3 ml-1" />
          </Link>
        </div>
      );
    case ERROR_KEYS.USERNAME_REQUIRED:
      return (
        <div className="text-error-500">
          {`Username ${platform} harus diisi`}
        </div>
      );
    default:
      return <div className="text-error-500">{errorKey}</div>;
  }
};

// Validation schema
const validationSchemaSocialMedia = z.object({
  instagram_followed: z.enum(['y'], {
    errorMap: () => ({ message: ERROR_KEYS.INSTAGRAM_FOLLOW_REQUIRED }),
  }),
  instagram_username: z.string().min(1, ERROR_KEYS.USERNAME_REQUIRED),
  tiktok_followed: z.enum(['y'], {
    errorMap: () => ({ message: ERROR_KEYS.TIKTOK_FOLLOW_REQUIRED }),
  }),
  tiktok_username: z.string().min(1, ERROR_KEYS.USERNAME_REQUIRED),
  youtube_subscribed: z.enum(['y'], {
    errorMap: () => ({ message: ERROR_KEYS.YOUTUBE_SUBSCRIBE_REQUIRED }),
  }),
  youtube_username: z.string().min(1, ERROR_KEYS.USERNAME_REQUIRED),
});

const optionsYesNo = [
  { label: 'Sudah', value: 'y' },
  { label: 'Belum', value: 'n' },
];

const VisitButton: FC<{
  username: string;
  baseUrl: string;
  Icon: any;
  platform: string;
}> = ({ username, baseUrl, Icon, platform }) => {
  if (!username) return null;

  return (
    <Link
      href={baseUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center transition-colors duration-200 font-medium text-blue-500 hover:text-blue-600"
    >
      <Icon className="w-4 h-4 mr-1" />
      {platform} Paket-C Gratis
      <ExternalLink className="w-3 h-3 ml-1" />
    </Link>
  );
};

export const SocialMediaInformation: FC = (): ReactElement => {
  type ValidationSchema = z.infer<typeof validationSchemaSocialMedia>;

  const queryClient = useQueryClient();
  const { getFileStatus } = useFileInformationStatus();
  const { setSocialMediaStatus } = useSocialMediaInformationStatus();
  const { mutate, isLoading } = useSocialMediaInformation();
  const { data: getAll } = useGetAllAdministration();

  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
    reset,
    watch,
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchemaSocialMedia),
    mode: 'all',
    defaultValues: {
      instagram_username: '',
      tiktok_username: '',
      youtube_username: '',
    },
  });

  // Watch form values for live updates
  const instagramUsername = watch('instagram_username');
  const tiktokUsername = watch('tiktok_username');
  const youtubeUsername = watch('youtube_username');

  const onSubmit = handleSubmit((data) => {
    try {
      const payload = {
        instagram: data.instagram_username,
        tiktok: data.tiktok_username,
        youtube: data.youtube_username,
      };

      mutate(payload, {
        onSuccess: () => {
          setSocialMediaStatus(true);
          queryClient.invalidateQueries(['get-all-administration']);
          toast.success('Berhasil Menyimpan Data');
        },
        onError: (error) => {
          toast.error(error.response?.data.message || 'Gagal Menyimpan Data');
        },
      });
    } catch (err) {
      setSocialMediaStatus(false);
    }
  });

  useEffect(() => {
    const socialMedia = getAll?.data?.social_media;
    if (socialMedia?.instagram && socialMedia?.tiktok && socialMedia?.youtube) {
      setSocialMediaStatus(true);
    }
  }, [getAll?.data?.social_media, setSocialMediaStatus]);

  useEffect(() => {
    if (getAll?.data?.social_media) {
      const socialMedia = getAll.data.social_media;
      reset({
        instagram_username: socialMedia.instagram || '',
        tiktok_username: socialMedia.tiktok || '',
        youtube_username: socialMedia.youtube || '',
      });
    }
  }, [getAll?.data?.social_media, reset]);

  return (
    <Accordion
      idAccordion={'social-media-information'}
      title="Informasi Media Sosial"
      disabled={!getFileStatus}
    >
      <form onSubmit={onSubmit}>
        <div className="cursor-text">
          <h2 className="text-2xl font-bold">Informasi Media Sosial</h2>
          <div className="p-4 bg-error-100 rounded-lg my-4 flex items-center gap-2 text-error-500">
            <FaInfoCircle size={18} />
            <p className="text-sm font-semibold">
              Data media sosial akan digunakan untuk keperluan verifikasi data,
              pastikan username yang anda masukkan benar.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[55px] gap-y-0">
          {/* Instagram Fields */}
          <div className="form-label mb-3">
            <SelectField
              control={control}
              label="Apakah anda sudah mem-follow Instagram Paket-C Gratis?"
              name="instagram_followed"
              placeholder="Pilih jawaban"
              options={optionsYesNo}
              variant={'md'}
              styletext="text-[10px]"
              error={
                errors.instagram_followed && (
                  <ErrorMessage errorKey={errors.instagram_followed.message} />
                )
              }
              required
            />
          </div>
          <div className="form-label mb-3">
            <TextField
              variant="md"
              control={control}
              className="outline outline-none focus:outline-none !border-2 !border-grey-200"
              type="text"
              label="Username Instagram"
              name="instagram_username"
              placeholder="Masukkan username Instagram"
              status={errors.instagram_username ? 'error' : 'none'}
              message={
                errors.instagram_username && (
                  <ErrorMessage
                    errorKey={errors.instagram_username.message}
                    platform="Instagram"
                  />
                )
              }
              required
            />
          </div>

          {/* TikTok Fields */}
          <div className="form-label mb-3">
            <SelectField
              control={control}
              label="Apakah anda sudah mem-follow TikTok Paket-C Gratis?"
              name="tiktok_followed"
              placeholder="Pilih jawaban"
              options={optionsYesNo}
              variant={'md'}
              styletext="text-[10px]"
              error={
                errors.tiktok_followed && (
                  <ErrorMessage errorKey={errors.tiktok_followed.message} />
                )
              }
              required
            />
          </div>
          <div className="form-label mb-3">
            <TextField
              variant="md"
              control={control}
              className="outline outline-none focus:outline-none !border-2 !border-grey-200"
              type="text"
              label="Username TikTok"
              name="tiktok_username"
              placeholder="Masukkan username TikTok"
              status={errors.tiktok_username ? 'error' : 'none'}
              message={
                errors.tiktok_username && (
                  <ErrorMessage
                    errorKey={errors.tiktok_username.message}
                    platform="TikTok"
                  />
                )
              }
              required
            />
          </div>

          {/* YouTube Fields */}
          <div className="form-label mb-3">
            <SelectField
              control={control}
              label="Apakah anda sudah mem-subscribe YouTube Paket-C Gratis?"
              name="youtube_subscribed"
              placeholder="Pilih jawaban"
              options={optionsYesNo}
              variant={'md'}
              styletext="text-[10px]"
              error={
                errors.youtube_subscribed && (
                  <ErrorMessage errorKey={errors.youtube_subscribed.message} />
                )
              }
              required
            />
          </div>
          <div className="form-label mb-3">
            <TextField
              variant="md"
              control={control}
              className="outline outline-none focus:outline-none !border-2 !border-grey-200"
              type="text"
              label="Username YouTube"
              name="youtube_username"
              placeholder="Masukkan username YouTube"
              status={errors.youtube_username ? 'error' : 'none'}
              message={
                errors.youtube_username && (
                  <ErrorMessage
                    errorKey={errors.youtube_username.message}
                    platform="YouTube"
                  />
                )
              }
              required
            />
          </div>
        </div>

        <div className="flex w-full mt-4 justify-end">
          <Button
            // className={`w-[211px] rounded-[8px] disabled:bg-grey-300 disabled:text-white bg-primary-500 text-white font-bold p-3 text-1xl
            // ${isLoading && 'cursor-not-allowed'}
            // `}
            className={`w-[211px] rounded-[8px] disabled:bg-grey-300 disabled:text-white bg-sky-base text-white font-bold p-3 text-1xl 
            ${isLoading && 'cursor-not-allowed'}
            `}
            disabled={!isValid}
            type={'submit'}
            loading={isLoading && <LoadingButton />}
          >
            Simpan Media Sosial
          </Button>
        </div>
      </form>
    </Accordion>
  );
};

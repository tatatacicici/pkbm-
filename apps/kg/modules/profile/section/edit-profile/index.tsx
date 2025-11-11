'use client';

import { useRecoilState } from 'recoil';
import {
  useProfile,
  useUpdateUserProfile,
} from '../../../../hooks/profile/hook';
import { editPhotoState } from '../../../../recoil/atoms/profile';
import { validationSchemaEditProfile } from '../../../../config/validation/profile';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, TextField } from '@kampus-gratis/components/atoms';
import Image from 'next/image';
import Avatar from 'react-avatar';
import { useState } from 'react';
import AvatarUploadTrigger from './AvatarUploadTrigger';
import { Dialog } from './Dialog';
import { useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { LoadingButton } from '@kampus-gratis/components/molecules';

type ValidationSchema = z.infer<typeof validationSchemaEditProfile>;

export const EditProfileSection = () => {
  const { data } = useProfile();
  const [file, setFile] = useState('');
  const [fileAvatar, setFileAvatar] = useState();
  const [open, setOpen] = useState(false);

  const queryClient = useQueryClient();

  const { mutate, isLoading } = useUpdateUserProfile();

  const [isEditPhoto, setEditPhoto] = useRecoilState(editPhotoState);

  const userData = data?.data?.user;

  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
    reset,
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchemaEditProfile),
    mode: 'all',
    defaultValues: {
      email: userData?.email,
      full_name: userData?.full_name,
      phone_number: userData?.phone_number,
    },
  });

  const onCancel = () => reset(userData);

  const onSubmit = handleSubmit(async (data) => {
    const { full_name, phone_number } = data;
    const editData = {
      full_name,
      phone_number,
    };

    await mutate(editData, {
      onSuccess: () => {
        toast.success('Berhasil Mengubah Data');

        queryClient.invalidateQueries(['get-user-me']);
      },
      onError: (error) => {
        toast.error(error?.response?.data?.message || 'Gagal Mengubah Data');
      },
    });

    // await refetch();
    // await onCancel();
  });

  return (
    <main className="bg-neutral-50 p-8 rounded-md shadow-sm">
      <header className="pb-4 mb-4 border-b-2 border-b-neutral-200">
        <h1 className="text-xl font-bold text-neutral-800">Ubah Profil</h1>
      </header>
      <div className="w-full">
        <section className="grid w-full py-16 place-items-center">
          <figure className="bg-neutral-200 h-[140px] w-[140px] rounded-full relative">
            {userData?.avatar !== null ? (
              <Image
                src={userData?.avatar || '/default-user.png'}
                width={140}
                height={140}
                alt="Profile"
                quality={100}
                style={{
                  width: '100%',
                  height: '140px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                }}
                className="min-w-[140px] min-h-[140px] rounded-full object-cover"
                priority
              />
            ) : (
              <Avatar
                name={userData?.full_name || 'a'}
                color="#F26800"
                className="min-w-[140px] min-h-[140px]"
                round
              />
            )}
            <section className="absolute bottom-0 right-2">
              <form action="">
                <AvatarUploadTrigger
                  onNewSelectedFile={(file) => {
                    setFile(file);
                    setOpen(true);
                  }}
                  setEditPhoto={setEditPhoto}
                  setFileAvatar={setFileAvatar}
                />
              </form>
            </section>
          </figure>
        </section>
        <form className="sm:grid sm:grid-cols-2 gap-x-4" onSubmit={onSubmit}>
          <div>
            <TextField
              control={control}
              placeholder={userData?.email}
              label="Email"
              type={'email'}
              name="email"
              variant={'md'}
              message={errors.email?.message}
              disabled
            />
          </div>

          {/* <div>
            <TextField
              control={control}
              placeholder={userData?.user_name}
              label="Username"
              type={'text'}
              name="user_name"
              variant={'md'}
              message={errors.user_name?.message}
              disabled
            />
          </div> */}

          <div>
            <TextField
              control={control}
              placeholder="Masukkan Nama Lengkap"
              label="Nama Lengkap"
              type={'text'}
              value={userData?.full_name}
              name="full_name"
              variant={'md'}
              status={errors.full_name ? 'error' : undefined}
              message={errors.full_name?.message}
            />
          </div>
          <div>
            <TextField
              control={control}
              placeholder="Masukkan Nomor Handphone"
              label="Nomor Handphone"
              type={'text'}
              value={userData?.phone_number}
              name="phone_number"
              status={errors.phone_number ? 'error' : undefined}
              variant={'md'}
              message={errors.phone_number?.message}
            />
          </div>

          <section className="flex justify-end w-full col-span-2 gap-2">
            {/* <Button
              type={'button'}
              onClick={onCancel}
              loading={isLoading ? 'Sedang Mereset' : undefined}
              className="text-white cursor-pointer font-semibold bg-warning-base rounded-lg py-2 min-w-[120px]"
            >
              Batalkan
            </Button> */}
            <Button
              type={'submit'}
              disabled={!isValid || isLoading}
              className={`text-white ${
                !isValid && 'bg-neutral-400 '
              } disabled:bg-neutral-400 cursor-pointer font-semibold bg-sky-base rounded-lg py-2 min-w-[120px]`}
              // onClick={() => {
              //   console.log('click me');
              // }}
            >
              {isLoading ? <LoadingButton /> : 'Simpan'}
            </Button>
          </section>
        </form>
      </div>
      <Dialog
        open={open}
        setOpen={setOpen}
        sourceImg={file}
        avatar={fileAvatar}
      />
    </main>
  );
};

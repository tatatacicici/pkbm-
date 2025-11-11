import React, { FC, ReactElement } from 'react';
import { TextField } from '../../../../../libs/components/atoms/src/inputs/text/index';
import { Button, SelectField } from '@kampus-gratis/components/atoms';
import { useForm } from 'react-hook-form';
import { validationAddUserByRole } from '../../../config/validation/user';
import { z } from 'zod';
import { useRouter } from 'next/navigation';
import { useQueryClient } from '@tanstack/react-query';
import { useAddUser } from '../../../hooks/user/addUser/hook';
import { useAllRole } from '../../../hooks/user/addUser/getRoleId/hook';
import { toast } from 'react-toastify';

const AddUser: FC = (): ReactElement => {
  const { data } = useAllRole();
  console.log(data?.data);
  type TNameRoles = {
    id: string | string[];
    name: string | string[];
  };
  const roleData =
    data?.data &&
    data?.data?.map((item: TNameRoles) => {
      return {
        value: item.id,
        label:
          item.name == 'ADMIN'
            ? 'Admin'
            : item.name == 'TEACHER'
            ? 'Dosen'
            : item.name == 'STUDENT'
            ? 'Mahasiswa'
            : item.name == 'PARTNER'
            ? 'Partner'
            : item.name == 'KG_MENTOR'
            ? 'Mentor'
            : item.name == 'EMPLOYEE'
            ? 'Karyawan'
            : item.name == 'GUEST'
            ? 'Guest'
            : item.name,
      };
    });

  type validationSchema = z.infer<typeof validationAddUserByRole>;
  const router = useRouter();
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useAddUser();

  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
    reset,
  } = useForm<validationSchema>({
    mode: 'all',
    defaultValues: {
      full_name: '',
      email: '',
      password: '',
      // password_confirmation: '',
      role_id: '',
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    try {
      mutate(data, {
        onSuccess: () => {
          console.log(data);

          queryClient.invalidateQueries(['create-user']);
          toast.success('Berhasil Menambah User');
          // setOptionOpen(false);
          reset();
          router.back();
          console.log('Sukses membuat user');
        },
      });
    } catch (err) {
      console.log('Gagal Mengunggah');
    }
  });

  const handleCancelAddUser = () => {
    router.back();
  };

  return (
    <>
      <div className="flex justify-center place-items-center py-5">
        <div className="bg-white w-full h-full shadow-lg">
          <form onSubmit={onSubmit}>
            <div className="py-4 px-4 space-y-3 w-full">
              <TextField
                variant="md"
                control={control}
                className="outline outline-none focus:outline-none !border-2 !border-grey-200"
                type="text"
                label={'Nama Lengkap'}
                name="full_name"
                placeholder={'Masukkan nama lengkap'}
                status={errors.full_name ? 'error' : undefined}
                message={errors.full_name?.message}
                required
              />
            </div>
            <div className="py-4 px-4 space-y-3 w-full">
              <TextField
                variant="md"
                control={control}
                className="outline outline-none focus:outline-none !border-2 !border-grey-200"
                type="email"
                label={'Email'}
                name="email"
                placeholder={'Masukkan Email'}
                status={errors.email ? 'error' : undefined}
                message={errors.email?.message}
                required
              />
            </div>
            <div className="grid grid-cols-2">
              <div className="py-4 px-4 space-y-3 w-full">
                <TextField
                  variant="md"
                  control={control}
                  className="outline outline-none focus:outline-none !border-2 !border-grey-200"
                  type="password"
                  label={'Password'}
                  name="password"
                  placeholder={'Masukkan Password'}
                  status={errors.password ? 'error' : undefined}
                  message={errors.password?.message}
                  required
                />
              </div>
              {/* <div className="py-4 px-4 space-y-3 w-full">
                <TextField
                  variant="md"
                  control={control}
                  className="outline outline-none focus:outline-none !border-2 !border-grey-200"
                  type="password"
                  label={'Password Confirmation'}
                  name="password_confirmation"
                  placeholder={'Masukkan Password'}
                  status={errors.password_confirmation ? 'error' : undefined}
                  message={errors.password_confirmation?.message}
                  required
                />
              </div> */}
              <div className="py-4 px-4 space-y-3 w-full">
                <SelectField
                  placeholder="Pilih Role"
                  control={control}
                  label="Role"
                  name="role_id"
                  required={true}
                  options={roleData as any}
                  variant={'md'}
                  error={errors.role_id?.message}
                  styletext="!text-black text-[10px]"
                />
              </div>
            </div>
            <div className="py-4 px-4 space-y-3 w-full"></div>
            <div className="flex flex-row justify-end place-items-center pr-[50px] pb-[50px]  gap-8">
              <Button
                type="button"
                className="border-2 text-primary-500 px-7 py-3 rounded hover:text-primary-600"
                onClick={handleCancelAddUser}
              >
                Batal
              </Button>
              <Button
                type="submit"
                className="px-10 py-3 rounded bg-primary-500 text-[#ffff] hover:bg-primary-600"
                onClick={onSubmit}
                disabled={!isValid}
              >
                {isLoading ? 'Sedang Menambahkan...' : <h1>Tambah Pengguna</h1>}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddUser;

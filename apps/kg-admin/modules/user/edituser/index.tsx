import { useParams, useRouter } from 'next/navigation';
import { validationEditUserByRole } from '../../../config/validation/user';
import { FC, ReactElement, useEffect } from 'react';
import { z } from 'zod';
import { useQueryClient } from '@tanstack/react-query';
import { useEditUser } from '../../../hooks/user/editUser/hook';
import { useForm } from 'react-hook-form';
import {
  Button,
  LoadingSpinner,
  SelectField,
  TextField,
} from '@kampus-gratis/components/atoms';
import { useAllRole } from '../../../hooks/user/addUser/getRoleId/hook';
import { useGetUserById } from '../../../hooks/user/getUserById/hook';
import { toast } from 'react-toastify';

export const EditUser: FC = (): ReactElement => {
  const params = useParams();
  console.log(params);
  const { id } = params;
  const { data: useUserId } = useGetUserById(id);
  console.log(useUserId);

  const { data } = useAllRole();
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
  const router = useRouter();
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useEditUser(id);
  type validationSchema = z.infer<typeof validationEditUserByRole>;

  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
    reset,
  } = useForm<validationSchema>({
    mode: 'all',
    defaultValues: {
      full_name: '',
      role_id: '',
    },
  });
  useEffect(() => {
    if (useUserId) {
      const defaultValues = {
        full_name: useUserId?.data?.full_name ?? '',
        role_id: useUserId?.data?.role_id ?? '',
      };
      reset(defaultValues);
    }
  }, [useUserId, reset]);
  const onSubmit = handleSubmit((data) => {
    try {
      mutate(data, {
        onSuccess: () => {
          queryClient.invalidateQueries(['put-one-user']);
          toast.success('Berhasil Mengedit User');
          router.back();
        },
      });
    } catch (error) {
      console.log('gagal mengedit');
    }
  });
  const handleCancelEditUser = () => {
    router.back();
  };

  return (
    <>
      <div className="flex justify-center place-items-center py-5">
        <div className="bg-white w-full h-full shadow-lg">
          <div className="py-3 px-4">
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
                <div>
                  <p className="font-semibold">
                    Nama lengkap <span className="text-warning-500">*</span>
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-full py-2 px-2 border-2 rounded"
                    value={useUserId?.data?.email}
                    disabled
                  />
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="py-4 px-4 space-y-3 w-full">
                  <SelectField
                    placeholder="Pilih role"
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
                  onClick={handleCancelEditUser}
                >
                  Batal
                </Button>
                <Button
                  type="submit"
                  className="px-10 py-3 rounded bg-primary-500 text-[#ffff] hover:bg-primary-600"
                  disabled={!isValid}
                >
                  {isLoading ? <LoadingSpinner /> : <h1>Edit User</h1>}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

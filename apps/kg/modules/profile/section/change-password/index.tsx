import { z } from 'zod';
import { useUpdatePassword } from '../../../../hooks/profile/hook';
import { FC } from 'react';
import { validationSchemaChangePassword } from '../../../../config/validation/profile';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, TextField } from '@kampus-gratis/components/atoms';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ChangePasswordSection: FC = () => {
  const { mutate, isLoading } = useUpdatePassword();

  type ValidationSchema = z.infer<typeof validationSchemaChangePassword>;

  const {
    control,
    handleSubmit,
    resetField,
    formState: { isValid, errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchemaChangePassword),
    mode: 'all',
    defaultValues: {
      old_password: '',
      new_password: '',
      new_password_confirmation: '',
    },
  });

  const onSubmit = handleSubmit((data) => {
    const { new_password, old_password } = data;
    if (new_password === old_password) {
      toast.error('Password Baru Tidak Boleh Sama', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'light',
        progress: undefined,
      });
      return;
    }
    try {
      mutate(data, {
        onSuccess: () => {
          resetField('old_password');
          resetField('new_password');
          resetField('new_password_confirmation');
          toast.success('Berhasil Mengubah Password', {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
        },
        onError: (error) => {
          toast.error(error && 'Kata Sandi Lama Salah', {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: 'light',
            progress: undefined,
          });
        },
      });
    } catch (err) {
      // throw handleError(err);
    }
  });

  return (
    <main className="bg-white p-8 rounded-md shadow-sm">
      <header className="pb-4 mb-8 border-b-2 border-b-neutral-200">
        <h1 className="text-xl font-bold text-neutral-800">Ubah Password</h1>
      </header>
      <form onSubmit={onSubmit}>
        <TextField
          // labelClassName="!text-sm text-left"
          type="password"
          variant="md"
          control={control}
          name={'old_password'}
          placeholder="Masukan Password Lama"
          label="Password Lama"
          status={errors.old_password ? 'error' : 'none'}
          message={errors.old_password?.message}
          className="!h-[40px] text-sm !rounded-[8px] !border-2 !border-[#D4D4D4] mb-2 "
        />
        <span className="block w-full h-2 mb-6 border-b-2 border-b-neutral-100"></span>
        <TextField
          // labelClassName="!text-sm text-left"
          type="password"
          variant="md"
          control={control}
          name={'new_password'}
          placeholder="Masukan Password Baru"
          label="Password Baru"
          status={errors.new_password ? 'error' : 'none'}
          message={errors.new_password?.message}
          className="!h-[40px] text-sm !rounded-[8px] !border-2 !border-[#D4D4D4] mb-2"
        />
        <TextField
          // labelClassName="!text-sm text-left"
          type="password"
          variant="md"
          control={control}
          name={'new_password_confirmation'}
          placeholder="Konfirmasi Password Baru"
          label="Konfirmasi Password"
          status={errors.new_password_confirmation ? 'error' : 'none'}
          message={errors.new_password_confirmation?.message}
          className="!h-[40px] text-sm !rounded-[8px] !border-2 !border-[#D4D4D4] mb-4"
        />
        <section className="flex justify-end w-full col-span-2">
          <Button
            disabled={!isValid}
            type="submit"
            className="relative z-10 flex items-center justify-center gap-2 py-2 text-sm font-bold transition-colors duration-300 ease-in-out rounded-md disabled:bg-neutral-300 disabled:border-none bg-sky-base text-neutral-100 hover:border-version2-300 w-36"
          >
            {isLoading ? 'Loading' : 'Reset Password'}
          </Button>
          <ToastContainer />
        </section>
      </form>
    </main>
  );
};

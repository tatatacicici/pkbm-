import { z } from 'zod';

export const validationSchemaEditProfile = z.object({
  full_name: z.string().min(1, { message: 'Nama lengkap harus diisi' }),
  phone_number: z
    .string()
    .min(1, { message: 'Nomor handphone harus diisi' })
    .refine((value) => /^\d+$/.test(value), {
      message: 'Nomor handphone harus berisi angka saja',
    }),
  email: z.string().optional(),
});

export const validationSchemaUpdatePhoto = z.object({
  avatar: z.any(),
});

export const validationSchemaChangePassword = z
  .object({
    old_password: z.string().min(1, { message: 'Password harus diisi' }),
    new_password: z
      .string({
        invalid_type_error: 'Password harus diisi',
      })
      .min(8, { message: 'Password minimal 8 karakter' })
      .refine((data) => data.match(/[A-Z]/g), {
        message: 'Password harus mengandung huruf besar',
      })
      .refine((data) => data.match(/[0-9]/g), {
        message: 'Password harus mengandung angka',
      }),
    new_password_confirmation: z
      .string()
      .min(1, { message: 'Konfirmasi kata sandi harus disisi' }),
  })
  .refine((data) => data.new_password === data.new_password_confirmation, {
    message: 'Konfirmasi password tidak sama dengan password baru',
    path: ['new_password_confirmation'],
  });

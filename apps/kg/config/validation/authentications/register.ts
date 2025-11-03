import { z } from 'zod';

export const validationSchemaRegister = z
  .object({
    email: z.string().min(1, { message: 'Email harus diisi' }).email({
      message: 'Email harus valid',
    }),
    full_name: z.string({
      invalid_type_error: 'Nama Lengkap harus diisi',
    }).min(2, { message: 'Nama Lengkap harus valid' }),
    password: z
      .string(
        {
          invalid_type_error: 'Password harus diisi',
        }
      )
      .min(8, { message: 'Password minimal 8 karakter' })
      .refine((data) => data.match(/[A-Z]/g), {
        message: 'Password harus mengandung huruf besar',
      })
      .refine((data) => data.match(/[0-9]/g), {
        message: 'Password harus mengandung angka',
      }),
    password_confirmation: z
      .string()
      .min(1, { message: 'Konfirmasi kata sandi harus diisi' }),
    term_and_condition: z.boolean().refine((data) => data, {
      message:
        'Anda harus menyetujui syarat dan ketentuan serta kebijakan privasi',
    }),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: 'Konfirmasi password tidak sama dengan password',
    path: ['password_confirmation'],
  });

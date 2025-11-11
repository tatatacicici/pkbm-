import { z } from 'zod';

export const validationSchemaResetPassword = z
  .object({
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
      .min(1, { message: 'Konfirmasi kata sandi harus disisi' }),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: 'Konfirmasi password tidak sama dengan password baru',
    path: ['password_confirmation'],
  });

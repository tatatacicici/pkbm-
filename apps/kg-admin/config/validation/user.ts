import { z } from 'zod';

export const validationAddUserByRole = z.object({
  full_name: z.string().min(1, { message: 'Nama Lengkap Harus Diisi' }),
  email: z.string().email().min(5, { message: 'Email Harus Diisi' }),
  password: z
    .string()
    .min(1, { message: 'Password harus diisi' })
    .min(7, { message: 'Password harus diisi' })
    .min(8, { message: 'Password setidaknya ada 8 karakter' })
    .refine((data) => data.match(/[A-Z]/g), {
      message: 'Password harus mengandung huruf besar',
    })
    .refine((data) => data.match(/[0-9]/g), {
      message: 'Password harus mengandung angka',
    }),
  // password_confirmation: z
  //   .string()
  //   .min(1, { message: 'Konfirmasi kata sandi harus diisi' }),
  role_id: z.string().min(1, { message: 'Role Harus Diisi' }),
});
// .refine((data) => data.password === data.password_confirmation, {
//   message: 'Konfirmasi kata sandi tidak valid',
//   path: ['password_confirmation'],
// });

export const validationEditUserByRole = z.object({
  full_name: z.string().min(1, { message: 'Nama Lengkap Harus Diisi' }),
  role_id: z.string().min(1, { message: 'Role Harus Diisi' }),
});

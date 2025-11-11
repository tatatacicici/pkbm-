import { z } from 'zod';

export const validationSchemaForgot = z.object({
  email: z.string().min(1, { message: 'Email harus diisi' }).email({
    message: 'Email harus valid',
  }),
});

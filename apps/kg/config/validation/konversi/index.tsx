import { z } from 'zod';

const MAX_FILE_SIZE = 2000000;
const ACCEPTED_FILE_TYPES = ['application/pdf'];

export const validationSchemaBerkasConvertion = z.object({
  transkrip_nilai: z
    .any()
    .refine(
      (files: File[]) => files !== undefined && files?.length >= 1,
      'Harus ada file yang di upload.'
    )
    .refine(
      (files: File[]) =>
        files !== undefined && files?.[0]?.size <= MAX_FILE_SIZE,
      'Ukuran maksimun adalah 2mb.'
    )
    .refine(
      (files: File[]) => ACCEPTED_FILE_TYPES.includes(files?.[0].type),
      'hanya menerima pdf'
    ),
  pengunduran_diri: z
    .any()
    .refine(
      (files: File[]) => files !== undefined && files?.length >= 1,
      'Harus ada file yang di upload.'
    )
    .refine(
      (files: File[]) =>
        files !== undefined && files?.[0]?.size <= MAX_FILE_SIZE,
      'Ukuran maksimun adalah 2mb.'
    )
    .refine(
      (files: File[]) => ACCEPTED_FILE_TYPES.includes(files?.[0].type),
      'hanya menerima pdf'
    ),
  pernyataan_lulus: z
    .any()
    .refine(
      (files: File[]) => files !== undefined && files?.length >= 1,
      'Harus ada file yang di upload.'
    )
    .refine(
      (files: File[]) =>
        files !== undefined && files?.[0]?.size <= MAX_FILE_SIZE,
      'Ukuran maksimun adalah 2mb.'
    )
    .refine(
      (files: File[]) => ACCEPTED_FILE_TYPES.includes(files?.[0].type),
      'hanya menerima pdf'
    ),
});

import { z } from 'zod';

const MAX_FILE_SIZE = 3000000;
const ACCEPTED_DOCUMENT_TYPES = ['image/jpeg', 'image/jpg', 'application/pdf'];
const ACCEPTED_PDF_TYPES = ['application/pdf'];

export const validationSubmitApplication = z.object({
  full_name: z.string().min(1, { message: 'Nama Lengkap Harus Diisi' }),
  noWhatsapp: z.number().min(1, { message: 'Nomor Whatsapp Harus Diisi' }),
  cv: z
    .any()
    .refine(
      (files: File[]) => files !== undefined && files?.length >= 1,
      'Harus ada file yang di upload.'
    )
    .refine(
      (files: File[]) =>
        files !== undefined && files?.[0]?.size <= MAX_FILE_SIZE,
      'Ukuran Maksimum adalah 3mb. '
    )
    .refine(
      (files: File[]) => ACCEPTED_PDF_TYPES.includes(files?.[0].type),
      'hanya menerima .pdf'
    ),
  portofolio: z
    .any()
    .refine(
      (files: File[]) => files !== undefined && files?.length >= 1,
      'Harus ada file yang di upload.'
    )
    .refine(
      (files: File[]) =>
        files !== undefined && files?.[0]?.size <= MAX_FILE_SIZE,
      'Ukuran Maksimum adalah 3mb. '
    )
    .refine(
      (files: File[]) => ACCEPTED_DOCUMENT_TYPES.includes(files?.[0].type),
      'hanya menerima .jpg, .jpeg, dan .webp.'
    ),
});

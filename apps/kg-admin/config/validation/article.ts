import { z } from 'zod';

const MAX_FILE_SIZE = 3000000;
const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/webp',
  'image/png',
];
export const validationArticle = z.object({
  title: z.string().min(1, { message: 'Judul Harus Diisi' }),
  tags: z.string().min(1, { message: 'Tag Harus Diisi' }),
  category_id: z.string().min(1, { message: 'Kategori Harus Dipilih' }),
  thumbnail: z
    .any()
    .refine((files: File[]) => files !== undefined && files?.length >= 1, {
      message: 'Harus ada file yang di upload.',
    })
    .refine(
      (files: File[]) =>
        files !== undefined && files?.[0]?.size <= MAX_FILE_SIZE,
      { message: 'Ukuran maksimun adalah 3mb.' }
    )
    .refine(
      (files: File[]) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      {
        message: 'hanya menerima .png, .jpg, .jpeg, dan .webp.',
      }
    ),
  content: z
    .string()
    .min(20, { message: 'Isi Artikel Harus Lebih Dari 20 Karakter' }),
});
export const validationEditArticle = z.object({
  title: z.string().min(1, { message: 'Judul Harus Diisi' }),
  // tags: z.string().min(1, { message: 'Tag Harus Diisi' }),
  tags: z.array(z.string()).optional(),
  category_id: z.string().min(1, { message: 'Kategori Harus Dipilih' }),
  thumbnail: z
    .any()
    .refine((files: File[]) => files !== undefined && files?.length >= 1, {
      message: 'Harus ada file yang di upload.',
    })
    .refine(
      (files: File[]) =>
        files !== undefined && files?.[0]?.size <= MAX_FILE_SIZE,
      { message: 'Ukuran maksimun adalah 3mb.' }
    )
    .refine(
      (files: File[]) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      {
        message: 'hanya menerima .png, .jpg, .jpeg, dan .webp.',
      }
    )
    .optional(),
  content: z
    .string()
    .min(20, { message: 'Isi Artikel Harus Lebih Dari 20 Karakter' }),
});

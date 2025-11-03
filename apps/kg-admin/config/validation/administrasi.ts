import { z } from 'zod';

export const validationSchemaPrivateInformation = z.object({
  full_name: z.string().min(1, { message: 'Nama lengkap harus diisi' }),
  gender: z.string().min(1, { message: 'Jenis kelamin harus diisi' }),
  phone_number: z.string().max(13).min(11, {
    message: 'Nomor handphone harus diisi',
  }),
  birthdate: z.string().min(1, { message: 'Tanggal lahir harus diisi' }),
  birthplace: z.string().min(1, { message: 'Tempat lahir harus diisi' }),
  address: z.string().min(1, { message: ' Alamat harus diisi' }),
  last_education: z
    .string()
    .min(1, { message: ' Pendidikan terakhir harus diisi' }),
  nim: z.string().optional(),
  university: z.string().optional(),
  major: z.string().optional(),
  semester: z.number().optional(),

  // tambahan
  school_name_sd: z.string().optional(),
  entry_year_sd: z.number().optional(),
  graduation_year_sd: z.number().optional(),
  diploma_sd: z.number().optional(),
  school_name_smp: z.string().optional(),
  entry_year_smp: z.number().optional(),
  graduation_year_smp: z.number().optional(),
  diploma_smp: z.number().optional(),
  school_name_sma: z.string().optional(),
  entry_year_sma: z.number().optional(),
  report_card_sma: z.number().optional(),
});

export const validationSchemaJobsInformation = z.object({
  father_name: z.string().min(1, { message: 'Nama ayah harus diisi' }),
  father_occupation: z
    .string()
    .min(1, { message: 'Pekerjaan ayah harus diisi' }),
  father_salary: z.string().min(1, { message: 'Penghasilan ayah harus diisi' }),
  mother_name: z.string().min(1, { message: 'Nama ibu harus diisi' }),
  mother_occupation: z
    .string()
    .min(1, { message: 'Pekerjaan ibu harus diisi' }),
  mother_salary: z.string().min(1, { message: 'Penghasilan ibu harus diisi' }),
  self_salary: z
    .string()
    .min(1, { message: 'Penghasilan sendiri harus diisi' }),
  live_with: z.string().min(1, { message: 'Tinggal dengan harus diisi' }),
  tuition_payer: z.string().min(1, { message: 'Biaya kuliah harus diisi' }),
  self_occupation: z
    .string()
    .min(1, { message: 'Pekerjaan sendiri harus diisi' }),
});

const MAX_FILE_SIZE = 3000000;
const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/webp',
  'application/pdf',
];
const ACCEPTED_PDF_TYPES = ['application/pdf'];

export const validationSchemaFileInformation = z.object({
  // id_card: z
  //   .any()
  //   .refine(
  //     (files: File[]) => files !== undefined && files?.length >= 1,
  //     'Harus ada file yang di upload.'
  //   )
  //   .refine(
  //     (files: File[]) =>
  //       files !== undefined && files?.[0]?.size <= MAX_FILE_SIZE,
  //     'Ukuran maksimun adalah 3mb.'
  //   )
  //   .refine(
  //     (files: File[]) => ACCEPTED_IMAGE_TYPES.includes(files?.[0].type),
  //     'hanya menerima .jpg, .jpeg, dan .webp.'
  //   ),

  // tambahan
  id_card_question: z.string().optional(),

  id_card: z
    .any()
    .refine((files: File[] | undefined) => {
      // Kalau tidak ada file, skip (dianggap valid karena optional)
      if (!files || files.length === 0) return true;
      // Kalau ada file, validasi ukurannya
      return files[0].size <= MAX_FILE_SIZE;
    }, 'Ukuran maksimum adalah 3MB.')
    .refine((files: File[] | undefined) => {
      if (!files || files.length === 0) return true;
      return ACCEPTED_IMAGE_TYPES.includes(files[0].type);
    }, 'Hanya menerima .jpg, .jpeg, dan .webp.'),

  diploma_certificate: z
    .any()
    .refine(
      (files: File[]) => files !== undefined && files?.length >= 1,
      'Harus ada file yang di upload.'
    )
    .refine(
      (files: File[]) =>
        files !== undefined && files?.[0]?.size <= MAX_FILE_SIZE,
      'Ukuran maksimun adalah 3mb.'
    )
    .refine(
      (files: File[]) => ACCEPTED_PDF_TYPES.includes(files?.[0].type),
      'hanya menerima .pdf'
    ),
  family_card: z
    .any()
    .refine(
      (files: File[]) => files !== undefined && files?.length >= 1,
      'Harus ada file yang di upload.'
    )
    .refine(
      (files: File[]) =>
        files !== undefined && files?.[0]?.size <= MAX_FILE_SIZE,
      'Ukuran maksimun adalah 3mb.'
    )
    .refine(
      (files: File[]) => ACCEPTED_IMAGE_TYPES.includes(files?.[0].type),
      'hanya menerima .jpg, .jpeg, dan .webp.'
    ),
  photo: z
    .any()
    .refine(
      (files: File[]) => files !== undefined && files?.length >= 1,
      'Harus ada file yang di upload.'
    )
    .refine(
      (files: File[]) =>
        files !== undefined && files?.[0]?.size <= MAX_FILE_SIZE,
      'Ukuran maksimun adalah 3mb.'
    )
    .refine(
      (files: File[]) => ACCEPTED_IMAGE_TYPES.includes(files?.[0].type),
      'hanya menerima .jpg, .jpeg, dan .webp.'
    ),
  transcript: z
    .any()
    .refine(
      (files: File[]) => files !== undefined && files?.length >= 1,
      'Harus ada file yang di upload.'
    )
    .refine(
      (files: File[]) =>
        files !== undefined && files?.[0]?.size <= MAX_FILE_SIZE,
      'Ukuran maksimun adalah 3mb.'
    )
    .refine(
      (files: File[]) => ACCEPTED_PDF_TYPES.includes(files?.[0].type),
      'hanya menerima .pdf'
    ),
  letter_of_recommendation: z
    .any()
    .refine(
      (files: File[]) => files !== undefined && files?.length >= 1,
      'Harus ada file yang di upload.'
    )
    .refine(
      (files: File[]) =>
        files !== undefined && files?.[0]?.size <= MAX_FILE_SIZE,
      'Ukuran maksimun adalah 3mb.'
    )
    .refine(
      (files: File[]) => ACCEPTED_PDF_TYPES.includes(files?.[0].type),
      'hanya menerima .pdf'
    ),
});

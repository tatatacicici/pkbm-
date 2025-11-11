import { z } from 'zod';

const MAX_FILE_SIZE = 3000000;
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png'];
// const ACCEPTED_PDF_TYPES = ['application/pdf'];

export const validationAddFaculty = z.object({
  faculty_name: z.string().min(1, { message: 'Nama Fakultas Harus Diisi' }),
  faculty_image: z
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
      'hanya menerima .jpg, .jpeg, dan .png.'
    )
    .optional(),
});

export const validationAddMajor = z.object({
  name: z.string().min(1, { message: 'Nama Program Studi Harus Diisi' }),
  degree: z.string().min(1, { message: 'Nama Tingkat Harus Diisi' }),
  description: z.string().min(1, { message: 'Deskripsi Harus Diisi' }),
  thumbnail: z
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
      (files: File[]) => ACCEPTED_IMAGE_TYPES.includes(files?.[0].type),
      'hanya menerima .jpg, .jpeg, dan .png.'
    )
    .optional(),
});

export const validationUpdateMajor = z.object({
  name: z.string().min(1, { message: 'Nama Program Studi Harus Diisi' }),
  // major_head_name: z.string().min(1, { message: 'Nama Kaprodi Harus Diisi' }),
  major_head_name: z.any(),
  major_head_id: z.any(),
  degree: z.string().min(1, { message: 'Nama Tingkat Harus Diisi' }),
  description: z.string().min(1, { message: 'Deskripsi Harus Diisi' }),
  thumbnail: z.any()
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
    'hanya menerima .jpg, .jpeg, dan .png.'
  ).optional()
});

export const validationAddSubject = z.object({
  name: z.string().min(1, { message: 'Nama Mata Kuliah Harus Diisi' }),
  subject_code: z.string().min(1, { message: 'Kode Mata Kuliah Harus Diisi' }),
  duration_hours: z.string().min(1, { message: 'Durasi Jam Harus Diisi' }),
  level: z.string().min(1, { message: 'Level Harus Diisi' }),
  indicator: z.string().min(1, { message: 'Indikator Harus Diisi' }),
  study_experience: z.string().min(1, { message: 'Pengalaman Belajar Harus Diisi' }),
  teaching_materials: z.string().min(1, { message: 'Materi Ajar Harus Diisi' }),
  basic_competencies: z.string().min(1, { message: 'Kompetensi Dasar Harus Diisi' }),
  tools_needed: z.string().min(1, { message: 'Alat Harus Diisi' }),
  description: z.string().min(1, { message: 'Deskripsi Harus Diisi' }),
  scoring: z.string().min(1, { message: 'Nilai Harus Diisi' }),
  teacher_name:z.string().min(1, { message: 'Nama Dosen Harus Diisi' }),
  thumbnail: z.any()
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
      'hanya menerima .jpg, .jpeg, dan .png.'
    ),
  credit: z.string().min(1, { message: 'Kredit Harus Diisi' }),
});


export const validationUpdateSubject = z.object({
  name: z.string().min(1, { message: 'Nama Mata Kuliah Harus Diisi' }),
  subject_code: z.string().min(1, { message: 'Nama Tingkat Harus Diisi' }),
  // duration_hours: z.any().refine(
  //   (duration_hours: number) => duration_hours >= 1,
  //   'Jumlah Waktu Tidak Boleh Kurang Dari 1'
  // ),
  // level: z.any().refine(
  //   (level: number) => level >= 1,
  //   'Jumlah Level Tidak Boleh Kurang Dari 1'
  // ),
  // indicator: z.string().min(1, { message: 'Indikator Harus Diisi' }),
  // study_experience: z.string().min(1, { message: 'Pengalaman Belajar Harus Diisi' }),
  // teaching_materials: z.string().min(1, { message: 'Materi Ajar Harus Diisi' }),
  // basic_competencies: z.string().min(1, { message: 'Kompetensi Dasar Harus Diisi' }),
  // tools_needed: z.string().min(1, { message: 'Alat Harus Diisi' }),
  // description: z.string().min(1, { message: 'Deskripsi Harus Diisi' }),
  // scoring: z.string().min(1, { message: 'Nilai Harus Diisi' }),
  teacher_id: z.any(),
  teacher_name:z.string().min(1, { message: 'Nama Dosen Harus Diisi' }),
  thumbnail: z.any()
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
      'hanya menerima .jpg, .jpeg, dan .png.'
    ).optional(),
  credit: z.any().refine(
    (credit: number) => credit >= 1,
    'Jumlah SKS Tidak Boleh Kurang Dari 1'
  ),
});

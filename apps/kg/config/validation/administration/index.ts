import { z } from 'zod';

export const validationSchemaBootcampInformation = z.object({
  full_name: z
    .string({
      invalid_type_error: 'Nama lengkap harus diisi',
    })
    .min(1, { message: 'Nama lengkap harus valid' }),
  identity_number: z
    .string({
      invalid_type_error: 'NIK harus diisi',
    })
    .length(16, {
      message: 'NIK harus 16 digit',
    }),
  gender: z.string().min(1, { message: 'Jenis kelamin harus valid' }),
  phone_number: z
    .string({
      invalid_type_error: 'Nomor handphone harus diisi',
    })
    .max(13, {
      message: 'Nomor handphone maksimal 13 digit',
    })
    .min(11, {
      message: 'Nomor handphone harus valid',
    }),
  birthdate: z.string().min(1, { message: 'Tanggal lahir harus valid' }),
  birthplace: z
    .string({
      invalid_type_error: 'Tempat lahir harus diisi',
    })
    .min(1, { message: 'Tempat lahir harus valid' }),
  address: z
    .string({
      invalid_type_error: 'Alamat harus diisi',
    })
    .min(1, { message: ' Alamat harus valid' }),
  last_education: z
    .string()
    .min(1, { message: ' Pendidikan terakhir harus valid' }),
  nim: z.any().optional(),
  university: z.any().optional(),
  major: z.any().optional(),
  semester: z.any().optional(),
  province_id: z.string().min(1, { message: 'Provinsi harus valid' }),
  regency_id: z.string().min(1, { message: 'Kota harus valid' }),
  district_id: z.string().min(1, { message: 'Kecamatan harus valid' }),
  village_id: z.string().min(1, { message: 'Kelurahan harus valid' }),
  postal_code: z
    .string({
      invalid_type_error: 'Kode pos harus diisi',
    })
    .length(5, {
      message: 'Kode pos harus 5 digit',
    }),
  current_occupation: z
    .string()
    .min(1, { message: 'Pekerjaan saat ini harus diisi' }),
});

export const validationSchemaPrivateInformation = z.object({
  full_name: z
    .string({
      invalid_type_error: 'Nama lengkap harus diisi',
    })
    .min(1, { message: 'Nama lengkap harus valid' }),
  identity_number: z
    .string({
      invalid_type_error: 'NIK harus diisi',
    })
    .length(16, {
      message: 'NIK harus 16 digit',
    }),
  gender: z.string().min(1, { message: 'Jenis kelamin harus valid' }),
  phone_number: z
    .string({
      invalid_type_error: 'Nomor handphone harus diisi',
    })
    .max(13, {
      message: 'Nomor handphone maksimal 13 digit',
    })
    .min(11, {
      message: 'Nomor handphone harus valid',
    }),
  birthdate: z.string().min(1, { message: 'Tanggal lahir harus valid' }),
  birthplace: z
    .string({
      invalid_type_error: 'Tempat lahir harus diisi',
    })
    .min(1, { message: 'Tempat lahir harus valid' }),
  address: z
    .string({
      invalid_type_error: 'Alamat harus diisi',
    })
    .min(1, { message: ' Alamat harus valid' }),
  last_education: z
    .string()
    .min(1, { message: ' Pendidikan terakhir harus valid' }),
  nim: z.any().optional(),
  university: z.any().optional(),
  major: z.any().optional(),
  semester: z.any().optional(),
  province_id: z.string().min(1, { message: 'Provinsi harus valid' }),
  regency_id: z.string().min(1, { message: 'Kota harus valid' }),
  district_id: z.string().min(1, { message: 'Kecamatan harus valid' }),
  village_id: z.string().min(1, { message: 'Kelurahan harus valid' }),
  postal_code: z
    .string({
      invalid_type_error: 'Kode pos harus diisi',
    })
    .length(5, {
      message: 'Kode pos harus 5 digit',
    }),

  // tambahan
  school_name_sd: z.any().optional(),
  entry_year_sd: z.any().optional(),
  graduation_year_sd: z.any().optional(),
  diploma_sd: z.any().optional(),
  school_name_smp: z.any().optional(),
  entry_year_smp: z.any().optional(),
  graduation_year_smp: z.any().optional(),
  diploma_smp: z.any().optional(),
  school_name_sma: z.any().optional(),
  entry_year_sma: z.any().optional(),
  report_card_sma: z.any().optional(),
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

export const validationSchemaFacultyInformation = z.object({
  program_id: z.string().min(1, { message: 'Program harus diisi' }),
  // faculty_id: z.string().min(1, { message: 'Fakultas harus diisi' }),
  // major_id: z.string().min(1, { message: 'Jurusan harus diisi' }),
});

const MAX_FILE_SIZE = 2000000;
const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'application/pdf',
];

export const validationSchemaFileInformation = z.object({
  id_card: createFileValidation(),
  diploma_certificate: createFileValidation(),
  family_card: createFileValidation(),
  photo: createFileValidation(),
  transcript: createFileValidation(),
  student_card: createFileValidation(),

  // tambahan
  id_card_question: z.any().optional(),
});

function createFileValidation() {
  return z
    .any()
    .optional()
    .nullable()
    .refine((files: any) => {
      if (
        Array.isArray(files) ||
        (files?.[0] && (files?.[0]?.size ?? 0) <= MAX_FILE_SIZE) ||
        files?.length === 0
      ) {
        return true;
      } else if (typeof files === 'string' || files === null) {
        return true;
      }
    }, 'Ukuran maksimum adalah 2mb.')
    .refine((files: any) => {
      if (
        Array.isArray(files) ||
        (files?.[0] && ACCEPTED_IMAGE_TYPES.includes(files[0].type)) ||
        files?.length === 0
      ) {
        return true;
      } else if (typeof files === 'string' || files === null) {
        return true;
      }
    }, 'Format file harus jpg, jpeg, png, atau pdf.');
}

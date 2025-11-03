import { useTeacherRegistration } from '@kampus-gratis/apps/kg/hooks/administration/hook';
import { LoadingButton } from '@kampus-gratis/components/molecules';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

export const EDUCATION_LEVEL_OPTIONS = [
  { key: 'HIGH_SCHOOL', value: 'SMA/SMK' },
  { key: 'DIPLOMA', value: 'Diploma' },
  { key: 'BACHELORS_DEGREE', value: 'Sarjana (S1)' },
  { key: 'MASTERS_DEGREE', value: 'Magister (S2)' },
  { key: 'DOCTORATE', value: 'Doktor (S3)' },
  { key: 'OTHER', value: 'Lainnya' },
];

export const CONTRIBUTION_OPTIONS = [
  { key: 'MENGAJAR', value: 'Mengajar (di videokan)' },
  { key: 'MENILAI', value: 'Menilai Tugas & Ujian' },
  {
    key: 'MEMBUAT_KONTEN',
    value: 'Membuat Materi PPT, Artikel, Quiz, dan Tugas',
  },
  { key: 'MENTORING', value: 'Live Mentoring' },
  { key: 'RISET', value: 'Riset' },
  { key: 'PENGEMBANGAN_KURIKULUM', value: 'Pengembangan Kurikulum' },
];

interface FormData {
  full_name: string;
  email: string;
  phone_number: string;
  address: string;
  organization: string;
  department: string;
  position: string;
  last_education: string;
  birth_date: string;
  interest_field: string;
  feedback: string;
  contributions: string[];
  linkedin_url: string;
}

const RegistrationForm = () => {
  const { mutate, isLoading } = useTeacherRegistration();
  const [formData, setFormData] = useState<FormData>({
    full_name: '',
    email: '',
    phone_number: '',
    address: '',
    organization: '',
    department: '',
    position: '',
    last_education: '',
    birth_date: '',
    interest_field: '',
    feedback: '',
    contributions: [],
    linkedin_url: '',
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      contributions: checked
        ? [...prevData.contributions, name]
        : prevData.contributions.filter((option) => option !== name),
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.dismiss();
    try {
      mutate(formData, {
        onSuccess: () => {
          setFormData({
            full_name: '',
            email: '',
            phone_number: '',
            address: '',
            organization: '',
            department: '',
            position: '',
            last_education: '',
            birth_date: '',
            interest_field: '',
            feedback: '',
            contributions: [],
            linkedin_url: '',
          });
          toast.success(
            'Pendaftaran berhasil, silakan tunggu konfirmasi dari kami'
          );
        },
        onError: (err) => {
          toast.error(err.response?.data.message || 'Pendaftaran gagal');
        },
      });
    } catch (err) {
      toast.error('Pendaftaran gagal');
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-4" id="registration">
      <div className="space-y-1">
        <h1 className="text-3xl font-bold">Daftar sebagai Pengajar</h1>
        <p className="text-gray-600">
          Sebarkan ilmu, dapatkan pahala berkelanjutan, dan jadilah agen
          perubahan!
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <InputField
            label="Nama Lengkap"
            name="full_name"
            value={formData.full_name}
            onChange={handleChange}
            placeholder="Cth: Budi Santoso"
          />
          <InputField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Cth: kampusgratis@gmail.com"
          />
          <InputField
            label="Nomor Telepon"
            name="phone_number"
            type="tel"
            value={formData.phone_number}
            onChange={handleChange}
            placeholder="Cth: +6281234567890"
          />
          <InputField
            label="Alamat"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Cth: Jl. Sudirman No. 123, Jakarta Pusat"
          />
          <InputField
            label="Perusahaan / Organisasi"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            placeholder="Cth: PT Maju Bersama"
          />
          <InputField
            label="Departemen"
            name="department"
            value={formData.department}
            onChange={handleChange}
            placeholder="Cth: Teknik Informatika"
          />
          <InputField
            label="Jabatan"
            name="position"
            value={formData.position}
            onChange={handleChange}
            placeholder="Cth: Senior Software Engineer"
          />
          <SelectField
            label="Pendidikan Terakhir"
            name="last_education"
            value={formData.last_education}
            onChange={handleChange}
            options={EDUCATION_LEVEL_OPTIONS}
          />
          <InputField
            label="Tanggal Lahir"
            name="birth_date"
            type="date"
            value={formData.birth_date}
            onChange={handleChange}
          />
          <InputField
            label="Bidang Minat"
            name="interest_field"
            value={formData.interest_field}
            onChange={handleChange}
            placeholder="Cth: Artificial Intelligence, Machine Learning"
          />
          <InputField
            label="URL LinkedIn"
            name="linkedin_url"
            type="url"
            value={formData.linkedin_url}
            onChange={handleChange}
            placeholder="Cth: https://www.linkedin.com/in/budisantoso"
          />
          <div className="md:col-span-3">
            <label
              htmlFor="feedback"
              className="block font-medium text-gray-700"
            >
              Feedback
            </label>
            <textarea
              id="feedback"
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              placeholder="Berikan feedback atau pertanyaan Anda di sini"
              className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm border focus:ring-0 focus:outline-gray-600"
              rows={3}
            />
          </div>
          <div className="md:col-span-3">
            <label className="block font-medium text-gray-700 mb-2">
              Pilihan Kontribusi (Pilih 3)
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {CONTRIBUTION_OPTIONS.map((option) => (
                <CheckboxField
                  key={option.key}
                  label={option.value}
                  name={option.key}
                  checked={formData.contributions.includes(option.key)}
                  onChange={handleCheckboxChange}
                />
              ))}
            </div>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="w-full md:w-[150px] px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
            disabled={isLoading}
          >
            {isLoading ? <LoadingButton /> : 'Daftar'}
          </button>
        </div>
      </form>
      <p className="mt-6 text-sm text-gray-600 italic">
        Untuk informasi lebih lanjut, silakan hubungi kami melalui WhatsApp
      </p>
    </div>
  );
};

const InputField = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}) => (
  <div>
    <label htmlFor={name} className="block font-medium text-gray-700">
      {label}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required
      placeholder={placeholder}
      className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm border focus:ring-0 focus:outline-gray-600"
    />
  </div>
);

const SelectField = ({
  label,
  name,
  value,
  onChange,
  options,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { key: string; value: string }[];
}) => (
  <div>
    <label htmlFor={name} className="block font-medium text-gray-700">
      {label}
    </label>
    <select
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required
      className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm border focus:ring-0 focus:outline-gray-600"
    >
      <option value="">Pilih Pendidikan Terakhir</option>
      {options.map((option) => (
        <option key={option.key} value={option.key}>
          {option.value}
        </option>
      ))}
    </select>
  </div>
);

const CheckboxField = ({
  label,
  name,
  checked,
  onChange,
}: {
  label: string;
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <div className="flex items-center">
    <input
      type="checkbox"
      id={name}
      name={name}
      checked={checked}
      onChange={onChange}
      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
    />
    <label htmlFor={name} className="ml-2 block text-sm text-gray-900">
      {label}
    </label>
  </div>
);

export default RegistrationForm;

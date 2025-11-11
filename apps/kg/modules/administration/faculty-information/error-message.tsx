import Link from 'next/link';
import { FC } from 'react';
import { FaYoutube } from 'react-icons/fa6';

export const ErrorMessage: FC<{ message: string }> = ({ message }) => {
  return (
    <div className="mb-6 p-6 bg-red-50 border-l-4 border-l-red-500 border border-red-200 rounded-lg">
      {message.includes(
        'https://youtube.com/@kampusgratis1?si=PTbzADNqDVHmkOlT'
      ) ? (
        <div className="space-y-4">
          <div className="space-y-1">
            <p className="text-lg font-bold text-gray-900">
              Pendaftaran untuk perkuliahan yang dimulai bulan September 2024
              telah selesai.
            </p>
            <p className=" text-gray-800">
              Pendaftar baru beridentitas jelas PASTI diterima, dan bisa memulai
              proses kuliah di Januari 2025.
            </p>
          </div>
          <div className="pt-2">
            <p className="text-base font-bold text-gray-900">
              Pendaftaran kursus, pelatihan bootcamp masih dibuka.
            </p>
            <div className="mt-2 flex items-center gap-2">
              <FaYoutube className="text-red-600 text-xl" />
              <span className="text-gray-700">
                Cek pengumuman kursus yang dibuka dengan subscribe
              </span>
              <Link
                href={message}
                target="_blank"
                className="text-blue-600 hover:text-blue-800 font-semibold hover:underline inline-flex items-center gap-1"
              >
                YouTube Paket-C Gratis
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-sm text-red-600 font-semibold">{message}</p>
      )}
    </div>
  );
};

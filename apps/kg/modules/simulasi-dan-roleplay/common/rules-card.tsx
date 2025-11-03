import React from 'react';
import { IoClose } from 'react-icons/io5';

export default function RulesCard({
  setIsOpen,
}: {
  setIsOpen: (value: boolean) => void;
}) {
  return (
    <>
      <div className="flex justify-between items-center">
        <p className="font-bold p-4">Aturan</p>
        <IoClose
          className="cursor-pointer mr-6 text-lg"
          onClick={() => setIsOpen(false)}
        />
      </div>
      <div className="border-b-2 border-gray-300 w-full" />
      <ol className="list-decimal pl-10 py-4 pr-4 text-gray-500">
        <li>
          Hormati sesama peserta dan fasilitator dengan berkomunikasi secara
          sopan dan menghargai pendapat.
        </li>
        <li>
          Hindari penggunaan bahasa kasar, merendahkan, atau menyakitkan hati.
        </li>
        <li>
          Hargai keberagaman dan hindari tindakan atau komentar yang dapat
          menyebabkan diskriminasi.
        </li>
        <li>
          Berpartisipasi dengan semangat inklusif dan mendukung keragaman peran.
        </li>
        <li>Tepat waktu untuk sesi simulasi roleplay.</li>
        <li>
          Beri tahu fasilitator jika ada keterlambatan atau ketidakhadiran yang
          tidak terduga.
        </li>
        <li>
          Jelaskan batasan antara tindakan karakter (IC) dan perbincangan di
          luar karakter (OOC).
        </li>
        <li>
          Gunakan saluran khusus untuk perbincangan OOC agar tidak
          membingungkan.
        </li>
        <li>
          Pahami karakteristik dan tugas peran masing-masing dengan baik sebelum
          simulasi dimulai.
        </li>
        <li>
          Patuhi aturan peran yang telah disampaikan oleh fasilitator saat di
          zoom.
        </li>
        <li>
          Jangan ragu untuk bertanya atau meminta klarifikasi jika ada hal yang
          tidak jelas.
        </li>
        <li>Pastikan pemahaman sebelum melanjutkan simulasi.</li>
        <li>
          Penilaian akan diberikan berdasarkan partisipasi aktif, pemahaman
          peran, dan kontribusi positif.
        </li>
        <li>
          Pemenang atau penghargaan akan diumumkan sesuai ketentuan setelah
          simulasi selesai.
        </li>
      </ol>
    </>
  );
}

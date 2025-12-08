'use client';

import { FC, ReactElement } from 'react';

export const SyaratKetentuanContent: FC = (): ReactElement => {
  return (
    <section>
      <div className="w-full px-8 min-h-[140vh] md:px-14 lg:px-16 2xl:px-0 max-w-[1440px] mx-auto">
        <div className="w-full flex flex-col gap-y-4 text-justify my-4">
          <h1 className="text-center text-2xl font-bold">
            SYARAT DAN KETENTUAN
          </h1>
          <p>
            Selamat datang di Paketcgratis.id! Dalam menggunakan platform LMS
            ini, Anda diharapkan untuk mematuhi dan menyetujui syarat dan
            ketentuan berikut. Mohon baca dengan cermat sebelum mengakses atau
            menggunakan layanan kami.
          </p>
          <h6 className="font-bold">Penerimaan Syarat dan Ketentuan</h6>
          <p>
            Dengan mengakses atau menggunakan platform LMS Paketcgratis.id, Anda
            dianggap telah membaca, memahami, dan menyetujui seluruh syarat dan
            ketentuan yang tercantum di sini. Jika Anda tidak menyetujui syarat
            dan ketentuan ini, mohon untuk tidak melanjutkan penggunaan
            platform.
          </p>
          <div className="w-full flex flex-col gap-y-4 text-justify">
            <h6 className="font-bold">Penggunaan Layanan</h6>
            <ul style={{ listStyleType: 'disc' }} className="pl-8">
              <li>
                Layanan yang disediakan oleh Paketcgratis.id dimaksudkan untuk
                keperluan pendidikan dan pembelajaran. Anda setuju untuk
                menggunakan layanan ini hanya untuk tujuan yang sah dan sesuai
                dengan hukum yang berlaku.
              </li>
              <li>
                Anda bertanggung jawab penuh atas keamanan akun dan kata sandi
                Anda. Setiap tindakan yang dilakukan melalui akun Anda dianggap
                sebagai tindakan yang dilakukan oleh Anda sendiri.
              </li>
            </ul>
          </div>
          <div className="w-full flex flex-col gap-y-4 text-justify">
            <h6 className="font-bold">Konten Pengguna</h6>
            <ul style={{ listStyleType: 'disc' }} className="pl-8">
              <li>
                Saat menggunakan platform, Anda dapat menyumbangkan konten
                seperti komentar, pertanyaan, atau materi pembelajaran. Dengan
                menyumbangkan konten, Anda menyatakan bahwa konten tersebut
                adalah milik Anda atau Anda memiliki izin untuk menyebarkannya.
              </li>
              <li>
                Paketcgratis.id berhak untuk menghapus atau memodifikasi konten
                pengguna yang dianggap melanggar hak kekayaan intelektual,
                melanggar hukum, atau tidak sesuai dengan standar etika dan
                norma yang berlaku.
              </li>
            </ul>
          </div>
          <h6 className="font-bold">Hak Kekayaan Intelektual</h6>
          <p>
            Seluruh hak kekayaan intelektual, termasuk tetapi tidak terbatas
            pada hak cipta, merek dagang, dan paten terkait dengan platform LMS
            Paketcgratis.id, tetap menjadi milik Paketcgratis.id.
          </p>
          <h6 className="font-bold">Pembatalan dan Penghentian Layanan</h6>
          <p>
            Paketcgratis.id berhak untuk membatalkan atau menghentikan layanan,
            sebagian atau sepenuhnya, tanpa pemberitahuan sebelumnya jika
            diperlukan, misalnya, karena pemeliharaan sistem atau perubahan
            kebijakan.
          </p>
          <h6 className="font-bold">Privasi Pengguna</h6>
          <p>
            Paketcgratis.id berkomitmen untuk melindungi privasi pengguna.
            Informasi lebih lanjut dapat ditemukan dalam Kebijakan Privasi kami.
          </p>
          <h6 className="font-bold">Perubahan Syarat dan Ketentuan</h6>
          <p>
            Paketcgratis.id dapat mengubah syarat dan ketentuan ini dari waktu
            ke waktu. Perubahan tersebut akan diinformasikan kepada pengguna
            melalui platform atau kontak langsung.
          </p>
          <h6 className="font-bold">Pertanyaan dan Keluhan</h6>
          <p>
            Jika Anda memiliki pertanyaan atau keluhan terkait syarat dan
            ketentuan ini, silakan hubungi kami melalui alamat email yang
            disediakan di platform.
          </p>
          <p className="mt-6">
            Dengan menggunakan platform LMS Paketcgratis.id, Anda menyatakan
            bahwa Anda telah membaca, memahami, dan menyetujui semua syarat dan
            ketentuan yang tercantum di sini. Terima kasih atas kerjasama Anda!
          </p>
        </div>
      </div>
    </section>
  );
};

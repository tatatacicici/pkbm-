'use client';

import Image from 'next/image';
import Link from 'next/link';
import RegistrationForm from './registration-form';

export default function PendaftaranPengajarModule() {
  const card_data = [
    {
      title: 'Menjangkau Banyak Pelajar',
      description:
        'Dapat menjangkau pembelajar dari seluruh indonesia sehingga dapat berbagi ilmu dan pengalaman dan membantu lebih banyak orang untuk belajar dan berkembang.',
    },
    {
      title: 'Fleksibel',
      description:
        'Tebar benih ilmu di mana saja dan kapan saja. Paket-C Gratis mudah digunakan untuk membuat materi pembelajaran yang menarik dan interaktif.',
    },
    {
      title: 'Dukungan dan Pelatihan yang Berkelanjutan',
      description:
        'Relawan pengajar akan mendapatkan akses ke berbagai sumber daya seperti pelatihan dan webinar, untuk membantu mengembangkan keterampilan mengajar, membuat materi ajar, dan selalu update atas tren terbaru dalam pendidikan.',
    },
    {
      title: 'Buat Dampak Positif',
      description:
        'Relawan pengajar membantu banyak orang dari berbagai latar belakang berkembang, tanpa batasan biaya, tempat dan waktu menuju masa depan yang jauh lebih baik.',
    },
  ];

  return (
    <div className="space-y-12">
      <div className="relative w-full h-[700px] md:h-[400px] bg-[url('/images/banner-pattern.png')] bg-cover bg-center bg-no-repeat">
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center gap-8 flex-col md:flex-row px-8">
          <Image
            src="/images/mega-menu/hiring.png"
            alt="Kampus-Gratis"
            width={250}
            height={250}
          />
          <div className="lg:max-w-xl space-y-2">
            <h1 className="text-3xl font-bold text-yellow-base">
              Pendaftaran Pengajar
            </h1>
            <div className="space-y-2">
              <div className="">
                <p className=" text-white font-semibold">
                  Tebarkan ilmu, dapatkan pahala jariyah, dan Jadilah Inspirator
                  perubahan!
                </p>
                <p className="text-white font-semibold">
                  Menjadi Relawan Pengajar di Paket-C Gratis
                </p>
              </div>
              <p className="text-yellow-base font-semibold">
                Apakah anda memiliki passion dalam mengajar dan ingin berbagi
                ilmu dengan orang lain?
              </p>
              <p className="text-white">
                Jika ya, maka bergabunglah dengan komunitas relawan pengajar
                kami di Paket-C Gratis!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-12 max-w-[1440px] mx-auto p-8 pt-0">
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-center text-blue-base">
            Mengapa Menjadi Relawan Pengajar di Paket-C Gratis?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {card_data.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md space-y-2 border"
              >
                <Image
                  src="/images/mega-menu/hiring.png"
                  alt="Kampus-Gratis"
                  width={80}
                  height={80}
                />
                <h3 className="text-lg font-bold text-blue-base">
                  {item.title}
                </h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-blue-base w-full rounded-2xl px-8 py-12 text-white flex gap-8 justify-center  flex-col md:flex-row ">
          <Image
            src="/images/mega-menu/banner-pendaftaran.png"
            alt="Kampus-Gratis"
            width={200}
            height={200}
          />
          <div className="max-w-lg space-y-2">
            <h2 className="text-2xl font-bold">Bergabunglah Bersama Kami!</h2>
            <p className="">
              Menjadi Relawan pengajar di Paket-C Gratis merupakan kesempatan
              luar biasa untuk membuat dampak positif pada kehidupan jutaan
              orang. Jika kamu ingin mengajar dan berbagi ilmu dengan jutaan
              orang, daftar sekarang disini.
            </p>
            <div className="">
              <Link href="#registration">
                <button className="bg-orange-base w-max px-6 py-2 rounded-lg font-semibold hover:bg-orange-base/90 transition-all duration-300 ease-in-out">
                  Daftar Sekarang
                </button>
              </Link>
            </div>
          </div>
        </div>
        <RegistrationForm />
      </div>
    </div>
  );
}

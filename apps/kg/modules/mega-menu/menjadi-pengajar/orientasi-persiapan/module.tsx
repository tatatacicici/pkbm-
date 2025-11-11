import Image from 'next/image';
import { IconType } from 'react-icons';
import {
  FaBook,
  FaChalkboardTeacher,
  FaComments,
  FaRegHandshake,
  FaTools,
  FaUsers,
} from 'react-icons/fa';
import { FaRegLightbulb } from 'react-icons/fa6';

export default function OrientasiPersiapanModule() {
  const goals = [
    {
      title: 'Memahami visi, misi, dan nilai-nilai Paket-C Gratis.',
      description:
        'Paket-C Gratis memiliki visi untuk mencerdaskan bangsa melalui pendidikan dan misi untuk memberikan akses pendidikan yang berkualitas dan terjangkau kepada semua orang. Nilai-nilai Paket-C Gratis adalah kolaborasi, inovasi, dan keberagaman.',
      icon: FaRegLightbulb,
    },
    {
      title:
        'Mengenal tim Paket-C Gratis dan peran kita dalam mendukung para relawan pengajar.',
      description:
        'Paket-C Gratis memiliki tim yang berdedikasi untuk mendukung para relawan pengajar dalam memberikan pendidikan yang berkualitas. Peran kita sebagai relawan pengajar adalah memberikan pendidikan yang berkualitas dan terjangkau kepada semua orang.',
      icon: FaUsers,
    },
    {
      title:
        'Mempelajari dan memahami penggunaan pada platform Paket-C Gratis.',
      description:
        'Paket-C Gratis memiliki platform yang memudahkan para relawan pengajar dalam memberikan pendidikan yang berkualitas. Platform Paket-C Gratis memiliki fitur yang memudahkan para relawan pengajar dalam membuat dan menyebarkan materi pembelajaran.',
      icon: FaChalkboardTeacher,
    },
    {
      title: 'Tips dan trik untuk menjadi relawan pengajar di Paket-C Gratis.',
      description:
        'Paket-C Gratis memberikan tips dan trik kepada para relawan pengajar untuk memberikan pendidikan yang berkualitas. Tips dan trik ini akan membantu para relawan pengajar dalam memberikan pendidikan yang berkualitas dan terjangkau kepada semua orang.',
      icon: FaRegHandshake,
    },
  ];

  const preparation = [
    {
      title: 'Persiapan Materi Ajar untuk Kelas Pertama.',
      description:
        'Kamu akan mempersiapkan materi ajar untuk kelas pertama. Materi ajar ini akan membantu kamu dalam memberikan pendidikan yang berkualitas dan terjangkau kepada semua orang.',
      icon: FaBook,
    },
    {
      title: 'Belajar penggunaan alat dan fitur pengajaran di Paket-C Gratis.',
      description:
        'Kamu akan belajar penggunaan alat dan fitur pengajaran di Paket-C Gratis. Alat dan fitur pengajaran ini akan membantu kamu dalam memberikan pendidikan yang berkualitas dan terjangkau kepada semua orang.',
      icon: FaTools,
    },
    {
      title: 'Praktik mengajar online dengan tim Paket-C Gratis.',
      description:
        'Kamu akan praktik mengajar online dengan tim Paket-C Gratis. Praktik mengajar ini akan membantu kamu dalam memberikan pendidikan yang berkualitas dan terjangkau kepada semua orang.',
      icon: FaChalkboardTeacher,
    },
    {
      title: 'Feedback dan Saran untuk Kelas Pertama.',
      description:
        'Kamu akan mendapatkan feedback dan saran untuk kelas pertama. Feedback dan saran ini akan membantu kamu dalam memberikan pendidikan yang berkualitas dan terjangkau kepada semua orang.',
      icon: FaComments,
    },
  ];
  return (
    <div className="space-y-8">
      <div className="relative w-full h-[700px] md:h-[400px] bg-[url('/images/banner-pattern.png')] bg-cover bg-center bg-no-repeat">
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center gap-8 flex-col md:flex-row px-8">
          <Image
            src="/images/mega-menu/children.png"
            alt="Kampus-Gratis"
            width={250}
            height={250}
          />
          <div className="lg:max-w-xl space-y-2">
            <h1 className="text-3xl font-bold text-yellow-base">
              Orientasi dan Persiapan
            </h1>
            <div className="space-y-2">
              <div className="">
                <p className=" text-white font-semibold">
                  Selamat Datang di Komunitas relawan pengajar Paket-C Gratis!
                </p>
              </div>
              <p className="text-white">
                Halo para relawan pengajar baru, selamat bergabung dengan
                komunitas relawan pengajar Paket-C Gratis! Kami sangat senang
                kamu menjadi bagian dari tim kami dan membantu kami dalam
                mencerdaskan bangsa.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-12 max-w-[1440px] mx-auto p-8 pt-0">
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-center text-blue-base">
            Tujuan Orientasi Relawan pengajar pada
            <span className="text-orange-base"> Paket-C Gratis</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {goals.map((item, index) => (
              <ItemCard
                key={index}
                title={item.title}
                description={item.description}
                Icon={item.icon}
              />
            ))}
          </div>
        </div>
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-center text-blue-base">
            Persiapan Mengajar pada
            <span className="text-orange-base"> Paket-C Gratis</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {preparation.map((item, index) => (
              <ItemCard
                key={index}
                title={item.title}
                description={item.description}
                Icon={item.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const ItemCard = ({
  title,
  description,
  Icon,
}: {
  title: string;
  description: string;
  Icon: IconType;
}) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md space-y-2 border">
      <div className="flex gap-4 items-center flex-col">
        <div className="flex justify-center items-center w-16 h-16 rounded-full flex-shrink-0 bg-orange-base">
          <Icon size={32} />
        </div>
        <h3 className="text-lg font-bold text-blue-base">{title}</h3>
      </div>
      <p>{description}</p>
    </div>
  );
};

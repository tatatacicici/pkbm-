import Image from 'next/image';
import { IconType } from 'react-icons';
import {
  FaChartLine,
  FaHandshake,
  FaUserCheck,
  FaUserFriends,
} from 'react-icons/fa';

export default function EvaluasiUmpanBalikModule() {
  const benefits = [
    {
      title: 'Identifikasi Kekuatan dan Kelemahan Pengajar',
      icon: FaUserCheck,
    },
    {
      title: 'Meningkatkan Pemahaman tentang Kebutuhan Peserta',
      icon: FaUserFriends,
    },
    {
      title: 'Meningkatkan Motivasi dan Kepercayaan Diri',
      icon: FaChartLine,
    },
    {
      title: 'Membangun Hubungan yang baik dengan Peserta',
      icon: FaHandshake,
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
              Evaluasi dan Umpan Balik
            </h1>
            <div className="space-y-2">
              <p className="text-white">
                Evaluasi dan umpan balik adalah proses penting dalam memberikan
                pendidikan yang berkualitas. Evaluasi dan umpan balik akan
                membantu kita dalam mengevaluasi kualitas pendidikan yang kita
                berikan dan memberikan umpan balik yang bermanfaat kepada para
                relawan pengajar.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-12 max-w-[1440px] mx-auto p-8 pt-0">
        <div className="space-y-4 text-center max-w-[768px] mx-auto">
          <h2 className="text-3xl font-bold text-blue-base">
            Tingkatkan Kualitas Mengajar kamu dengan
            <span className="text-orange-base">
              {' '}
              Evaluasi dan Umpan balik di Paket-C Gratis!
            </span>
          </h2>
          <p className="text-neutral-700">
            Sebagai relawan pengajar di Paket-C Gratis, tentu kamu ingin terus
            mengembangkan diri dan meningkatkan kualitas mengajar bukan? Di
            platform kami menyediakan fitur evaluasi dan umpan balik untuk
            membantu mencapai tujuan tersebut.
          </p>
        </div>
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-center text-blue-base">
            Manfaat Evaluasi dan Umpan Balik di
            <span className="text-orange-base"> Paket-C Gratis</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((item, index) => (
              <ItemCard key={index} title={item.title} Icon={item.icon} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const ItemCard = ({ title, Icon }: { title: string; Icon: IconType }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md space-y-2 border">
      <div className="flex gap-4 items-center flex-col">
        <div className="flex justify-center items-center w-16 h-16 rounded-full flex-shrink-0 bg-orange-base">
          <Icon size={32} />
        </div>
        <h3 className="text-lg font-bold text-blue-base">{title}</h3>
      </div>
    </div>
  );
};

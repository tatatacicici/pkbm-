'use client';

import { useGetBootcampSubject } from '@kampus-gratis/apps/kg/hooks/bootcamp/hook';
import { useGetAllSubject } from '@kampus-gratis/apps/kg/hooks/rencana-studi/hooks';
import { TSubject } from '@kampus-gratis/apps/kg/types/rencana-studi';
import { LoadingSpinner } from '@kampus-gratis/components/atoms';
import Image from 'next/image';
import { BiShapeSquare } from 'react-icons/bi';
import { FaRegLightbulb } from 'react-icons/fa6';
import { LuMousePointer2 } from 'react-icons/lu';
import { MdOutlineElectricalServices } from 'react-icons/md';
import CardBootcamp from '../../../bootcamp/bootcamp-card';

export default function PenentuanTopikModule() {
  const { data, isLoading } = useGetBootcampSubject();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="space-y-8">
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
              Penentuan Topik Ajar
            </h1>
            <div className="space-y-2">
              <div className="">
                <p className=" text-white font-semibold">
                  Selamat Datang di Komunitas Pengajar Paket-C Gratis!
                </p>
              </div>
              <p className="text-white">
                Halo para pengajar baru, selamat bergabung dengan komunitas
                pengajar Paket-C Gratis! Kami sangat senang kamu menjadi bagian
                dari tim kami dan membantu kami dalam mencerdaskan bangsa.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-12 max-w-[1440px] mx-auto p-8">
        <h2 className="text-xl font-semibold mb-6 text-blue-base text-center">
          Temukan Topik Ajar yang Tepat untuk memulai Karir Mengajar kamu di
          Paket-C Gratis! Menentukan topik ajar yang tepat merupakan langkah
          penting dalam memulai karir mengajar kamu. Topik ajar yang dipilih
          harus sesuai dengan minat, keahlian, dan target audiens.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:px-8">
          <FeatureCard
            icon={FaRegLightbulb}
            text="Pikirkan Minat dan Keahlian."
            index={1}
          />
          <FeatureCard
            icon={BiShapeSquare}
            text="Pertimbangkan Target Audiens."
            index={2}
          />
          <FeatureCard icon={LuMousePointer2} text="Riset Topik" index={3} />
          <FeatureCard
            icon={MdOutlineElectricalServices}
            text="Pilih Topik yang disukai!"
            index={4}
          />
        </div>
        <div className="w-full">
          <div className="md:px-4">
            <h2 className="text-3xl font-bold text-blue-base text-center mb-8">
              Bootcamp <span className="text-orange-base">Paket-C Gratis</span>
            </h2>
            {data?.data && data?.data.subjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12">
                {data?.data.subjects.map((subject: TSubject, index: number) => (
                  <CardBootcamp key={index} {...subject} />
                ))}
              </div>
            ) : (
              <div className="flex justify-center items-center w-full h-[300px]">
                <p className="font-medium">Tidak Ada Bootcamp</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  icon: Icon,
  text,
  index,
}: {
  icon: React.ElementType;
  text: string;
  index: number;
}) => (
  <div className="">
    <div className="flex items-center justify-center gap-2">
      {index % 2 === 0 ? (
        <>
          <div className="bg-blue-base text-orange-base p-2 rounded-lg">
            <Icon className="text-2xl " />
          </div>
          <p className="font-semibold text-orange-base">{text}</p>
        </>
      ) : (
        <>
          <div className="bg-orange-base text-blue-base p-2 rounded-lg">
            <Icon className="text-2xl " />
          </div>
          <p className="font-semibold text-blue-base">{text}</p>
        </>
      )}
    </div>
  </div>
);

const TopicCard = ({
  slug,
  name,
  thumbnail,
}: {
  slug: string;
  name: string;
  thumbnail: string;
}) => (
  <div
    className="border rounded-xl shadow-lg flex flex-col justify-between relative h-max cursor-pointer"
    id={slug}
  >
    <div className="relative w-full px-4 flex justify-between items-center gap-2 h-[120px]">
      <Image
        src={thumbnail}
        loading="lazy"
        alt=""
        width={0}
        height={0}
        sizes="100vh"
        style={{
          width: 'auto',
          minWidth: '100%',
          height: '120px',
          objectFit: 'cover',
        }}
        className="rounded-lg absolute top-0 left-0 brightness-50"
      />
      <h5
        className="text-lg font-bold tracking-tight text-white z-10 line-clamp-3 underline underline-offset-1 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]
"
      >
        {name}
      </h5>
    </div>
  </div>
);

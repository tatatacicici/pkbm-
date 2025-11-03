import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import Card1 from '../../../landing/faculty/assets/card-1.png';
import Card2 from '../../../landing/faculty/assets/card-2.png';
import Card3 from '../../../landing/faculty/assets/card-3.png';

export default function KuliahModule() {
  const benefits = [
    {
      title: 'Bebas Biaya',
      description:
        'Tak perlu khawatir soal biaya kuliah yang mahal. Di Paket-C Gratis, kamu bisa belajar dan raih mimpi tanpa beban biaya.',
    },
    {
      title: 'Fleksibilitas Tinggi',
      description:
        'Atur waktu belajarmu sendiri! Kuliah di Paket-C Gratis bisa dilakukan kapanpun dan dimanapun kamu inginkan tak terbatas ruang dan waktu.',
    },
    {
      title: 'Belajar dari Para Ahli',
      description:
        'Dapatkan ilmu dari para pakar dan profesional ternama di bidangnya. Raih kesempatan untuk belajar langsung dari para ahlinya!',
    },
    {
      title: 'Bangun Jaringan dan Komunitas',
      description:
        'Belajar dan terhubung dengan pelajar dari seluruh dunia. Bangun jaringan dan komunitas belajar yang suportif, dapatkan inspirasi untuk terus berkembang.',
    },
    {
      title: 'Raih Sertifikat dan Pengakuan',
      description:
        'Buktikan kompetensimu dengan sertifikat yang diakui. Tingkatkan nilai portfolio dan karirmu dengan sertifikat yang mumpuni.',
    },
  ];

  const faculties = [
    {
      title: 'Bisnis',
      src: Card1,
      major: ['Pembiayaan dan Optimalisasi Bisnis', 'Bisnis Keberlanjutan'],
    },
    {
      title: 'Desain',
      src: Card2,
      major: ['Desain Digital'],
    },
    {
      title: 'Teknologi Digital',
      src: Card3,
      major: [
        'Teknologi Virtual Reality & Game',
        'Teknologi Internet of Things & Cyber Security',
        'Teknologi BlockChain, AI & Data Science',
      ],
    },
  ];

  return (
    <div className="space-y-12">
      <div className="relative w-full h-[700px] md:h-[400px] bg-[url('/images/banner-pattern.png')] bg-cover bg-center bg-no-repeat">
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center gap-8 flex-col md:flex-row px-8">
          <Image
            src="/images/mega-menu/teacher.png"
            alt="Kampus-Gratis"
            width={250}
            height={250}
          />
          <div className="lg:max-w-xl space-y-2">
            <h1 className="text-3xl font-bold text-white">
              Kuliah Gratis di{' '}
              <span className="text-yellow-base">Paket-C Gratis</span>
            </h1>
            <div className="space-y-2">
              <div className="">
                <p className=" text-white font-semibold">
                  Di era digital ini, akses terhadap pendidikan berkualitas
                  semakin terbuka lebar. Dengan bermodalkan internet kini kamu
                  bisa mendapatkan pendidikan berkualitas tanpa harus terhalang
                  biaya.
                </p>
              </div>
              <p className="text-white">
                Paket-C Gratis menawarkan berbagai pilihan perkuliahan gratis
                yang dapat membantumu meraih mimpi dan mengembangkan potensi
                diri. Paket-C Gratis, platform edukasi terdepan yang membuka
                gerbang ilmu pengetahuan bagi siapa saja tanpa terhalang biaya.
                Jelajahi berbagai pilihan mata kuliah menarik dari berbagai
                bidang ilmu yang diajar oleh para pakar terbaik di bidangnya!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-12 max-w-[1200px] mx-auto p-8 pt-0">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-center text-blue-base">
            Fakultas
            <span className="text-orange-base"> Paket-C Gratis</span>
          </h2>
          <div className="flex justify-center items-stretch gap-4 flex-wrap lg:flex-nowrap">
            {faculties.map((item, index) => (
              <FacultyCard
                key={index}
                title={item.title}
                src={item.src}
                major={item.major}
              />
            ))}
          </div>
        </div>
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-center text-blue-base">
            Apa Saja Keuntungan Kuliah di
            <span className="text-orange-base"> Paket-C Gratis?</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((item, index) => (
              <BenefitCard
                key={index}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 pb-12">
          <h3 className="text-lg font-semibold text-blue-base">
            Daftarkan dirimu sekarang di
            <span className="text-orange-base"> Paket-C Gratis</span>
          </h3>
          <Link href="/auth/register">
            <button className="bg-blue-base text-white px-12 py-3 rounded-lg shadow-md font-semibold">
              Daftar Sekarang
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

const BenefitCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="bg-white p-6 rounded-2xl shadow-md space-y-2 border">
    <Image
      src="/images/mega-menu/hiring.png"
      alt="Kampus-Gratis"
      width={80}
      height={80}
    />
    <h3 className="text-lg font-bold text-blue-base">{title}</h3>
    <p>{description}</p>
  </div>
);

const FacultyCard = ({
  title,
  src,
  major,
}: {
  title: string;
  src: StaticImageData;
  major: string[];
}) => (
  <Link href="/rencana-studi" className="w-full">
    <div className="flex flex-col border h-full shadow-md rounded-xl overflow-hidden hover:bg-neutral-100 transition cursor-pointer">
      <div className="overflow-hidden h-[200px] relative">
        <Image
          src={src}
          alt={'card-landing'}
          layout="fill"
          priority
          className="object-cover"
        />
      </div>
      <div className="p-4 space-y-2">
        <h3 className="text-blue-base font-semibold text-xl">
          Fakultas {title}
        </h3>
        <ul className="space-y-1">
          {major.map((item, index) => (
            <li key={index} className="text-sm text-gray-500 font-semibold">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </Link>
);

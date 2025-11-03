import Image from 'next/image';

export default function PembuatanMateriModule() {
  const steps = [
    {
      id: 1,
      title: 'Pilih Topik dan Tujuan Pembelajaran',
      description:
        'Pilih topik yang sesuai dengan minat dan keahlian yang kamu miliki, serta tetapkan tujuan pembelajaran yang jelas dan terukur untuk setiap sesi pembelajaran.',
    },
    {
      id: 2,
      title: 'Struktur dan Terorganisir',
      description:
        'Gunakan struktur yang logis dan konsisten untuk memudahkan para peserta mengikuti alur pembelajaran.',
    },
    {
      id: 3,
      title: 'Kembangkan Konten yang Menarik dan Interaktif',
      description:
        'Gunakan berbagai media pembelajaran seperti video dan gambar serta memberikan contoh dan latihan yang relevan untuk membantu peserta memahami konsep yang diajarkan. Jangan lupa ciptakan kegiatan interaktif untuk mendorong partisipasi dan keterlibatan peserta didik!',
    },
    {
      id: 4,
      title: 'Materi Akurat dan Terkini',
      description:
        'Lakukan riset yang mendalam untuk memastikan bahwa materi akurat dan terkini serta periksa kembali agar terhindar dari kesalahan dan ketidakjelasan materi.',
    },
    {
      id: 5,
      title: 'Evaluasi dan Perbaikan Materi',
      description:
        'Dapatkan Feedback dari rekan pengajar untuk mengetahui bagaimana materi ajar kamu dapat diperbaiki. Juga lakukan revisi dan perbaikan pada materi ajar secara berkala untuk memastikan materi up-to-date.',
    },
  ];

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
              Pembuatan Materi Ajar
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
      <div className="space-y-6 max-w-[768px] mx-auto p-8 pt-0">
        <h2 className="text-2xl font-semibold mb-4 text-blue-base">
          Langkah-Langkah Membuat
          <span className="text-orange-base">
            {' '}
            Materi Ajar yang Berkualitas
          </span>
        </h2>
        <ol className="relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400">
          {steps.map((step) => (
            <StepCard
              key={step.id}
              step={step.id}
              title={step.title}
              description={step.description}
            />
          ))}
        </ol>
      </div>
    </div>
  );
}

const StepCard = ({
  step,
  title,
  description,
}: {
  step: number;
  title: string;
  description: string;
}) => {
  return (
    <li className="mb-10 ms-6">
      <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-base rounded-full -start-4 ring-4 ring-white text-white">
        {step}
      </span>
      <h3 className="leading-tight text-blue-base font-semibold">{title}</h3>
      <p className="text-sm">{description}</p>
    </li>
  );
};

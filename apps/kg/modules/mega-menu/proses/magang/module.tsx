import Image from 'next/image';

export default function MagangModule() {
  const steps = [
    {
      title: 'Kunjungi Website Paket-C Gratis',
      description:
        'Kunjungi Website Paket-C Gratis https://kampusgratis.id/ atau melalui platform MBKM Kemdikbud https://kampusmerdeka.kemdikbud.go.id/program/magang pada bagian Program Magang Mandiri (kampusgratis.id)',
    },
    {
      title: 'Jelajahi Berbagai Pilihan Lowongan Magang',
      description:
        'Jelajahi berbagai pilihan lowongan magang yang tersedia di berbagai bidang menarik dan temukan lowongan yang sesuai dengan minat dan kualifikasimu.',
      src: '/images/mega-menu/magang-step-1.png',
    },
    {
      title: "Klik tombol 'Daftar'",
      description:
        "Klik tombol 'Daftar' pada lowongan yang kamu pilih. Lengkapi formulir pendaftaran dengan informasi yang benar dan akurat. Pastikan kamu melampirkan CV dan dokumen pendukung lainnya yang diperlukan.",
      src: '/images/mega-menu/magang-step-2.png',
    },
    {
      title: 'Tunggu Proses Seleksi',
      description:
        'Tim rekrutmen dari Paket-C Gratis akan menyeleksi aplikasi yang kamu kirimkan. Maka dari itu, cek email dan Whatsapp mu secara berkala untuk menuju tahap selanjutnya.',
    },
    {
      title: 'Ikuti Wawancara',
      description:
        'Siapkan dirimu dengan baik untuk mengikuti wawancara dan tunjukkan antusiasme dan kemampuanmu untuk berkontribusi dalam program magang.',
    },
    {
      title: 'Jika kamu diterima, Selamat!',
      description:
        'Jika kamu diterima, Selamat! Kamu siap untuk memulai magang dan mendapatkan pengalaman berharga di dunia profesional.',
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
            <h1 className="text-3xl font-bold text-white">
              Program
              <span className="text-yellow-base"> Magang</span>
            </h1>
            <div className="space-y-2">
              <div className="">
                <p className=" text-white font-semibold">
                  Buka Pintu Kesempatanmu dengan Magang di Paket-C Gratis!
                </p>
              </div>
              <p className="text-white">
                Siap melangkah maju dan meraih pengalaman berharga di dunia
                profesional? Bergabunglah dengan program magang di Kampus
                Gratis! Kami menawarkan berbagai pilihan magang menarik di
                berbagai bidang yang akan membantumu mengembangkan skill dan
                mempersiapkan diri untuk memasuki dunia kerja.
              </p>
              <p className="text-white">
                Pendaftaran magang di Paket-C Gratis mudah dan praktis!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-10 max-w-[1200px] mx-auto p-8 pt-0">
        <h2 className="text-2xl font-semibold mb-4 text-blue-base text-center">
          Langkah-Langkah Mendaftar
          <span className="text-orange-base">
            {' '}
            Program Magang Paket-C Gratis
          </span>
        </h2>
        <div className="flex gap-4">
          <ol className="relative text-gray-500 border-s border-gray-200">
            {steps.slice(0, 3).map((step, index) => (
              <StepCard
                key={index}
                step={index + 1}
                title={step.title}
                description={step.description}
                src={step.src}
              />
            ))}
          </ol>
          <ol className="relative text-gray-500 border-s border-gray-200">
            {steps.slice(3).map((step, index) => (
              <StepCard
                key={index}
                step={index + 4}
                title={step.title}
                description={step.description}
                src={step.src}
              />
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

const StepCard = ({
  step,
  title,
  src,
  description,
}: {
  step: number;
  title: string;
  src?: string;
  description: string;
}) => {
  return (
    <li className="mb-10 ms-6">
      <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-base rounded-full -start-4 ring-4 ring-white text-white">
        {step}
      </span>
      <h3 className="leading-tight text-blue-base font-semibold">{title}</h3>
      <p className="text-neutral-800 mt-2">{description}</p>
      {src && (
        <div className="mt-4">
          <Image src={src} alt={title} width={400} height={400} />
        </div>
      )}
    </li>
  );
};

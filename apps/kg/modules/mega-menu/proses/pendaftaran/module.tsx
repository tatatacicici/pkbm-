import Image from 'next/image';

export default function ProsesPendaftaranModule() {
  const steps = [
    {
      title: 1,
      description:
        'Kunjungi situs web resmi https://paketcgratis.id/ melalui browser Anda.',
    },
    {
      title: 2,
      description:
        "Temukan dan Klik menu 'Daftar' yang terdapat pada pojok kanan atas halaman utama.",
      src: '/images/mega-menu/pendaftaran-step-1-new.png',
    },
    {
      title: 3,
      description:
        'Masukkan informasi yang diperlukan seperti Nama Lengkap, Alamat Email, dan Kata Sandi.',
      src: '/images/mega-menu/pendaftaran-step-2-new.png',
    },
    {
      title: 4,
      description:
        'Pastikan Anda membaca dan memahami persyaratan dan kebijakan privasi sebelum melanjutkan mendaftar.',
      src: '/images/mega-menu/pendaftaran-step-3-new.png',
    },
    {
      title: 5,
      description:
        "Klik tombol 'Daftar Sekarang' untuk menyelesaikan proses pendaftaran.",
      src: '/images/mega-menu/pendaftaran-step-4-new.png',
    },
    {
      title: 6,
      description:
        'Periksa email Anda dan masukkan kode verifikasi OTP yang dikirimkan oleh Paket-C Gratis.',
    },
  ];

  return (
    <div className="space-y-12">
      <div className="relative w-full h-[700px] md:h-[400px] bg-[url('/images/banner-pattern-new.svg')] bg-cover bg-center bg-no-repeat">
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center gap-8 flex-col md:flex-row px-8">
          <Image
            src="/images/mega-menu/interview-new.svg"
            alt="Paket-C Gratis"
            width={250}
            height={250}
          />
          <div className="lg:max-w-xl space-y-2">
            <h1 className="text-3xl font-bold text-white">
              Proses
              <span className="text-yellow-base"> Pendaftaran</span>
            </h1>
            <div className="space-y-2">
              <div className="">
                <p className=" text-white font-semibold">
                  Ingin mengakses berbagai layanan edukasi di Paket-C Gratis?
                </p>
              </div>
              <p className="text-white">
                Yuk, ikuti langkah-langkah mudah berikut untuk mendaftar akun!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-10 max-w-[1200px] mx-auto p-8 pt-0">
        <h2 className="text-2xl font-semibold mb-4 text-sky-base text-center">
          Langkah-Langkah
          <span className="text-orange-base">
            {' '}
            Mendaftar Akun Paket-C Gratis
          </span>
        </h2>
        <div className="flex gap-4">
          <ol className="relative text-gray-500 border-s border-gray-200">
            {steps.slice(0, 3).map((step, index) => (
              <StepCard
                key={index}
                step={step.title}
                title={step.description}
                src={step.src}
              />
            ))}
          </ol>
          <ol className="relative text-gray-500 border-s border-gray-200">
            {steps.slice(3).map((step, index) => (
              <StepCard
                key={index}
                step={step.title}
                title={step.description}
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
}: {
  step: number;
  title: string;
  src?: string;
}) => {
  return (
    <li className="mb-10 ms-6">
      <span className="absolute flex items-center justify-center w-8 h-8 bg-sky-base rounded-full -start-4 ring-4 ring-white text-white">
        {step}
      </span>
      <h3 className="leading-tight text-neutral-800 ">{title}</h3>
      {src && (
        <div className="mt-4">
          <Image src={src} alt={title} width={300} height={300} />
        </div>
      )}
    </li>
  );
};

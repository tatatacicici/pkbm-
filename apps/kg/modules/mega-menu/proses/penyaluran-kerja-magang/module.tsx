import Image from 'next/image';
import { MdAssignment, MdPeople, MdSchool, MdWork } from 'react-icons/md';

export default function PenyaluranKerjaMagangModule() {
  const benefits = [
    {
      title: 'Beragam Lowongan Kerja',
      description:
        'Temukan lowongan kerja menarik di berbagai bidang dan industri yang sesuai dengan minat dan kualifikasimu.',
      icon: MdWork,
    },
    {
      title: 'Peluang Magang yang Bermanfaat',
      description:
        'Dapatkan pengalaman kerja nyata dan asah skill melalui program magang di perusahaan ternama.',
      icon: MdAssignment,
    },
    {
      title: 'Bimbingan Karir Profesional',
      description:
        'Dapatkan bimbingan dan arahan dari para ahli karir untuk membantumu mengembangkan karir yang sesuai dengan potensimu.',
      icon: MdSchool,
    },
    {
      title: 'Jaringan Profesional',
      description:
        'Luaskan jaringan profesionalmu dan bangun koneksi yang berharga untuk masa depan karirmu.',
      icon: MdPeople,
    },
  ];

  return (
    <div className="space-y-12">
      <div className="relative w-full h-[700px] md:h-[400px] bg-[url('/images/banner-pattern.png')] bg-cover bg-center bg-no-repeat">
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center gap-8 flex-col md:flex-row px-8">
          <Image
            src="/images/mega-menu/interview.png"
            alt="Kampus-Gratis"
            width={250}
            height={250}
          />
          <div className="lg:max-w-2xl space-y-2">
            <h1 className="text-3xl font-bold text-yellow-base">
              Penyaluran Kerja dan Magang
            </h1>
            <div className="space-y-2">
              <div className="">
                <p className=" text-white font-semibold">
                  Buka Pintu Kesempatan Karirmu dengan Program Penyaluran Kerja
                  dan Magang di Kampus
                </p>
              </div>
              <p className="text-white">
                Paket-C Gratis berkomitmen untuk membantu para pencari kerja dan
                mahasiswa dalam meraih karir impian mereka. Kami menawarkan
                program penyaluran kerja dan magang yang dirancang untuk
                menghubungkan talenta terbaik dengan peluang kerja yang sesuai
                di perusahaan dan mitra-mitra kami.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-12 max-w-[1440px] mx-auto p-8 pt-0">
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-center text-blue-base">
            Mengapa mengikuti program penyaluran kerja dan magang di
            <span className="text-orange-base"> Paket-C Gratis</span>?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md space-y-2 border"
              >
                <div className="flex gap-4 items-center">
                  <div className="flex justify-center items-center w-16 h-16 rounded-full flex-shrink-0 bg-orange-base">
                    {<item.icon size={32} />}
                  </div>
                  <h3 className="text-lg font-bold text-blue-base">
                    {item.title}
                  </h3>
                </div>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="space-y-12 max-w-[1440px] mx-auto px-8 pb-12">
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-center text-blue-base">
            Program Penyaluran Kerja dan Magang di
            <span className="text-orange-base"> Paket-C Gratis </span>
            terbuka bagi
          </h2>
          <div className="flex flex-col gap-8 md:flex-row max-w-[768px] mx-auto justify-center">
            <div className="bg-white p-6 rounded-2xl shadow-md space-y-2 border w-full">
              <Image
                src="/images/mega-menu/raising-hand.png"
                alt="Mahasiswa dan Alumni"
                width={150}
                height={150}
                className="mx-auto"
              />
              <h3 className="text-lg font-bold text-blue-base">Mahasiswa</h3>
              <p>
                Bagi kamu yang sedang menempuh pendidikan, Paket-C Gratis
                menawarkan program magang yang dirancang untuk membantu
                mengembangkan skill dan mendapatkan pengalaman kerja yang penuh
                manfaat.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md space-y-2 border w-full">
              <Image
                src="/images/mega-menu/programmer.png"
                alt="Pencari Kerja"
                width={150}
                height={150}
                className="mx-auto"
              />
              <h3 className="text-lg font-bold text-blue-base">
                Pencari Kerja
              </h3>
              <p>
                Bagi kamu yang sedang mencari pekerjaan baru, Paket-C Gratis
                menawarkan berbagai lowongan kerja menarik di berbagai bidang.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

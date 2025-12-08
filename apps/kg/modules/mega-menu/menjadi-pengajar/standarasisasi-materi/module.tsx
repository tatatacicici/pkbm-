import Image from 'next/image';
import Link from 'next/link';
import { BiShapeSquare } from 'react-icons/bi';
import { FaRegLightbulb } from 'react-icons/fa';
import { LuMousePointer2 } from 'react-icons/lu';
import { MdOutlineElectricalServices } from 'react-icons/md';

export default function StandarasisasiMateriModule() {
  return (
    <div className="space-y-8">
      <div className="relative w-full h-[700px] md:h-[400px] bg-[url('/images/banner-pattern.png')] bg-cover bg-center bg-no-repeat">
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center gap-8 flex-col md:flex-row px-8">
          <Image
            src="/images/mega-menu/professor.png"
            alt="Kampus-Gratis"
            width={250}
            height={250}
          />
          <div className="lg:max-w-xl space-y-2">
            <h1 className="text-3xl font-bold text-yellow-base">
              Standarisasi Materi Ajar
            </h1>
            <div className="space-y-2">
              <div className="">
                <p className=" text-white font-semibold">
                  Ciptakan Materi Ajar Berkualitas Tinggi dengan Standar Kampus
                  Gratis!
                </p>
              </div>
              <p className="text-white">
                Di Paket-C Gratis kami berkomitmen untuk menyediakan materi ajar
                yang berkualitas tinggi bagi para peserta didik. Maka dari itu,
                kami telah menetapkan standar materi ajar yang harus diikuti
                oleh semua pengajar di platform kami.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-12 max-w-[1440px] mx-auto p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:px-8">
          <FeatureCard
            icon={FaRegLightbulb}
            text="Jelas dan Akurat"
            index={1}
          />
          <FeatureCard icon={BiShapeSquare} text="Terstruktur" index={2} />
          <FeatureCard icon={LuMousePointer2} text="Interaktivitas" index={3} />
          <FeatureCard
            icon={MdOutlineElectricalServices}
            text="Relevan"
            index={4}
          />
        </div>
        <div className="w-full">
          <div className="md:px-4">
            <h2 className="text-2xl font-semibold mb-6 text-blue-base">
              <span className="text-orange-base">Paket-C Gratis</span>{' '}
              menyediakan berbagai sumber daya untuk membantu pengajar
              menciptakan
              <span className="text-orange-base">
                {' '}
                materi ajar yang sesuai dengan standar kami
              </span>
              , yaitu:
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <ResourceCard
                title="Panduan dan Tutorial"
                description="Tersedia panduan dan tutorial bagi Calon pengajar KG agar familiar dengan penggunaan komputer, internet, dan platform pembelajaran. Panduan dan Tutorial juga mencakup bagaimana membuat materi pembelajaran yang menarik dan terstruktur. Isi lain nya mencakup bagaimana membuat presentasi, video penjelasan, dan dokumen pendukung dalam format digital. Manajemen kelas online juga harus diperhatikan, termasuk disiplin waktu, evaluasi siswa, dan memberikan umpan balik konstruktif. Keterampilan komunikasi yang efektif dan kemampuan membangun keterlibatan siswa juga sangat krusial. Pengajar KG perlu menggunakan bahasa yang jelas dan padat, serta melibatkan siswa dalam diskusi interaktif. Motivasi dan kegiatan interaktif seperti kuis dan diskusi kelompok dapat meningkatkan keterlibatan siswa. Pengembangan profesional melalui pelatihan, sertifikasi, dan jaringan dengan komunitas Pengajar KG juga penting untuk meningkatkan kualitas pengajaran. "
                src="https://picsum.photos/500/500"
              />
              <ResourceCard
                title="Sumber Materi Ajar"
                description="Fasilitas sumber materi ajar sangat penting untuk mendukung pembelajaran yang efektif dan menarik. Pengajar membutuhkan akses ke buku digital, artikel, jurnal, video, dan modul interaktif. Platform memudahkan pengunggahan dan pembagian materi ajar, sementara perpustakaan digital dan repositori online menyediakan referensi terbaru. Selain itu, pengajar dapat memanfaatkan komunitas profesional dan jaringan kolaboratif untuk berbagi dan mengembangkan materi ajar. Forum diskusi, grup media sosial, dan webinar memungkinkan pertukaran ide dan pengalaman. Platform KG menyediakan referensi untuk membuat materi ajar sendiri, seperti kuis interaktif dan presentasi multimedia. Dengan memanfaatkan berbagai sumber dan kolaborasi, proses pembelajaran dapat menjadi lebih efektif dan sesuai dengan kebutuhan siswa."
                src="https://picsum.photos/500/500"
              />
              <ResourceCard
                title="Perekaman Video Ajar"
                description="Fasilitas perekaman video ajar sangat penting bagi pengajar dalam menyampaikan materi secara efektif dan menarik. Pengajar memerlukan peralatan yang memadai seperti studio, kamera berkualitas, mikrofon yang baik, dan pencahayaan yang cukup untuk memastikan video yang dihasilkan jelas dan profesional. Banyak platform pembelajaran online menyediakan alat untuk merekam dan mengedit video, yang memungkinkan pengajar merekam layar komputer mereka, menambahkan narasi, dan menyertakan anotasi atau highlight penting. Selain peralatan, Staff KG membantu pengajar untuk melakukan editing video untuk memperbaiki kualitas video, menambahkan efek visual, dan menyisipkan materi tambahan seperti slide presentasi atau gambar, membantu pengajar menghasilkan video ajar berkualitas tinggi. Dengan fasilitas perekaman dan editing yang tepat, pengajar dapat membuat video yang lebih menarik dan mudah dipahami oleh siswa, sehingga meningkatkan efektivitas pembelajaran."
                src="https://picsum.photos/500/500"
              />
            </div>
            <p className="mt-6 text-center text-gray-700">
              Gunakan sumber daya yang kami sediakan untuk membantu kamu
              menciptakan materi ajar yang berkualitas tinggi dan menarik! Jika
              kamu ingin menjadi pengajar di Paket-C Gratis dan membantu kami
              menyediakan materi ajar berkualitas tinggi bagi para peserta
              didik, silahkan mendaftar{' '}
              <Link
                href={'/register'}
                className="text-blue-base font-semibold hover:underline"
              >
                di sini
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const ResourceCard = ({
  title,
  description,
  src,
}: {
  title: string;
  description: string;
  src: string;
}) => (
  <div className="flex flex-col items-center bg-white rounded-xl shadow-md overflow-hidden border">
    <div className="w-full h-48 p-4">
      <Image
        src={src}
        className="w-full h-full object-cover rounded-lg"
        alt={title}
        width={500}
        height={500}
      />
    </div>
    <div className="p-6 pt-0">
      <h3 className="text-lg font-semibold mb-2 text-blue-base">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

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

import Image from 'next/image';

export default function PenjadwalanPenugasanModule() {
  return (
    <div className="space-y-8 min-h-[calc(100vh-10rem)]">
      <div className="relative w-full h-[700px] md:h-[400px] bg-[url('/images/banner-pattern.png')] bg-cover bg-center bg-no-repeat">
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center gap-8 flex-col md:flex-row px-8">
          <Image
            src="/images/mega-menu/consent.png"
            alt="Kampus-Gratis"
            width={250}
            height={250}
          />
          <div className="lg:max-w-xl space-y-2">
            <h1 className="text-3xl font-bold text-yellow-base">
              Penjadwalan dan Penugasan
            </h1>
            <div className="space-y-2">
              <p className="text-white">
                Penjadwalan dan penugasan adalah proses penting dalam memberikan
                pendidikan yang berkualitas. Penjadwalan dan penugasan akan
                memudahkan pengajar dalam menentukan waktu dan materi yang akan
                diajarkan.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-12 max-w-[1440px] mx-auto p-8 pt-0">
        <div className="space-y-4 text-center max-w-[768px] mx-auto">
          <h2 className="text-3xl font-bold text-blue-base">
            Penjadwalan dan Penugasan{' '}
            <span className="text-orange-base"> Relawan Pengajar</span>
          </h2>
          <p className="text-neutral-700">
            Pengajar akan bekerja sama dengan tim kami untuk menjadwalkan kelas
            dan menetapkan tugas. Kami menggunakan sistem manajemen jadwal yang
            memungkinkan pengajar dan siswa untuk dengan mudah mengakses
            informasi tentang kelas dan penugasan.
          </p>
        </div>
      </div>
    </div>
  );
}

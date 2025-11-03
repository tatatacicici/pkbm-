import Image from 'next/image';

export default function SeleksiVerifikasiModule() {
  return (
    <div className="space-y-8">
      <div className="relative w-full h-[700px] md:h-[400px] bg-[url('/images/banner-pattern.png')] bg-cover bg-center bg-no-repeat">
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center gap-8 flex-col md:flex-row px-8">
          <Image
            src="/images/mega-menu/interview.png"
            alt="Kampus-Gratis"
            width={250}
            height={250}
          />
          <div className="lg:max-w-xl space-y-2">
            <h1 className="text-3xl font-bold text-yellow-base">
              Seleksi dan Verifikasi
            </h1>
            <div className="space-y-2">
              <div className="">
                <p className=" text-white font-semibold">
                  Proses Seleksi dan Verifikasi Relawan Pengajar di Kampus
                  Gratis
                </p>
              </div>
              <p className="text-white">
                Terima kasih atas minat kamu untuk Menjadi Pengajar di Kampus
                Gratis! Kami berkomitmen untuk menghadirkan pengajar terbaik dan
                terpercaya bagi para peserta didik di platform kami.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-12 max-w-[1200px] mx-auto p-8">
        <div className="flex gap-12 flex-col md:flex-row">
          <div className="w-full">
            <h1 className="text-3xl font-bold mb-4">Tahap Seleksi</h1>
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">
                a. Peninjauan Formulir Pendaftaran
              </h2>
              <p className="mb-4 ml-6">
                Kami akan meninjau formulir pendaftaran kamu untuk memastikan
                bahwa kamu memenuhi semua persyaratan yang telah ditetapkan.
              </p>
              <h2 className="text-xl font-semibold mb-2">b. Seleksi Berkas</h2>
              <p className="mb-4 ml-6">
                Kami akan mengevaluasi CV dan dokumen lain kamu untuk mengetahui
                pengalaman dan kualifikasi kamu menjadi pengajar.
              </p>
              <h2 className="text-xl font-semibold mb-2">
                c. Tes Kemampuan Mengajar
              </h2>
              <p className="mb-4 ml-6">
                Jika kamu lolos melewati seleksi berkas, kamu akan diminta untuk
                mengikuti tes kemampuan mengajar dengan mengumpulkan video atau
                demo mengajar kalian.
              </p>
              <h2 className="text-xl font-semibold mb-2">d. Wawancara</h2>
              <p className="mb-4 ml-6">
                Setelah itu, kamu akan diundang untuk mengikuti wawancara untuk
                lebih mengenal dan memastikan bahwa kamu cocok untuk menjadi
                pengajar di Paket-C Gratis.
              </p>
            </div>
          </div>
          <div className="w-full">
            <h1 className="text-3xl font-bold mb-4">Tahap Verifikasi</h1>
            <div className="mb-6">
              <p className="mb-4">
                Setelah anda lolos semua tahap seleksi, tim kami akan melakukan
                verifikasi data dan dokumen kamu untuk memastikan keaslian
                informasi yang telah dikumpulkan.
              </p>
              <p className="mb-4">
                Proses seleksi dan verifikasi pengajar memakan waktu sekitar{' '}
                <strong>2-4 minggu</strong>. Kami akan memberitahukan hasil
                seleksi melalui email atau whatsapp secepat mungkin.
              </p>
              <p className="mb-4">
                Kami berharap informasi ini bermanfaat bagi kamu dan jika
                memiliki pertanyaan tentang proses seleksi dan verifikasi
                pengajar, silahkan hubungi kami melalui email
                <a
                  href="mailto:info@kampusgratis.id"
                  className="text-blue-500 font-semibold"
                >
                  {' '}
                  info@kampusgratis.id{' '}
                </a>
                dan whatsapp{' '}
                <span className="font-semibold text-blue-500 block">
                  +62-851-8300-4001
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

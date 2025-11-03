import Image from 'next/image';

export default function IklanSponsorshipModules() {
  return (
    <section>
      <div className="container mx-auto flex items-center justify-center min-h-[calc(100vh-10rem)]">
        <div className="max-w-5xl mx-auto bg-white p-8 rounded">
          <h1 className="text-5xl text-center font-bold mb-1 text-blue-base">
            Iklan
            <span className="text-orange-base"> dan Sponsorhip</span>
          </h1>
          <div className="w-full flex flex-col md:flex-row gap-8 mt-8 items-center">
            <div className="rounded-2xl shadow-lg p-8 w-full space-y-4 font-[500] text-base">
              <p className="text-blue-base font-bold text-lg">
                Iklan <span className="text-orange-base"> dan Sponsorship</span>
              </p>
              <p className="font-semibold">
                Paket-C Gratis menyadari pentingnya kemitraan yang kuat guna
                mendukung visi dan misi kami. KG menawarkan berbagai kesempatan
                iklan dan sponsorship, yang bermanfaat bagi semua pihak yang
                berkepentingan, serta mendukung pencapaian tujuan kami.
              </p>
              <p>
                <span className="text-blue-base font-bold block">Iklan </span>
                Kami menawarkan berbagai opsi iklan di situs web dan aplikasi
                mobile KG, guna meningkatkan eksposur merek Anda . Dengan lalu
                lintas situs web yang tinggi dan demografis yang beragam, kami
                yakin iklan di situs kami akan memberikan nilai tambah bagi
                kampanye pemasaran Anda.
              </p>
              <p>
                Opsi iklan yang tersedia termasuk banner, teks iklan, dan iklan
                yang disesuaikan dengan konten. Kami juga menyediakan laporan
                analitik reguler untuk memberikan wawasan tentang kinerja iklan
                Anda.
              </p>
              <p>
                <span className="text-blue-base font-bold block">
                  Sponsorship{' '}
                </span>
                Kami juga menyambut kemitraan sponsorship dengan perusahaan atau
                organisasi yang ingin mendukung kegiatan dan program KG.
                Sponsorship mencakup berbagai bentuk, termasuk sponsor acara,
                sponsor konten, atau sponsor program khusus.
              </p>
              <p>
                Sebagai sponsor, Anda akan mendapatkan visibilitas yang
                signifikan di berbagai platform kami, termasuk situs web,
                aplikasi mobile, media sosial, dan acara KG. Kami berkomitmen
                untuk bersama , menciptakan manfaat yang sesuai, dengan tujuan
                pemasaran dan merek Anda.
              </p>
            </div>
            <div className="w-full space-y-2">
              <Image
                src={'/images/mega-menu/part-time.svg'}
                width={350}
                height={350}
                alt="Part Time"
                className="mx-auto"
              />
              <div className="text-center">
                <p className="text-blue-base font-semibold">
                  <span className="text-orange-base">
                    Terima kasih atas minat dan dukungan Anda terhadap Kampus
                    Gratis.{' '}
                  </span>
                  Kami berharap, bersama kita dapat menjalin kemitraan yang
                  saling menguntungkan dan berkelanjutan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

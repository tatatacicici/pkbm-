import Image from 'next/image';

const GlimpseSection = () => {
  return (
    // <section className="bg-blue-base w-full mt-5 text-white px-8 md:px-16 2xl:px-8 py-5 lg:py-10">
    <section className="bg-sky-base w-full mt-5 text-white px-8 md:px-16 2xl:px-8 py-5 lg:py-10">
      <div className="lg:flex mx-auto max-w-[1440px]">
        <div className="w-full lg:w-1/2 py-5 lg:py-20">
          <h1 className="text-4xl font-bold">Tentang Paket C</h1>
          <p className="pt-6 font-medium text-lg">
            Paket C adalah program pendidikan yang setara dengan jenjang Sekolah
            Menengah Atas (SMA), bagi Anda yang tidak sempat menyelesaikan
            pendidikan tingkat SMA melalui jalur formal. Paket C diselenggarakan
            oleh Pusat Kegiatan Belajar Masyarakat (PKBM) atau lembaga
            pendidikan nonformal lainnya yang diakui pemerintah.
          </p>
          <p className="pt-6 font-medium text-lg">
            Setelah lulus, peserta didik mendapatkan ijazah yang setara dengan
            SMA. Ijazah ini dapat digunakan untuk melanjutkan ke perguruan
            tinggi atau memasuki dunia kerja. Program ini memberikan kebebasan
            bagi peserta didik atau mereka yang memiliki keterbatasan waktu
            untuk mengikuti pendidikan formal seperti karyawan.
          </p>
          {/* <p className="pt-6">
            Setelah menyelesaikan program Paket C, lulusan memiliki peluang yang
            sama dengan lulusan SMA dalam berbagai aspek kehidupan. Mereka dapat
            melanjutkan pendidikan ke jenjang yang lebih tinggi, baik di
            universitas, akademi, atau sekolah kejuruan sesuai dengan minat dan
            kemampuan mereka. Selain itu, ijazah Paket C juga dapat digunakan
            untuk melamar pekerjaan di berbagai sektor yang mensyaratkan lulusan
            SMA.
          </p>
          <p className="pt-6">
            Dengan berbagai keuntungan yang ditawarkan, Paket C menjadi solusi
            alternatif yang efektif bagi mereka yang ingin mengejar impian dan
            meningkatkan taraf hidup melalui pendidikan.
          </p> */}
        </div>
        {/* <div className="w-full lg:w-1/2 flex justify-center items-center py-14"> */}
        <div className="w-full lg:w-1/2 flex justify-center items-center ">
          <Image
            width={0}
            height={0}
            src="/images/glimpse-image-landing-page-new.png"
            // src="/images/glimpse-image.png"
            alt="Glimpse Image Landing Page"
            sizes="100vw"
            style={{ width: '550px', height: 'full' }}
            // style={{ width: '500px', height: 'full' }}
          />
        </div>
      </div>
    </section>
  );
};

export default GlimpseSection;

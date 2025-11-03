import Image from 'next/image';

export default function KGPodcastModule() {
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
            <h1 className="text-3xl font-bold text-yellow-base">KG-Podcast</h1>
            <div className="space-y-2">
              <p className="text-white">
                Edukasi Tak Terbatas: Pelajari Apa Saja dan Dimana Saja
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-12 max-w-[1440px] mx-auto p-8 pt-0">
        <div className="space-y-4 text-center max-w-[768px] mx-auto">
          <h2 className="text-3xl font-bold text-blue-base">
            KG
            <span className="text-orange-base"> Podcast</span>
          </h2>
          <p className="text-neutral-700">
            Hai para pembelajar! Bosan dengan cara belajar yang itu-itu saja?
            Ingin mendapatkan ilmu baru yang bermanfaat dan mudah di akses?
            Tingkatkan wawasan kamu dengan Podcast Edukasi dari Paket-C Gratis!
            Edukasi Tak Terbatas menghadirkan berbagai topik menarik dan relevan
            dengan kebutuhanmu mulai dari pengembangan diri, soft skills, hingga
            ilmu pengetahuan umum.
          </p>
          <p className="text-neutral-700">
            Podcast Edukasi Paket-C Gratis menjadi sarana utama dalam penyediaan
            berbagai topik edukasi, teknologi, dan perkuliahan secara mendalam.
            Podcast ini juga memberikan akses GRATIS kepada masyarakat luas
            untuk mengikuti perkembangan terkini dalam dunia pendidikan dan
            teknologi. Tunggu apa lagi? Ayo mulai dengarkan Podcast Kampus
            Gratis sekarang!
          </p>
        </div>
      </div>
    </div>
  );
}

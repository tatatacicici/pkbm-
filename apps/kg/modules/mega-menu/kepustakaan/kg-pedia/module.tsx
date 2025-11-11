import Image from 'next/image';

export default function KGPediaModule() {
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
            <h1 className="text-3xl font-bold text-yellow-base">KG-Pedia</h1>
            <div className="space-y-2">
              <p className="text-white">
                KG-Pedia adalah ensiklopedia daring yang berisi informasi
                tentang pendidikan, teknologi, dan kesehatan. KG-Pedia
                menyediakan informasi yang akurat dan terpercaya untuk membantu
                masyarakat dalam memahami berbagai topik yang berkaitan dengan
                pendidikan, teknologi, dan kesehatan.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-12 max-w-[1440px] mx-auto p-8 pt-0">
        <div className="space-y-4 text-center max-w-[768px] mx-auto">
          <h2 className="text-3xl font-bold text-blue-base">
            KG
            <span className="text-orange-base"> Pedia</span>
          </h2>
          <p className="text-neutral-700">
            Tetap Update dengan Pengetahuan Terbaru dengan KG - pedia di Kampus
            Gratis! Tetap up-to-date dengan fitur KG - Pedia yang menyediakan
            artikel informatif dan terbaru dari berbagai topik seperti
            perkembangan dunia pendidikan, perkuliahan, dan teknologi saat ini.
            Kami menghadirkan artikel-artikel terbaru dari berbagai sumber
            terpercaya yang dikurasi dan diolah menjadi format yang menarik.
            Jelajahi KG - Pedia dan menemukan pengetahuan baru setiap hari!
            Manfaatkan KG - Pedia untuk meningkatkan wawasan dan bagikan dengan
            teman serta koleg kalian!
          </p>
        </div>
      </div>
    </div>
  );
}

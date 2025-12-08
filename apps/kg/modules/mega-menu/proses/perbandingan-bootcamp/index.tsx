import Image from 'next/image';

export default function PerbandinganBootcampModules() {
  type comparisonPoint = {
    title: string;
    self: string;
    others: string;
  };

  const comparisonBootcamp: comparisonPoint[] = [
    {
      title: '1. Biaya Gratis, Tanpa Biaya Tersembunyi',
      self: 'Kami menawarkan program pendidikan tanpa biaya, memungkinkanmu fokus belajar tanpa khawatir tentang biaya pendidikan.',
      others:
        'Banyak pelatihan memerlukan biaya yang tinggi dan terkadang memiliki biaya tersembunyi yang tidak diantisipasi.',
    },
    {
      title: '2. Kurikulum Komprehensif dan Up-to-Date',
      self: 'Kurikulum kami dirancang oleh para ahli dan terus diperbarui untuk mengikuti tren industri terbaru.',
      others:
        'Beberapa pelatihan mungkin memiliki kurikulum yang kurang terupdate, sehingga kurang relevan dengan kebutuhan industri saat ini.',
    },
    {
      title: '3. Fleksibilitas Pembelajaran',
      self: 'Belajar kapan saja dan di mana saja dengan program online kami yang fleksibel.',
      others:
        'Banyak pelatihan memiliki jadwal yang kaku dan kurang fleksibel, menyulitkan untuk menyesuaikan dengan kehidupan sehari-hari.',
    },
    {
      title: '4. Dukungan Karir yang Luar Biasa',
      self: 'Kami menyediakan layanan dukungan karir yang komprehensif, termasuk bimbingan karir, workshop persiapan wawancara, dan penulisan CV.',
      others:
        'Tidak semua pelatihan menawarkan dukungan karir yang memadai untuk membantu siswa mempersiapkan diri menghadapi pasar kerja.',
    },
    {
      title: '5. Jaringan Alumni yang Kuat',
      self: 'Bergabung dengan komunitas alumni yang aktif dan mendukung, membantu memperluas jaringan profesionalmu.',
      others:
        'Beberapa pelatihan mungkin tidak memiliki jaringan alumni yang solid, mengurangi kesempatanmu untuk berkolaborasi dan belajar dari sesama lulusan.',
    },
  ];

  return (
    <div className="space-y-12">
      <div className="relative w-full h-[700px] md:h-[400px] bg-[url('/images/banner-pattern-new.svg')] bg-cover bg-center bg-no-repeat">
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center gap-8 flex-col md:flex-row px-8">
          <Image
            src="/images/mega-menu/part-time.svg"
            alt="Paket-C Gratis"
            width={250}
            height={250}
          />
          <div className="lg:max-w-xl space-y-2 text-center md:text-left">
            <h1 className="text-3xl font-bold text-white">
              Perbandingan <span className="text-yellow-base">Pelatihan</span>
            </h1>
            <p className="text-white font-semibold">
              Mengapa memilih Paket-C Gratis?
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto px-8 pt-0">
        <h2 className="text-2xl font-semibold text-center text-sky-base mb-10">
          Alasan Pelatihan Paket-C Gratis Lebih Unggul
          <span className="text-orange-base"> dari Pelatihan Lainnya</span>
        </h2>
        <div className="space-y-8">
          {comparisonBootcamp.map((point, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-6 shadow hover:shadow-md transition-all bg-white"
            >
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                {point.title}
              </h3>
              <div className="grid md:grid-cols-2 gap-6 text-sm md:text-base">
                <div>
                  <p className="text-green-700 font-semibold mb-1">
                    Paket-C Gratis:
                  </p>
                  <p className="text-gray-700">{point.self}</p>
                </div>
                <div>
                  <p className="text-red-700 font-semibold mb-1">
                    Pelatihan Lain:
                  </p>
                  <p className="text-gray-700">{point.others}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center my-10">
          <a className="w-full max-w-sm" href="/bootcamp">
            <button className="w-full bg-sky-base rounded-md p-2 text-white font-semibold border-2 border-sky-base hover:bg-sky-base/90 hover:border-sky-base/90 transition-all">
              Daftar Pelatihan
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

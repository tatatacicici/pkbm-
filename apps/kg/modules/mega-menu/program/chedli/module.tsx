import Image from 'next/image';

export default function ChedliModule() {
  return (
    <div className="space-y-8">
      <div className="relative w-full h-[700px] md:h-[400px] bg-[url('/images/banner-pattern.png')] bg-cover bg-center bg-no-repeat">
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center gap-8 flex-col md:flex-row px-8">
          <Image
            src="/images/mega-menu/consulting.png"
            alt="Kampus-Gratis"
            width={250}
            height={250}
          />
          <div className="lg:max-w-xl space-y-2">
            <h1 className="text-3xl font-bold text-white">
              Center for Higher Education and{' '}
              <span className="text-yellow-base block">
                Digital Learning Improvement (CHEDLI)
              </span>
            </h1>
            <div className="space-y-2">
              <div className="">
                <p className=" text-white font-semibold">
                  Edukasi Tak Terbatas: Pelajari Apa Saja dan Dimana Saja
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-12 max-w-[1200px] mx-auto p-8">
        <div className="">
          <h1 className="text-3xl font-bold mb-4 text-blue-base">
            Tentang
            <span className="text-orange-base"> CHEDLI</span>
          </h1>
          <div className="mb-6">
            <p className="mb-4">
              Dalam rangka upaya pencapaian visi KampusGratis.id (KG) sebagai
              pusat pembelajaran dan pendidikan tinggi terapan di Indonesia, KG
              mengambil langkah strategis untuk memberikan kontribusi pada
              pengembangan pengetahuan di bidang ekonomi dan bisnis. Salah satu
              dari langkah strategis tersebut adalah dengan membentuk “Center
              for Higher Education and Digital Learning Improvement” (CHEDLI)
              guna mengakselerasi peningkatan kapasitas dan kualitas pendidikan
              tinggi di Indonesia.
            </p>
          </div>
        </div>
        <div className="">
          <p className="mb-4">
            <span className="font-bold text-blue-base">CHEDLI KG</span>{' '}
            diresmikan pada tanggal 18 April 2024. Tujuan pembentukan CHEDLI KG
            ini secara khusus adalah agar tercipta perbaikan kualitas
            pendidikan, pembelajaran, dan pengajaran pedidikan tinggi di
            Indonesia secara berkesinambungan, melalui keterlibatan seluruh
            pemangku kepentingan (stakeholders) dalam mendorong percepatan KG
            mewujudkan pencapaian Indonesia Gemilang 2045.
          </p>
        </div>
        <div className="">
          <h1 className="text-3xl font-bold mb-4 text-blue-base">
            Visi
            <span className="text-orange-base"> CHEDLI</span>
          </h1>
          <div className="mb-6">
            <p className="mb-4">Menjadi mitra program studi di KG dalam:</p>
            <ul className="list-disc list-inside">
              <li>
                Mengembangkan dan memutakhirkan desain pembelajaran mata kuliah;
              </li>
              <li>
                Mengembangkan kulitas MOOCs (Massive Open Online Courses);
              </li>
              <li>Mengembangkan desain dan isi kurikulum;</li>
              <li>Mengelola dan mengembangkan mata kuliah wajib fakultas.</li>
              <li>
                Mengembangkan kemampuan pedagogi dosen dan kapasitas dosen dalam
                mengelola kelas (class management) secara daring maupun luring.
              </li>
              <li>
                Menjadi mitra departemen di KG dalam menyelenggarakan academic
                refreshing serta industrial and community engagement bagi dosen
              </li>
            </ul>
          </div>
        </div>
        <div className="">
          <h1 className="text-3xl font-bold mb-4 text-blue-base">
            Misi
            <span className="text-orange-base"> CHEDLI</span>
          </h1>
          <div className="mb-6">
            <p className="mb-4">
              Meningkatkan kapasitas dan kualitas pendidikan tinggi di Indonesia
              melalui:
            </p>
            <ul className="list-disc list-inside">
              <li>
                Pengembangan dan penyelenggaraan MOOCs berkredit dan tidak
                berkredit.
              </li>
              <li>
                Pengembangan video pembelajaran dalam MOOCs dan Youtube KG.
              </li>
              <li>Penyusunan Studi Kasus untuk pembelajaran mata kuliah.</li>
              <li>
                Penyelenggaraan pelatihan/webinar untuk pengembangan kapasitas
                belajar-mengajar dosen
              </li>
              <li>
                Penyelenggaraan Program Relawan Praktisi dan Dosen Berbagi Ilmu.
              </li>
              <li>
                Pengembangan solusi Artificial Intelligence bagi penyelenggara
                pendidikan tinggi di Indonesia.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

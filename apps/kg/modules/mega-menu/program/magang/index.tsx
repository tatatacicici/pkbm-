import { BaseLayout } from 'apps/kg/components';
import Image from 'next/image';
import Link from 'next/link';

export default function MagangModules() {
  return (
    <section>
      <div className="container mx-auto min-h-full flex items-center min-h-[calc(100vh-10rem)]">
        <div className="max-w-5xl mx-auto bg-white p-8 rounded">
          <h1 className="text-5xl text-center font-bold mb-1 text-blue-base">
            Program
            <span className="text-orange-base"> Magang</span>
          </h1>
          <div className="w-full flex flex-col-reverse gap-8 mt-8 items-center">
            <div className="rounded-2xl shadow-lg p-8 w-full space-y-4 font-[500] text-base">
              <p className="text-blue-base font-bold text-lg">
                Apa itu Program
                <span className="text-orange-base"> Magang</span> ?
              </p>
              <p>
                Bagi Kamu yang ingin merasakan langsung, bagaimana bekerja
                disebuah perusahaan. Bagi kalian, mahasiswa dan lulusan yang
                ingin mendapatkan pengalaman bekerja serta meningkatkan
                kemampuan diri, Ada banyak bidang yang bisa kamu ambil dalam
                program magang, dan tentunya kamu bebas untuk memilih sesuai
                dengan kemampuan yang kamu miliki.
              </p>
              <p>
                Paket-C Gratis menyediakan fitur tracking kinerja magang dan
                konversi SKS. Perusahaan dan mahasiswa dapat menggunakan fitur
                ini, khususnya mereka yang mendaftar di Magang Mandiri MSIB
                Kampus Merdeka, sedemikian sehingga kualitas kerja dan
                pengalaman pembinaan akan terekam dengan baik.
              </p>
              <p>
                Kamu bisa memilih program magang selama 1, 2, 3 ,4,5 atau 6
                bulan. Kamu juga dapat memilih bekerja secara offline, online,
                atau hybrid. Terdapat opsi kerja 2,3,4 dan 5 hari dalam
                seminggu. Semua tersedia dalam listing dan opening dari
                perusahaan mitra kami. Perhatikan, tidak semua program magang
                mendapat uang saku dan subsidi biaya relokasi.
              </p>
              <p>
                Bila ingin dikonversi SKS, Kamu diwajibkan untuk mengisi time
                sheet, lesson learned, dan di uji kompetensi dan output kerjanya
                di akhir proses magang.
              </p>
              <p className="text-blue-base font-semibold">
                Untuk kamu yang ingin bergabung dengan program magang kami, kamu
                bisa mendaftar di
                <Link href="/" className="font-bold text-orange-base">
                  {' '}
                  KampusGratis.id
                </Link>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

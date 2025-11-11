import { BaseLayout } from 'apps/kg/components';
import Image from 'next/image';
import Link from 'next/link';

export default function PartTimeModules() {
  return (
    <section>
      <div className="container mx-auto flex items-center justify-center min-h-[calc(100vh-10rem)]">
        <div className="max-w-5xl mx-auto bg-white p-8 rounded">
          <h1 className="text-5xl text-center font-bold mb-1 text-blue-base">
            Kerja
            <span className="text-orange-base"> Part Time</span>
          </h1>
          <div className="w-full flex flex-col md:flex-row gap-8 mt-8 items-center">
            <div className="rounded-2xl shadow-lg p-8 w-full space-y-4 font-[500] text-base">
              <p className="text-blue-base font-bold text-lg">
                Apa itu Kerja
                <span className="text-orange-base"> Part Time</span> ?
              </p>
              <p>
                Merupakan program KampusGratis.id untuk kamu mendapatkan
                penghasilan tambahan. Kamu bisa bekerja dengan waktu yang
                fleksibel, dan mendapatkan penghasilan tambahan, dan ini bisa di
                konversi SKS nya !!
              </p>
              <p>
                Kerja part-time kami menawarkan berbagai posisi, waktu kerja,
                tipe kerja (offline, online, hybrid), besar penghasilan, dan
                jenis pelaporan.
              </p>
              <p>
                Bila ingin dikonversi SKS, Kamu diwajibkan untuk mengisi time
                sheet, lesson learned, dan di uji kompetensi dan output
                kerjanya.
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
                  Segera daftar program kerja Part Time melalui
                  <Link href="/" className="font-bold text-orange-base">
                    {' '}
                    KampusGratis.id
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { BaseLayout } from 'apps/kg/components';
import Image from 'next/image';
import Link from 'next/link';

export default function KomunitasModules() {
  return (
    <section>
      <div className="container mx-auto flex items-center justify-center min-h-[calc(100vh-10rem)]">
        <div className="max-w-5xl mx-auto bg-white p-8 rounded">
          <h1 className="text-5xl text-center font-bold mb-1 text-blue-base">
            Komunitas
            <span className="text-orange-base"> Alumni</span>
          </h1>
          <div className="w-full flex flex-col md:flex-row gap-8 mt-8 items-center">
            <div className="rounded-2xl shadow-lg p-8 w-full space-y-4 font-[500] text-base">
              <p className="text-blue-base font-bold text-lg">
                Apa yang Anda dapatkan dari
                <span className="text-orange-base"> Komunitas Alumni</span> ?
              </p>
              <p>
                <span className="font-semibold">Jaringan yang Kuat - </span>
                Temukan dan terhubung kembali dengan sesama alumni dari berbagai
                jurusan dan tahun kelulusan. Jaringan ini bisa menjadi sumber
                inspirasi, peluang bisnis, atau bahkan persahabatan seumur
                hidup.
              </p>
              <p>
                <span className="font-semibold">Berbagi pengalaman - </span>
                Bagikan pengalaman Anda setelah keluar dari sekolah kepada
                alumni lainnya.Ceritakan kisah sukses Anda, tantangan yang Anda
                hadapi, dan pelajaran yang telah Anda pelajari di dunia nyata.
              </p>
              <p>
                <span className="font-semibold">Acara dan pertemuan - </span>
                Ikuti acara, pertemuan, dan kegiatan sosial yang diselenggarakan
                oleh komunitas alumni kami. Ini adalah kesempatan yang bagus
                untuk bertemu secara langsung, berdiskusi, dan memperluas
                jaringan Anda.
              </p>
              <p>
                <span className="font-semibold">Bantuan Karier - </span>
                Dapatkan akses ke sumber daya dan dukungan karier melalui
                komunitas alumni.
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

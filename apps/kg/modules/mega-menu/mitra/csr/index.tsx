import { BaseLayout } from 'apps/kg/components';
import Image from 'next/image';
import Link from 'next/link';

export default function CSRModules() {
  return (
    <section>
      <div className="container mx-auto flex items-center justify-center min-h-[calc(100vh-10rem)]">
        <div className="max-w-5xl mx-auto bg-white p-8 rounded">
          <h1 className="text-5xl text-center font-bold mb-1 text-blue-base">
            CSR -
            <span className="text-orange-base">
              {' '}
              Corporate Social Responsibility
            </span>
          </h1>
          <div className="w-full flex flex-col md:flex-row gap-8 mt-8 items-center">
            <div className="rounded-2xl shadow-lg p-8 w-full space-y-4 font-[500] text-base">
              <p className="text-blue-base font-bold text-lg">
                Membangun Masyarakat Berkelanjutan
                <span className="text-orange-base"> di Era Digital</span>
              </p>
              <p className="font-semibold">
                Selamat datang di Paket-C Gratis! Di tengah-tengah perubahan
                global dan tuntutan etika yang semakin meningkat, semakin banyak
                perusahaan yang memperhatikan tanggung jawab sosial mereka.
              </p>
              <p>
                Bersama Kampusgratis.id, perusahaan dapat melakukan program CSR
                berupa membantu menciptakan satu sarjana di tiap keluarga. Satu
                pekerja kantoran di tiap rumah.
              </p>
              <p>
                Perusahaan dapat berkontribusi dengan menyediakan peralatan
                komputer, subsidi fasilitas internet, membiayai konversi SKS,
                memberikan uang saku bulanan, mengakomodir mentoring dan magang
                bagi masyarakat di daerah sasaran.
              </p>
              <p>
                Dengan biaya yang tepat guna, team kami akan mendampingi proses
                pendidikan mulai dari penerimaan hingga upacara wisuda di daerah
                target CSR.
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
                    Mari bersama mewujudkan visi{' '}
                  </span>
                  satu sarjana di tiap keluarga, satu pekerja kantoran di tiap
                  rumah.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

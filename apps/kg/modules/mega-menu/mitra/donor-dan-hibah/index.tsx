import Image from 'next/image';

export default function DonorHibahModules() {
  return (
    <section>
      <div className="container mx-auto flex items-center justify-center min-h-[calc(100vh-10rem)]">
        <div className="max-w-5xl mx-auto bg-white p-8 rounded">
          <h1 className="text-5xl text-center font-bold mb-1 text-blue-base">
            Donor
            <span className="text-orange-base"> dan Hibah</span>
          </h1>
          <div className="w-full flex flex-col md:flex-row gap-8 mt-8 items-center">
            <div className="rounded-2xl shadow-lg p-8 w-full space-y-4 font-[500] text-base">
              <p className="text-blue-base font-bold text-lg">
                Donor dan Hibah -{' '}
                <span className="text-orange-base"> Grant</span>
              </p>
              <p className="font-semibold">
                Selamat datang di halaman informasi tentang Donor dan Hibah.
                Paket-C Gratis memahami betapa pentingnya peran Donor dan Hibah
                dalam mendukung misi dan visi kami untuk mencapai perubahan
                positif dalam masyarakat. Kami berkomitmen untuk menjaga
                transparansi dan akuntabilitas dalam penggunaan dana yang kami
                terima.
              </p>
              <p>
                <span className="text-blue-base font-bold">Donor </span>
                adalah individu, lembaga, atau perusahaan yang memberikan
                sumbangan atau kontribusi keuangan kepada kami. Sumbangan ini
                bisa berupa uang tunai, aset, atau bantuan dalam bentuk lainnya.
                Kami sangat menghargai kontribusi dari setiap donor dan
                memastikan bahwa dana yang diterima digunakan dengan bijaksana
                dan sesuai dengan tujuan yang telah ditetapkan.
              </p>
              <p>
                Jika Anda memiliki program
                <span className="text-blue-base font-bold"> Hibah</span> yang
                ingin ditawarkan kepada kami atau ingin berkolaborasi dalam
                proyek-proyek tertentu, jangan ragu untuk menghubungi kami. Kami
                selalu terbuka untuk menjalin kemitraan yang saling
                menguntungkan untuk mencapai dampak positif yang lebih besar
                dalam masyarakat.
              </p>
              <p>
                <span className="text-blue-base font-bold">
                  Keterbukaan dan Transparansi{' '}
                </span>
                Kami mengutamakan keterbukaan dan transparansi dalam semua aspek
                pengelolaan dana, baik itu dari donor maupun hibah. Kami secara
                teratur menyediakan laporan keuangan dan naratif kepada para
                donor dan pihak-pihak yang tertarik untuk mengetahui penggunaan
                dana yang kami terima. Kami percaya bahwa dengan menjaga
                keterbukaan, kami dapat membangun kepercayaan yang kokoh dengan
                para pemangku kepentingan kami.
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
                    Terima kasih atas dukungan dan kepercayaan Anda kepada kami{' '}
                  </span>
                  Bersama-sama, kita bisa menciptakan perubahan positif dalam
                  masyarakat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

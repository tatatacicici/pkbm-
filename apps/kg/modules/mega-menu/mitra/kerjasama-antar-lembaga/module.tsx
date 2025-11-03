import { FaEnvelope } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa6';

export default function KerjasamaAntarLembagaModule() {
  return (
    <div className="space-y-12 min-h-[calc(100vh-10rem)]">
      <div className="relative w-full h-[200px] bg-[url('/images/banner-pattern.png')] bg-cover bg-center bg-no-repeat">
        <div className="absolute top-0 left-0 w-full h-full px-8 flex items-center justify-center">
          <h1 className="text-3xl font-bold text-white text-center">
            Kerja Sama
            <span className="text-yellow-base"> Antar Lembaga</span>
          </h1>
        </div>
      </div>
      <div className="flex gap-8 px-8 max-w-[1440px] mx-auto flex-col md:flex-row">
        <div className="w-full border rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-blue-base">
            Kerjasama
            <span className="text-orange-base"> Antar Lembaga</span>
          </h2>
          <p className="text-gray-600 mt-4">
            Kami menjalin kerjasama dengan berbagai lembaga pendidikan,
            organisasi non-profit, dan institusi pemerintah untuk bersama-sama
            meningkatkan kualitas pendidikan. Kolaborasi ini mencakup
            pengembangan kurikulum, pelatihan pengajar, program magang, serta
            program pertukaran dan penelitian bersama. Dengan bekerja sama, kami
            dapat mencapai dampak yang lebih besar dalam dunia pendidikan.
          </p>
          <p className="text-gray-600 mt-4">
            Kerja Sama Demi Masa Depan Pendidikan yang Lebih Baik!
          </p>
          <p className="text-gray-600 mt-4">
            Di Paket-C Gratis, kami percaya bahwa kolaborasi merupakan kunci
            untuk mencapai kemajuan dalam kualitas pendidikan. Hubungi kami
            untuk kolaborasi peningkatan kualitas pendidikan dan memberikan
            manfaat bagi masyarakat luas.
          </p>
        </div>
        <div className="w-full md:w-2/5 border rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-blue-base">
            Kontak
            <span className="text-orange-base"> Kami</span>
          </h2>
          <p className="text-gray-600 mt-4">
            Jika Anda tertarik untuk bekerja sama dengan kami, silakan hubungi
            kami melalui email atau telepon (Whatsapp) di bawah ini:
          </p>
          <p className="mt-4 flex items-center gap-2">
            <FaEnvelope className="text-blue-base" size={20} />
            <a href="mailto:info@kampusgratis.id" className="text-blue-base">
              info@kampusgratis.id
            </a>
          </p>
          <p className="mt-2 flex items-center gap-2">
            <FaWhatsapp className="text-blue-base" size={22} />
            <a
              href="tel:+6285183004001"
              className="text-blue-base font-mono text-sm"
            >
              +62-851-8300-4001
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

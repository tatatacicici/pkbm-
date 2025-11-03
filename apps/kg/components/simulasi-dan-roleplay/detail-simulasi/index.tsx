import Link from 'next/link';
import TableStatus from '../table-status';

export default function DetailSimulasiContent({
  setIsTake = () => {},
}: {
  setIsTake?: (value: boolean) => void;
}) {
  return (
    <>
      <div className="bg-white rounded-md p-8 w-full shadow-sm">
        <h2 className="text-2xl font-bold">Simulasi Matkul 1</h2>
      </div>
      <div className="bg-white rounded-md p-8 w-full shadow-sm space-y-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-xl font-bold">Studi Kasus</h3>
            <p className="text-gray-600 text-md">
              Resolusi Konflik di Tempat Kerja Dalam tim kerja Anda, terjadi
              konflik antara dua anggota tim, yaitu Alex dan Dana. Alex merasa
              bahwa Dana tidak memberikan kontribusi yang cukup dan merasa
              frustrasi.
            </p>
          </div>
          <p className="text-gray-600 text-md">
            Untuk detailnya klik link dibawah :
          </p>
          <Link href="#" className="text-blue-500 hover:underline">
            https://docs.google.com/spreadsheets
          </Link>
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-bold">Aturan Pengumpulan</h3>
          <ol className="list-decimal list-inside text-gray-600">
            <li>Tugas simulasi roleplay diunggah dalam bentuk link zoom.</li>
            <li>Perhatikan Deadline pengumpulan tugas</li>
            <li>Cek kembali penamaan file dan link dengan benar</li>
          </ol>
        </div>
        <TableStatus />
        <div className="flex justify-end">
          <button
            className="bg-primary-500 text-white px-6 py-2 rounded-md"
            onClick={() => setIsTake(true)}
          >
            Tambah Tugas
          </button>
        </div>
      </div>
    </>
  );
}

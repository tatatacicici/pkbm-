import { IoClose } from 'react-icons/io5';

export default function RulesCardAssesmen({
  setIsOpen,
}: {
  setIsOpen: (value: boolean) => void;
}) {
  return (
    <>
      <div className="flex justify-between items-center">
        <p className="font-bold p-4">Assesmen & Uji Kompetensi</p>
        <IoClose
          className="cursor-pointer mr-6 text-lg"
          onClick={() => setIsOpen(false)}
        />
      </div>
      <div className="border-b-2 border-gray-300 w-full" />
      <p className="text-gray-500 p-4">
        Assessment dilaksanakan oleh Paket-C Gratis untuk mengukur potensi dan
        keterampilan peserta, sementara uji kompetensi diserahkan kepada lembaga
        yang memiliki keahlian khusus dalam menilai kualifikasi sesuai dengan
        standar tertentu.
      </p>
    </>
  );
}

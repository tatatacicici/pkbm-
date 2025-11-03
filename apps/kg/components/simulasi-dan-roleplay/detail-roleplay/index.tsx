import Avatar from 'react-avatar';
import { BiLogoZoom } from 'react-icons/bi';
import { BsCalendar2DateFill } from 'react-icons/bs';
import { FaHourglassHalf } from 'react-icons/fa';
import { MdAccessTimeFilled } from 'react-icons/md';
import TableStatus from '../table-status';

export default function RoleplayDetailContent() {
  return (
    <div className="bg-white rounded-md p-8 w-full shadow-sm space-y-8">
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <Avatar name="Neneng Rohaye S.Kom" size="40" round={true} />
          <div className="">
            <h3 className="text-lg font-bold">Neneng Rohaye S.Kom</h3>
            <p className="text-sm text-grey-500">Pengajar</p>
          </div>
        </div>
        {/* border */}
        <div className="border-b border-grey-200" />
        <div className="space-y-2">
          <h3 className="text-lg font-bold">Studi Kasus</h3>
          <p className="text-grey-500">
            Resolusi Konflik di Tempat Kerja Dalam tim kerja Anda, terjadi
            konflik antara dua anggota tim, yaitu Alex dan Dana. Alex merasa
            bahwa Dana tidak memberikan kontribusi yang cukup dan merasa
            frustrasi.
          </p>
        </div>
        <div className="space-y-2 [&>*]:flex [&>*]:items-center [&>*]:gap-4 [&>*]:text-md">
          <div>
            <FaHourglassHalf size={20} className="text-blue-base" />
            <div className="flex gap-2">
              <h3 className="">Durasi :</h3>
              <p className="text-black/50">60 Menit</p>
            </div>
          </div>
          <div>
            <BiLogoZoom className="text-blue-base" size={20} />
            <div className="flex gap-2">
              <h3 className="">Via :</h3>
              <p className="text-black/50">Zoom</p>
            </div>
          </div>
          <div>
            <BsCalendar2DateFill size={20} className="text-blue-base" />
            <div className="flex gap-2">
              <h3 className="">Tanggal :</h3>
              <p className="text-black/50">10 Agustus 2021</p>
            </div>
          </div>
          <div>
            <MdAccessTimeFilled size={20} className="text-blue-base" />
            <div className="flex gap-2">
              <h3 className="">Waktu :</h3>
              <p className="text-black/50">10.00 WIB</p>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-bold">Link Rekaman Ulang</h3>
          <p className="text-blue-base hover:underline cursor-pointer">
            https://docs.google.com/spreadsheets/d/1mMJkFr3ldX0Ve9bx0S9643TrWYpFdaXKBy1PhksGHqk/edit#gid=0
            123456789
          </p>
        </div>
        <TableStatus />
      </div>
    </div>
  );
}

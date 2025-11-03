import Image from 'next/image';
import Link from 'next/link';
import { BsCalendarDateFill } from 'react-icons/bs';
import { IoPersonOutline } from 'react-icons/io5';

export default function CardList({
  href,
  badgeColor,
  badgeText,
  title,
  type,
}: {
  href: string;
  badgeColor: string;
  badgeText: string;
  title: string;
  type?: string;
}) {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden border">
      <div className="pt-4 px-4 relative">
        <Image
          className="w-full h-40 object-cover object-center rounded-lg"
          width={300}
          height={250}
          src="/images/card-image.png"
          alt="avatar"
        />
        <div
          className={`absolute top-6 right-6 text-white px-2 py-1 rounded-lg ${badgeColor}`}
        >
          <p className="text-sm">{badgeText}</p>
        </div>
      </div>
      <div className="p-4 space-y-4">
        <div className="">
          <p className="text-xl font-semibold text-black">{title}</p>
          <p className=" text-gray-500">Managemen Bisnis dan Keuangan</p>
        </div>
        <div className="">
          <div className="flex items-center gap-2 text-gray-500 ">
            <IoPersonOutline />
            <p className="">Jordi Alba, M.H., P.Hd.,</p>
          </div>
          <div className="flex items-center gap-2 text-gray-500 ">
            <BsCalendarDateFill />
            <p className="">12 Juli 2024</p>
          </div>
        </div>
        <div className="flex gap-2 text-sm items-center">
          <Link href={href} className="w-full">
            <button className="px-2 py-2.5 rounded-md border w-full border-blue-base text-blue-base">
              {type === 'uji-kompetensi' ? (
                <Image
                  src="/images/bnsp.png"
                  className="mx-auto"
                  width={42}
                  height={42}
                  alt="eye"
                />
              ) : (
                'Lihat Detail'
              )}
            </button>
          </Link>
          <Link href={href} className="w-full">
            <button className="px-4 py-2.5 rounded-md bg-blue-base text-white w-full">
              Daftar
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

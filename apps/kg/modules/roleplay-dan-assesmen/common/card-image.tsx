'use client';

import Image from 'next/image';
import Link from 'next/link';
import { BsCalendarDateFill } from 'react-icons/bs';
import { IoPersonOutline } from 'react-icons/io5';

export default function CardImage({
  detail,
  badgeColor,
  badgeText,
  title,
  description,
  thumbnail,
  author,
  startAt,
  modal,
  onClick,
}: {
  detail: string;
  badgeColor: string;
  badgeText: string;
  title: string;
  description: string;
  thumbnail: string;
  author: string;
  startAt: string;
  modal: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden border">
      <div className="pt-4 px-4 relative">
        <Image
          className="w-full h-40 object-cover object-center rounded-lg"
          width={300}
          height={250}
          src={thumbnail}
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
          <p className=" text-gray-500">{description}</p>
        </div>
        <div className="">
          <div className="flex items-center gap-2 text-gray-500 ">
            <IoPersonOutline />
            <p className="">{author}</p>
          </div>
          <div className="flex items-center gap-2 text-gray-500 ">
            <BsCalendarDateFill />
            <p className="">
              {new Date(startAt).toLocaleDateString('id-ID', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </p>
          </div>
        </div>
        <div className="flex gap-2 text-sm items-center">
          <Link href={detail} className="w-full">
            <button className="px-2 py-2.5 rounded-md border w-full border-blue-base text-blue-base">
              Lihat Detail
            </button>
          </Link>
          <div onClick={onClick} className="w-full">
            <button className="px-4 py-2.5 rounded-md bg-blue-base text-white w-full">
              Daftar
            </button>
          </div>
        </div>
      </div>
      {modal}
    </div>
  );
}

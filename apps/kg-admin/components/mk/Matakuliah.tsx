import { TMatakuliah } from '../../types';
import Image from 'next/image';
import React from 'react';

export default function Matakuliah({
  image,
  total_student,
  title,
  desc,
}: TMatakuliah) {
  return (
    <div className="w-full flex flex-col justify-start gap-4">
      {image || image === null || image === '' ? (
        <Image
          src="/assets/android-chrome-192x192.png"
          alt="pic-mk"
          width={200}
          height={200}
          className="w-full h-[220px] rounded-lg object-cover"
        />
      ) : (
        <Image
          src={image}
          alt="pic-mk"
          width={500}
          height={500}
          className="w-full rounded-lg"
        />
      )}

      <div className="py-1 px-2 w-max bg-yellow-300 rounded-lg">
        <p className="font-semibold text-xs">{total_student} Mahasiswa</p>
      </div>
      <h1 className="font-bold text-md">{title}</h1>
      <p className="text-md">
        {desc === '' || desc === null ? `This is ${title}` : desc}
      </p>
    </div>
  );
}

import { TJadwalMk } from '../../types';
import Image from 'next/image';
import React, { Fragment } from 'react';

export const JadwalMk = ({
  image,
  title,
  dateEven,
  time,
  position,
}: TJadwalMk) => {
  let content = null;

  if (position === 'hor') {
    content = (
      <div className="flex justify-start">
        <Image
          src={image}
          alt="pic-jmk"
          width={134}
          height={134}
          className='object-cover w-32 h-32 rounded-lg'
        />
        <div className="flex items-center ml-4">
          <div className="flex flex-col gap-1">
            <h1 className="font-bold text-md">{title}</h1>
            <p className="text-sm">{dateEven}</p>
            <p className="text-sm">Pukul {time} WIB</p>
          </div>
        </div>
      </div>
    );
  } else if (position === 'vert') {
    content = (
      <div className="flex flex-col gap-4">
        <div className="flex justify-center">
          <Image src={image} alt="pic-jmk" width={50} height={50} className='object-cover w-full h-44 rounded-lg'/>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold text-lg">{title}</h1>
          <p className="text-md">{dateEven}</p>
          <p className="text-md">Pukul {time} WIB</p>
        </div>
      </div>
    );
  }

  return <Fragment>{content}</Fragment>;
};

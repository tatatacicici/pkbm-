import Link from 'next/link';
import { DetailProps } from '../../../../../types/livementoring';
import React from 'react';
import { BiLogoZoom } from 'react-icons/bi';
import { BsCalendar2DateFill } from 'react-icons/bs';
import { FaHourglassHalf } from 'react-icons/fa6';
import { MdAccessTimeFilled } from 'react-icons/md';

export const DetailLive: React.FC<DetailProps> = ({
  title,
  content,
  session,
  teacher,
  link,
  date,
  time,
  duration,
  location,
}) => {
  const rules = [
    {
      rules:
        'Diskusi ini bertujuan untuk mengembangkan pemahaman bersama mengenai Pendidikan yang Memerdekakan',
    },
    {
      rules:
        'Sikap berpikiran terbuka (open-minded) dan saling menghormati menjadi nilai dasar dari proses diskusi ini.',
    },
    {
      rules:
        'Calon pengajar praktik saling memaparkan pandangan pribadi dan tanggapannya atas paparan calon pengajar praktik lain.',
    },
    {
      rules:
        'Moderator dalam diskusi ini adalah instruktur. Maka instruktur akan menentukan kesempatan bicara tiap calon pengajar praktik. Ketika salah seorang calon pengajar praktik sedang berbicara, maka calon pengajar praktik lainnya menyimak dalam kondisi microphone dimatikan sesaat.',
    },
  ];
  return (
    <div className="gap-5 flex flex-col justify-start items-start">
      <div className="font-bold text-lg text-black">{title}</div>
      <div className="flex justify-start items-start flex-col gap-2">
        <div className="flex flex-row gap-2">
          {/* <FaHourglassHalf size={20} className="text-blue-base" /> */}
          <FaHourglassHalf size={20} className="text-sky-base" />
          <div className="text-sm text-gray-500">{duration}</div>
        </div>
        <div className="flex flex-row gap-2">
          {/* <div className="p-1 bg-blue-base rounded-full flex justify-center items-center"> */}
          <div className="p-1 bg-sky-base rounded-full flex justify-center items-center">
            <BiLogoZoom className="text-white" size={13} />
          </div>
          <div className="text-sm text-gray-500">{location}</div>
        </div>
        <div className="flex flex-row gap-2">
          {/* <BsCalendar2DateFill size={20} className="text-blue-base" /> */}
          <BsCalendar2DateFill size={20} className="text-sky-base" />
          <div className="text-sm text-gray-500">{date}</div>
        </div>
        <div className="flex flex-row gap-2">
          {/* <MdAccessTimeFilled size={20} className="text-blue-base" /> */}
          <MdAccessTimeFilled size={20} className="text-sky-base" />
          <div className="text-sm text-gray-500">{time}</div>
        </div>
      </div>
      <div>{content}</div>
      <div className="text-lg font-bold text-black">Aturan Live Mentoring</div>
      <div className="flex flex-col gap-2">
        {rules.map((item, index) => (
          <div
            key={index}
            className="flex flex-row gap-2 jusitfy-center items-center"
          >
            <div className=" flex jusitfy-center items-end">{index + 1}.</div>
            <div className="text-sm text-gray-500 flex jusitfy-center items-center">
              {item.rules}
            </div>
          </div>
        ))}
      </div>
      <div className="text-lg font-bold text-black">Link Sesi Mentoring</div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-2 text-sm text-gray-500">
          <div>sesi</div>
          <div>{session}</div>
          <div>:</div>
          <div>{teacher.full_name}</div>
        </div>
        <div className="flex flex-row gap-2 text-sm text-gray-500">
          <div>Link Zoom</div>
          <div>:</div>
          <div>{link}</div>
        </div>
      </div>
      <Link
        // className="bg-blue-base px-4 text-white rounded-lg py-2"
        className="bg-sky-base px-4 text-white rounded-lg py-2"
        href={link}
      >
        Join Zoom
      </Link>
    </div>
  );
};

import { FC, ReactElement } from 'react';
import Avatar from 'react-avatar';
import { IChatBoxProps } from '../../../../types';
import { Message } from './message';
import camera from './../../icon/camera-1.svg';
import Image from 'next/image';
import sendIcon from './../../icon/send-email.svg';

export const ChatBox: FC<IChatBoxProps> = ({ userData }): ReactElement => {
  type TDataMessage = {
    role: 'user' | 'admin';
    message: string;
  };
  const dataMessage: TDataMessage[] = [
    {
      role: 'user',
      message:
        'Halo, Selamat siang. Saya ingin bertanya tentang konsultasi karir dan cita-cita',
    },
    {
      role: 'admin',
      message: 'Baik, Silahkan bertanya',
    },
    {
      role: 'admin',
      message: `Ada beberapa pilihan konsultasi yang bisa kamu pilih, yaitu: Konsultasi Karir & Cita-Cita, Konsultasi Masalah Keluarga dan Keuangan, Konsultasi Masalah Pribadi dan Cuti Kuliah, Konsultasi Akademik, Konsultasi Lainnya`,
    },
    {
      role: 'user',
      message: 'Saya ingin konsultasi karir dan cita-cita',
    },
  ];

  return (
    <div className="bg-white h-full w-full rounded-lg shadow-sm relative">
      <div className="flex justify-center pt-9">
        <Avatar
          name={userData?.full_name}
          color="#F26800"
          className=" w-[70px] h-[70px] rounded-full"
          size="70"
        />
      </div>
      <div className="flex justify-center my-5">
        <h1 className="text-[18px] font-[500] text-neutral-400">
          Konsultasi dengan{' '}
          <span className="font-[600] text-neutral-800"> Ryandi Margono</span>
        </h1>
      </div>
      <hr className="border-[1px] border-neutral-300 w-[80%] mx-auto mt-2" />
      <div className="flex justify-center mt-6">
        <span className="h-3 w-3 bg-success-base rounded-full mt-1"></span>
        <p className="text-sm text-neutral-400 font-[400] ml-2">
          Anda sudah terhubung dengan konsultan Paket-C Gratis
        </p>
      </div>
      <div className="flex justify-center mt-7 mb-5">
        <div className="bg-neutral-200 py-2 px-5 rounded-md text-sm font-semibold">
          Hari ini
        </div>
      </div>
      <div className="overflow-y-scroll max-h-[310px]">
        {dataMessage.map((item, index) => (
          <Message key={index} role={item.role} message={item.message} />
        ))}
      </div>
      <div className="absolute bottom-5 w-full px-10">
        <div className="flex justify-center items-center bg-neutral-100 rounded-lg shadow-sm gap-3 border border-neutral-300 px-5">
          <input
            type="text"
            className="w-full py-3 rounded-lg focus:outline-none bg-transparent placeholder-neutral-300 font-[400] text-sm"
            placeholder="Ketik disini"
          />
          <div className="">
            <Image src={camera} alt="camera" width={28} height={28} />
          </div>
          <div className="">
            <Image src={sendIcon} alt="camera" width={28} height={28} />
          </div>
        </div>
      </div>
    </div>
  );
};

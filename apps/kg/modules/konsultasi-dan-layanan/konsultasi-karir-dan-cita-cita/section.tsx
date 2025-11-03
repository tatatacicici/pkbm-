'use client';

import { useProfile } from '../../../hooks/profile/hook';
import { FC, ReactElement } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { ChatBox } from './chatbox';
import { HistoryChat } from './history-chat';

export const KonsultasiKarirDanCitaCitaModule: FC = (): ReactElement => {
  const { data: profileData } = useProfile();

  const userData = profileData?.data?.user;

  return (
    <main className="bg-neutral-100 w-full h-full pb-10">
      <section className=" py-10 text-center">
        <h1 className="text-[28px] font-[700]">
          Konsultasi Karir Dan Cita Cita
        </h1>
      </section>
      <section className="max-w-[1240px] flex gap-14 mx-auto h-full">
        <div className="min-w-[324px] h-64">
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Cari chat"
              className="bg-transparent w-full h-10 rounded-lg pl-5 outline outline-1 outline-gray-400 text-base"
            />
            <AiOutlineSearch className="absolute top-2 right-3 text-yellow-500 font-bold text-2xl" />
          </div>
          <h1 className="text-xs font-[700] mb-4">
            Riwayat Chat Karir dan Cita-Cita
          </h1>
          <div className="bg-white h-[calc(100vh-100px)] w-full rounded-lg shadow-sm">
            <HistoryChat />
          </div>
        </div>
        <div className="w-full h-[calc(100vh-4px)] bg-white rounded-lg shadow-sm">
          <ChatBox userData={userData} />
        </div>
      </section>
    </main>
  );
};

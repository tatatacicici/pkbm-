import { EventCardProps } from '../../../../../types/acarakampus';
import { FC, ReactElement } from 'react';
import { HiOutlineTicket } from 'react-icons/hi';
import { TbCalendarStats } from 'react-icons/tb';

export const EventCard: FC<EventCardProps> = ({
  isOrder,
  content,
}): ReactElement => {
  return (
    <div className="w-full py-10 mb-6 bg-white rounded-md shadow-sm px-7">
      <header className="flex items-center gap-3 mb-10 text-neutral-800">
        {isOrder ? (
          <HiOutlineTicket className="text-[30px]" />
        ) : (
          <TbCalendarStats className="text-[30px]" />
        )}
        <p className="text-lg font-thin ">
          {isOrder ? 'Pemesanan Tiket' : 'Acara'}
        </p>
      </header>
      <main className="text-sm text-neutral-500">
        {isOrder ? (
          <>
            <section className="mb-4">
              <p>Tipe Pemesanan Tiket</p>
              <p className="text-neutral-800">Online</p>
            </section>
            <section>
              <p className="mb-2">Batas Pemesanan TIket</p>
              <section className="mb-4">
                <p>Tanggal</p>
                <p className="text-neutral-800">11 Maret 2023</p>
              </section>
              <section className="mb-4">
                <p>Jam</p>
                <p className="text-neutral-800">08.00 WIB</p>
              </section>
            </section>
          </>
        ) : (
          <>
            <section className="mb-4">
              <p>Lokasi Acara</p>
              <p className="text-neutral-800">Online (Zoom)</p>
            </section>
            <section>
              <p className="mb-2">Waktu Mulai Acara</p>
              <section className="mb-4">
                <p>Tanggal</p>
                <p className="text-neutral-800">11 Maret 2023</p>
              </section>
              <section className="mb-4">
                <p>Jam</p>
                <p className="text-neutral-800">08.00 WIB</p>
              </section>
            </section>
          </>
        )}
      </main>
    </div>
  );
};

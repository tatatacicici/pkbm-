import React, { FC, ReactElement } from 'react';
import { HiBuildingOffice2 } from 'react-icons/hi2';

export const ContactCard: FC = (): ReactElement => {
  return (
    <div className="bg-white shadow-sm rounded-md w-full px-7 py-10 mb-6">
      <header className="flex items-center gap-3 mb-10">
        <HiBuildingOffice2 className="text-[30px] text-yellow-500" />
        <p className="text-lg font-thin text-neutral-800">
          Abdul - Ketua Panitia
        </p>
      </header>
      <main className="text-neutral-500 text-sm">
        <section className="mb-4">
          <p>No. Telepon</p>
          <p className="text-neutral-800">+62 89647298234</p>
        </section>
        <section className="mb-4">
          <p>Alamat Email</p>
          <p className="text-neutral-800">Lionelabdul@gmail.com</p>
        </section>
      </main>
    </div>
  );
};

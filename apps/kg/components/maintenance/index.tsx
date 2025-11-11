import React from 'react';
import { BaseLayout } from '../layouts';
import { LayoutFooter } from '../footer';
import Link from 'next/link';
import Image from 'next/image';
export const Maintenance = () => {
  return (
    <BaseLayout title="Maintenance">
      <section className="h-screen flex-col flex bg-white w-full">
        <div className="flex flex-col items-center justify-center h-full">
          <Image
            src="/images/dashboard/emptyMatkul.svg"
            width={280}
            height={280}
            alt="Empty"
          />
          <h1 className="text-5xl font-bold text-gray-800">Mohon Maaf</h1>
          <h2 className="text-2xl font-semibold text-gray-600 mb-6">
            Page Sedang Dalam Masa Pengembangan
          </h2>
          <Link
            href="/"
            className="px-4 py-2 text-white bg-primary-600 hover:bg-primary-700 text-primary  rounded font-semibold"
          >
            Kembali ke Home
          </Link>
        </div>
      </section>
      <LayoutFooter />
    </BaseLayout>
  );
};

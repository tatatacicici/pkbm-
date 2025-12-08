import Image from 'next/image';
import Link from 'next/link';
import { FC, ReactElement } from 'react';

export const ErrorAssignment: FC = (): ReactElement => {
  return (
    <section className="flex flex-col items-center">
      <Image
        src="/images/assigment/empty.svg"
        alt="empty"
        width={500}
        height={500}
      />
      <h1>Oops, Website sedang error. Tunggu sebentar yaa!!.</h1>
      <Link href={'/'}>
        <p className="text-[#106FA4] px-6 py-2 mt-2 mb-4 border rounded-xl hover:text-white hover:bg-[#106FA4] transition-all">
          Kembali ke Halaman Utama
        </p>
      </Link>
    </section>
  );
};

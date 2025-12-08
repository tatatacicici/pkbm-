import { Button } from '@kampus-gratis/components/atoms';
import Image from 'next/image';
import Link from 'next/link';
import { FC, ReactElement } from 'react';

export const Empty: FC = (): ReactElement => {
  return (
    <section className="mx-auto my-20 text-center">
      <center>
        <Image
          src="/images/assigment/empty.svg"
          alt="empty"
          width={300}
          height={300}
        />
      </center>
      <h1 className="font-[500] lg:text-[18px] md:text-[16px] text-[14px]">
        Oops, Kamu belum ada penugasan
      </h1>
      <Link href={'/studi-ku'}>
        <Button
          type={'button'}
          className="bg-[#106FA4] text-white py-2.5 px-6 rounded-md mt-5 lg:text-[16px] md:text-[14px] font-[600]"
        >
          Kembali ke Studi-Ku
        </Button>
      </Link>
    </section>
  );
};

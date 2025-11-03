import Link from 'next/link';
import React, { FC } from 'react';

const FooterCredit: FC = () => {
  return (
    <div className="w-full py-6 px-1">
      {/* <section className="w-full max-w-[1440px] mx-auto text-center md:flex md:px-14 lg:px-16 text-[#737373] "> */}
      <section className="w-full max-w-[1440px] mx-auto text-center md:flex md:px-14 lg:px-16 text-[#484848] ">
        <div className="w-full md:flex md:w-1/2">
          <h1 className="text-sm">
            2025 - paketcgratis.id - Hak Cipta Dilindungi.
          </h1>
        </div>
        <div className="w-full md:w-1/2 md:flex justify-end text-sm gap-x-8">
          <Link href={'/'} className="pr-4">
            Terms of use
          </Link>
          <Link href={'/'}>Privacy policy</Link>
        </div>
      </section>
    </div>
  );
};

export default FooterCredit;

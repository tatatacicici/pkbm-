import React, { ReactElement } from "react";
import Image from "next/image";

export const HeroSection = (): ReactElement => {
  return (
    <div className="w-full px-6 md:px-8 lg:px-16 max-w-[1440px] mx-auto">
      <div className="mt-[56px]">
        <h1 className="text-center text-[20px] text-black font-[700] dark:text-white">
          Panduan pendaftaran
        </h1>
      </div>
      <div className="mt-[36px] bg-error-100 w-full h-[135px] container mx-auto rounded-[8px] lg:mb-[30px] mb-[60px]   ">
        <div className="container px-[36px] lg:pt-[28px] lg:py-[16px] py-[10px]">
          <h1 className="text-[18px] font-[700] dark:text-black ">Penting !</h1>
          <div className="flex mt-[10px] gap-[17px] items-center ">
            <Image src="/images/panduan/alert.svg" width={20} height={20} alt={"alert"} />
            <h1 className="lg:text-[18px] font-[300] dark:text-black">
              Silahkan cek email mu karena verifikasi hanya dikirimkan melalui email yang kamu
              daftarkan saja.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

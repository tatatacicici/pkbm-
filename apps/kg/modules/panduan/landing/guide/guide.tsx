import { ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";
import { dummyGuide } from "./constant";

export const GuideSection = (): ReactElement => {
  return (
    <div className="mt-[76px] mb-[64px] px-6 md:px-8 lg:px-20 w-full max-w-[1440px] mx-auto">
      <div className="grid lg:grid-cols-12 md:grid-cols-12 gap-[20px] text-center md:text-start">
        {dummyGuide.map((item, index) => {
          return (
            <div
              key={index}
              className="col-span-4 bg-white  shadow-md w-full h-full rounded-[8px] lg:pr-7"
            >
              <Link href={item.href}>
                <div className=" p-5">
                  <Image src={item.img} alt={"buku-panduan"} width={100} height={100} className="mx-auto md:mx-0"/>
                  <h1 className="text-[18px] text-black dark:text-white font-[700]">
                    {item.title}
                  </h1>
                  <p className="text-[14px] text-black dark:text-white font-[400]">{item.desc}</p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

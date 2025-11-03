import { FC, ReactElement } from "react";

export const LoadingLeaderboard: FC = (): ReactElement => {
  return (
    <div className="mt-36">
      <div className="px-9 py-5">
        <section className="animate-pulse w-64 py-3 rounded-lg bg-gray-200" />
      </div>
      <div className="animate-pulse  mt-[71px] w-full lg:px-[130px] md:px-[100px] px-3 mb-10 ">
        <div className="flex justify-center">
          <div className="bg-neutral-200 rounded-lg py-3 w-44"></div>
        </div>
        <div className="bg-neutral-200 rounded-lg card mt-[39px] w-full py-10 ">
          <div className="flex justify-between md:px-10 px-5">
            <div className="bg-neutral-300 rounded-lg md:w-[109px] md:h-[40px] w-20 h-8 mt-[46px] "></div>
            <div className="bg-neutral-300 rounded-lg md:w-[109px] md:h-[40px] w-20 h-8 mt-[46px] "></div>
          </div>
          <div className="w-full flex justify-center items-end flex-row mt-10 md:px-0 lg:-top-92 md:-top-60 sm:-top-52 -top-44">
            <div className="bg-neutral-300  lg:h-[209px] lg:w-[190px] md:h-[180px] md:w-[165px] sm:h-[145px] sm:w-[150px] h-[125px] w-[120px] rounded-tr-[8px] rounded-tl-[8px]">
              <div className="absolute lg:top-[40px] lg:left-[40px] md:top-[50px] md:left-[32px] sm:top-[20px] sm:left-[34px] top-6 left-7"></div>
            </div>
            <div className="bg-neutral-300 lg:h-[374px] lg:w-[204px] md:h-[280px] md:w-[180px] sm:h-[240px] sm:w-[150px] h-[220px] w-[120px] rounded-tr-[8px] rounded-tl-[8px] ">
              <div className="absolute lg:top-[280px] lg:left-[40px] md:top-[180px] md:left-[36px] sm:top-[140px] sm:left-[32px] top-36 left-7"></div>
            </div>
            <div className="bg-neutral-300 lg:h-[209px] lg:w-[190px] md:h-[180px] md:w-[165px] sm:h-[145px] sm:w-[150px] h-[125px] w-[120px] text-center rounded-tr-[8px] rounded-tl-[8px]">
              <div className="absolute lg:top-[40px] lg:left-[40px] md:top-[50px] md:left-[32px] sm:top-[20px] sm:left-[34px] top-6 left-7"></div>
            </div>
          </div>
          <div className="flex flex-col lg:px-[56px] px-3 mt-20 gap-5 ">
            <div className="bg-neutral-300 w-full flex justify-between px-[20px] rounded-[8px] md:py-10 py-7"></div>
            <div className="bg-neutral-300 w-full flex justify-between px-[20px] rounded-[8px] md:py-10 py-7"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

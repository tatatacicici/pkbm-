import React, { FC, ReactElement } from "react";

interface MatkulProps {
  title: string;
  value: number;
}

export const Matkul: FC<MatkulProps> = ({ title, value }): ReactElement => {
  return (
    <div className="w-full justify-start items-start inline-flex">
      <div className="w-full h-full relative">
        <div className="left-[28px] top-0 absolute flex-col justify-center items-start gap-2 inline-flex ">
          <div className="text-neutral-900 ">{title}</div>
          <div className="text-neutral-900 font-bold text-2xl">{value}%</div>
        </div>
        <div className={`${
                    title === "Artificial Intelligence" ? "bg-[#FDB415]" : 
                    title  === "Cyber Security" ? "bg-[#40A0C8]" :
                    title === "B. Inggris" ? "bg-[#6AD26A]" :
                    title === "Ekonomi" ? "bg-[#FBCB50]" :
                    title === "Matematika" ? "bg-[#F4677F]" :
                    "bg-[#737373]"

                  } w-4 h-4 left-0 top-[6px] absolute rounded-[100px]`} />
      </div>
    </div>
  );
};

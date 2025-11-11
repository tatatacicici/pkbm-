import { FC, ReactElement, useState } from "react";
import dummyPerformance from "./constant";
import { MdKeyboardArrowDown } from "react-icons/md";

export const DiskusiChart: FC = (): ReactElement => {
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState('SEMUA');

  return (
    <section className="col-span-3 md:col-span-2 my-auto bg-white shadow-md px-8 py-10 rounded-md ">
      <div className="grid grid-cols-6 w-full gap-y-8 h-auto my-auto">
        <div className="w-full  col-span-3 h-full py-5">
           <h1 className="text-xl font-bold">184</h1>
            <p className="text-md text-[#A3A3A3]">Jumlah Diskusi</p>
        </div>
        <div className="col-span-3 w-full flex justify-center">
        {dummyPerformance.map((item, index) => {
          return (
            <div className="w-full flex justify-center" key={index}>
            <div className="flex w-[10px]" >
             
              <div className="w-[10px] relative rounded-full h-[100px]">
                <div
                  className={`bg-[#6AD26A] absolute bottom-0 rounded-full w-[10px]`}
                  style={{ height: `${item.value * 20}%`, maxHeight: "100%" }}

                ></div>
              </div>
            </div>
            </div>
          );
        })}
      </div>
    
      <div className="w-full  col-span-3 h-full py-5">
           <h1 className="text-xl font-bold">106</h1>
            <p className="text-md text-[#A3A3A3]">Balasan Diskusi</p>
        </div>
        <div className="col-span-3 w-full flex justify-center">
        {dummyPerformance.map((item, index) => {
          return (
            <div className="w-full flex justify-center" key={index}>
            <div className="flex w-[10px]" >
             
              <div className="w-[10px] relative rounded-full h-[100px]">
                <div
                  className={`bg-blue-base absolute bottom-0 rounded-full w-[10px]`}
                  style={{ height: `${item.value * 20}%`, maxHeight: "100%" }}

                ></div>
              </div>
            </div>
            </div>
          );
        })}
      </div>
      </div>
    </section>
  );
};

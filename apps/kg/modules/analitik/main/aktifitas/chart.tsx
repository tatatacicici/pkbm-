import { FC, ReactElement, useState } from "react";
import dummyPerformance from "./constant";
import { MdKeyboardArrowDown } from "react-icons/md";

export const ActivityChart: FC = (): ReactElement => {
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState('SEMUA');

  return (
    <section className="col-span-3 md:col-span-2 bg-white shadow-md px-8 py-3 rounded-md ">
      <header className="border-b-[0.5px] border-neutral-200 py-2 flex items-center justify-between">
        <h1 className="text-sm font-bold">Aktivitas</h1>
        <div className="flex justify-end  ">
        <button
          className="w-[120px] h-[40px] rounded-[8px] text-center border-[3px] border-primary-500 relative"
          onClick={() => setOpen(open == true ? false : true)}
        >
          <div className="my-auto flex justify-center gap-[10px] items-center">
            <p className="text-primary-500 text-[14px] dark:text-white">
              Minggu
            </p>
            <MdKeyboardArrowDown className="text-[#9CA3AF] dark:text-white" />
          </div>
          {open && (
            <div className="flex justify-end container mt-[10px] z-[9000] absolute w-[150px] -bottom-32 ease-in-out ">
              <div className="w-[160px] h-[114px] rounded-[8px] text-center overflow-hidden shadow-2xl ">
                <button
                  className="flex justify-start h-[38px] relative hover:bg-neutral-100 w-full bg-white "
                  onClick={() => setFilter('SEMUA')}
                >
                  <div
                    className={`h-full w-[5px] ${
                      filter == 'SEMUA' ? 'bg-blue-100' : 'bg-white'
                    } absolute left-0 overflow-hidden hover:bg-neutral-100`}
                  ></div>
                  <p className="text-[#262626] text-[14px] my-auto ml-3">
                    Semua
                  </p>
                </button>
                <button
                  className="flex justify-start h-[38px] relative hover:bg-neutral-100 w-full bg-white "
                  onClick={() => setFilter('SUBJECT')}
                >
                  <div
                    className={`h-full w-[5px] ${
                      filter == 'SUBJECT' ? 'bg-blue-100' : 'bg-white'
                    } absolute left-0 overflow-hidden hover:bg-neutral-100`}
                  ></div>
                  <p className="text-[#262626] text-[14px] my-auto ml-3">
                    Mata Kuliah
                  </p>
                </button>
                <button
                  className="flex justify-start h-[38px] relative hover:bg-neutral-100 w-full bg-white "
                  onClick={() => setFilter('EVENT')}
                >
                  <div
                    className={`h-full w-[5px] ${
                      filter == 'EVENT' ? 'bg-blue-100' : 'bg-white'
                    } absolute left-0 overflow-hidden`}
                  ></div>
                  <p className="text-[#262626] text-[14px] my-auto ml-3">
                    Webinar
                  </p>
                </button>
              </div>
            </div>
          )}
        </button>
      </div>
      </header>
      <div className="grid grid-cols-6 w-full gap-5 h-auto my-4">
        <div className="flex justify-between flex-col w-full pb-10 col-span-1 text-[10px]  h-[200px]">
            <div>
                5 Jam </div>
            <div>
                4 Jam
            </div>
            <div>
                3 Jam
            </div>
            <div>
                2 Jam
            </div>
            <div>
                1 Jam
            </div>
            
        </div>
        <div className="col-span-5 w-full h-[200px] flex justify-center items-center">
        {dummyPerformance.map((item, index) => {
          return (
            <div className="w-full flex justify-center items-center" key={index}>
            <div className="flex w-[20px] flex-col justify-center items-center" >
             
              <div className="w-[10px] bg-neutral-200 relative rounded-full h-[170px]">
                <div
                  className={`${
                    item.title.toLowerCase() === "quiz" || item.title.toLowerCase() === "tugas"
                      ? "bg-[#95E88D]"
                      : item.title.toLowerCase() === "uas" || item.title.toLowerCase() === "uts"
                      ? "bg-[#FDDB73]"
                      : "bg-[#40A0C8]"
                  }  absolute bottom-0 rounded-full w-[10px]`}
                  style={{ height: `${item.value * 20}%`, maxHeight: "100%" }}

                ></div>
              </div>
              <h1 className="text-sm text-neutral-600 font-bold flex justify-center items-center">{item.title}</h1>
              
            </div>
            </div>
          );
        })}
      </div>
      </div>
    </section>
  );
};

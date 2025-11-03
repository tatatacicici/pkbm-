import { FC, ReactElement, useState } from "react";
import dummyPerformance from "./constant";
import { RxSlider } from "react-icons/rx";
import { MdKeyboardArrowDown } from "react-icons/md";

export const AnalyticPerformance: FC = (): ReactElement => {
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState('SEMUA');

  return (
    <section className="col-span-3 lg:col-span-2 bg-white shadow-md px-8 py-3 rounded-md ">
      <header className="border-b-[0.5px] border-neutral-200 py-2 flex items-center justify-between">
        <h1 className="text-sm font-bold">Analisa Performa Mahasiswa</h1>
        <div className="flex justify-end  ">
        <button
          className="w-[120px] h-[40px] rounded-[8px] text-center border-[3px] border-primary-500 relative"
          onClick={() => setOpen(open == true ? false : true)}
        >
          <div className="my-auto flex justify-center gap-[10px] items-center">
            <p className="text-primary-500 text-[14px] dark:text-white">
              Semester 1
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
      <main className="py-4 flex flex-col gap-5">
        {dummyPerformance.map((item, index) => {
          return (
            <section className="flex items-start gap-x-6 flex-wrap md:flex-nowrap " key={index}>
              <h1 className="text-sm text-neutral-600 w-52 font-bold">{item.title}</h1>
              <div className="w-full bg-neutral-200 rounded-full h-2.5 mt-2">
                <div
                  className={`${
                    item.title.toLowerCase() === "quiz" || item.title.toLowerCase() === "tugas"
                      ? "bg-[#95E88D]"
                      : item.title.toLowerCase() === "uas" || item.title.toLowerCase() === "uts"
                      ? "bg-[#FDDB73]"
                      : "bg-[#40A0C8]"
                  } h-2.5 rounded-full w-full`}
                  style={{ width: `${item.value}%` }}
                ></div>
              </div>
              <h1 className="text-xs md:text-sm pt-1 md:pt-0 text-neutral-600">{item.value}%</h1>
            </section>
          );
        })}
      </main>
    </section>
  );
};

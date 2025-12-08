import { DoughnutChart } from "@kampus-gratis/components/atoms";
import Image from "next/image";
import { FC, ReactElement, useEffect, useRef } from "react";

export const AnalyticRecentPerformance: FC = (): ReactElement => {
    function createGradient(ctx: CanvasRenderingContext2D) {
      const gradient = ctx.createLinearGradient(0, 0, 120, 120);
      gradient.addColorStop(0, "#16D3FD");
      gradient.addColorStop(0.5, "#16D3FD");
      gradient.addColorStop(1, "#FDB415");
      return gradient;
    }
    const data = {
      labels: ["Your Score"],
      datasets: [
        {
          data: [80.4, 19.6],
          backgroundColor: (context: any) => {
            const index = context.dataIndex;
            const value = context.dataset.data[index];
            const color = value === data.datasets[0].data[0] ? createGradient(context.chart.ctx) : "#E5E5E5";
            return color;
          },
          borderWidth: 0,
        },
      ],
    };
    const options = {
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: false,
        },
      },
      rotation: 75,
      cutout: 60,
    };
  
    return (
      <section className="col-span-3 lg:col-span-1 bg-white shadow-md rounded-md  px-4 py-3">
        <header className="border-b-[0.5px] border-neutral-200 py-2 mb-6 flex justify-between items-center">
          <h1 className="text-sm font-bold">Performa Semester Ini</h1>
          <div className="flex items-center px-2 py-1 rounded-lg bg-[#E3FBDA]"><Image src={"icons/analitik/arrow-up.svg"} alt="icons-analitik" width={14} height={14}/>
          <p className="text-[10px] text-[#3EB449] font-semibold">20%</p>
          </div>
        </header>
        <div className=" flex items-center justify-center max-h-[200px]">
          <DoughnutChart data={data} option={options}/>
          <h1 className="absolute text-2xl font-bold">{data.datasets[0].data[0]}%</h1>
        </div>
      </section>
    );
  };
  

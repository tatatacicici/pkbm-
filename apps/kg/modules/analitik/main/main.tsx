import { FC, ReactElement } from "react";
import { AnalyticChart } from "./chart/chart";
import { AnalyticRecentPerformance } from "./recent-performance/recent";
import { AnalyticPerformance } from "./performance/performance";
import { FavoriteMatkulChart } from "./favorite-matkul/favoritematkul";
import { ActivityChart } from "./aktifitas/chart";
import { DiskusiChart } from "./diskusi/chart";
import { AnalyticHeader } from "./header/header";
import { Button } from "@kampus-gratis/components/atoms";


export const MainSection: FC = (): ReactElement => {
  return (
    <main className="w-full col-span-3 lg:col-span-2 flex flex-col gap-6">
      <AnalyticHeader/>
      <section className=" bg-white rounded-md shadow-md py-6  w-full ">
        <header className="mb-10 text-base font-bold border-b-[0.5px] border-neutral-300 pb-3 px-4">
          <h1>Analisa hasil belajar tiap semester</h1>
        </header>
        <main>
          <AnalyticChart />
        </main>
      </section>
      <section className="grid grid-cols-3 min-h-[300px] gap-4">
        <AnalyticRecentPerformance />
        <AnalyticPerformance />
      </section>
      <section className="grid grid-cols-1 min-h-[300px]">
        <FavoriteMatkulChart/>
      </section>
      <section className="grid md:grid-cols-4 min-h-[300px] gap-4">
        <ActivityChart/>
        <DiskusiChart/>
      
      </section>
      <Button type="button" className="px-8 bg-blue-base py-4 text-white rounded-md ms-auto">Lihat Semua Grafik</Button>
    </main>

  );
};

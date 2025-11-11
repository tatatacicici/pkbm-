import { FC, ReactElement } from "react";
import Image from "next/image";
import dummyUserData from "./constant";


export const SidebarContent: FC = (): ReactElement => {
  return (
    <main className="px-8">
      {dummyUserData.map((item, index) => {
        return (
          <section
            key={index}
            className="text-sm flex items-center justify-between border-b-[0.5px] py-3 border-neutral-200"
          >
            <section className="flex items-center gap-3">
              <div className="bg-version3-500 p-2 rounded-md shadow-xs text-neutral-50 bg-[#3EB449] text-lg">
                <Image src={item.icon} alt="icons-analitik" width={22} height={22}/>
              </div>
              <h1 className="text-[#A3A3A3]">{item.title}</h1>
            </section>
            <h1 className="text-neutral-900 font-bold  text-end">{item.value}</h1>
          </section>
        );
      })}
    </main>
  );
};

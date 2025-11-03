import { FC, ReactElement } from "react";
import { SidebarHeader } from "./header/header";
import { SidebarContent } from "./content/content";


export const SidebarSection: FC = (): ReactElement => {
  return (
    <aside className="col-span-3 h-fit lg:col-span-1 rounded-lg w-full py-20 bg-white shadow-md">
      <SidebarHeader />
      <SidebarContent/>
    </aside>
  );
};

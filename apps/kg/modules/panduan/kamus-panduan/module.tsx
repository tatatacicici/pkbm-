"use client"
import { BaseLayout, BreadCrumb } from "../../../components";
import { ReactElement } from "react";
import { guideDictionary } from "./constant";
import { Sidebar } from "./sidebar/sidebar";
import { ContentSection } from "./content/content";


export const KamusKampusGratisModule = (): ReactElement => {
  return (
    <BaseLayout>
      <BreadCrumb items={guideDictionary} />
      <div className="w-full flex flex-col-reverse lg:flex-row max-w-[1440px] mx-auto">
        <Sidebar />
        <ContentSection/>
      </div>
    </BaseLayout>
  );
};

"use client"

import { BaseLayout, BreadCrumb } from "../../../components";
import { ReactElement } from "react";

import { registrationVideoBreadCumbs } from "./constant";
import { LayoutFooter } from "../../../components/footer";
import { useVideoData } from "../../../hooks/video-panduan/hooks";
import { ContentSection } from "./content/content";


export const DetailVideoPanduanModule = (): ReactElement => {
  
  return (
    <BaseLayout>
      <BreadCrumb items={registrationVideoBreadCumbs} />
      <ContentSection/>
      <LayoutFooter/>
    </BaseLayout>
  );
};

"use client"

import { FC, ReactElement } from "react";
import { guideBreadCumbs } from "./constant";
import { HeroSection } from "./hero/hero";
import { PalingSeringSection } from "./paling-sering/palingsering";
import { LayoutFooter } from "../../../components/footer";
import { GuideSection } from "./guide/guide";
import { BaseLayout, BreadCrumb } from "../../../components";

export const PanduanModule: FC = (): ReactElement => {
  return (
    <BaseLayout>
      <BreadCrumb items={guideBreadCumbs} />
      <section className="min-h-[100vh]">
    <HeroSection/>
    <PalingSeringSection/>
    <GuideSection/>
    </section>
    <LayoutFooter/>
    </BaseLayout>
  );
};

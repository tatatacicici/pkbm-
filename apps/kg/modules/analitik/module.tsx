"use client"

import { BreadCrumb } from "../../components";
import { FC, Fragment, ReactElement } from "react";
import { AnalyticBreadcumbs } from "./constant";
import { SidebarSection } from "./sidebar/sidebar";
import { MainSection } from "./main/main";
import FooterCredit from "../../components/footer/footer-credit/footer-credit";

export const AnalyticModule: FC = (): ReactElement => {
  return (
    <Fragment>
    <section className="min-h-[140vh] bg-[#FAFAFA] w-full max-w-[1440px] mx-auto mb-8">
      <BreadCrumb items={AnalyticBreadcumbs} bgColor="bg-grey-100" />
      <section className="grid grid-cols-3 gap-6 px-8 md:px-14 lg:px-16">
        <SidebarSection />
        <MainSection />
      </section>
    </section>
      <FooterCredit/>
      </Fragment>
  );
};

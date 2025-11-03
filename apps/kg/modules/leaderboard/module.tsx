'use client';
import React, { ReactElement } from 'react';
import { leaderBoardBreadCumbs } from '../administration/constant';
import { BreadCrumb } from '../../components/bread-crumb';
import { BaseLayout } from '../../components/layouts/base/section';
import { useProfile } from '../../hooks/profile/hook';
import { LayoutFooter } from '../../components/footer/index';
import FooterCredit from '../../components/footer/footer-credit/footer-credit';
import ContentSection from './content-section/module';

export const LeaderBoardModules = (): ReactElement => {
  return (
    <>
      <BaseLayout>
        <div className="bg-[#f2f9ff]">
          <div className=" w-full pb-[249px] max-w-[1440px] mx-auto">
            <BreadCrumb items={leaderBoardBreadCumbs} />
            <ContentSection />
          </div>
        </div>
      </BaseLayout>
      <FooterCredit />
    </>
  );
};

'use client';
import { FC, ReactElement } from 'react';
import { BreadCrumb } from '../../components/bread-crumb';
import { BaseLayout } from '../../components/layouts/base/section';
import { administrationBreadCumbs } from './constant';
import { ContentAdministration } from './content-administration';
import { TitleAdministration } from './title-administration';
import PopupAdministrationStudentRole from './popup-administration';

export const AdministrationModule: FC = (): ReactElement => {
  return (
    <BaseLayout title="Administrasi">
      <div className=" bg-[#F5F5F5] w-full pb-[249px] ">
        <BreadCrumb items={administrationBreadCumbs} />
        <TitleAdministration />
        <ContentAdministration />
      </div>
      <PopupAdministrationStudentRole />
    </BaseLayout>
  );
};


"use client";
import FooterCredit from '../../components/footer/footer-credit/footer-credit';
import { BaseLayout } from '../../../kg/components/layouts/base';
import { GlimpseKnowledgePage } from '../../../kg/components/sekilas-ilmu/GlimpseKnowledgePage';
import { FC, ReactElement } from 'react';
import { BreadCrumb } from '../../components';
import { SyaratKetentuanContent } from './content/content';

export const SyaratKetentuanModule: FC = (): ReactElement => {
  const BreadCrumbSyaratKetentuan = [
    {
      name: "Beranda",
      link: "/",
    },
    {
      name: "Syarat dan Ketentuan",
      link: "/syarat-ketentuan",
    },
  ];

  return (
    <BaseLayout>
    <BreadCrumb items={BreadCrumbSyaratKetentuan}/>
      <SyaratKetentuanContent/>
      <FooterCredit />
    </BaseLayout>
  );
};

'use client';
import { FC, ReactElement } from 'react';
import FooterCredit from '../../components/footer/footer-credit/footer-credit';
import { BaseLayout } from '../../../kg/components/layouts/base';
import { GlimpseKnowledgePage } from '../../../kg/components/sekilas-ilmu/GlimpseKnowledgePage';
import { BreadCrumb } from '../../components';

export const GlimpseKnowledgeModule: FC = (): ReactElement => {
  const allFeatures = [
    {
      name: 'Beranda',
      link: '/beranda',
    },
    {
      name: 'Tahukah Kamu',
      link: '/sekilas-ilmu',
    },
  ];

  return (
    <BaseLayout>
      <BreadCrumb items={allFeatures} />
      <GlimpseKnowledgePage />
      <FooterCredit />
    </BaseLayout>
  );
};

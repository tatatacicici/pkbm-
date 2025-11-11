'use client';
import { BaseLayout } from '../../../kg/components/layouts/base';
import { FC, ReactElement } from 'react';
import Features from '../../components/semua-fitur/Section/FeaturesMain';
import { LayoutFooter } from '../../components/footer/footer-layout/footer';
import { BreadCrumb } from '../../components';

export const SemuaFiturModule: FC = (): ReactElement => {
  const allFeatures = [
    {
      name: 'Beranda',
      link: '/beranda',
    },
    {
      name: 'Semua Fitur',
      link: '/semua-fitur',
    },
  ];

  return (
    <BaseLayout title="Semua Fitur">
      <BreadCrumb items={allFeatures} />
      <Features />
      <LayoutFooter />
    </BaseLayout>
  );
};

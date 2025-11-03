'use client';

import React, { ReactElement } from 'react';
import { NextPage } from 'next';
import { useParams } from 'next/navigation';
import { BaseLayout, BreadCrumb } from '../../../components';
import { Sidebar } from '../kamus-panduan/sidebar/sidebar';
import { ContentSection } from './content/content';
import { useGetDetailDictionary } from '../../../hooks/panduan/hooks';

export const KamusKampusGratisDetailModule: NextPage = (): ReactElement => {
  const params = useParams();
  const dictionaryId = params.id;
  const BreadCrumbEndpoint = [
    {
      name: 'Beranda',
      link: '/beranda',
    },
    {
      name: 'Panduan',
      link: '/panduan',
    },
    {
      name: 'Kamus',
      link: '/panduan/kamus-kampus-gratis',
    },
    {
      name: `${dictionaryId}`,
      link: `/panduan/kamus-kampus-gratis/${dictionaryId}`,
    },
  ];

  const { data } = useGetDetailDictionary(String(dictionaryId));

  const detailDictionary = data?.data;

  return (
    <BaseLayout>
      <BreadCrumb items={BreadCrumbEndpoint} />
      <div className="w-full flex flex-col-reverse lg:flex-row">
        <Sidebar />
        <ContentSection data={detailDictionary as any} />
      </div>
    </BaseLayout>
  );
};

import { BaseLayout } from '../../../../kg/components/layouts/base';
import FooterCredit from '../../../components/footer/footer-credit/footer-credit';
import { FC, ReactElement } from 'react';
import { GlimpseKnowledgePage } from '../../../components/sekilas-ilmu/GlimpseKnowledgePage';
import { BreadCrumb } from '../../../components';

export const FavoriteArticleModule: FC = (): ReactElement => {
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

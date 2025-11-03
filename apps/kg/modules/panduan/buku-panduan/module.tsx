import { BaseLayout, BreadCrumb } from '../../../components';
import { ReactElement } from 'react';
import { HeroSection } from './hero/hero';
import { guideBookBreadCumbs } from './constant';
import { ContentSection } from './content/content';
import { LayoutFooter } from '../../../components/footer';

export const BukuPanduanModule = (): ReactElement => {
  return (
    <BaseLayout>
      <BreadCrumb items={guideBookBreadCumbs} />
      <HeroSection />
      <ContentSection />
      <LayoutFooter />
    </BaseLayout>
  );
};

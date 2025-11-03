import { BaseLayout, BreadCrumb } from '../../../components';
import { ReactElement } from 'react';
import { guideVideoBreadCumbs } from './constant';
import { HeroSection } from './hero/hero';
import { ContentSection } from './content/content';
import { LayoutFooter } from '../../../components/footer';

export const VideoPanduanModule = (): ReactElement => {
  return (
    <BaseLayout>
      <BreadCrumb items={guideVideoBreadCumbs} />
      <HeroSection />
      <ContentSection />
      <LayoutFooter />
    </BaseLayout>
  );
};

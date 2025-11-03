import { BaseLayout, BreadCrumb } from '../../../components';
import { ReactElement } from 'react';
import { HeroSection } from './hero/hero';
import { ContentSection } from './content/content';
import { AnotherGuideBook } from './buku-panduan-lainnya/panduan-lain';
import { LayoutFooter } from '../../../components/footer';
import { ContentDetailPanduan } from './content';
import { useParams } from 'next/navigation';

export const PanduanPendaftaranModule = (): ReactElement => {
  const params = useParams();

  const guideRegistrationBreadCumbs = [
    {
      name: 'Beranda',
      link: '/beranda',
    },
    {
      name: 'Panduan',
      link: '/panduan',
    },
    {
      name: 'Buku Panduan',
      link: '/panduan/buku-panduan',
    },
    {
      name: 'Detail Panduan',
      link: `/panduan/buku-panduan/${params?.id}`,
    },
  ];

  return (
    <BaseLayout>
      <BreadCrumb items={guideRegistrationBreadCumbs} />
      {/* <HeroSection /> */}
      <ContentDetailPanduan />
      <AnotherGuideBook />
      <LayoutFooter />
    </BaseLayout>
  );
};

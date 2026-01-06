/* eslint-disable @nx/enforce-module-boundaries */
import { Metadata } from 'next';
import { BaseLayout } from '../../../../components/layouts/base/section';
import DetailStudyplanModule from '../../../../modules/rencana-studi/detail';

import { ReactElement, use } from 'react';
import FooterCredit from '../../../../components/footer/footer-credit/footer-credit';
import {
  detailStudyPlanRequest,
  getSubject,
} from '@kampus-gratis/apps/kg/hooks/rencana-studi/request';
import { TSubject } from '@kampus-gratis/apps/kg/types/rencana-studi';

type Props = {
  params: Promise<{ id: string }>;
};

// Return empty array to skip static generation - pages will be generated on-demand
// This avoids build failures when the API is unreachable during build time
export async function generateStaticParams() {
  return [];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const resolvedParams = await params;
    const response = await detailStudyPlanRequest(resolvedParams.id);

    if (!response)
      return {
        title: 'Not Found',
        description: 'Halaman tidak ditemukan',
      };

    return {
      title: response?.data?.name,
      description: response?.data?.description,
      openGraph: {
        images: response?.data?.detail?.thumbnail,
      },
      alternates: {
        canonical: `/rencana-studi/detail-rencana-studi/${resolvedParams.id}`,
      },
    };
  } catch (error) {
    return {
      title: 'Not Found',
      description: 'Halaman tidak ditemukan',
    };
  }
}

const DetailStudyPlanPage = ({
  params,
}: {
  params: Promise<{ id: string }>;
}): ReactElement => {
  const { id } = use(params);
  return (
    <BaseLayout title="Detail Matakuliah">
      <DetailStudyplanModule id={id} />
      <FooterCredit />
    </BaseLayout>
  );
};

export default DetailStudyPlanPage;

/* eslint-disable @nx/enforce-module-boundaries */
import { Metadata } from 'next';
import { BaseLayout } from '../../../../components/layouts/base/section';
import DetailStudyplanModule from '../../../../modules/rencana-studi/detail';

import { ReactElement } from 'react';
import FooterCredit from '../../../../components/footer/footer-credit/footer-credit';
import {
  detailStudyPlanRequest,
  getSubject,
} from '@kampus-gratis/apps/kg/hooks/rencana-studi/request';
import { TSubject } from '@kampus-gratis/apps/kg/types/rencana-studi';

type Props = {
  params: { id: string };
};

export async function generateStaticParams() {
  try {
    const data = await getSubject();

    return data
      ? data?.data.map(({ id }: TSubject) => ({ params: { id } }))
      : [];
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching subject:', error);
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const response = await detailStudyPlanRequest(params.id);

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
        canonical: `/rencana-studi/detail-rencana-studi/${params.id}`,
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
  params: { id: string };
}): ReactElement => {
  const { id } = params;
  return (
    <BaseLayout title="Detail Matakuliah">
      <DetailStudyplanModule id={id} />
      <FooterCredit />
    </BaseLayout>
  );
};

export default DetailStudyPlanPage;

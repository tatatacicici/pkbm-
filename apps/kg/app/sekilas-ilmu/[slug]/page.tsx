import { ReactElement, use } from 'react';
import { Metadata } from 'next';
import { ErrorBoundary } from 'react-error-boundary';
import FooterCredit from '../../../components/footer/footer-credit/footer-credit';
import { BaseLayout } from '../../../components/layouts/base';
import { DetailSekilasIlmuModule } from '../../../modules/sekilas-ilmu/detail/module';
import {
  allArticleGetRequest,
  articleDetailGetRequest,
} from '../../../hooks/article/request';
import { ErrorArticle } from '../../../modules/sekilas-ilmu/detail/error';
// eslint-disable-next-line @nx/enforce-module-boundaries

type Props = {
  params: Promise<{ slug: string }>;
};

// Return empty array to skip static generation - pages will be generated on-demand
// This avoids build failures when the API is unreachable during build time
export async function generateStaticParams() {
  return [];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const resolvedParams = await params;
    const response = await articleDetailGetRequest(resolvedParams.slug);

    if (!response)
      return {
        title: 'Not Found',
        description: 'Halaman tidak ditemukan',
      };

    return {
      title: response?.data?.title,
      description: response?.data?.content
        ?.replace(/<[^>]*>?/gm, '')
        .slice(0, 160),
      openGraph: {
        images: response?.data?.thumbnail,
      },
      alternates: {
        canonical: `/sekilas-ilmu/${resolvedParams.slug}`,
      },
    };
  } catch (error) {
    return {
      title: 'Not Found',
      description: 'Halaman tidak ditemukan',
    };
  }
}

const SekilasIlmuDetails = ({
  params,
}: {
  params: Promise<{ slug: string }>;
}): ReactElement => {
  const { slug } = use(params);

  return (
    <ErrorBoundary fallback={<ErrorArticle />}>
      <BaseLayout>
        <DetailSekilasIlmuModule slug={slug} />
        <FooterCredit />
      </BaseLayout>
    </ErrorBoundary>
  );
};

export default SekilasIlmuDetails;

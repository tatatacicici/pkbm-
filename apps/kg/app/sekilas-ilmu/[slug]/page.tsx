import { ReactElement } from 'react';
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
  params: { slug: string };
};

export async function generateStaticParams() {
  try {
    const data = await allArticleGetRequest();

    return data ? data?.data.map(({ slug }) => ({ params: { slug } })) : [];
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching articles:', error);
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const response = await articleDetailGetRequest(params.slug);

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
        canonical: `/sekilas-ilmu/${params.slug}`,
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
  params: { slug: string };
}): ReactElement => {
  const { slug } = params;

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

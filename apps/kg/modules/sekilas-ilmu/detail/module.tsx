'use client';

import { FC, Fragment, ReactElement } from 'react';
import { BreadCrumb, LoadingSpinner } from '@kampus-gratis/components/atoms';
import { RelatedGlimpseKnowledgeCard } from '../../../components/sekilas-ilmu/Detail/RelatedGlimpseKnowledgeCard';
import Image from 'next/image';
import {
  useGetArticleDetail,
  useGetArticleRelated,
} from '../../../hooks/article/hook';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import { ScrollTopFunction } from '../../../app/utils/scrollTopFunction';

import './article.css';

export const DetailSekilasIlmuModule: FC<any> = ({ slug }): ReactElement => {
  const _slug = slug;

  const { data, isLoading } = useGetArticleDetail(slug);

  const detail = data?.data;

  const relatedArticleData = useGetArticleRelated(detail?.id as string, 10);
  const relatedArticles = relatedArticleData?.data as any;

  const GlimpseKnowledgeBreadcumbs = [
    {
      name: 'Beranda',
      link: '/beranda',
    },
    { name: 'Tahukah Kamu', link: '/sekilas-ilmu' },
    {
      name: 'Detail',
      link: `/sekilas-ilmu/${_slug}`,
    },
  ];

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const filterDate = detail?.created_at.slice(0, 10);
  const dateStr = filterDate?.replace(/-/g, '/');

  if (!detail) {
    return <LoadingSpinner />;
  }

  const formattedDate = format(
    new Date(dateStr as string),
    'EEEE, dd MMMM yyyy',
    { locale: id }
  );

  const content = `${detail?.content}`;

  ScrollTopFunction();

  return (
    <Fragment>
      <section className="min-h-[100vh] bg-neutral-50/60 mt-3 ">
        <div className="">
          <BreadCrumb items={GlimpseKnowledgeBreadcumbs} />
        </div>
        <div className="px-4 md:px-12 lg:px-14 lg:gap-x-24">
          <div className="max-w-[1440px] mx-auto">
            <main className="grid grid-cols-3 gap-x-10">
              <section className="col-span-3 lg:col-span-2">
                <h1 className="font-bold text-xl md:text-3xl">
                  {detail?.title}
                </h1>
                <div className="flex gap-x-2 my-4 flex-wrap gap-y-2">
                  {detail?.tags &&
                    detail?.tags?.slice(0, 6).map((item) => (
                      <p
                        key={item as any}
                        className="text-[12px] bg-[#E3FBDA] font-semibold px-3 rounded-md"
                      >
                        {item.toString().length > 20
                          ? item.toString().substring(0, 10) + '...'
                          : item.toString()}
                      </p>
                    ))}
                </div>
                <div>
                  <div className="block md:flex justify-between md:py-6">
                    <p>
                      {detail?.author.full_name} - {formattedDate}
                    </p>
                  </div>
                  <div className="w-full rounded-lg flex justify-center">
                    <Image
                      src={detail?.thumbnail as string}
                      width={600}
                      height={400}
                      alt="Detail Article Image"
                      className="object-fill"
                    />
                  </div>
                  <p
                    className="py-4 md:text-lg text-justify article-detail"
                    dangerouslySetInnerHTML={{ __html: content }}
                  ></p>
                </div>
              </section>
              <section className="col-span-3 lg:col-span-1 mt-6">
                <h1 className="font-bold">Lainnya dari Tahukah Kamu</h1>
                {/* <span className="h-[4px] w-24 bg-blue-base block rounded-md mb-2"></span>
                <div className="h-[400px] overflow-auto scrollbar-thin scrollbar-thumb-blue-base scrollbar-thumb-rounded-lg"> */}
                <span className="h-[4px] w-24 bg-sky-base block rounded-md mb-2"></span>
                <div className="h-[400px] overflow-auto scrollbar-thin scrollbar-thumb-sky-base scrollbar-thumb-rounded-lg">
                  {relatedArticles ? (
                    relatedArticles?.map((article: any) => {
                      return (
                        <Fragment key={article.id}>
                          <RelatedGlimpseKnowledgeCard data={...article} />
                        </Fragment>
                      );
                    })
                  ) : (
                    <div>
                      <p>Belum ada artikel terkait</p>
                    </div>
                  )}
                </div>
              </section>
            </main>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

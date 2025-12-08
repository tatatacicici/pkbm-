/* eslint-disable @nx/enforce-module-boundaries */
'use client';

import {
  FC,
  ReactElement,
  useEffect,
  useState,
  useCallback,
  useRef,
} from 'react';
import { GlimpseKnowledgeCard } from './Card/GlimpseKnowledgeCard';
import Link from 'next/link';
import { useInfiniteQuery } from '@tanstack/react-query';
import {
  articlesFavorieGetRequestInfinite,
  articlesGetRequestInfinite,
} from '@kampus-gratis/apps/kg/hooks/article/request';
import { TArticleItem } from '@kampus-gratis/apps/kg/types/articles';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { AiOutlineSearch } from 'react-icons/ai';
import { useSession } from 'next-auth/react';
import { CardLoad } from '@kampus-gratis/components/atoms';

export const GlimpseKnowledgeMain: FC = (): ReactElement => {
  const { status } = useSession();
  const router = useRouter();
  const [searchArticle, setSearchArticle] = useState<string>('');
  const pathname = usePathname();

  const observerElem = useRef<HTMLDivElement | null>(null);

  const query = useSearchParams();
  const searchQuery = query.get('search') || '';
  const [search, setSearch] = useState(searchQuery);

  const isFavoritePage = pathname === '/sekilas-ilmu/favorite';

  useEffect(() => {
    if (isFavoritePage && status !== 'authenticated') {
      router.push(`/auth/login?callbackUrl=${encodeURIComponent(pathname)}`);
    }
  }, [isFavoritePage, status, router, pathname]);

  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: [
        isFavoritePage
          ? 'get-favorite-article-infinite'
          : 'get-article-infinite',
        search,
      ],
      queryFn: async ({ pageParam = 1 }) => {
        if (isFavoritePage) {
          return await articlesFavorieGetRequestInfinite({ pageParam, search });
        } else {
          return await articlesGetRequestInfinite({ pageParam, search });
        }
      },
      getNextPageParam: (lastPage) => {
        return lastPage.data.current_page < lastPage.data.max_page
          ? lastPage.data.current_page + 1
          : undefined;
      },
      enabled: true,
    });

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const target = entries[0];
      if (target.isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    },
    [fetchNextPage, hasNextPage]
  );

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '20px',
      threshold: 1.0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (observerElem.current) observer.observe(observerElem.current);

    return () => {
      if (observerElem.current) observer.unobserve(observerElem.current);
    };
  }, [handleObserver]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearch(searchArticle);
      if (searchArticle) {
        router.replace(`${pathname}?search=${searchArticle}`);
      } else {
        router.replace(pathname);
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [searchArticle, pathname, router]);

  const articleData = data?.pages.flatMap((item) => item?.data) || [];

  return (
    <main className="pb-20">
      <section className="bg-neutral-100 h-[56px] mb-10 mt-10 w-5/6 mx-auto rounded-md shadow-sm">
        <div className="flex items-center gap-4 px-4 py-4 md:px-6">
          <AiOutlineSearch className="text-xl text-neutral-400" />
          <input
            type={'text'}
            className="w-full bg-neutral-100 h-full text-sm  text-neutral-700 focus:outline-none"
            placeholder="Cari Artikel"
            value={searchArticle}
            onChange={(e) => setSearchArticle(e.target.value)}
          />
        </div>
      </section>
      <section className="px-6 md:px-14 2xl:px-0">
        <div className="flex gap-x-6">
          {/* <div>
            <Link
              href={'/sekilas-ilmu'}
              className={`text-${
                isFavoritePage ? 'gray' : '[#106FA4]'
              } text-[16px] font-semibold`}
              scroll={true}
            >
              Tahukah Kamu
            </Link>
            {!isFavoritePage && (
              <span className="h-[2px] w-full bg-[#106FA4] block rounded-md mt-2 mb-10 mx-auto"></span>
            )}
          </div>
          <div>
            <Link
              href={'/sekilas-ilmu/favorite'}
              className={`text-${
                isFavoritePage ? '[#106FA4]' : 'gray'
              } text-[16px] font-semibold`}
              scroll={true}
            >
              Disimpan
            </Link>
            {isFavoritePage && (
              <span className="h-[2px] w-full bg-[#106FA4] block rounded-md mt-2 mb-10 mx-auto"></span>
            )}
          </div> */}
          <div>
            <Link
              href={'/sekilas-ilmu'}
              className={`${
                isFavoritePage ? 'text-gray' : 'text-[#43A7FF]'
              } text-[16px] font-semibold`}
              scroll={true}
            >
              Tahukah Kamu
            </Link>

            {!isFavoritePage && (
              <span className="h-[2px] w-full bg-[#43A7FF] block rounded-md mt-2 mb-10 mx-auto"></span>
            )}
          </div>
          <div>
            <Link
              href={'/sekilas-ilmu/favorite'}
              className={`${
                isFavoritePage ? 'text-[#43A7FF]' : 'text-gray'
              } text-[16px] font-semibold`}
              scroll={true}
            >
              Disimpan
            </Link>

            {isFavoritePage && (
              <span className="h-[2px] w-full bg-[#43A7FF] block rounded-md mt-2 mb-10 mx-auto"></span>
            )}
          </div>
        </div>
      </section>
      <section>
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-6 md:px-14 2xl:px-0">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="animate-pulse">
                <CardLoad />
              </div>
            ))}
          </div>
        ) : articleData && articleData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-6 md:px-14 2xl:px-0">
            {articleData.map((item, index) =>
              item?.data ? (
                item?.data.map((data: TArticleItem) => (
                  <GlimpseKnowledgeCard key={data.id} data={data} />
                ))
              ) : (
                <div
                  key={index}
                  className="flex justify-center items-center w-full h-full"
                >
                  <p className="text-gray-400">Artikel tidak ditemukan</p>
                </div>
              )
            )}
          </div>
        ) : (
          <div className="flex justify-center items-center w-full h-full">
            <p className="text-gray-400">Belum ada artikel</p>
          </div>
        )}
        <div ref={observerElem}>
          {isFetchingNextPage && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-6 md:px-14 2xl:px-0">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="animate-pulse">
                  <CardLoad />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

'use client';

import { Button } from '@kampus-gratis/components/atoms';
import { useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { FC, ReactElement, useState } from 'react';
import {
  useFavoriteArticle,
  useFavoriteArticleDelete,
} from '../../../../hooks/article/hook';
import { TArticleItem } from '../../../../types/articles';

interface GlimpseKnowledgeCardProps {
  data: TArticleItem;
  refetch?: () => void;
  session?: any;
  router?: any;
}

export const GlimpseKnowledgeCard: FC<GlimpseKnowledgeCardProps> = ({
  data,
  refetch,
}): ReactElement => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const queryClient = useQueryClient();
  const pathname = usePathname();

  const [isFavorite, setIsFavorite] = useState(data.is_favorite);

  const { mutate: mutateFavoritePost } = useFavoriteArticle();
  const { mutate: mutateFavoriteDelete } = useFavoriteArticleDelete();

  const handleSave = async () => {
    if (!session) {
      return router.push(
        `/auth/login?callbackUrl=${encodeURIComponent(pathname)}`
      );
    }

    setIsFavorite(true);

    mutateFavoritePost(
      {
        article_id: data.id,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(['get-article-infinite']);
        },
      }
    );
  };

  const handleDelete = async () => {
    setIsFavorite(false);

    mutateFavoriteDelete(
      {
        article_id: data.id,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(['get-favorite-article-infinite']);
        },
      }
    );
  };

  const filterDate = data?.created_at?.slice(0, 10);

  const Day = new Date(filterDate as string);
  const newDay = new Intl.DateTimeFormat('id', {
    dateStyle: 'full',
  }).format(Day);

  return (
    <section className="flex flex-col border border-neutral-300 w-full rounded-lg min-h-[350px] h-full hover:bg-neutral-50/80 bg-white justify-between">
      <div className="w-full h-full">
        <Link href={`/sekilas-ilmu/${data?.slug}`}>
          <div className="w-full relative">
            <Image
              src={data?.thumbnail}
              alt={'image-article'}
              width={0}
              height={0}
              sizes="50vw"
              loading={'eager'}
              priority={true}
              style={{
                height: '208px',
                width: '100%',
              }}
              className="w-full rounded-t-md object-cover"
            />
          </div>
          <div className="flex flex-col py-4 px-4">
            <div className="flex flex-wrap gap-y-3 justify-between w-full items-center">
              <div className="flex space-x-2 ">
                {data ? (
                  data?.tags?.slice(0, 1).map((item) => (
                    <p
                      key={item as any}
                      className="text-[12px] bg-[#E3FBDA] font-semibold px-3 py-0.5 rounded-md "
                    >
                      {item.toString().charAt(0).toUpperCase() +
                        item.toString().slice(1).toLowerCase()}
                    </p>
                  ))
                ) : (
                  <p className="text-[12px] bg-[#E3FBDA] font-semibold px-3 py-0.5 rounded-md">
                    -
                  </p>
                )}
              </div>
              <p className="text-[12px] text-neutral-500">{newDay}</p>
            </div>
            <div>
              <h1 className="text-black font-bold text-[18px] overflow-hidden mt-2 line-clamp-2 h-14">
                {data.title}
              </h1>
            </div>
            <div>
              <p className="text-[14px] text-neutral-500 mt-2 line-clamp-3">
                {data?.content.replace(/<[^>]*>|(\n)|(<li>)/g, ' ')}
              </p>
            </div>
          </div>
        </Link>
      </div>
      <div className="flex justify-between px-4 pb-5 pt-2">
        <p className="flex text-[12px] text-neutral-500 justify-end items-end">
          {data?.views} views
        </p>
        {isFavorite && (
          <Button
            type="button"
            className="bg-[#D3E8F4] p-2 rounded-md"
            onClick={handleDelete}
          >
            {' '}
            <Image
              src="/icons/article-saved-new.svg"
              alt={'icon-favorite'}
              width={30}
              height={30}
              loading={'lazy'}
              priority={false}
              className="w-auto h-auto"
            />
          </Button>
        )}
        {!isFavorite && (
          <Button
            type="button"
            className="bg-gray-100 p-2 rounded-md"
            onClick={handleSave}
          >
            {' '}
            <Image
              src="/icons/article-unsave.svg"
              alt={'icon-favorite'}
              width={30}
              height={30}
              loading={'lazy'}
              priority={false}
              className="w-auto h-auto"
            />
          </Button>
        )}
      </div>
    </section>
  );
};

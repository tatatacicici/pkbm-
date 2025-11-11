import Image from 'next/image';
import Link from 'next/link';
import { FC, ReactElement } from 'react';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import { LoadingSpinner } from '@kampus-gratis/components/atoms';

interface RelatedGlimpseKnowledgeCardProps {
  data: {
    created_at: string;
    slug: string;
    thumbnail: string;
    title: string;
    tags?: string[];
  } | null;
}

export const RelatedGlimpseKnowledgeCard: FC<
  RelatedGlimpseKnowledgeCardProps
> = ({ data }): ReactElement => {
  if (!data) {
    return <LoadingSpinner />;
  }

  const { created_at, slug, thumbnail, title, tags } = data;
  const filterDate = created_at?.slice(0, 10);
  const dateStr = filterDate?.replace(/-/g, '/');

  const formattedDate = dateStr
    ? format(new Date(dateStr), 'EEEE, dd MMMM yyyy', { locale: id })
    : '';

  return (
    <Link href={`/sekilas-ilmu/${slug}`}>
      <section className="py-2">
        <section className="flex items-center gap-2">
          <Image
            width={80}
            height={80}
            sizes="30vw"
            src={thumbnail ?? '/default-thumbnail.jpg'}
            alt="Related Image Article"
            className="flex-shrink-0 w-20 h-20 bg-blue-200 rounded-md object-cover"
          />
          <main>
            <h1 className="pr-10 mb-2 text-sm font-bold">
              {title ?? 'No Title'}
            </h1>
            <section className="flex items-center gap-2 flex-wrap">
              {tags && tags.length > 0 && (
                <div className="px-2 py-1 text-xs font-bold rounded-md shadow-sm w-fit bg-slate-200">
                  {tags.slice(0, 1).map((item) => (
                    <p
                      key={item}
                      className="text-[12px] text-neutral-800 bg-secondary-blue-100 font-semibold px-1 rounded-md"
                    >
                      {item.length > 15 ? `${item.substring(0, 15)}...` : item}
                    </p>
                  ))}
                </div>
              )}
              <span>|</span>
              <h1 className="text-xs text-neutral-600">{formattedDate}</h1>
            </section>
          </main>
        </section>
      </section>
    </Link>
  );
};

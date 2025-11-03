import { useParams } from 'next/navigation';
import { useGetDetailBukuPanduan } from '../../../../hooks/panduan/hooks';
import { LoadingSpinner } from '@kampus-gratis/components/atoms';

export const ContentDetailPanduan = () => {
  const params = useParams();
  const bookId = params.id;

  const { data, isLoading } = useGetDetailBukuPanduan(String(bookId));

  if (isLoading) {
    return <LoadingSpinner />;
  }

  //   const { data } = useGetDetailBukuPanduan();

  return (
    <section>
      <div className="w-full px-8 min-h-[30vh] md:px-14 lg:px-16 2xl:px-0 max-w-[1440px] mx-auto">
        <div className="w-full flex flex-col gap-y-4 text-justify my-4">
          <h1 className="text-2xl font-bold">{data?.data?.title}</h1>
          <p
            dangerouslySetInnerHTML={{
              __html: String(data?.data?.description),
            }}
          ></p>
        </div>
      </div>
    </section>
  );
};

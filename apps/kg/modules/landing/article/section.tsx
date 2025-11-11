import { Button } from '@kampus-gratis/components/atoms';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { GlimpseKnowledgeCard } from '../../../components/sekilas-ilmu/Main/Card/GlimpseKnowledgeCard';
import { useGetArticle } from '../../../hooks/article/hook';

const ArticleSection = () => {
  const { data } = useGetArticle(1, 4, '');
  const allArticleData = data?.data;

  const router = useRouter();

  const handleClick = () => {
    router.push('/sekilas-ilmu');
  };

  return (
    <section className="lg:flex flex-col gap-y-[20px] max-w-[1440px] mx-auto px-4 md:px-12 2xl:px-0 my-5">
      <div className="py-10 relative">
        <div className="relative z-10">
          <h1 className="font-bold text-4xl text-center">Tahukah Kamu</h1>
        </div>
        <Image
          // src="/images/article-stars.png"
          src="/images/article-stars-new.svg"
          alt={'card-landing'}
          width={131}
          height={131}
          priority
          // className="absolute z-0 top-0 right-0 md:right-36 lg:right-80"
          className="absolute z-0 top-0 right-0 md:right-36 lg:right-80"
          style={{
            width: '131px',
            height: '131px',
          }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[15px] mx-4">
        {allArticleData ? (
          allArticleData?.data?.map((item: any) => (
            <GlimpseKnowledgeCard key={item.id} data={item} />
          ))
        ) : (
          <div className="flex justify-center items-center w-full h-[300px]">
            <p className="text-neutral-500 font-medium text-[14px]">
              Tidak ada artikel
            </p>
          </div>
        )}
      </div>
      <div className="flex w-full justify-center items-center pt-8">
        {/* <Button
          type="button"
          className="bg-blue-base text-white font-semibold p-3 rounded-lg w-[328px]"
          onClick={handleClick}
        >
          Lihat Semua
        </Button> */}
        <Button
          type="button"
          className="bg-sky-base hover:bg-sky-base/90 text-white font-semibold p-3 rounded-lg w-[328px]"
          onClick={handleClick}
        >
          Lihat Semua
        </Button>
      </div>
    </section>
  );
};

export default ArticleSection;

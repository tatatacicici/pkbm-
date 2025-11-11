'use client';
import BaseLayout from '../../../../modules/base/BaseLayout';
import Breadcrumb from '../../../../components/breadcrumb/Breadcrumb';
import { FC, ReactElement } from 'react';
import { EditArticleModule } from '../../../../modules/article/editarticle';
import { useParams, useRouter } from 'next/navigation';
import Button from '../../../../components/button/Button';
import { useGetArticleBySlug } from '../../../../hooks/article/editarticle/hooks';

const EditArticle: FC = (): ReactElement => {
  const router = useRouter();
  const params = useParams();
  const { slug } = params;

  const EditArticleBC = [
    {
      name: 'Tahukah Kamu',
      link: '/sekilas-ilmu',
    },
    {
      name: 'Edit Artikel',
      link: '/sekilas-ilmu/editarticle',
    },
  ];
  const HandleaddArtikel = () => {
    return router.push('/sekilas-ilmu/addarticle');
  };
  return (
    <>
      <BaseLayout>
        <div className="flex justify-between mb-10">
          <Breadcrumb items={EditArticleBC} />
          <Button
            plus={true}
            title="Artikel"
            buttonStyle="flex items-center justify-center bg-primary-base w-[150px] h-10 px-3 rounded text-white hover:bg-primary-600"
            onClick={HandleaddArtikel}
          >
            Artikel
          </Button>
        </div>
        <EditArticleModule />
      </BaseLayout>
    </>
  );
};
export default EditArticle;

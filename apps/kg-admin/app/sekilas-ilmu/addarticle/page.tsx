import BaseLayout from '../../../modules/base/BaseLayout';
import { FC, ReactElement } from 'react';
import Breadcrumb from '../../../components/breadcrumb/Breadcrumb';
import { AddArticleModule } from '../../../modules/article/addarticle';

const addArticle: FC = (): ReactElement => {
  const addArticleBC = [
    {
      name: 'Tahukah Kamu',
      link: '/sekilas-ilmu',
    },
    {
      name: 'Tambah Artikel',
      link: '/add-article',
    },
  ];
  return (
    <BaseLayout>
      <div className="flex justify-between mb-10">
        <Breadcrumb items={addArticleBC} />
      </div>
      <AddArticleModule />
    </BaseLayout>
  );
};

export default addArticle;

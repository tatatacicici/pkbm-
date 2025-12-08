import { MetadataRoute } from 'next';
import { allArticleGetRequest } from '../hooks/article/request';
import { getSubject } from '../hooks/rencana-studi/request';
import { TSubject } from '../types/rencana-studi';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articleDatas = await allArticleGetRequest();
  const subjectDatas = await getSubject(
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    1000
  );

  const postEntries: MetadataRoute.Sitemap = articleDatas
    ? articleDatas.data.map(({ slug }) => ({
        url: `https://kampusgratis.id/sekilas-ilmu/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.5,
      }))
    : [];

  const subjectEntries: MetadataRoute.Sitemap = subjectDatas
    ? subjectDatas.data.map(({ id }: TSubject) => ({
        url: `https://kampusgratis.id/rencana-studi/detail-rencana-studi/${id}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.5,
      }))
    : [];

  return [
    {
      url: 'https://kampusgratis.id/',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://kampusgratis.id/auth/login',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://kampusgratis.id/auth/register',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://kampusgratis.id/bootcamp',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://kampusgratis.id/semua-fitur',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://kampusgratis.id/acara-kampus',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://kampusgratis.id/assesmen-dan-uji-kompetensi/assesmen',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://kampusgratis.id/assesmen-dan-uji-kompetensi/uji-kompetensi',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://kampusgratis.id/program/magang',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://kampusgratis.id/konversi',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://kampusgratis.id/konversi/program',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    ...subjectEntries,
    ...postEntries,
  ];
}

/**
 * Articles Seeder
 */

import { QueryTypes } from 'sequelize';
import sequelize from '../config/database';

export const testArticles = [
  {
    id: 'a1111111-a111-a111-a111-111111111111',
    title: 'Tips Belajar Efektif di PKBM',
    slug: 'tips-belajar-efektif-di-pkbm',
    content: '<h1>Tips Belajar Efektif</h1><p>Berikut adalah tips untuk belajar efektif...</p>',
    excerpt: 'Pelajari cara belajar yang efektif untuk hasil maksimal',
    authorId: '11111111-1111-1111-1111-111111111111',
    categoryId: 'ca111111-1111-1111-1111-111111111111', // Dummy category
    thumbnail: 'default-article.jpg',
    publishedAt: new Date(),
  },
  {
    id: 'a2222222-a222-a222-a222-222222222222',
    title: 'Panduan Ujian Kesetaraan',
    slug: 'panduan-ujian-kesetaraan',
    content: '<h1>Panduan Ujian</h1><p>Persiapan menghadapi ujian kesetaraan...</p>',
    excerpt: 'Panduan lengkap persiapan ujian kesetaraan',
    authorId: '11111111-1111-1111-1111-111111111111',
    categoryId: 'ca111111-1111-1111-1111-111111111111',
    thumbnail: 'default-article.jpg',
    publishedAt: new Date(),
  },
  {
    id: 'a3333333-a333-a333-a333-333333333333',
    title: 'Manfaat Pendidikan Non-Formal',
    slug: 'manfaat-pendidikan-non-formal',
    content: '<h1>Manfaat Pendidikan Non-Formal</h1><p>Pendidikan non-formal memiliki banyak manfaat...</p>',
    excerpt: 'Kenali manfaat pendidikan non-formal bagi masyarakat',
    authorId: '22222222-2222-2222-2222-222222222222',
    categoryId: 'ca111111-1111-1111-1111-111111111111',
    thumbnail: 'default-article.jpg',
    publishedAt: null,
  },
];

export async function seedArticles() {
  // First create a dummy category if it doesn't exist
  await sequelize.query(
    `INSERT INTO articles_categories (id, name, created_at, updated_at)
     VALUES ('ca111111-1111-1111-1111-111111111111', 'Umum', NOW(), NOW())
     ON CONFLICT (id) DO NOTHING`,
    { type: QueryTypes.INSERT }
  );

  for (const article of testArticles) {
    await sequelize.query(
      `INSERT INTO articles (id, title, slug, content, excerpt, author_id, category_id, thumbnail, published_at, created_at, updated_at)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, NOW(), NOW())
       ON CONFLICT (id) DO UPDATE SET
         title = EXCLUDED.title,
         content = EXCLUDED.content,
         published_at = EXCLUDED.published_at,
         updated_at = NOW()`,
      {
        bind: [
          article.id,
          article.title,
          article.slug,
          article.content,
          article.excerpt,
          article.authorId,
          article.categoryId,
          article.thumbnail,
          article.publishedAt,
        ],
        type: QueryTypes.INSERT,
      }
    );
  }

  console.log(`   Created ${testArticles.length} articles`);
}

export async function cleanArticles() {
  const ids = testArticles.map(a => a.id);
  await sequelize.query(`DELETE FROM articles WHERE id = ANY($1::uuid[])`, { bind: [ids] });
}

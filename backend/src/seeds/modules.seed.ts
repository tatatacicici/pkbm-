/**
 * Modules Seeder
 */

import { QueryTypes } from 'sequelize';
import sequelize from '../config/database';

export const testModules = [
  // Session 1 (Operasi Bilangan) Modules
  {
    id: 'b1111111-1111-1111-1111-111111111111',
    sessionId: 'a1111111-1111-1111-1111-111111111111',
    title: 'Video: Pengenalan Bilangan Bulat',
    description: 'Video pengantar materi bilangan bulat',
    videoId: ['video1'],
    durationSec: 600,
    order: 1,
    status: 'PUBLISHED',
  },
  {
    id: 'b1111111-2222-2222-2222-222222222222',
    sessionId: 'a1111111-1111-1111-1111-111111111111',
    title: 'Materi: Operasi Penjumlahan',
    description: 'Materi teks operasi penjumlahan',
    documentId: ['doc1'],
    order: 2,
    status: 'PUBLISHED',
  },
  {
    id: 'b1111111-3333-3333-3333-333333333333',
    sessionId: 'a1111111-1111-1111-1111-111111111111',
    title: 'Video: Operasi Pengurangan',
    description: 'Video materi operasi pengurangan',
    videoId: ['video2'],
    durationSec: 480,
    order: 3,
    status: 'PUBLISHED',
  },
  // Session 2 (Pecahan) Modules
  {
    id: 'b2222222-1111-1111-1111-111111111111',
    sessionId: 'a2222222-2222-2222-2222-222222222222',
    title: 'Video: Pengenalan Pecahan',
    description: 'Video pengantar materi pecahan',
    videoId: ['video3'],
    durationSec: 720,
    order: 1,
    status: 'PUBLISHED',
  },
  {
    id: 'b2222222-2222-2222-2222-222222222222',
    sessionId: 'a2222222-2222-2222-2222-222222222222',
    title: 'Materi: Penjumlahan Pecahan',
    description: 'Cara menjumlahkan pecahan',
    documentId: ['doc2'],
    order: 2,
    status: 'PUBLISHED',
  },
  // Session 4 (Bahasa Indonesia) Modules
  {
    id: 'b4444444-1111-1111-1111-111111111111',
    sessionId: 'a4444444-4444-4444-4444-444444444444',
    title: 'Video: Struktur Kalimat',
    description: 'Video tentang struktur kalimat bahasa Indonesia',
    videoId: ['video4'],
    durationSec: 540,
    order: 1,
    status: 'PUBLISHED',
  },
];

export async function seedModules() {
  for (const module of testModules) {
    // Format arrays for PostgreSQL
    const videoIdArray = module.videoId ? `{${module.videoId.join(',')}}` : null;
    const documentIdArray = module.documentId ? `{${module.documentId.join(',')}}` : null;
    
    await sequelize.query(
      `INSERT INTO modules (id, session_id, title, description, video_id, document_id, duration_sec, "order", status, created_at, updated_at)
       VALUES ($1, $2, $3, $4, $5::varchar[], $6::varchar[], $7, $8, $9, NOW(), NOW())
       ON CONFLICT (id) DO UPDATE SET
         title = EXCLUDED.title,
         description = EXCLUDED.description,
         video_id = EXCLUDED.video_id,
         document_id = EXCLUDED.document_id,
         duration_sec = EXCLUDED.duration_sec,
         "order" = EXCLUDED."order",
         status = EXCLUDED.status,
         updated_at = NOW()`,
      {
        bind: [
          module.id,
          module.sessionId,
          module.title,
          module.description,
          videoIdArray,
          documentIdArray,
          module.durationSec || null,
          module.order,
          module.status,
        ],
        type: QueryTypes.INSERT,
      }
    );
  }

  console.log(`   Created ${testModules.length} modules`);
}

export async function cleanModules() {
  const ids = testModules.map(m => m.id);
  await sequelize.query(`DELETE FROM modules WHERE id = ANY($1::uuid[])`, { bind: [ids] });
}

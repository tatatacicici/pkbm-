/**
 * Subjects Seeder
 */

import { QueryTypes } from 'sequelize';
import sequelize from '../config/database';

export const testSubjects = [
  {
    id: 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
    title: 'Matematika Dasar',
    description: 'Pelajaran matematika dasar untuk kesetaraan Paket A/B/C',
    code: 'MTK-001',
    status: 'PUBLISHED',
  },
  {
    id: 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb',
    title: 'Bahasa Indonesia',
    description: 'Pelajaran Bahasa Indonesia untuk kesetaraan',
    code: 'BIN-001',
    status: 'PUBLISHED',
  },
  {
    id: 'cccccccc-cccc-cccc-cccc-cccccccccccc',
    title: 'Bahasa Inggris',
    description: 'Pelajaran Bahasa Inggris dasar',
    code: 'BIG-001',
    status: 'PUBLISHED',
  },
  {
    id: 'dddddddd-dddd-dddd-dddd-dddddddddddd',
    title: 'Ilmu Pengetahuan Alam',
    description: 'Pelajaran IPA untuk kesetaraan',
    code: 'IPA-001',
    status: 'DRAFT',
  },
];

export async function seedSubjects() {
  for (const subject of testSubjects) {
    await sequelize.query(
      `INSERT INTO subjects (id, title, description, code, status, created_at, updated_at)
       VALUES ($1, $2, $3, $4, $5, NOW(), NOW())
       ON CONFLICT (id) DO UPDATE SET
         title = EXCLUDED.title,
         description = EXCLUDED.description,
         status = EXCLUDED.status,
         updated_at = NOW()`,
      {
        bind: [subject.id, subject.title, subject.description, subject.code, subject.status],
        type: QueryTypes.INSERT,
      }
    );
  }

  // Enroll test students to subjects
  const studentIds = [
    '33333333-3333-3333-3333-333333333333',
    '44444444-4444-4444-4444-444444444444',
  ];
  
  for (const studentId of studentIds) {
    for (const subject of testSubjects.filter(s => s.status === 'PUBLISHED')) {
      await sequelize.query(
        `INSERT INTO user_subjects (id, user_id, subject_id, enrollment_date, created_at, updated_at)
         VALUES (gen_random_uuid(), $1, $2, NOW(), NOW(), NOW())
         ON CONFLICT (user_id, subject_id) DO NOTHING`,
        {
          bind: [studentId, subject.id],
          type: QueryTypes.INSERT,
        }
      );
    }
  }

  console.log(`   Created ${testSubjects.length} subjects`);
}

export async function cleanSubjects() {
  const ids = testSubjects.map(s => s.id);
  await sequelize.query(`DELETE FROM subjects WHERE id = ANY($1::uuid[])`, { bind: [ids] });
}

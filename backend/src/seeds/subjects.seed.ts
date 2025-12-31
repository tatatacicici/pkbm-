/**
 * Subjects Seeder
 */

import { QueryTypes } from 'sequelize';
import sequelize from '../config/database';

export const testSubjects = [
  {
    id: 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
    name: 'Matematika Dasar',
    description: 'Pelajaran matematika dasar untuk kesetaraan Paket A/B/C',
    subjectCode: 'MTK-001',
    slug: 'matematika-dasar',
    thumbnail: 'default-thumbnail.jpg',
  },
  {
    id: 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb',
    name: 'Bahasa Indonesia',
    description: 'Pelajaran Bahasa Indonesia untuk kesetaraan',
    subjectCode: 'BIN-001',
    slug: 'bahasa-indonesia',
    thumbnail: 'default-thumbnail.jpg',
  },
  {
    id: 'cccccccc-cccc-cccc-cccc-cccccccccccc',
    name: 'Bahasa Inggris',
    description: 'Pelajaran Bahasa Inggris dasar',
    subjectCode: 'BIG-001',
    slug: 'bahasa-inggris',
    thumbnail: 'default-thumbnail.jpg',
  },
  {
    id: 'dddddddd-dddd-dddd-dddd-dddddddddddd',
    name: 'Ilmu Pengetahuan Alam',
    description: 'Pelajaran IPA untuk kesetaraan',
    subjectCode: 'IPA-001',
    slug: 'ilmu-pengetahuan-alam',
    thumbnail: 'default-thumbnail.jpg',
  },
];

export async function seedSubjects() {
  for (const subject of testSubjects) {
    await sequelize.query(
      `INSERT INTO subjects (id, name, description, subject_code, slug, thumbnail, created_at, updated_at)
       VALUES ($1, $2, $3, $4, $5, $6, NOW(), NOW())
       ON CONFLICT (id) DO UPDATE SET
         name = EXCLUDED.name,
         description = EXCLUDED.description,
         subject_code = EXCLUDED.subject_code,
         slug = EXCLUDED.slug,
         updated_at = NOW()`,
      {
        bind: [subject.id, subject.name, subject.description, subject.subjectCode, subject.slug, subject.thumbnail],
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
    for (const subject of testSubjects.slice(0, 3)) { // Enroll to first 3 subjects
      await sequelize.query(
        `INSERT INTO student_subjects (id, student_id, subject_id, status, created_at, updated_at)
         VALUES (gen_random_uuid(), $1, $2, 'ACTIVE', NOW(), NOW())
         ON CONFLICT DO NOTHING`,
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

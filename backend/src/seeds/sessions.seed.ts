/**
 * Sessions Seeder
 */

import { QueryTypes } from 'sequelize';
import sequelize from '../config/database';

export const testSessions = [
  // Matematika Sessions
  {
    id: 'a1111111-1111-1111-1111-111111111111',
    subjectId: 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
    title: 'Pertemuan 1: Operasi Bilangan',
    description: 'Belajar operasi dasar bilangan bulat',
    sessionNo: 1,
  },
  {
    id: 'a2222222-2222-2222-2222-222222222222',
    subjectId: 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
    title: 'Pertemuan 2: Pecahan',
    description: 'Belajar operasi pecahan',
    sessionNo: 2,
  },
  {
    id: 'a3333333-3333-3333-3333-333333333333',
    subjectId: 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
    title: 'Pertemuan 3: Persamaan Linear',
    description: 'Pengenalan persamaan linear',
    sessionNo: 3,
  },
  // Bahasa Indonesia Sessions
  {
    id: 'a4444444-4444-4444-4444-444444444444',
    subjectId: 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb',
    title: 'Pertemuan 1: Tata Bahasa',
    description: 'Dasar tata bahasa Indonesia',
    sessionNo: 1,
  },
  {
    id: 'a5555555-5555-5555-5555-555555555555',
    subjectId: 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb',
    title: 'Pertemuan 2: Menulis Paragraf',
    description: 'Teknik menulis paragraf yang baik',
    sessionNo: 2,
  },
];

export async function seedSessions() {
  for (const session of testSessions) {
    await sequelize.query(
      `INSERT INTO sessions (id, subject_id, title, description, session_no, created_at, updated_at)
       VALUES ($1, $2, $3, $4, $5, NOW(), NOW())
       ON CONFLICT (id) DO UPDATE SET
         title = EXCLUDED.title,
         description = EXCLUDED.description,
         session_no = EXCLUDED.session_no,
         updated_at = NOW()`,
      {
        bind: [session.id, session.subjectId, session.title, session.description, session.sessionNo],
        type: QueryTypes.INSERT,
      }
    );
  }

  console.log(`   Created ${testSessions.length} sessions`);
}

export async function cleanSessions() {
  const ids = testSessions.map(s => s.id);
  await sequelize.query(`DELETE FROM sessions WHERE id = ANY($1::uuid[])`, { bind: [ids] });
}

/**
 * Assignments Seeder
 */

import { QueryTypes } from 'sequelize';
import sequelize from '../config/database';

export const testAssignments = [
  {
    id: 'f1111111-1111-1111-1111-111111111111',
    sessionId: 'a1111111-1111-1111-1111-111111111111',
    title: 'Tugas 1: Latihan Penjumlahan',
    desc: 'Tugas latihan penjumlahan bilangan bulat',
    exercise: 'Kerjakan 10 soal penjumlahan berikut',
    durationDays: 7,
  },
  {
    id: 'f2222222-2222-2222-2222-222222222222',
    sessionId: 'a1111111-1111-1111-1111-111111111111',
    title: 'Tugas 2: Latihan Pengurangan',
    desc: 'Tugas latihan pengurangan bilangan bulat',
    exercise: 'Kerjakan 10 soal pengurangan berikut',
    durationDays: 14,
  },
  {
    id: 'f3333333-3333-3333-3333-333333333333',
    sessionId: 'a2222222-2222-2222-2222-222222222222',
    title: 'Tugas 1: Latihan Pecahan',
    desc: 'Tugas latihan operasi pecahan',
    exercise: 'Kerjakan soal-soal pecahan berikut',
    durationDays: 7,
  },
  {
    id: 'f4444444-4444-4444-4444-444444444444',
    sessionId: 'a4444444-4444-4444-4444-444444444444',
    title: 'Tugas 1: Menulis Paragraf',
    desc: 'Tugas menulis paragraf bahasa Indonesia',
    exercise: 'Tulis sebuah paragraf tentang lingkungan',
    durationDays: 7,
  },
];

export async function seedAssignments() {
  for (const assignment of testAssignments) {
    await sequelize.query(
      `INSERT INTO assignments (id, session_id, title, "desc", exercise, duration_days, created_at, updated_at)
       VALUES ($1, $2, $3, $4, $5, $6, NOW(), NOW())
       ON CONFLICT (id) DO UPDATE SET
         title = EXCLUDED.title,
         "desc" = EXCLUDED."desc",
         exercise = EXCLUDED.exercise,
         duration_days = EXCLUDED.duration_days,
         updated_at = NOW()`,
      {
        bind: [
          assignment.id,
          assignment.sessionId,
          assignment.title,
          assignment.desc,
          assignment.exercise,
          assignment.durationDays,
        ],
        type: QueryTypes.INSERT,
      }
    );
  }

  console.log(`   Created ${testAssignments.length} assignments`);
}

export async function cleanAssignments() {
  const ids = testAssignments.map(a => a.id);
  await sequelize.query(`DELETE FROM assignments WHERE id = ANY($1::uuid[])`, { bind: [ids] });
}

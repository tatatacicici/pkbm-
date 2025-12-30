/**
 * Users Seeder
 */

import { QueryTypes } from 'sequelize';
import sequelize from '../config/database';
import bcrypt from 'bcrypt';

export const testUsers = [
  {
    id: '11111111-1111-1111-1111-111111111111',
    email: 'admin@pkbm.test',
    password: 'password123',
    fullName: 'Admin PKBM',
    role: 'ADMIN',
    phone: '081234567890',
  },
  {
    id: '22222222-2222-2222-2222-222222222222',
    email: 'teacher@pkbm.test',
    password: 'password123',
    fullName: 'Guru PKBM',
    role: 'TEACHER',
    phone: '081234567891',
  },
  {
    id: '33333333-3333-3333-3333-333333333333',
    email: 'student@pkbm.test',
    password: 'password123',
    fullName: 'Siswa PKBM',
    role: 'STUDENT',
    phone: '081234567892',
  },
  {
    id: '44444444-4444-4444-4444-444444444444',
    email: 'student2@pkbm.test',
    password: 'password123',
    fullName: 'Siswa PKBM 2',
    role: 'STUDENT',
    phone: '081234567893',
  },
];

export async function seedUsers() {
  for (const user of testUsers) {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    
    await sequelize.query(
      `INSERT INTO users (id, email, password, full_name, role, phone, created_at, updated_at)
       VALUES ($1, $2, $3, $4, $5, $6, NOW(), NOW())
       ON CONFLICT (id) DO UPDATE SET
         email = EXCLUDED.email,
         full_name = EXCLUDED.full_name,
         role = EXCLUDED.role,
         updated_at = NOW()`,
      {
        bind: [user.id, user.email, hashedPassword, user.fullName, user.role, user.phone],
        type: QueryTypes.INSERT,
      }
    );
  }

  console.log(`   Created ${testUsers.length} users`);
}

export async function cleanUsers() {
  const ids = testUsers.map(u => u.id);
  await sequelize.query(
    `DELETE FROM users WHERE id = ANY($1::uuid[])`,
    { bind: [ids] }
  );
}

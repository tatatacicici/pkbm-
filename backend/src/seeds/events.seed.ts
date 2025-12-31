/**
 * Events Seeder
 */

import { QueryTypes } from 'sequelize';
import sequelize from '../config/database';

export const testEvents = [
  {
    id: 'e1111111-1111-1111-1111-111111111111',
    name: 'Webinar: Pentingnya Pendidikan Kesetaraan',
    description: 'Webinar tentang pentingnya pendidikan kesetaraan di Indonesia',
    typeEvent: 'WEBINAR',
    typeOrder: 'PUBLIC',
    dateStart: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    dateEnd: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000 + 2 * 60 * 60 * 1000),
    registrationCloseDate: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000),
    location: 'Online (Zoom)',
    capacity: 100,
    thumbnail: 'default-event.jpg',
    contactPersonName: 'Admin PKBM',
    contactPersonPhone: '081234567890',
    contactPersonEmail: 'admin@pkbm.test',
  },
  {
    id: 'e2222222-2222-2222-2222-222222222222',
    name: 'Workshop: Teknik Belajar Mandiri',
    description: 'Workshop tentang teknik belajar mandiri yang efektif',
    typeEvent: 'WORKSHOP',
    typeOrder: 'PUBLIC',
    dateStart: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
    dateEnd: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000 + 4 * 60 * 60 * 1000),
    registrationCloseDate: new Date(Date.now() + 13 * 24 * 60 * 60 * 1000),
    location: 'Aula PKBM',
    capacity: 50,
    thumbnail: 'default-event.jpg',
    contactPersonName: 'Guru PKBM',
    contactPersonPhone: '081234567891',
    contactPersonEmail: 'teacher@pkbm.test',
  },
  {
    id: 'e3333333-3333-3333-3333-333333333333',
    name: 'Ujian Kesetaraan Paket C',
    description: 'Ujian kesetaraan Paket C periode Januari 2026',
    typeEvent: 'EXAM',
    typeOrder: 'PRIVATE',
    dateStart: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    dateEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000 + 3 * 60 * 60 * 1000),
    registrationCloseDate: new Date(Date.now() + 25 * 24 * 60 * 60 * 1000),
    location: 'Gedung Ujian PKBM',
    capacity: 200,
    thumbnail: 'default-event.jpg',
    contactPersonName: 'Admin PKBM',
    contactPersonPhone: '081234567890',
    contactPersonEmail: 'admin@pkbm.test',
  },
];

export async function seedEvents() {
  for (const event of testEvents) {
    await sequelize.query(
      `INSERT INTO events (id, name, description, type_event, type_order, date_start, date_end, registration_close_date, location, capacity, thumbnail, contact_person_name, contact_person_phone, contact_person_email, created_at, updated_at)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, NOW(), NOW())
       ON CONFLICT (id) DO UPDATE SET
         name = EXCLUDED.name,
         description = EXCLUDED.description,
         type_event = EXCLUDED.type_event,
         updated_at = NOW()`,
      {
        bind: [
          event.id,
          event.name,
          event.description,
          event.typeEvent,
          event.typeOrder,
          event.dateStart,
          event.dateEnd,
          event.registrationCloseDate,
          event.location,
          event.capacity,
          event.thumbnail,
          event.contactPersonName,
          event.contactPersonPhone,
          event.contactPersonEmail,
        ],
        type: QueryTypes.INSERT,
      }
    );
  }

  console.log(`   Created ${testEvents.length} events`);
}

export async function cleanEvents() {
  const ids = testEvents.map(e => e.id);
  await sequelize.query(`DELETE FROM events WHERE id = ANY($1::uuid[])`, { bind: [ids] });
}

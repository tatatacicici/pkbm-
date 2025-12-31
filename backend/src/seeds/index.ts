/**
 * Database Seeder - Main Entry Point
 * 
 * Usage:
 *   npx ts-node src/seeds/index.ts
 *   npx ts-node src/seeds/index.ts --fresh  (drop and reseed)
 */

import sequelize from '../config/database';
import { seedUsers } from './users.seed';
import { seedSubjects } from './subjects.seed';
import { seedSessions } from './sessions.seed';
import { seedModules } from './modules.seed';
import { seedQuizzes } from './quizzes.seed';
import { seedAssignments } from './assignments.seed';
import { seedArticles } from './articles.seed';
import { seedEvents } from './events.seed';

const isFresh = process.argv.includes('--fresh');

async function runSeeds() {
  try {
    console.log('🌱 Starting database seeding...\n');

    // Connect to database
    await sequelize.authenticate();
    console.log('✅ Database connected\n');

    if (isFresh) {
      console.log('⚠️  Fresh mode: Truncating tables...\n');
      // Note: Be careful with this in production!
      await sequelize.sync({ force: true });
    }

    // Run seeds in order (dependencies first)
    console.log('📦 Seeding Users...');
    await seedUsers();
    console.log('✅ Users seeded\n');

    console.log('📦 Seeding Subjects...');
    await seedSubjects();
    console.log('✅ Subjects seeded\n');

    console.log('📦 Seeding Sessions...');
    await seedSessions();
    console.log('✅ Sessions seeded\n');

    console.log('📦 Seeding Modules...');
    await seedModules();
    console.log('✅ Modules seeded\n');

    console.log('📦 Seeding Quizzes...');
    await seedQuizzes();
    console.log('✅ Quizzes seeded\n');

    console.log('📦 Seeding Assignments...');
    await seedAssignments();
    console.log('✅ Assignments seeded\n');

    console.log('📦 Seeding Articles...');
    await seedArticles();
    console.log('✅ Articles seeded\n');

    console.log('📦 Seeding Events...');
    await seedEvents();
    console.log('✅ Events seeded\n');

    console.log('🎉 All seeds completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding failed:', error);
    process.exit(1);
  }
}

runSeeds();

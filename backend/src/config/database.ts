import dotenv from 'dotenv';
dotenv.config();
import { Sequelize } from 'sequelize';

import { initModels } from '../models/init-models';



const sequelize = new Sequelize(process.env.DATABASE_URL || '', {
  dialect: 'postgres',
  logging: false,
});

// Initialize database connection and models
// Skip auto-sync in test environment to avoid race conditions
export async function initializeDatabase() {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connected');

    // Register all models
    initModels(sequelize);

    // Sync all models (skip in test environment)
    if (process.env.NODE_ENV !== 'test') {
      await sequelize.sync({ alter: false });
      console.log('📦 Models synchronized to the database (sync + alter)');
    }
  } catch (err) {
    console.error('❌ Error starting server:', err);
  }
}

// Auto-initialize only in non-test environment
if (process.env.NODE_ENV !== 'test') {
  initializeDatabase();
}

export default sequelize;

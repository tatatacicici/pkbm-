/**
 * Test Setup - Jest Configuration
 */

import sequelize, { initializeDatabase } from '../config/database';

// Increase timeout for database operations
jest.setTimeout(30000);

beforeAll(async () => {
  try {
    // Initialize database (authenticate + init models)
    await initializeDatabase();
    console.log('✅ Database connected for tests');
  } catch (error) {
    console.error('❌ Database connection failed:', error);
    throw error;
  }
});

afterAll(async () => {
  try {
    // Close database connection
    await sequelize.close();
    console.log('✅ Database connection closed');
  } catch (error) {
    console.error('❌ Error closing database:', error);
  }
});

// Global test utilities
export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const generateUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};

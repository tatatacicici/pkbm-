import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import { initModels } from '../models/init-models';

dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE_URL || '', {
  dialect: 'postgres',
  logging: false,
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connected');

    // Register all models
    initModels(sequelize);

    // Sync all models
    await sequelize.sync({ alter: true });
    console.log('📦 Models synchronized to the database (sync + alter)');
  } catch (err) {
    console.error('❌ Error starting server:', err);
  }
})();

export default sequelize;

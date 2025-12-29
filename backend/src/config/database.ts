import dotenv from 'dotenv';
dotenv.config();
import { Sequelize } from 'sequelize';

import { initModels } from '../models/init-models';



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
    await sequelize.sync({ alter: false });
    console.log('📦 Models synchronized to the database (sync + alter)');
  } catch (err) {
    console.error('❌ Error starting server:', err);
  }
})();

export default sequelize;

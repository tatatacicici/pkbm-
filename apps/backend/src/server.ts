import dotenv from 'dotenv';
import app from './app';
import sequelize from './config/database';
import { initModels } from './models/init-models';

dotenv.config();

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connected');

    initModels(sequelize);
    console.log('✅ Models initialized');

    app.listen(PORT, '0.0.0.0', () => {
      console.log(`🚀 Server running on http://0.0.0.0:${PORT}`);
      console.log(`🔐 Auth endpoints available at /api/auth/login and /api/auth/profile`);
    });
  } catch (error) {
    console.error('❌ Database connection failed:', error);
    process.exit(1);
  }
};

startServer();

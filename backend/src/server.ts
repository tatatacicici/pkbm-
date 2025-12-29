import path from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: path.resolve(__dirname, '../.env') });


import app from './app';
import sequelize from './config/database';
import { initModels } from './models/init-models';

const PORT = parseInt(process.env.PORT || '3000', 10);

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connected');

    initModels(sequelize);
    console.log('✅ All models initialized');

    app.listen(PORT, '0.0.0.0', () => {
      console.log(`🚀 Server running on http://0.0.0.0:${PORT}`);
      console.log(`📚 API Documentation: apps/backend/API_ROUTES.md`);
      console.log(`🔗 Endpoints available on http://localhost:${PORT}/api`);
    });
  } catch (error) {
    console.error('❌ Error starting server:', error);
    process.exit(1);
  }
};

startServer();

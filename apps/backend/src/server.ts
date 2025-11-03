import dotenv from 'dotenv';
dotenv.config();

import app from './app';
import sequelize from './config/database';
import { Users } from './models/Users';

const PORT = parseInt(process.env.PORT || '5000', 10);

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connected');

    Users.initModel(sequelize);
    console.log('✅ Users model initialized');

    app.listen(PORT, '0.0.0.0', () => {
      console.log(`🚀 Server running on http://0.0.0.0:${PORT}`);
      console.log(`🔐 Auth endpoints available:`);
      console.log(`   POST http://localhost:${PORT}/api/auth/login`);
      console.log(`   GET  http://localhost:${PORT}/api/auth/profile`);
    });
  } catch (error) {
    console.error('❌ Error starting server:', error);
    process.exit(1);
  }
};

startServer();

import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const isProduction = process.env.NODE_ENV === 'production';

const sequelize = new Sequelize(process.env.DATABASE_URL || '', {
  dialect: 'postgres',
  logging: false,
  dialectOptions: isProduction
    ? {
        // ONLY production uses SSL
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      }
    : {}, // local dev: NO SSL
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

sequelize
  .authenticate()
  .then(() => console.log('✅ Database connected'))
  .catch((err) => console.error('❌ Database connection failed:', err));

export default sequelize;

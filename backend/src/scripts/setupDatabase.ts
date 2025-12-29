import dotenv from 'dotenv';
dotenv.config();

import sequelize from '../config/database';
import { initModels } from '../models/init-models';
import { v4 as uuidv4 } from 'uuid';

const setupDatabase = async () => {
  try {
    console.log('🔄 Starting database setup...');

    await sequelize.authenticate();
    console.log('✅ Database connection established');

    const models = initModels(sequelize);
    console.log('✅ Models initialized');

    await sequelize.sync({ force: false, alter: false });
    console.log('✅ Database synchronized');

    const transaction = await sequelize.transaction();
    
    try {
      const roles = [
        { id: uuidv4(), name: 'admin', createdAt: new Date(), updatedAt: new Date() },
        { id: uuidv4(), name: 'siswa', createdAt: new Date(), updatedAt: new Date() },
        { id: uuidv4(), name: 'pengajar', createdAt: new Date(), updatedAt: new Date() }
      ];

      for (const role of roles) {
        const [roleRecord] = await models.Roles.findOrCreate({
          where: { name: role.name },
          defaults: role,
          transaction
        });
        console.log(`✅ Role "${role.name}" ensured (ID: ${roleRecord.id})`);
      }

      await transaction.commit();
      console.log('✅ Roles seeded successfully');
      
      console.log('🎉 Database setup completed successfully!');
      process.exit(0);
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  } catch (error) {
    console.error('❌ Database setup failed:', error);
    process.exit(1);
  }
};

setupDatabase();

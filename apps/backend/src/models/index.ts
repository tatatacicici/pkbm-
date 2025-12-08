import { Sequelize } from 'sequelize';
import { initModels, Models } from './init-models';

export * from './init-models';
export * from './enums';

export class DatabaseConnection {
  private static instance: Sequelize | null = null;
  private static models: Models | null = null;

  public static getInstance(config?: {
    database: string;
    username: string;
    password: string;
    host: string;
    port?: number;
    dialect?: 'postgres' | 'mysql' | 'sqlite' | 'mariadb' | 'mssql';
  }): Sequelize {
    if (!DatabaseConnection.instance) {
      if (!config) {
        throw new Error('Database configuration required for first initialization');
      }

      DatabaseConnection.instance = new Sequelize(
        config.database,
        config.username,
        config.password,
        {
          host: config.host,
          port: config.port || 5432,
          dialect: config.dialect || 'postgres',
          logging: false,
          pool: {
            max: 10,
            min: 0,
            acquire: 30000,
            idle: 10000,
          },
        }
      );

      DatabaseConnection.models = initModels(DatabaseConnection.instance);
    }

    return DatabaseConnection.instance;
  }

  public static getModels(): Models {
    if (!DatabaseConnection.models) {
      throw new Error('Database not initialized. Call getInstance() first.');
    }
    return DatabaseConnection.models;
  }

  public static async connect(): Promise<void> {
    const sequelize = DatabaseConnection.getInstance();
    try {
      await sequelize.authenticate();
      console.log('✅ Database connection established successfully.');
    } catch (error) {
      console.error('❌ Unable to connect to the database:', error);
      throw error;
    }
  }

  public static async sync(options?: { force?: boolean; alter?: boolean }): Promise<void> {
    const sequelize = DatabaseConnection.getInstance();
    try {
      await sequelize.sync(options);
      console.log('✅ Database synchronized successfully.');
    } catch (error) {
      console.error('❌ Unable to sync database:', error);
      throw error;
    }
  }

  public static async close(): Promise<void> {
    if (DatabaseConnection.instance) {
      await DatabaseConnection.instance.close();
      DatabaseConnection.instance = null;
      DatabaseConnection.models = null;
      console.log('✅ Database connection closed.');
    }
  }
}

export default DatabaseConnection;

import sequelize from '../config/database';
import { initModels } from './init-models';

const models = initModels(sequelize);

export { sequelize, models };
export * from './Users';
export * from './init-models';

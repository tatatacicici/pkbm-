import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface QuizzesAttributes {
  id?: any;
  session_id?: any;
  type?: any;
  title?: any;
  duration_sec?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
  start_date?: any;
  end_date?: any;
  module_id?: any;
  max_attempts?: any;
  description?: any;
}

export type QuizzesCreationAttributes = Optional<QuizzesAttributes, 'id'>;

export class Quizzes extends Model<QuizzesAttributes, QuizzesCreationAttributes> implements QuizzesAttributes {
  declare id?: any;
  declare session_id?: any;
  declare type?: any;
  declare title?: any;
  declare duration_sec?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;
  declare start_date?: any;
  declare end_date?: any;
  declare module_id?: any;
  declare max_attempts?: any;
  declare description?: any;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof Quizzes {
    Quizzes.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        session_id: { type: DataTypes.UUID, allowNull: false },
        type: { type: DataTypes.STRING, allowNull: false },
        title: { type: DataTypes.STRING, allowNull: false },
        duration_sec: { type: DataTypes.INTEGER, allowNull: true },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true },
        start_date: { type: DataTypes.DATE, allowNull: true },
        end_date: { type: DataTypes.DATE, allowNull: true },
        module_id: { type: DataTypes.UUID, allowNull: true },
        max_attempts: { type: DataTypes.INTEGER },
        description: { type: DataTypes.TEXT, allowNull: true }
      },
      {
        sequelize,
        tableName: 'quizzes',
        timestamps: true,
        underscored: false,
      }
    );
    return Quizzes;
  }
}

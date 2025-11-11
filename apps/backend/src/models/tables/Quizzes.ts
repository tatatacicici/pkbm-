import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface QuizzesAttributes {
  id?: string;
  session_id: string;
  type: string;
  title: string;
  duration_sec?: number;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  start_date?: Date;
  end_date?: Date;
  module_id?: string;
  max_attempts?: number;
  description?: string;
}

export type QuizzesCreationAttributes = Optional<QuizzesAttributes, 'id' | 'duration_sec' | 'deleted_at' | 'start_date' | 'end_date' | 'module_id' | 'max_attempts' | 'description'>;

export class Quizzes extends Model<QuizzesAttributes, QuizzesCreationAttributes> implements QuizzesAttributes {
  declare id?: string;
  declare session_id: string;
  declare type: string;
  declare title: string;
  declare duration_sec?: number;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;
  declare start_date?: Date;
  declare end_date?: Date;
  declare module_id?: string;
  declare max_attempts?: number;
  declare description?: string;

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

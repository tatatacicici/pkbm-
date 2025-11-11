import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface AssignmentsAttributes {
  id?: string;
  session_id: string;
  title: string;
  duration_days: number;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  module_id?: string;
  exercise?: string;
}

export type AssignmentsCreationAttributes = Optional<AssignmentsAttributes, 'id' | 'deleted_at' | 'module_id' | 'exercise'>;

export class Assignments extends Model<AssignmentsAttributes, AssignmentsCreationAttributes> implements AssignmentsAttributes {
  declare id?: string;
  declare session_id: string;
  declare title: string;
  declare duration_days: number;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;
  declare module_id?: string;
  declare exercise?: string;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof Assignments {
    Assignments.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        session_id: { type: DataTypes.UUID, allowNull: false },
        title: { type: DataTypes.STRING, allowNull: false },
        duration_days: { type: DataTypes.INTEGER, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true },
        module_id: { type: DataTypes.UUID, allowNull: true },
        exercise: { type: DataTypes.TEXT, allowNull: true }
      },
      {
        sequelize,
        tableName: 'assignments',
        timestamps: true,
        underscored: false,
      }
    );
    return Assignments;
  }
}

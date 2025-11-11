import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface AssignmentsAttributes {
  id?: any;
  session_id?: any;
  title?: any;
  duration_days?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
  module_id?: any;
  exercise?: any;
}

export type AssignmentsCreationAttributes = Optional<AssignmentsAttributes, 'id'>;

export class Assignments extends Model<AssignmentsAttributes, AssignmentsCreationAttributes> implements AssignmentsAttributes {
  declare id?: any;
  declare session_id?: any;
  declare title?: any;
  declare duration_days?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;
  declare module_id?: any;
  declare exercise?: any;

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

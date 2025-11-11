import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface AssignmentsAdminAttributes {
  pk: number;
  id?: string;
  session_id: string;
  module_id: string;
  title: string;
  deadline: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export type AssignmentsAdminCreationAttributes = Optional<AssignmentsAdminAttributes, 'id' | 'created_at' | 'updated_at' | 'deleted_at'>;

export class AssignmentsAdmin extends Model<AssignmentsAdminAttributes, AssignmentsAdminCreationAttributes> implements AssignmentsAdminAttributes {
  declare pk: number;
  declare id?: string;
  declare session_id: string;
  declare module_id: string;
  declare title: string;
  declare deadline: number;
  declare created_at?: Date;
  declare updated_at?: Date;
  declare deleted_at?: Date;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof AssignmentsAdmin {
    AssignmentsAdmin.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false },
        id: { type: DataTypes.UUID, primaryKey: true },
        session_id: { type: DataTypes.UUID, allowNull: false },
        module_id: { type: DataTypes.UUID, allowNull: false },
        title: { type: DataTypes.STRING, allowNull: false },
        deadline: { type: DataTypes.INTEGER, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: true },
        updated_at: { type: DataTypes.DATE, allowNull: true },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'assignments_admin',
        timestamps: true,
        underscored: true,
      }
    );
    return AssignmentsAdmin;
  }
}

import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface AssignmentsAdminAttributes {
  pk?: any;
  id?: any;
  session_id?: any;
  module_id?: any;
  title?: any;
  deadline?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type AssignmentsAdminCreationAttributes = Optional<AssignmentsAdminAttributes, 'id'>;

export class AssignmentsAdmin extends Model<AssignmentsAdminAttributes, AssignmentsAdminCreationAttributes> implements AssignmentsAdminAttributes {
  declare pk?: any;
  declare id?: any;
  declare session_id?: any;
  declare module_id?: any;
  declare title?: any;
  declare deadline?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

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

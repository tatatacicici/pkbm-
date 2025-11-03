import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface AssignmentsAdminAttributes {
  pk: number;
  id: string;
  sessionId: string;
  moduleId: string;
  title: string;
  desc: string;
  deadline: number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export type AssignmentsAdminPk = "pk";
export type AssignmentsAdminId = AssignmentsAdmin[AssignmentsAdminPk];
export type AssignmentsAdminOptionalAttributes = "pk" | "createdAt" | "updatedAt" | "deletedAt";
export type AssignmentsAdminCreationAttributes = Optional<AssignmentsAdminAttributes, AssignmentsAdminOptionalAttributes>;

export class AssignmentsAdmin extends Model<AssignmentsAdminAttributes, AssignmentsAdminCreationAttributes> implements AssignmentsAdminAttributes {
  pk!: number;
  id!: string;
  sessionId!: string;
  moduleId!: string;
  title!: string;
  desc!: string;
  deadline!: number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof AssignmentsAdmin {
    return AssignmentsAdmin.init({
    pk: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    sessionId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'session_id'
    },
    moduleId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'module_id'
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    desc: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    deadline: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'updated_at'
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'deleted_at'
    }
  }, {
    sequelize,
    tableName: 'assignments_admin',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "assignments_admin_pkey",
        unique: true,
        fields: [
          { name: "pk" },
        ]
      },
    ]
  });
  }
}

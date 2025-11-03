import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface AdminReflectionAttributes {
  pk: number;
  id: string;
  sessionId: string;
  userId: string;
  question: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type AdminReflectionPk = "pk" | "id";
export type AdminReflectionId = AdminReflection[AdminReflectionPk];
export type AdminReflectionOptionalAttributes = "pk" | "deletedAt";
export type AdminReflectionCreationAttributes = Optional<AdminReflectionAttributes, AdminReflectionOptionalAttributes>;

export class AdminReflection extends Model<AdminReflectionAttributes, AdminReflectionCreationAttributes> implements AdminReflectionAttributes {
  pk!: number;
  id!: string;
  sessionId!: string;
  userId!: string;
  question!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof AdminReflection {
    return AdminReflection.init({
    pk: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    sessionId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'session_id'
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'user_id'
    },
    question: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'updated_at'
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'deleted_at'
    }
  }, {
    sequelize,
    tableName: 'admin_reflection',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "admin_reflection_pkey",
        unique: true,
        fields: [
          { name: "pk" },
          { name: "id" },
        ]
      },
    ]
  });
  }
}

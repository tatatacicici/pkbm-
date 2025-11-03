import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface AdminAttendenceAttributes {
  pk: number;
  id: string;
  sessionId: string;
  userId: string;
  isPresent: boolean;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type AdminAttendencePk = "pk" | "id";
export type AdminAttendenceId = AdminAttendence[AdminAttendencePk];
export type AdminAttendenceOptionalAttributes = "pk" | "deletedAt";
export type AdminAttendenceCreationAttributes = Optional<AdminAttendenceAttributes, AdminAttendenceOptionalAttributes>;

export class AdminAttendence extends Model<AdminAttendenceAttributes, AdminAttendenceCreationAttributes> implements AdminAttendenceAttributes {
  pk!: number;
  id!: string;
  sessionId!: string;
  userId!: string;
  isPresent!: boolean;
  status!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof AdminAttendence {
    return AdminAttendence.init({
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
    isPresent: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      field: 'is_present'
    },
    status: {
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
    tableName: 'admin_attendence',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "admin_attendence_pkey",
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

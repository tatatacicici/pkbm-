import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface AdminPanelLogsAttributes {
  id: string;
  title: string;
  description?: string;
  type: string;
  body: string;
  useragent: string;
  ipAddress: string;
  userId: string;
  sessionId: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  affectedId: string;
}

export type AdminPanelLogsPk = "id";
export type AdminPanelLogsId = AdminPanelLogs[AdminPanelLogsPk];
export type AdminPanelLogsOptionalAttributes = "description" | "deletedAt";
export type AdminPanelLogsCreationAttributes = Optional<AdminPanelLogsAttributes, AdminPanelLogsOptionalAttributes>;

export class AdminPanelLogs extends Model<AdminPanelLogsAttributes, AdminPanelLogsCreationAttributes> implements AdminPanelLogsAttributes {
  id!: string;
  title!: string;
  description?: string;
  type!: string;
  body!: string;
  useragent!: string;
  ipAddress!: string;
  userId!: string;
  sessionId!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;
  affectedId!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof AdminPanelLogs {
    return AdminPanelLogs.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    useragent: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ipAddress: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'ip_address'
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'user_id'
    },
    sessionId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'session_id'
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
    },
    affectedId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'affected_id'
    }
  }, {
    sequelize,
    tableName: 'admin_panel_logs',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "admin_panel_logs_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

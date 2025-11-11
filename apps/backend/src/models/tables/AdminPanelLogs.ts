import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface AdminPanelLogsAttributes {
  id?: string;
  title: string;
  description?: string;
  type: string;
  body: string;
  useragent: string;
  ip_address: string;
  user_id: string;
  session_id: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  affected_id: string;
}

export type AdminPanelLogsCreationAttributes = Optional<AdminPanelLogsAttributes, 'id' | 'description' | 'deleted_at'>;

export class AdminPanelLogs extends Model<AdminPanelLogsAttributes, AdminPanelLogsCreationAttributes> implements AdminPanelLogsAttributes {
  declare id?: string;
  declare title: string;
  declare description?: string;
  declare type: string;
  declare body: string;
  declare useragent: string;
  declare ip_address: string;
  declare user_id: string;
  declare session_id: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;
  declare affected_id: string;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof AdminPanelLogs {
    AdminPanelLogs.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        title: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.TEXT, allowNull: true },
        type: { type: DataTypes.STRING, allowNull: false },
        body: { type: DataTypes.TEXT, allowNull: false },
        useragent: { type: DataTypes.STRING, allowNull: false },
        ip_address: { type: DataTypes.STRING, allowNull: false },
        user_id: { type: DataTypes.UUID, allowNull: false },
        session_id: { type: DataTypes.UUID, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true },
        affected_id: { type: DataTypes.UUID, allowNull: false }
      },
      {
        sequelize,
        tableName: 'admin_panel_logs',
        timestamps: true,
        underscored: true,
      }
    );
    return AdminPanelLogs;
  }
}

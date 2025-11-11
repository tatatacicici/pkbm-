import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface AdminPanelLogsAttributes {
  id?: any;
  title?: any;
  description?: any;
  type?: any;
  body?: any;
  useragent?: any;
  ip_address?: any;
  user_id?: any;
  session_id?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
  affected_id?: any;
}

export type AdminPanelLogsCreationAttributes = Optional<AdminPanelLogsAttributes, 'id'>;

export class AdminPanelLogs extends Model<AdminPanelLogsAttributes, AdminPanelLogsCreationAttributes> implements AdminPanelLogsAttributes {
  declare id?: any;
  declare title?: any;
  declare description?: any;
  declare type?: any;
  declare body?: any;
  declare useragent?: any;
  declare ip_address?: any;
  declare user_id?: any;
  declare session_id?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;
  declare affected_id?: any;

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

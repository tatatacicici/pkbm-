import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ServerLogsAttributes {
  id?: any;
  log?: any;
  type?: any;
  useragent?: any;
  ip_address?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type ServerLogsCreationAttributes = Optional<ServerLogsAttributes, 'id'>;

export class ServerLogs extends Model<ServerLogsAttributes, ServerLogsCreationAttributes> implements ServerLogsAttributes {
  declare id?: any;
  declare log?: any;
  declare type?: any;
  declare useragent?: any;
  declare ip_address?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof ServerLogs {
    ServerLogs.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        log: { type: DataTypes.TEXT, allowNull: false },
        type: { type: DataTypes.STRING, allowNull: false },
        useragent: { type: DataTypes.TEXT, allowNull: true },
        ip_address: { type: DataTypes.STRING, allowNull: true },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'server_logs',
        timestamps: true,
        underscored: true,
      }
    );
    return ServerLogs;
  }
}

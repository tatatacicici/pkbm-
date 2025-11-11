import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ServerLogsAttributes {
  id?: string;
  log: string;
  type: string;
  useragent?: string;
  ip_address?: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type ServerLogsCreationAttributes = Optional<ServerLogsAttributes, 'id' | 'useragent' | 'ip_address' | 'deleted_at'>;

export class ServerLogs extends Model<ServerLogsAttributes, ServerLogsCreationAttributes> implements ServerLogsAttributes {
  declare id?: string;
  declare log: string;
  declare type: string;
  declare useragent?: string;
  declare ip_address?: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

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

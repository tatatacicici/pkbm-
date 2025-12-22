import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ServerLogsAttributes {
  id: string;
  log: string;
  type: string;
  useragent?: string;
  ipAddress?: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type ServerLogsPk = "id";
export type ServerLogsId = ServerLogs[ServerLogsPk];
export type ServerLogsOptionalAttributes = "useragent" | "ipAddress" | "deletedAt";
export type ServerLogsCreationAttributes = Optional<ServerLogsAttributes, ServerLogsOptionalAttributes>;

export class ServerLogs extends Model<ServerLogsAttributes, ServerLogsCreationAttributes> implements ServerLogsAttributes {
  id!: string;
  log!: string;
  type!: string;
  useragent?: string;
  ipAddress?: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof ServerLogs {
    return ServerLogs.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    log: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    useragent: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ipAddress: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'ip_address'
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
    tableName: 'server_logs',
    schema: 'public',
    timestamps: false
  });
  }
}

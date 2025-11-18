import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ServerLogsAttributes {
  id?: string;
  log: string;
  type: string;
  useragent?: string;
  ipAddress?: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type ServerLogsCreationAttributes = Optional<ServerLogsAttributes, 'id' | 'useragent' | 'ipAddress' | 'deletedAt'>;

export class ServerLogs extends Model<ServerLogsAttributes, ServerLogsCreationAttributes> implements ServerLogsAttributes {
  declare id?: string;
  declare log: string;
  declare type: string;
  declare useragent?: string;
  declare ipAddress?: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof ServerLogs {
    ServerLogs.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        log: { type: DataTypes.TEXT, allowNull: false,
            field: 'log'
        },
        type: { type: DataTypes.STRING, allowNull: false,
            field: 'type'
        },
        useragent: { type: DataTypes.TEXT, allowNull: true,
            field: 'useragent'
        },
        ipAddress: { type: DataTypes.STRING, allowNull: true,
            field: 'ip_address'
        },
        createdAt: { type: DataTypes.DATE, allowNull: false,
            field: 'created_at'
        },
        updatedAt: { type: DataTypes.DATE, allowNull: false,
            field: 'updated_at'
        },
        deletedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'deleted_at'
        }
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

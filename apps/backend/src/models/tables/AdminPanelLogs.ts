import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface AdminPanelLogsAttributes {
  id?: string;
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

export type AdminPanelLogsCreationAttributes = Optional<AdminPanelLogsAttributes, 'id' | 'description' | 'deletedAt'>;

export class AdminPanelLogs extends Model<AdminPanelLogsAttributes, AdminPanelLogsCreationAttributes> implements AdminPanelLogsAttributes {
  declare id?: string;
  declare title: string;
  declare description?: string;
  declare type: string;
  declare body: string;
  declare useragent: string;
  declare ipAddress: string;
  declare userId: string;
  declare sessionId: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;
  declare affectedId: string;

  public static initModel(sequelize: Sequelize): typeof AdminPanelLogs {
    AdminPanelLogs.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        title: { type: DataTypes.STRING, allowNull: false,
            field: 'title'
        },
        description: { type: DataTypes.TEXT, allowNull: true,
            field: 'description'
        },
        type: { type: DataTypes.STRING, allowNull: false,
            field: 'type'
        },
        body: { type: DataTypes.TEXT, allowNull: false,
            field: 'body'
        },
        useragent: { type: DataTypes.STRING, allowNull: false,
            field: 'useragent'
        },
        ipAddress: { type: DataTypes.STRING, allowNull: false,
            field: 'ip_address'
        },
        userId: { type: DataTypes.UUID, allowNull: false,
            field: 'user_id'
        },
        sessionId: { type: DataTypes.UUID, allowNull: false,
            field: 'session_id'
        },
        createdAt: { type: DataTypes.DATE, allowNull: false,
            field: 'created_at'
        },
        updatedAt: { type: DataTypes.DATE, allowNull: false,
            field: 'updated_at'
        },
        deletedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'deleted_at'
        },
        affectedId: { type: DataTypes.UUID, allowNull: false,
            field: 'affected_id'
        }
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

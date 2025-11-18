import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface UsersSocketConnectionsAttributes {
  id?: string;
  userId: string;
  socketId: string;
  connectedAt: Date;
  disconnectedAt?: Date;
  connectionDuration?: number;
  urlOrigin?: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  activeDuration?: number;
}

export type UsersSocketConnectionsCreationAttributes = Optional<UsersSocketConnectionsAttributes, 'id' | 'disconnectedAt' | 'connectionDuration' | 'urlOrigin' | 'deletedAt' | 'activeDuration'>;

export class UsersSocketConnections extends Model<UsersSocketConnectionsAttributes, UsersSocketConnectionsCreationAttributes> implements UsersSocketConnectionsAttributes {
  declare id?: string;
  declare userId: string;
  declare socketId: string;
  declare connectedAt: Date;
  declare disconnectedAt?: Date;
  declare connectionDuration?: number;
  declare urlOrigin?: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;
  declare activeDuration?: number;

  public static initModel(sequelize: Sequelize): typeof UsersSocketConnections {
    UsersSocketConnections.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        userId: { type: DataTypes.UUID, allowNull: false,
            field: 'user_id'
        },
        socketId: { type: DataTypes.STRING, allowNull: false,
            field: 'socket_id'
        },
        connectedAt: { type: DataTypes.DATE, allowNull: false,
            field: 'connected_at'
        },
        disconnectedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'disconnected_at'
        },
        connectionDuration: { type: DataTypes.INTEGER, allowNull: true,
            field: 'connection_duration'
        },
        urlOrigin: { type: DataTypes.STRING, allowNull: true,
            field: 'url_origin'
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
        activeDuration: { type: DataTypes.INTEGER, allowNull: true,
            field: 'active_duration'
        }
      },
      {
        sequelize,
        tableName: 'users_socket_connections',
        timestamps: true,
        underscored: true,
      }
    );
    return UsersSocketConnections;
  }
}

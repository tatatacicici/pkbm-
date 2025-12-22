import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface UsersSocketConnectionsAttributes {
  id: string;
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

export type UsersSocketConnectionsPk = "id";
export type UsersSocketConnectionsId = UsersSocketConnections[UsersSocketConnectionsPk];
export type UsersSocketConnectionsOptionalAttributes = "disconnectedAt" | "connectionDuration" | "urlOrigin" | "deletedAt" | "activeDuration";
export type UsersSocketConnectionsCreationAttributes = Optional<UsersSocketConnectionsAttributes, UsersSocketConnectionsOptionalAttributes>;

export class UsersSocketConnections extends Model<UsersSocketConnectionsAttributes, UsersSocketConnectionsCreationAttributes> implements UsersSocketConnectionsAttributes {
  id!: string;
  userId!: string;
  socketId!: string;
  connectedAt!: Date;
  disconnectedAt?: Date;
  connectionDuration?: number;
  urlOrigin?: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;
  activeDuration?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof UsersSocketConnections {
    return UsersSocketConnections.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'user_id'
    },
    socketId: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'socket_id'
    },
    connectedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'connected_at'
    },
    disconnectedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'disconnected_at'
    },
    connectionDuration: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "Duration in seconds",
      field: 'connection_duration'
    },
    urlOrigin: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'url_origin'
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
    activeDuration: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "Duration in seconds",
      field: 'active_duration'
    }
  }, {
    sequelize,
    tableName: 'users_socket_connections',
    schema: 'public',
    timestamps: false
  });
  }
}

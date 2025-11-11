import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface UsersSocketConnectionsAttributes {
  id?: string;
  user_id: string;
  socket_id: string;
  connected_at: Date;
  disconnected_at?: Date;
  connection_duration?: number;
  url_origin?: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  active_duration?: number;
}

export type UsersSocketConnectionsCreationAttributes = Optional<UsersSocketConnectionsAttributes, 'id' | 'disconnected_at' | 'connection_duration' | 'url_origin' | 'deleted_at' | 'active_duration'>;

export class UsersSocketConnections extends Model<UsersSocketConnectionsAttributes, UsersSocketConnectionsCreationAttributes> implements UsersSocketConnectionsAttributes {
  declare id?: string;
  declare user_id: string;
  declare socket_id: string;
  declare connected_at: Date;
  declare disconnected_at?: Date;
  declare connection_duration?: number;
  declare url_origin?: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;
  declare active_duration?: number;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof UsersSocketConnections {
    UsersSocketConnections.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        user_id: { type: DataTypes.UUID, allowNull: false },
        socket_id: { type: DataTypes.STRING, allowNull: false },
        connected_at: { type: DataTypes.DATE, allowNull: false },
        disconnected_at: { type: DataTypes.DATE, allowNull: true },
        connection_duration: { type: DataTypes.INTEGER, allowNull: true },
        url_origin: { type: DataTypes.STRING, allowNull: true },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true },
        active_duration: { type: DataTypes.INTEGER, allowNull: true }
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

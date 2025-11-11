import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface UsersSocketConnectionsAttributes {
  id?: any;
  user_id?: any;
  socket_id?: any;
  connected_at?: any;
  disconnected_at?: any;
  connection_duration?: any;
  url_origin?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
  active_duration?: any;
}

export type UsersSocketConnectionsCreationAttributes = Optional<UsersSocketConnectionsAttributes, 'id'>;

export class UsersSocketConnections extends Model<UsersSocketConnectionsAttributes, UsersSocketConnectionsCreationAttributes> implements UsersSocketConnectionsAttributes {
  declare id?: any;
  declare user_id?: any;
  declare socket_id?: any;
  declare connected_at?: any;
  declare disconnected_at?: any;
  declare connection_duration?: any;
  declare url_origin?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;
  declare active_duration?: any;

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

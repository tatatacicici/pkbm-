import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface UserSessionsAttributes {
  id?: any;
  user_id?: any;
  status?: any;
  user_agent?: any;
  access_token?: any;
  refresh_token?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
  ip_address?: any;
  expires_at?: any;
  last_active_at?: any;
  last_active?: any;
}

export type UserSessionsCreationAttributes = Optional<UserSessionsAttributes, 'id'>;

export class UserSessions extends Model<UserSessionsAttributes, UserSessionsCreationAttributes> implements UserSessionsAttributes {
  declare id?: any;
  declare user_id?: any;
  declare status?: any;
  declare user_agent?: any;
  declare access_token?: any;
  declare refresh_token?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;
  declare ip_address?: any;
  declare expires_at?: any;
  declare last_active_at?: any;
  declare last_active?: any;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof UserSessions {
    UserSessions.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        user_id: { type: DataTypes.UUID, allowNull: false },
        status: { type: DataTypes.STRING, allowNull: false },
        user_agent: { type: DataTypes.STRING, allowNull: false },
        access_token: { type: DataTypes.STRING, allowNull: true },
        refresh_token: { type: DataTypes.STRING, allowNull: true },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true },
        ip_address: { type: DataTypes.STRING, allowNull: true },
        expires_at: { type: DataTypes.DATE, allowNull: true },
        last_active_at: { type: DataTypes.DATE, allowNull: true },
        last_active: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'user_sessions',
        timestamps: true,
        underscored: true,
      }
    );
    return UserSessions;
  }
}

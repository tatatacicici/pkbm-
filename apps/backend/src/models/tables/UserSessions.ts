import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface UserSessionsAttributes {
  id?: string;
  user_id: string;
  status: string;
  user_agent: string;
  access_token?: string;
  refresh_token?: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  ip_address?: string;
  expires_at?: Date;
  last_active_at?: Date;
  last_active?: Date;
}

export type UserSessionsCreationAttributes = Optional<UserSessionsAttributes, 'id' | 'access_token' | 'refresh_token' | 'deleted_at' | 'ip_address' | 'expires_at' | 'last_active_at' | 'last_active'>;

export class UserSessions extends Model<UserSessionsAttributes, UserSessionsCreationAttributes> implements UserSessionsAttributes {
  declare id?: string;
  declare user_id: string;
  declare status: string;
  declare user_agent: string;
  declare access_token?: string;
  declare refresh_token?: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;
  declare ip_address?: string;
  declare expires_at?: Date;
  declare last_active_at?: Date;
  declare last_active?: Date;

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

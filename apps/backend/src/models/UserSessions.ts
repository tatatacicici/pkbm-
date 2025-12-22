import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface UserSessionsAttributes {
  id: string;
  userId: string;
  status: string;
  userAgent: string;
  accessToken?: string;
  refreshToken?: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  ipAddress?: string;
  expiresAt?: Date;
  lastActiveAt?: Date;
  lastActive?: Date;
}

export type UserSessionsPk = "id";
export type UserSessionsId = UserSessions[UserSessionsPk];
export type UserSessionsOptionalAttributes = "accessToken" | "refreshToken" | "deletedAt" | "ipAddress" | "expiresAt" | "lastActiveAt" | "lastActive";
export type UserSessionsCreationAttributes = Optional<UserSessionsAttributes, UserSessionsOptionalAttributes>;

export class UserSessions extends Model<UserSessionsAttributes, UserSessionsCreationAttributes> implements UserSessionsAttributes {
  id!: string;
  userId!: string;
  status!: string;
  userAgent!: string;
  accessToken?: string;
  refreshToken?: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;
  ipAddress?: string;
  expiresAt?: Date;
  lastActiveAt?: Date;
  lastActive?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof UserSessions {
    return UserSessions.init({
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
    status: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    userAgent: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'user_agent'
    },
    accessToken: {
      type: DataTypes.STRING(500),
      allowNull: true,
      field: 'access_token'
    },
    refreshToken: {
      type: DataTypes.STRING(500),
      allowNull: true,
      field: 'refresh_token'
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
    ipAddress: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'ip_address'
    },
    expiresAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'expires_at'
    },
    lastActiveAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'last_active_at'
    },
    lastActive: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'last_active'
    }
  }, {
    sequelize,
    tableName: 'user_sessions',
    schema: 'public',
    timestamps: false
  });
  }
}

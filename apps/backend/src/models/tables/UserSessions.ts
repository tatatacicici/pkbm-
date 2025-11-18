import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface UserSessionsAttributes {
  id?: string;
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

export type UserSessionsCreationAttributes = Optional<UserSessionsAttributes, 'id' | 'accessToken' | 'refreshToken' | 'deletedAt' | 'ipAddress' | 'expiresAt' | 'lastActiveAt' | 'lastActive'>;

export class UserSessions extends Model<UserSessionsAttributes, UserSessionsCreationAttributes> implements UserSessionsAttributes {
  declare id?: string;
  declare userId: string;
  declare status: string;
  declare userAgent: string;
  declare accessToken?: string;
  declare refreshToken?: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;
  declare ipAddress?: string;
  declare expiresAt?: Date;
  declare lastActiveAt?: Date;
  declare lastActive?: Date;

  public static initModel(sequelize: Sequelize): typeof UserSessions {
    UserSessions.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        userId: { type: DataTypes.UUID, allowNull: false,
            field: 'user_id'
        },
        status: { type: DataTypes.STRING, allowNull: false,
            field: 'status'
        },
        userAgent: { type: DataTypes.STRING, allowNull: false,
            field: 'user_agent'
        },
        accessToken: { type: DataTypes.STRING, allowNull: true,
            field: 'access_token'
        },
        refreshToken: { type: DataTypes.STRING, allowNull: true,
            field: 'refresh_token'
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
        ipAddress: { type: DataTypes.STRING, allowNull: true,
            field: 'ip_address'
        },
        expiresAt: { type: DataTypes.DATE, allowNull: true,
            field: 'expires_at'
        },
        lastActiveAt: { type: DataTypes.DATE, allowNull: true,
            field: 'last_active_at'
        },
        lastActive: { type: DataTypes.DATE, allowNull: true,
            field: 'last_active'
        }
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

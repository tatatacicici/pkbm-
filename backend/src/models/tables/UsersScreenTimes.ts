import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface UsersScreenTimesAttributes {
  pk: number;
  id?: string;
  userId: string;
  sessionId: string;
  token: string;
  type: string;
  page: string;
  seconds?: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  lastRefreshedAt?: Date;
  totalRefreshed?: number;
  submittedAt?: Date;
}

export type UsersScreenTimesCreationAttributes = Optional<UsersScreenTimesAttributes, 'id' | 'seconds' | 'deletedAt' | 'lastRefreshedAt' | 'totalRefreshed' | 'submittedAt'>;

export class UsersScreenTimes extends Model<UsersScreenTimesAttributes, UsersScreenTimesCreationAttributes> implements UsersScreenTimesAttributes {
  declare pk: number;
  declare id?: string;
  declare userId: string;
  declare sessionId: string;
  declare token: string;
  declare type: string;
  declare page: string;
  declare seconds?: number;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;
  declare lastRefreshedAt?: Date;
  declare totalRefreshed?: number;
  declare submittedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof UsersScreenTimes {
    UsersScreenTimes.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false,
            field: 'pk'
        },
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        userId: { type: DataTypes.STRING, allowNull: false,
            field: 'user_id'
        },
        sessionId: { type: DataTypes.STRING, allowNull: false,
            field: 'session_id'
        },
        token: { type: DataTypes.TEXT, allowNull: false,
            field: 'token'
        },
        type: { type: DataTypes.STRING, allowNull: false,
            field: 'type'
        },
        page: { type: DataTypes.STRING, allowNull: false,
            field: 'page'
        },
        seconds: { type: DataTypes.INTEGER, allowNull: true,
            field: 'seconds'
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
        lastRefreshedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'last_refreshed_at'
        },
        totalRefreshed: { type: DataTypes.INTEGER, allowNull: true,
            field: 'total_refreshed'
        },
        submittedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'submitted_at'
        }
      },
      {
        sequelize,
        tableName: 'users_screen_times',
        timestamps: true,
        underscored: true,
      }
    );
    return UsersScreenTimes;
  }
}

import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface UsersScreenTimesAttributes {
  pk: number;
  id?: string;
  user_id: string;
  session_id: string;
  token: string;
  type: string;
  page: string;
  seconds?: number;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  last_refreshed_at?: Date;
  total_refreshed?: number;
  submitted_at?: Date;
}

export type UsersScreenTimesCreationAttributes = Optional<UsersScreenTimesAttributes, 'id' | 'seconds' | 'deleted_at' | 'last_refreshed_at' | 'total_refreshed' | 'submitted_at'>;

export class UsersScreenTimes extends Model<UsersScreenTimesAttributes, UsersScreenTimesCreationAttributes> implements UsersScreenTimesAttributes {
  declare pk: number;
  declare id?: string;
  declare user_id: string;
  declare session_id: string;
  declare token: string;
  declare type: string;
  declare page: string;
  declare seconds?: number;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;
  declare last_refreshed_at?: Date;
  declare total_refreshed?: number;
  declare submitted_at?: Date;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof UsersScreenTimes {
    UsersScreenTimes.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false },
        id: { type: DataTypes.UUID, primaryKey: true },
        user_id: { type: DataTypes.STRING, allowNull: false },
        session_id: { type: DataTypes.STRING, allowNull: false },
        token: { type: DataTypes.TEXT, allowNull: false },
        type: { type: DataTypes.STRING, allowNull: false },
        page: { type: DataTypes.STRING, allowNull: false },
        seconds: { type: DataTypes.INTEGER, allowNull: true },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true },
        last_refreshed_at: { type: DataTypes.DATE, allowNull: true },
        total_refreshed: { type: DataTypes.INTEGER, allowNull: true },
        submitted_at: { type: DataTypes.DATE, allowNull: true }
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

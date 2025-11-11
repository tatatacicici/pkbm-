import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface UsersScreenTimesAttributes {
  pk?: any;
  id?: any;
  user_id?: any;
  session_id?: any;
  token?: any;
  type?: any;
  page?: any;
  seconds?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
  last_refreshed_at?: any;
  total_refreshed?: any;
  submitted_at?: any;
}

export type UsersScreenTimesCreationAttributes = Optional<UsersScreenTimesAttributes, 'id'>;

export class UsersScreenTimes extends Model<UsersScreenTimesAttributes, UsersScreenTimesCreationAttributes> implements UsersScreenTimesAttributes {
  declare pk?: any;
  declare id?: any;
  declare user_id?: any;
  declare session_id?: any;
  declare token?: any;
  declare type?: any;
  declare page?: any;
  declare seconds?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;
  declare last_refreshed_at?: any;
  declare total_refreshed?: any;
  declare submitted_at?: any;

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

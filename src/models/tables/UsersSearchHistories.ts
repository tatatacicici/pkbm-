import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface UsersSearchHistoriesAttributes {
  pk?: any;
  id?: any;
  user_id?: any;
  keyword?: any;
  type?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type UsersSearchHistoriesCreationAttributes = Optional<UsersSearchHistoriesAttributes, 'id'>;

export class UsersSearchHistories extends Model<UsersSearchHistoriesAttributes, UsersSearchHistoriesCreationAttributes> implements UsersSearchHistoriesAttributes {
  declare pk?: any;
  declare id?: any;
  declare user_id?: any;
  declare keyword?: any;
  declare type?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof UsersSearchHistories {
    UsersSearchHistories.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false },
        id: { type: DataTypes.UUID, primaryKey: true },
        user_id: { type: DataTypes.UUID, allowNull: false },
        keyword: { type: DataTypes.TEXT, allowNull: false },
        type: { type: DataTypes.STRING, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'users_search_histories',
        timestamps: true,
        underscored: true,
      }
    );
    return UsersSearchHistories;
  }
}

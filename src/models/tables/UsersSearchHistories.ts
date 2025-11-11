import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface UsersSearchHistoriesAttributes {
  pk: number;
  id?: string;
  user_id: string;
  keyword: string;
  type: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type UsersSearchHistoriesCreationAttributes = Optional<UsersSearchHistoriesAttributes, 'id' | 'deleted_at'>;

export class UsersSearchHistories extends Model<UsersSearchHistoriesAttributes, UsersSearchHistoriesCreationAttributes> implements UsersSearchHistoriesAttributes {
  declare pk: number;
  declare id?: string;
  declare user_id: string;
  declare keyword: string;
  declare type: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

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

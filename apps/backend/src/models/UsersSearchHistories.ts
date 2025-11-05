import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface UsersSearchHistoriesAttributes {
  pk: number;
  id: string;
  userId: string;
  keyword: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type UsersSearchHistoriesPk = "id";
export type UsersSearchHistoriesId = UsersSearchHistories[UsersSearchHistoriesPk];
export type UsersSearchHistoriesOptionalAttributes = "pk" | "deletedAt";
export type UsersSearchHistoriesCreationAttributes = Optional<UsersSearchHistoriesAttributes, UsersSearchHistoriesOptionalAttributes>;

export class UsersSearchHistories extends Model<UsersSearchHistoriesAttributes, UsersSearchHistoriesCreationAttributes> implements UsersSearchHistoriesAttributes {
  pk!: number;
  id!: string;
  userId!: string;
  keyword!: string;
  type!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof UsersSearchHistories {
    return UsersSearchHistories.init({
    pk: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
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
    keyword: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false
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
    }
  }, {
    sequelize,
    tableName: 'users_search_histories',
    schema: 'public',
    timestamps: false
  });
  }
}

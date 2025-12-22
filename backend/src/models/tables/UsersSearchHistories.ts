import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface UsersSearchHistoriesAttributes {
  pk: number;
  id?: string;
  userId: string;
  keyword: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type UsersSearchHistoriesCreationAttributes = Optional<UsersSearchHistoriesAttributes, 'id' | 'deletedAt'>;

export class UsersSearchHistories extends Model<UsersSearchHistoriesAttributes, UsersSearchHistoriesCreationAttributes> implements UsersSearchHistoriesAttributes {
  declare pk: number;
  declare id?: string;
  declare userId: string;
  declare keyword: string;
  declare type: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof UsersSearchHistories {
    UsersSearchHistories.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false,
            field: 'pk'
        },
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        userId: { type: DataTypes.UUID, allowNull: false,
            field: 'user_id'
        },
        keyword: { type: DataTypes.TEXT, allowNull: false,
            field: 'keyword'
        },
        type: { type: DataTypes.STRING, allowNull: false,
            field: 'type'
        },
        createdAt: { type: DataTypes.DATE, allowNull: false,
            field: 'created_at'
        },
        updatedAt: { type: DataTypes.DATE, allowNull: false,
            field: 'updated_at'
        },
        deletedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'deleted_at'
        }
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

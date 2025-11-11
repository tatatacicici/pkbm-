import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface StoragesFilesHistoriesAttributes {
  pk?: any;
  file_id?: any;
  user_id?: any;
  session_id?: any;
  name?: any;
  signed_url?: any;
  ip_address?: any;
  useragent?: any;
  expired_at?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type StoragesFilesHistoriesCreationAttributes = Optional<StoragesFilesHistoriesAttributes, 'id'>;

export class StoragesFilesHistories extends Model<StoragesFilesHistoriesAttributes, StoragesFilesHistoriesCreationAttributes> implements StoragesFilesHistoriesAttributes {
  declare pk?: any;
  declare file_id?: any;
  declare user_id?: any;
  declare session_id?: any;
  declare name?: any;
  declare signed_url?: any;
  declare ip_address?: any;
  declare useragent?: any;
  declare expired_at?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof StoragesFilesHistories {
    StoragesFilesHistories.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false },
        file_id: { type: DataTypes.INTEGER, allowNull: true },
        user_id: { type: DataTypes.UUID, allowNull: false },
        session_id: { type: DataTypes.UUID, allowNull: false },
        name: { type: DataTypes.TEXT, allowNull: false },
        signed_url: { type: DataTypes.TEXT, allowNull: false },
        ip_address: { type: DataTypes.STRING, allowNull: false },
        useragent: { type: DataTypes.TEXT, allowNull: false },
        expired_at: { type: DataTypes.DATE, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'storages_files_histories',
        timestamps: true,
        underscored: true,
      }
    );
    return StoragesFilesHistories;
  }
}

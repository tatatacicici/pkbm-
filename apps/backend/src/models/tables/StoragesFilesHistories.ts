import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface StoragesFilesHistoriesAttributes {
  pk: number;
  file_id?: number;
  user_id: string;
  session_id: string;
  name: string;
  signed_url: string;
  ip_address: string;
  useragent: string;
  expired_at: Date;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type StoragesFilesHistoriesCreationAttributes = Optional<StoragesFilesHistoriesAttributes, 'id' | 'file_id' | 'deleted_at'>;

export class StoragesFilesHistories extends Model<StoragesFilesHistoriesAttributes, StoragesFilesHistoriesCreationAttributes> implements StoragesFilesHistoriesAttributes {
  declare pk: number;
  declare file_id?: number;
  declare user_id: string;
  declare session_id: string;
  declare name: string;
  declare signed_url: string;
  declare ip_address: string;
  declare useragent: string;
  declare expired_at: Date;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

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

import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface StoragesFilesAttributes {
  pk: number;
  id?: string;
  user_id: string;
  name: string;
  filename: string;
  size: number;
  type: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  url?: string;
  bucket?: string;
}

export type StoragesFilesCreationAttributes = Optional<StoragesFilesAttributes, 'id' | 'deleted_at' | 'url' | 'bucket'>;

export class StoragesFiles extends Model<StoragesFilesAttributes, StoragesFilesCreationAttributes> implements StoragesFilesAttributes {
  declare pk: number;
  declare id?: string;
  declare user_id: string;
  declare name: string;
  declare filename: string;
  declare size: number;
  declare type: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;
  declare url?: string;
  declare bucket?: string;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof StoragesFiles {
    StoragesFiles.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false },
        id: { type: DataTypes.UUID, primaryKey: true },
        user_id: { type: DataTypes.UUID, allowNull: false },
        name: { type: DataTypes.TEXT, allowNull: false },
        filename: { type: DataTypes.TEXT, allowNull: false },
        size: { type: DataTypes.INTEGER, allowNull: false },
        type: { type: DataTypes.STRING, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true },
        url: { type: DataTypes.STRING, allowNull: true },
        bucket: { type: DataTypes.STRING, allowNull: true }
      },
      {
        sequelize,
        tableName: 'storages_files',
        timestamps: true,
        underscored: true,
      }
    );
    return StoragesFiles;
  }
}

import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface StoragesFilesAttributes {
  pk?: any;
  id?: any;
  user_id?: any;
  name?: any;
  filename?: any;
  size?: any;
  type?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
  url?: any;
  bucket?: any;
}

export type StoragesFilesCreationAttributes = Optional<StoragesFilesAttributes, 'id'>;

export class StoragesFiles extends Model<StoragesFilesAttributes, StoragesFilesCreationAttributes> implements StoragesFilesAttributes {
  declare pk?: any;
  declare id?: any;
  declare user_id?: any;
  declare name?: any;
  declare filename?: any;
  declare size?: any;
  declare type?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;
  declare url?: any;
  declare bucket?: any;

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

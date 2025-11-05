import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface StoragesFilesAttributes {
  pk: number;
  id?: string;
  userId: string;
  name: string;
  filename: string;
  size: number;
  type: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  url?: string;
  bucket?: string;
}

export type StoragesFilesPk = "id";
export type StoragesFilesId = StoragesFiles[StoragesFilesPk];
export type StoragesFilesOptionalAttributes = "pk" | "id" | "deletedAt" | "url" | "bucket";
export type StoragesFilesCreationAttributes = Optional<StoragesFilesAttributes, StoragesFilesOptionalAttributes>;

export class StoragesFiles extends Model<StoragesFilesAttributes, StoragesFilesCreationAttributes> implements StoragesFilesAttributes {
  pk!: number;
  id?: string;
  userId!: string;
  name!: string;
  filename!: string;
  size!: number;
  type!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;
  url?: string;
  bucket?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof StoragesFiles {
    return StoragesFiles.init({
    pk: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id: {
      type: DataTypes.UUID,
      allowNull: true,
      primaryKey: true
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'user_id'
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    filename: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    size: {
      type: DataTypes.INTEGER,
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
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    bucket: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'storages_files',
    schema: 'public',
    timestamps: false
  });
  }
}

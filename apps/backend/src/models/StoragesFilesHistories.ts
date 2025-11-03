import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface StoragesFilesHistoriesAttributes {
  pk: number;
  fileId?: number;
  userId: string;
  sessionId: string;
  name: string;
  signedUrl: string;
  ipAddress: string;
  useragent: string;
  expiredAt: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type StoragesFilesHistoriesOptionalAttributes = "pk" | "fileId" | "deletedAt";
export type StoragesFilesHistoriesCreationAttributes = Optional<StoragesFilesHistoriesAttributes, StoragesFilesHistoriesOptionalAttributes>;

export class StoragesFilesHistories extends Model<StoragesFilesHistoriesAttributes, StoragesFilesHistoriesCreationAttributes> implements StoragesFilesHistoriesAttributes {
  pk!: number;
  fileId?: number;
  userId!: string;
  sessionId!: string;
  name!: string;
  signedUrl!: string;
  ipAddress!: string;
  useragent!: string;
  expiredAt!: Date;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof StoragesFilesHistories {
    return StoragesFilesHistories.init({
    pk: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fileId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'file_id'
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'user_id'
    },
    sessionId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'session_id'
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    signedUrl: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'signed_url'
    },
    ipAddress: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'ip_address'
    },
    useragent: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    expiredAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'expired_at'
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
    tableName: 'storages_files_histories',
    schema: 'public',
    timestamps: false
  });
  }
}

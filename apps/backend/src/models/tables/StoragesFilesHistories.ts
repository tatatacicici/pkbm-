import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

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

export type StoragesFilesHistoriesCreationAttributes = Optional<StoragesFilesHistoriesAttributes, 'id' | 'fileId' | 'deletedAt'>;

export class StoragesFilesHistories extends Model<StoragesFilesHistoriesAttributes, StoragesFilesHistoriesCreationAttributes> implements StoragesFilesHistoriesAttributes {
  declare pk: number;
  declare fileId?: number;
  declare userId: string;
  declare sessionId: string;
  declare name: string;
  declare signedUrl: string;
  declare ipAddress: string;
  declare useragent: string;
  declare expiredAt: Date;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof StoragesFilesHistories {
    StoragesFilesHistories.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false,
            field: 'pk'
        },
        fileId: { type: DataTypes.INTEGER, allowNull: true,
            field: 'file_id'
        },
        userId: { type: DataTypes.UUID, allowNull: false,
            field: 'user_id'
        },
        sessionId: { type: DataTypes.UUID, allowNull: false,
            field: 'session_id'
        },
        name: { type: DataTypes.TEXT, allowNull: false,
            field: 'name'
        },
        signedUrl: { type: DataTypes.TEXT, allowNull: false,
            field: 'signed_url'
        },
        ipAddress: { type: DataTypes.STRING, allowNull: false,
            field: 'ip_address'
        },
        useragent: { type: DataTypes.TEXT, allowNull: false,
            field: 'useragent'
        },
        expiredAt: { type: DataTypes.DATE, allowNull: false,
            field: 'expired_at'
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
        tableName: 'storages_files_histories',
        timestamps: true,
        underscored: true,
      }
    );
    return StoragesFilesHistories;
  }
}

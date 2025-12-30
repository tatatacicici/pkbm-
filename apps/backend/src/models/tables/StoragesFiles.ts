import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

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

export type StoragesFilesCreationAttributes = Optional<StoragesFilesAttributes, 'id' | 'deletedAt' | 'url' | 'bucket'>;

export class StoragesFiles extends Model<StoragesFilesAttributes, StoragesFilesCreationAttributes> implements StoragesFilesAttributes {
  declare pk: number;
  declare id?: string;
  declare userId: string;
  declare name: string;
  declare filename: string;
  declare size: number;
  declare type: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;
  declare url?: string;
  declare bucket?: string;

  public static initModel(sequelize: Sequelize): typeof StoragesFiles {
    StoragesFiles.init(
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
        name: { type: DataTypes.TEXT, allowNull: false,
            field: 'name'
        },
        filename: { type: DataTypes.TEXT, allowNull: false,
            field: 'filename'
        },
        size: { type: DataTypes.INTEGER, allowNull: false,
            field: 'size'
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
        },
        url: { type: DataTypes.STRING, allowNull: true,
            field: 'url'
        },
        bucket: { type: DataTypes.STRING, allowNull: true,
            field: 'bucket'
        }
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

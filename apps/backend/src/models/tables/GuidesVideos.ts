import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface GuidesVideosAttributes {
  id?: string;
  url?: string;
  title?: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type GuidesVideosCreationAttributes = Optional<GuidesVideosAttributes, 'id' | 'url' | 'title' | 'description' | 'deletedAt'>;

export class GuidesVideos extends Model<GuidesVideosAttributes, GuidesVideosCreationAttributes> implements GuidesVideosAttributes {
  declare id?: string;
  declare url?: string;
  declare title?: string;
  declare description?: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof GuidesVideos {
    GuidesVideos.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        url: { type: DataTypes.STRING, allowNull: true,
            field: 'url'
        },
        title: { type: DataTypes.TEXT, allowNull: true,
            field: 'title'
        },
        description: { type: DataTypes.TEXT, allowNull: true,
            field: 'description'
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
        tableName: 'guides_videos',
        timestamps: true,
        underscored: true,
      }
    );
    return GuidesVideos;
  }
}

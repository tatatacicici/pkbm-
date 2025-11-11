import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface GuidesVideosAttributes {
  id?: string;
  url?: string;
  title?: string;
  description?: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type GuidesVideosCreationAttributes = Optional<GuidesVideosAttributes, 'id' | 'url' | 'title' | 'description' | 'deleted_at'>;

export class GuidesVideos extends Model<GuidesVideosAttributes, GuidesVideosCreationAttributes> implements GuidesVideosAttributes {
  declare id?: string;
  declare url?: string;
  declare title?: string;
  declare description?: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof GuidesVideos {
    GuidesVideos.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        url: { type: DataTypes.STRING, allowNull: true },
        title: { type: DataTypes.TEXT, allowNull: true },
        description: { type: DataTypes.TEXT, allowNull: true },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
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

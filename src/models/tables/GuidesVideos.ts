import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface GuidesVideosAttributes {
  id?: any;
  url?: any;
  title?: any;
  description?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type GuidesVideosCreationAttributes = Optional<GuidesVideosAttributes, 'id'>;

export class GuidesVideos extends Model<GuidesVideosAttributes, GuidesVideosCreationAttributes> implements GuidesVideosAttributes {
  declare id?: any;
  declare url?: any;
  declare title?: any;
  declare description?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

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

import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface GuidesVideosAttributes {
  id: string;
  url?: string;
  title?: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type GuidesVideosPk = "id";
export type GuidesVideosId = GuidesVideos[GuidesVideosPk];
export type GuidesVideosOptionalAttributes = "url" | "title" | "description" | "deletedAt";
export type GuidesVideosCreationAttributes = Optional<GuidesVideosAttributes, GuidesVideosOptionalAttributes>;

export class GuidesVideos extends Model<GuidesVideosAttributes, GuidesVideosCreationAttributes> implements GuidesVideosAttributes {
  id!: string;
  url?: string;
  title?: string;
  description?: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof GuidesVideos {
    return GuidesVideos.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
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
    tableName: 'guides_videos',
    schema: 'public',
    timestamps: false
  });
  }
}

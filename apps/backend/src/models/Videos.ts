import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface VideosAttributes {
  id: string;
  videoUrl?: string;
}

export type VideosPk = "id";
export type VideosId = Videos[VideosPk];
export type VideosOptionalAttributes = "videoUrl";
export type VideosCreationAttributes = Optional<VideosAttributes, VideosOptionalAttributes>;

export class Videos extends Model<VideosAttributes, VideosCreationAttributes> implements VideosAttributes {
  id!: string;
  videoUrl?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof Videos {
    return Videos.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    videoUrl: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'video_url'
    }
  }, {
    sequelize,
    tableName: 'videos',
    schema: 'public',
    timestamps: false
  });
  }
}

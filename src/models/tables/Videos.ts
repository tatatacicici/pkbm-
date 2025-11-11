import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface VideosAttributes {
  id?: string;
  video_url?: string;
}

export type VideosCreationAttributes = Optional<VideosAttributes, 'id' | 'video_url'>;

export class Videos extends Model<VideosAttributes, VideosCreationAttributes> implements VideosAttributes {
  declare id?: string;
  declare video_url?: string;

  public static initModel(sequelize: Sequelize): typeof Videos {
    Videos.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        video_url: { type: DataTypes.STRING, allowNull: true }
      },
      {
        sequelize,
        tableName: 'videos',
        timestamps: false,
        underscored: false,
      }
    );
    return Videos;
  }
}

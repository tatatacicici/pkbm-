import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface VideosAttributes {
  id?: string;
  videoUrl?: string;
}

export type VideosCreationAttributes = Optional<VideosAttributes, 'id' | 'videoUrl'>;

export class Videos extends Model<VideosAttributes, VideosCreationAttributes> implements VideosAttributes {
  declare id?: string;
  declare videoUrl?: string;

  public static initModel(sequelize: Sequelize): typeof Videos {
    Videos.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        videoUrl: { type: DataTypes.STRING, allowNull: true,
            field: 'video_url'
        }
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

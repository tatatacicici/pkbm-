import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface VideosAttributes {
  id?: any;
  video_url?: any;
}

export type VideosCreationAttributes = Optional<VideosAttributes, 'id'>;

export class Videos extends Model<VideosAttributes, VideosCreationAttributes> implements VideosAttributes {
  declare id?: any;
  declare video_url?: any;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

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

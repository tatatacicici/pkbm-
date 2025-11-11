import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface WatchedVideoProgressAttributes {
  id?: any;
  video_id?: any;
  student_id?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type WatchedVideoProgressCreationAttributes = Optional<WatchedVideoProgressAttributes, 'id'>;

export class WatchedVideoProgress extends Model<WatchedVideoProgressAttributes, WatchedVideoProgressCreationAttributes> implements WatchedVideoProgressAttributes {
  declare id?: any;
  declare video_id?: any;
  declare student_id?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof WatchedVideoProgress {
    WatchedVideoProgress.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        video_id: { type: DataTypes.UUID, allowNull: false },
        student_id: { type: DataTypes.UUID, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'watched_video_progress',
        timestamps: true,
        underscored: true,
      }
    );
    return WatchedVideoProgress;
  }
}

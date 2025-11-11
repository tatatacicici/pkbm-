import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface WatchedVideoProgressAttributes {
  id?: string;
  video_id: string;
  student_id: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type WatchedVideoProgressCreationAttributes = Optional<WatchedVideoProgressAttributes, 'id' | 'deleted_at'>;

export class WatchedVideoProgress extends Model<WatchedVideoProgressAttributes, WatchedVideoProgressCreationAttributes> implements WatchedVideoProgressAttributes {
  declare id?: string;
  declare video_id: string;
  declare student_id: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

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

import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface WatchedVideoProgressAttributes {
  id: string;
  videoId: string;
  studentId: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type WatchedVideoProgressPk = "id";
export type WatchedVideoProgressId = WatchedVideoProgress[WatchedVideoProgressPk];
export type WatchedVideoProgressOptionalAttributes = "deletedAt";
export type WatchedVideoProgressCreationAttributes = Optional<WatchedVideoProgressAttributes, WatchedVideoProgressOptionalAttributes>;

export class WatchedVideoProgress extends Model<WatchedVideoProgressAttributes, WatchedVideoProgressCreationAttributes> implements WatchedVideoProgressAttributes {
  id!: string;
  videoId!: string;
  studentId!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof WatchedVideoProgress {
    return WatchedVideoProgress.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    videoId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'video_id'
    },
    studentId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'student_id'
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
    tableName: 'watched_video_progress',
    schema: 'public',
    timestamps: false
  });
  }
}

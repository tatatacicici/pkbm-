import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface WatchedVideoProgressAttributes {
  id?: string;
  videoId: string;
  studentId: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type WatchedVideoProgressCreationAttributes = Optional<WatchedVideoProgressAttributes, 'id' | 'deletedAt'>;

export class WatchedVideoProgress extends Model<WatchedVideoProgressAttributes, WatchedVideoProgressCreationAttributes> implements WatchedVideoProgressAttributes {
  declare id?: string;
  declare videoId: string;
  declare studentId: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof WatchedVideoProgress {
    WatchedVideoProgress.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        videoId: { type: DataTypes.UUID, allowNull: false,
            field: 'video_id'
        },
        studentId: { type: DataTypes.UUID, allowNull: false,
            field: 'student_id'
        },
        createdAt: { type: DataTypes.DATE, allowNull: false,
            field: 'created_at'
        },
        updatedAt: { type: DataTypes.DATE, allowNull: false,
            field: 'updated_at'
        },
        deletedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'deleted_at'
        }
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

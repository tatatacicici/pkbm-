import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface LeaderboardHistoriesAttributes {
  pk: number;
  id?: string;
  code: string;
  studentId: string;
  type: string;
  currentScore: number;
  currentRank: number;
  previousScore: number;
  previousRank: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  subjectId?: string;
}

export type LeaderboardHistoriesCreationAttributes = Optional<LeaderboardHistoriesAttributes, 'id' | 'deletedAt' | 'subjectId'>;

export class LeaderboardHistories extends Model<LeaderboardHistoriesAttributes, LeaderboardHistoriesCreationAttributes> implements LeaderboardHistoriesAttributes {
  declare pk: number;
  declare id?: string;
  declare code: string;
  declare studentId: string;
  declare type: string;
  declare currentScore: number;
  declare currentRank: number;
  declare previousScore: number;
  declare previousRank: number;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;
  declare subjectId?: string;

  public static initModel(sequelize: Sequelize): typeof LeaderboardHistories {
    LeaderboardHistories.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false,
            field: 'pk'
        },
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        code: { type: DataTypes.STRING, allowNull: false,
            field: 'code'
        },
        studentId: { type: DataTypes.UUID, allowNull: false,
            field: 'student_id'
        },
        type: { type: DataTypes.STRING, allowNull: false,
            field: 'type'
        },
        currentScore: { type: DataTypes.INTEGER, allowNull: false,
            field: 'current_score'
        },
        currentRank: { type: DataTypes.INTEGER, allowNull: false,
            field: 'current_rank'
        },
        previousScore: { type: DataTypes.INTEGER, allowNull: false,
            field: 'previous_score'
        },
        previousRank: { type: DataTypes.INTEGER, allowNull: false,
            field: 'previous_rank'
        },
        createdAt: { type: DataTypes.DATE, allowNull: false,
            field: 'created_at'
        },
        updatedAt: { type: DataTypes.DATE, allowNull: false,
            field: 'updated_at'
        },
        deletedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'deleted_at'
        },
        subjectId: { type: DataTypes.UUID, allowNull: true,
            field: 'subject_id'
        }
      },
      {
        sequelize,
        tableName: 'leaderboard_histories',
        timestamps: true,
        underscored: true,
      }
    );
    return LeaderboardHistories;
  }
}

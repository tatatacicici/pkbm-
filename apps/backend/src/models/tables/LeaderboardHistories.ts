import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface LeaderboardHistoriesAttributes {
  pk: number;
  id?: string;
  code: string;
  student_id: string;
  type: string;
  current_score: number;
  current_rank: number;
  previous_score: number;
  previous_rank: number;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  subject_id?: string;
}

export type LeaderboardHistoriesCreationAttributes = Optional<LeaderboardHistoriesAttributes, 'id' | 'deleted_at' | 'subject_id'>;

export class LeaderboardHistories extends Model<LeaderboardHistoriesAttributes, LeaderboardHistoriesCreationAttributes> implements LeaderboardHistoriesAttributes {
  declare pk: number;
  declare id?: string;
  declare code: string;
  declare student_id: string;
  declare type: string;
  declare current_score: number;
  declare current_rank: number;
  declare previous_score: number;
  declare previous_rank: number;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;
  declare subject_id?: string;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof LeaderboardHistories {
    LeaderboardHistories.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false },
        id: { type: DataTypes.UUID, primaryKey: true },
        code: { type: DataTypes.STRING, allowNull: false },
        student_id: { type: DataTypes.UUID, allowNull: false },
        type: { type: DataTypes.STRING, allowNull: false },
        current_score: { type: DataTypes.INTEGER, allowNull: false },
        current_rank: { type: DataTypes.INTEGER, allowNull: false },
        previous_score: { type: DataTypes.INTEGER, allowNull: false },
        previous_rank: { type: DataTypes.INTEGER, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true },
        subject_id: { type: DataTypes.UUID, allowNull: true }
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

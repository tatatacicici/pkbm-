import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface LeaderboardHistoriesAttributes {
  pk?: any;
  id?: any;
  code?: any;
  student_id?: any;
  type?: any;
  current_score?: any;
  current_rank?: any;
  previous_score?: any;
  previous_rank?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
  subject_id?: any;
}

export type LeaderboardHistoriesCreationAttributes = Optional<LeaderboardHistoriesAttributes, 'id'>;

export class LeaderboardHistories extends Model<LeaderboardHistoriesAttributes, LeaderboardHistoriesCreationAttributes> implements LeaderboardHistoriesAttributes {
  declare pk?: any;
  declare id?: any;
  declare code?: any;
  declare student_id?: any;
  declare type?: any;
  declare current_score?: any;
  declare current_rank?: any;
  declare previous_score?: any;
  declare previous_rank?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;
  declare subject_id?: any;

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

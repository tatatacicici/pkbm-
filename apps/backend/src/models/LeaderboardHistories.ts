import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

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

export type LeaderboardHistoriesPk = "id";
export type LeaderboardHistoriesId = LeaderboardHistories[LeaderboardHistoriesPk];
export type LeaderboardHistoriesOptionalAttributes = "pk" | "id" | "deletedAt" | "subjectId";
export type LeaderboardHistoriesCreationAttributes = Optional<LeaderboardHistoriesAttributes, LeaderboardHistoriesOptionalAttributes>;

export class LeaderboardHistories extends Model<LeaderboardHistoriesAttributes, LeaderboardHistoriesCreationAttributes> implements LeaderboardHistoriesAttributes {
  pk!: number;
  id?: string;
  code!: string;
  studentId!: string;
  type!: string;
  currentScore!: number;
  currentRank!: number;
  previousScore!: number;
  previousRank!: number;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;
  subjectId?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof LeaderboardHistories {
    return LeaderboardHistories.init({
    pk: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id: {
      type: DataTypes.UUID,
      allowNull: true,
      primaryKey: true
    },
    code: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    studentId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'student_id'
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    currentScore: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'current_score'
    },
    currentRank: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'current_rank'
    },
    previousScore: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'previous_score'
    },
    previousRank: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'previous_rank'
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
    },
    subjectId: {
      type: DataTypes.UUID,
      allowNull: true,
      field: 'subject_id'
    }
  }, {
    sequelize,
    tableName: 'leaderboard_histories',
    schema: 'public',
    timestamps: false
  });
  }
}

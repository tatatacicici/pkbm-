import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface AssessmentsSessionsRubricsResultsAttributes {
  pk: number;
  id?: string;
  assessment_id: number;
  assessment_session_id: number;
  student_id: string;
  rubric_id: number;
  competency_id: string;
  score_id: string;
  note?: string;
  result: number;
  scored_by: string;
  scored_at: Date;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type AssessmentsSessionsRubricsResultsCreationAttributes = Optional<AssessmentsSessionsRubricsResultsAttributes, 'id' | 'note' | 'deleted_at'>;

export class AssessmentsSessionsRubricsResults extends Model<AssessmentsSessionsRubricsResultsAttributes, AssessmentsSessionsRubricsResultsCreationAttributes> implements AssessmentsSessionsRubricsResultsAttributes {
  declare pk: number;
  declare id?: string;
  declare assessment_id: number;
  declare assessment_session_id: number;
  declare student_id: string;
  declare rubric_id: number;
  declare competency_id: string;
  declare score_id: string;
  declare note?: string;
  declare result: number;
  declare scored_by: string;
  declare scored_at: Date;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof AssessmentsSessionsRubricsResults {
    AssessmentsSessionsRubricsResults.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false },
        id: { type: DataTypes.UUID, primaryKey: true },
        assessment_id: { type: DataTypes.INTEGER, allowNull: false },
        assessment_session_id: { type: DataTypes.INTEGER, allowNull: false },
        student_id: { type: DataTypes.UUID, allowNull: false },
        rubric_id: { type: DataTypes.INTEGER, allowNull: false },
        competency_id: { type: DataTypes.STRING, allowNull: false },
        score_id: { type: DataTypes.STRING, allowNull: false },
        note: { type: DataTypes.TEXT, allowNull: true },
        result: { type: DataTypes.INTEGER, allowNull: false },
        scored_by: { type: DataTypes.UUID, allowNull: false },
        scored_at: { type: DataTypes.DATE, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'assessments_sessions_rubrics_results',
        timestamps: true,
        underscored: true,
      }
    );
    return AssessmentsSessionsRubricsResults;
  }
}

import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface AssessmentsSessionsRubricsResultsAttributes {
  pk?: any;
  id?: any;
  assessment_id?: any;
  assessment_session_id?: any;
  student_id?: any;
  rubric_id?: any;
  competency_id?: any;
  score_id?: any;
  note?: any;
  result?: any;
  scored_by?: any;
  scored_at?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type AssessmentsSessionsRubricsResultsCreationAttributes = Optional<AssessmentsSessionsRubricsResultsAttributes, 'id'>;

export class AssessmentsSessionsRubricsResults extends Model<AssessmentsSessionsRubricsResultsAttributes, AssessmentsSessionsRubricsResultsCreationAttributes> implements AssessmentsSessionsRubricsResultsAttributes {
  declare pk?: any;
  declare id?: any;
  declare assessment_id?: any;
  declare assessment_session_id?: any;
  declare student_id?: any;
  declare rubric_id?: any;
  declare competency_id?: any;
  declare score_id?: any;
  declare note?: any;
  declare result?: any;
  declare scored_by?: any;
  declare scored_at?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

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

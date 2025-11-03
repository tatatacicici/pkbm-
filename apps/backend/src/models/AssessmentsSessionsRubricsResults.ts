import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface AssessmentsSessionsRubricsResultsAttributes {
  pk: number;
  id?: string;
  assessmentId: number;
  assessmentSessionId: number;
  studentId: string;
  rubricId: number;
  competencyId: string;
  scoreId: string;
  note?: string;
  result: number;
  scoredBy: string;
  scoredAt: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type AssessmentsSessionsRubricsResultsPk = "pk";
export type AssessmentsSessionsRubricsResultsId = AssessmentsSessionsRubricsResults[AssessmentsSessionsRubricsResultsPk];
export type AssessmentsSessionsRubricsResultsOptionalAttributes = "pk" | "id" | "note" | "deletedAt";
export type AssessmentsSessionsRubricsResultsCreationAttributes = Optional<AssessmentsSessionsRubricsResultsAttributes, AssessmentsSessionsRubricsResultsOptionalAttributes>;

export class AssessmentsSessionsRubricsResults extends Model<AssessmentsSessionsRubricsResultsAttributes, AssessmentsSessionsRubricsResultsCreationAttributes> implements AssessmentsSessionsRubricsResultsAttributes {
  pk!: number;
  id?: string;
  assessmentId!: number;
  assessmentSessionId!: number;
  studentId!: string;
  rubricId!: number;
  competencyId!: string;
  scoreId!: string;
  note?: string;
  result!: number;
  scoredBy!: string;
  scoredAt!: Date;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof AssessmentsSessionsRubricsResults {
    return AssessmentsSessionsRubricsResults.init({
    pk: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id: {
      type: DataTypes.UUID,
      allowNull: true
    },
    assessmentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'assessment_id'
    },
    assessmentSessionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'assessment_session_id'
    },
    studentId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'student_id'
    },
    rubricId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'rubric_id'
    },
    competencyId: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'competency_id'
    },
    scoreId: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'score_id'
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    result: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    scoredBy: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'scored_by'
    },
    scoredAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'scored_at'
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
    tableName: 'assessments_sessions_rubrics_results',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "assessments_sessions_rubrics_results_pkey",
        unique: true,
        fields: [
          { name: "pk" },
        ]
      },
    ]
  });
  }
}

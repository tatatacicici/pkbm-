import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface AssessmentsSubjectsProgressesAnswersAttributes {
  pk: number;
  id?: string;
  subjectProgressId: number;
  studentId: string;
  subjectId: string;
  rubricId: number;
  competencyId: string;
  scoreId: string;
  score: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type AssessmentsSubjectsProgressesAnswersPk = "pk";
export type AssessmentsSubjectsProgressesAnswersId = AssessmentsSubjectsProgressesAnswers[AssessmentsSubjectsProgressesAnswersPk];
export type AssessmentsSubjectsProgressesAnswersOptionalAttributes = "pk" | "id" | "deletedAt";
export type AssessmentsSubjectsProgressesAnswersCreationAttributes = Optional<AssessmentsSubjectsProgressesAnswersAttributes, AssessmentsSubjectsProgressesAnswersOptionalAttributes>;

export class AssessmentsSubjectsProgressesAnswers extends Model<AssessmentsSubjectsProgressesAnswersAttributes, AssessmentsSubjectsProgressesAnswersCreationAttributes> implements AssessmentsSubjectsProgressesAnswersAttributes {
  pk!: number;
  id?: string;
  subjectProgressId!: number;
  studentId!: string;
  subjectId!: string;
  rubricId!: number;
  competencyId!: string;
  scoreId!: string;
  score!: number;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof AssessmentsSubjectsProgressesAnswers {
    return AssessmentsSubjectsProgressesAnswers.init({
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
    subjectProgressId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'subject_progress_id'
    },
    studentId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'student_id'
    },
    subjectId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'subject_id'
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
    score: {
      type: DataTypes.DOUBLE,
      allowNull: false
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
    tableName: 'assessments_subjects_progresses_answers',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "assessments_subjects_progresses_answers_pkey",
        unique: true,
        fields: [
          { name: "pk" },
        ]
      },
    ]
  });
  }
}

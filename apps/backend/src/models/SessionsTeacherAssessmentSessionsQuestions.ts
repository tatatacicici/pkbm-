import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface SessionsTeacherAssessmentSessionsQuestionsAttributes {
  pk: number;
  id?: string;
  subjectId: string;
  sessionId: string;
  sessionNo: string;
  questionId: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  assessmentId?: string;
}

export type SessionsTeacherAssessmentSessionsQuestionsPk = "id";
export type SessionsTeacherAssessmentSessionsQuestionsId = SessionsTeacherAssessmentSessionsQuestions[SessionsTeacherAssessmentSessionsQuestionsPk];
export type SessionsTeacherAssessmentSessionsQuestionsOptionalAttributes = "pk" | "id" | "deletedAt" | "assessmentId";
export type SessionsTeacherAssessmentSessionsQuestionsCreationAttributes = Optional<SessionsTeacherAssessmentSessionsQuestionsAttributes, SessionsTeacherAssessmentSessionsQuestionsOptionalAttributes>;

export class SessionsTeacherAssessmentSessionsQuestions extends Model<SessionsTeacherAssessmentSessionsQuestionsAttributes, SessionsTeacherAssessmentSessionsQuestionsCreationAttributes> implements SessionsTeacherAssessmentSessionsQuestionsAttributes {
  pk!: number;
  id?: string;
  subjectId!: string;
  sessionId!: string;
  sessionNo!: string;
  questionId!: number;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;
  assessmentId?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof SessionsTeacherAssessmentSessionsQuestions {
    return SessionsTeacherAssessmentSessionsQuestions.init({
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
    subjectId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'subject_id'
    },
    sessionId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'session_id'
    },
    sessionNo: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'session_no'
    },
    questionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'question_id'
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
    assessmentId: {
      type: DataTypes.UUID,
      allowNull: true,
      field: 'assessment_id'
    }
  }, {
    sequelize,
    tableName: 'sessions_teacher_assessment_sessions_questions',
    schema: 'public',
    timestamps: false
  });
  }
}

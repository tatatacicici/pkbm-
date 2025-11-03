import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface SessionsTeacherAssessmentQuestionsAnswersAttributes {
  id: string;
  questionId: number;
  answer: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  answerId?: string;
}

export type SessionsTeacherAssessmentQuestionsAnswersPk = "id";
export type SessionsTeacherAssessmentQuestionsAnswersId = SessionsTeacherAssessmentQuestionsAnswers[SessionsTeacherAssessmentQuestionsAnswersPk];
export type SessionsTeacherAssessmentQuestionsAnswersOptionalAttributes = "deletedAt" | "answerId";
export type SessionsTeacherAssessmentQuestionsAnswersCreationAttributes = Optional<SessionsTeacherAssessmentQuestionsAnswersAttributes, SessionsTeacherAssessmentQuestionsAnswersOptionalAttributes>;

export class SessionsTeacherAssessmentQuestionsAnswers extends Model<SessionsTeacherAssessmentQuestionsAnswersAttributes, SessionsTeacherAssessmentQuestionsAnswersCreationAttributes> implements SessionsTeacherAssessmentQuestionsAnswersAttributes {
  id!: string;
  questionId!: number;
  answer!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;
  answerId?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof SessionsTeacherAssessmentQuestionsAnswers {
    return SessionsTeacherAssessmentQuestionsAnswers.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    questionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'question_id'
    },
    answer: {
      type: DataTypes.TEXT,
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
    },
    answerId: {
      type: DataTypes.UUID,
      allowNull: true,
      field: 'answer_id'
    }
  }, {
    sequelize,
    tableName: 'sessions_teacher_assessment_questions_answers',
    schema: 'public',
    timestamps: false
  });
  }
}

import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface SessionsTeacherAssessmentQuestionsAttributes {
  pk: number;
  id?: string;
  question: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type SessionsTeacherAssessmentQuestionsPk = "id";
export type SessionsTeacherAssessmentQuestionsId = SessionsTeacherAssessmentQuestions[SessionsTeacherAssessmentQuestionsPk];
export type SessionsTeacherAssessmentQuestionsOptionalAttributes = "pk" | "id" | "deletedAt";
export type SessionsTeacherAssessmentQuestionsCreationAttributes = Optional<SessionsTeacherAssessmentQuestionsAttributes, SessionsTeacherAssessmentQuestionsOptionalAttributes>;

export class SessionsTeacherAssessmentQuestions extends Model<SessionsTeacherAssessmentQuestionsAttributes, SessionsTeacherAssessmentQuestionsCreationAttributes> implements SessionsTeacherAssessmentQuestionsAttributes {
  pk!: number;
  id?: string;
  question!: string;
  type!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof SessionsTeacherAssessmentQuestions {
    return SessionsTeacherAssessmentQuestions.init({
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
    question: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(255),
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
    tableName: 'sessions_teacher_assessment_questions',
    schema: 'public',
    timestamps: false
  });
  }
}

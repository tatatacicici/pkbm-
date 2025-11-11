import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SessionsTeacherAssessmentSessionsQuestionsAttributes {
  pk: number;
  id?: string;
  subject_id: string;
  session_id: string;
  session_no: string;
  question_id: number;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  assessment_id?: string;
}

export type SessionsTeacherAssessmentSessionsQuestionsCreationAttributes = Optional<SessionsTeacherAssessmentSessionsQuestionsAttributes, 'id' | 'deleted_at' | 'assessment_id'>;

export class SessionsTeacherAssessmentSessionsQuestions extends Model<SessionsTeacherAssessmentSessionsQuestionsAttributes, SessionsTeacherAssessmentSessionsQuestionsCreationAttributes> implements SessionsTeacherAssessmentSessionsQuestionsAttributes {
  declare pk: number;
  declare id?: string;
  declare subject_id: string;
  declare session_id: string;
  declare session_no: string;
  declare question_id: number;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;
  declare assessment_id?: string;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof SessionsTeacherAssessmentSessionsQuestions {
    SessionsTeacherAssessmentSessionsQuestions.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false },
        id: { type: DataTypes.UUID, primaryKey: true },
        subject_id: { type: DataTypes.UUID, allowNull: false },
        session_id: { type: DataTypes.UUID, allowNull: false },
        session_no: { type: DataTypes.STRING, allowNull: false },
        question_id: { type: DataTypes.INTEGER, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true },
        assessment_id: { type: DataTypes.UUID, allowNull: true }
      },
      {
        sequelize,
        tableName: 'sessions_teacher_assessment_sessions_questions',
        timestamps: true,
        underscored: true,
      }
    );
    return SessionsTeacherAssessmentSessionsQuestions;
  }
}

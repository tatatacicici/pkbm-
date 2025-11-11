import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SessionsTeacherAssessmentSessionsQuestionsAttributes {
  pk?: any;
  id?: any;
  subject_id?: any;
  session_id?: any;
  session_no?: any;
  question_id?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
  assessment_id?: any;
}

export type SessionsTeacherAssessmentSessionsQuestionsCreationAttributes = Optional<SessionsTeacherAssessmentSessionsQuestionsAttributes, 'id'>;

export class SessionsTeacherAssessmentSessionsQuestions extends Model<SessionsTeacherAssessmentSessionsQuestionsAttributes, SessionsTeacherAssessmentSessionsQuestionsCreationAttributes> implements SessionsTeacherAssessmentSessionsQuestionsAttributes {
  declare pk?: any;
  declare id?: any;
  declare subject_id?: any;
  declare session_id?: any;
  declare session_no?: any;
  declare question_id?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;
  declare assessment_id?: any;

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

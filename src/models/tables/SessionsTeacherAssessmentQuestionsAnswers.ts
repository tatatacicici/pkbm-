import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SessionsTeacherAssessmentQuestionsAnswersAttributes {
  id?: any;
  question_id?: any;
  answer?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
  answer_id?: any;
}

export type SessionsTeacherAssessmentQuestionsAnswersCreationAttributes = Optional<SessionsTeacherAssessmentQuestionsAnswersAttributes, 'id'>;

export class SessionsTeacherAssessmentQuestionsAnswers extends Model<SessionsTeacherAssessmentQuestionsAnswersAttributes, SessionsTeacherAssessmentQuestionsAnswersCreationAttributes> implements SessionsTeacherAssessmentQuestionsAnswersAttributes {
  declare id?: any;
  declare question_id?: any;
  declare answer?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;
  declare answer_id?: any;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof SessionsTeacherAssessmentQuestionsAnswers {
    SessionsTeacherAssessmentQuestionsAnswers.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        question_id: { type: DataTypes.INTEGER, allowNull: false },
        answer: { type: DataTypes.TEXT, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true },
        answer_id: { type: DataTypes.UUID, allowNull: true }
      },
      {
        sequelize,
        tableName: 'sessions_teacher_assessment_questions_answers',
        timestamps: true,
        underscored: true,
      }
    );
    return SessionsTeacherAssessmentQuestionsAnswers;
  }
}

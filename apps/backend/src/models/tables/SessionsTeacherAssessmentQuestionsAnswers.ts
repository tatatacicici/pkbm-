import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SessionsTeacherAssessmentQuestionsAnswersAttributes {
  id?: string;
  question_id: number;
  answer: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  answer_id?: string;
}

export type SessionsTeacherAssessmentQuestionsAnswersCreationAttributes = Optional<SessionsTeacherAssessmentQuestionsAnswersAttributes, 'id' | 'deleted_at' | 'answer_id'>;

export class SessionsTeacherAssessmentQuestionsAnswers extends Model<SessionsTeacherAssessmentQuestionsAnswersAttributes, SessionsTeacherAssessmentQuestionsAnswersCreationAttributes> implements SessionsTeacherAssessmentQuestionsAnswersAttributes {
  declare id?: string;
  declare question_id: number;
  declare answer: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;
  declare answer_id?: string;

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

import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SessionsTeacherAssessmentQuestionsAttributes {
  pk: number;
  id?: string;
  question: string;
  type: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type SessionsTeacherAssessmentQuestionsCreationAttributes = Optional<SessionsTeacherAssessmentQuestionsAttributes, 'id' | 'deleted_at'>;

export class SessionsTeacherAssessmentQuestions extends Model<SessionsTeacherAssessmentQuestionsAttributes, SessionsTeacherAssessmentQuestionsCreationAttributes> implements SessionsTeacherAssessmentQuestionsAttributes {
  declare pk: number;
  declare id?: string;
  declare question: string;
  declare type: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof SessionsTeacherAssessmentQuestions {
    SessionsTeacherAssessmentQuestions.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false },
        id: { type: DataTypes.UUID, primaryKey: true },
        question: { type: DataTypes.TEXT, allowNull: false },
        type: { type: DataTypes.STRING, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'sessions_teacher_assessment_questions',
        timestamps: true,
        underscored: true,
      }
    );
    return SessionsTeacherAssessmentQuestions;
  }
}

import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SessionsTeacherAssessmentQuestionsAttributes {
  pk?: any;
  id?: any;
  question?: any;
  type?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type SessionsTeacherAssessmentQuestionsCreationAttributes = Optional<SessionsTeacherAssessmentQuestionsAttributes, 'id'>;

export class SessionsTeacherAssessmentQuestions extends Model<SessionsTeacherAssessmentQuestionsAttributes, SessionsTeacherAssessmentQuestionsCreationAttributes> implements SessionsTeacherAssessmentQuestionsAttributes {
  declare pk?: any;
  declare id?: any;
  declare question?: any;
  declare type?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

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

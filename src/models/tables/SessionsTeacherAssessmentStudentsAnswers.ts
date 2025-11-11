import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SessionsTeacherAssessmentStudentsAnswersAttributes {
  pk?: any;
  id?: any;
  assessment_id?: any;
  subject_id?: any;
  session_id?: any;
  question_id?: any;
  student_id?: any;
  answer?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type SessionsTeacherAssessmentStudentsAnswersCreationAttributes = Optional<SessionsTeacherAssessmentStudentsAnswersAttributes, 'id'>;

export class SessionsTeacherAssessmentStudentsAnswers extends Model<SessionsTeacherAssessmentStudentsAnswersAttributes, SessionsTeacherAssessmentStudentsAnswersCreationAttributes> implements SessionsTeacherAssessmentStudentsAnswersAttributes {
  declare pk?: any;
  declare id?: any;
  declare assessment_id?: any;
  declare subject_id?: any;
  declare session_id?: any;
  declare question_id?: any;
  declare student_id?: any;
  declare answer?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof SessionsTeacherAssessmentStudentsAnswers {
    SessionsTeacherAssessmentStudentsAnswers.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false },
        id: { type: DataTypes.UUID, primaryKey: true },
        assessment_id: { type: DataTypes.INTEGER, allowNull: false },
        subject_id: { type: DataTypes.UUID, allowNull: false },
        session_id: { type: DataTypes.UUID, allowNull: false },
        question_id: { type: DataTypes.INTEGER, allowNull: false },
        student_id: { type: DataTypes.UUID, allowNull: false },
        answer: { type: DataTypes.TEXT, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'sessions_teacher_assessment_students_answers',
        timestamps: true,
        underscored: true,
      }
    );
    return SessionsTeacherAssessmentStudentsAnswers;
  }
}

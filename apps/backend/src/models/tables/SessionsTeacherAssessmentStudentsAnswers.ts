import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SessionsTeacherAssessmentStudentsAnswersAttributes {
  pk: number;
  id?: string;
  assessment_id: number;
  subject_id: string;
  session_id: string;
  question_id: number;
  student_id: string;
  answer: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type SessionsTeacherAssessmentStudentsAnswersCreationAttributes = Optional<SessionsTeacherAssessmentStudentsAnswersAttributes, 'id' | 'deleted_at'>;

export class SessionsTeacherAssessmentStudentsAnswers extends Model<SessionsTeacherAssessmentStudentsAnswersAttributes, SessionsTeacherAssessmentStudentsAnswersCreationAttributes> implements SessionsTeacherAssessmentStudentsAnswersAttributes {
  declare pk: number;
  declare id?: string;
  declare assessment_id: number;
  declare subject_id: string;
  declare session_id: string;
  declare question_id: number;
  declare student_id: string;
  declare answer: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

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

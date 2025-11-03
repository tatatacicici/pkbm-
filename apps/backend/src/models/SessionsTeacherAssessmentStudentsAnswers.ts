import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface SessionsTeacherAssessmentStudentsAnswersAttributes {
  pk: number;
  id?: string;
  assessmentId: number;
  subjectId: string;
  sessionId: string;
  questionId: number;
  studentId: string;
  answer: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type SessionsTeacherAssessmentStudentsAnswersPk = "id";
export type SessionsTeacherAssessmentStudentsAnswersId = SessionsTeacherAssessmentStudentsAnswers[SessionsTeacherAssessmentStudentsAnswersPk];
export type SessionsTeacherAssessmentStudentsAnswersOptionalAttributes = "pk" | "id" | "deletedAt";
export type SessionsTeacherAssessmentStudentsAnswersCreationAttributes = Optional<SessionsTeacherAssessmentStudentsAnswersAttributes, SessionsTeacherAssessmentStudentsAnswersOptionalAttributes>;

export class SessionsTeacherAssessmentStudentsAnswers extends Model<SessionsTeacherAssessmentStudentsAnswersAttributes, SessionsTeacherAssessmentStudentsAnswersCreationAttributes> implements SessionsTeacherAssessmentStudentsAnswersAttributes {
  pk!: number;
  id?: string;
  assessmentId!: number;
  subjectId!: string;
  sessionId!: string;
  questionId!: number;
  studentId!: string;
  answer!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof SessionsTeacherAssessmentStudentsAnswers {
    return SessionsTeacherAssessmentStudentsAnswers.init({
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
    assessmentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'assessment_id'
    },
    subjectId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'subject_id'
    },
    sessionId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'session_id'
    },
    questionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'question_id'
    },
    studentId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'student_id'
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
    }
  }, {
    sequelize,
    tableName: 'sessions_teacher_assessment_students_answers',
    schema: 'public',
    timestamps: false
  });
  }
}

import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface SessionsTeacherAssessmentAttributes {
  pk: number;
  id?: string;
  subjectId: string;
  sessionId: string;
  sessionNo: string;
  teacherId?: string;
  studentId: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  assessmentId?: string;
  timestampTaken?: Date;
  timestampSubmitted?: Date;
}

export type SessionsTeacherAssessmentPk = "id";
export type SessionsTeacherAssessmentId = SessionsTeacherAssessment[SessionsTeacherAssessmentPk];
export type SessionsTeacherAssessmentOptionalAttributes = "pk" | "id" | "teacherId" | "deletedAt" | "assessmentId" | "timestampTaken" | "timestampSubmitted";
export type SessionsTeacherAssessmentCreationAttributes = Optional<SessionsTeacherAssessmentAttributes, SessionsTeacherAssessmentOptionalAttributes>;

export class SessionsTeacherAssessment extends Model<SessionsTeacherAssessmentAttributes, SessionsTeacherAssessmentCreationAttributes> implements SessionsTeacherAssessmentAttributes {
  pk!: number;
  id?: string;
  subjectId!: string;
  sessionId!: string;
  sessionNo!: string;
  teacherId?: string;
  studentId!: string;
  status!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;
  assessmentId?: string;
  timestampTaken?: Date;
  timestampSubmitted?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof SessionsTeacherAssessment {
    return SessionsTeacherAssessment.init({
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
    sessionNo: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'session_no'
    },
    teacherId: {
      type: DataTypes.UUID,
      allowNull: true,
      field: 'teacher_id'
    },
    studentId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'student_id'
    },
    status: {
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
    },
    assessmentId: {
      type: DataTypes.UUID,
      allowNull: true,
      field: 'assessment_id'
    },
    timestampTaken: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'timestamp_taken'
    },
    timestampSubmitted: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'timestamp_submitted'
    }
  }, {
    sequelize,
    tableName: 'sessions_teacher_assessment',
    schema: 'public',
    timestamps: false
  });
  }
}

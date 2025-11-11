import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SessionsTeacherAssessmentAttributes {
  pk: number;
  id?: string;
  subject_id: string;
  session_id: string;
  session_no: string;
  teacher_id?: string;
  student_id: string;
  status: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  assessment_id?: string;
  timestamp_taken?: Date;
  timestamp_submitted?: Date;
}

export type SessionsTeacherAssessmentCreationAttributes = Optional<SessionsTeacherAssessmentAttributes, 'id' | 'teacher_id' | 'deleted_at' | 'assessment_id' | 'timestamp_taken' | 'timestamp_submitted'>;

export class SessionsTeacherAssessment extends Model<SessionsTeacherAssessmentAttributes, SessionsTeacherAssessmentCreationAttributes> implements SessionsTeacherAssessmentAttributes {
  declare pk: number;
  declare id?: string;
  declare subject_id: string;
  declare session_id: string;
  declare session_no: string;
  declare teacher_id?: string;
  declare student_id: string;
  declare status: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;
  declare assessment_id?: string;
  declare timestamp_taken?: Date;
  declare timestamp_submitted?: Date;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof SessionsTeacherAssessment {
    SessionsTeacherAssessment.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false },
        id: { type: DataTypes.UUID, primaryKey: true },
        subject_id: { type: DataTypes.UUID, allowNull: false },
        session_id: { type: DataTypes.UUID, allowNull: false },
        session_no: { type: DataTypes.STRING, allowNull: false },
        teacher_id: { type: DataTypes.UUID, allowNull: true },
        student_id: { type: DataTypes.UUID, allowNull: false },
        status: { type: DataTypes.STRING, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true },
        assessment_id: { type: DataTypes.UUID, allowNull: true },
        timestamp_taken: { type: DataTypes.DATE, allowNull: true },
        timestamp_submitted: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'sessions_teacher_assessment',
        timestamps: true,
        underscored: true,
      }
    );
    return SessionsTeacherAssessment;
  }
}

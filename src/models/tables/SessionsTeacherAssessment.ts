import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SessionsTeacherAssessmentAttributes {
  pk?: any;
  id?: any;
  subject_id?: any;
  session_id?: any;
  session_no?: any;
  teacher_id?: any;
  student_id?: any;
  status?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
  assessment_id?: any;
  timestamp_taken?: any;
  timestamp_submitted?: any;
}

export type SessionsTeacherAssessmentCreationAttributes = Optional<SessionsTeacherAssessmentAttributes, 'id'>;

export class SessionsTeacherAssessment extends Model<SessionsTeacherAssessmentAttributes, SessionsTeacherAssessmentCreationAttributes> implements SessionsTeacherAssessmentAttributes {
  declare pk?: any;
  declare id?: any;
  declare subject_id?: any;
  declare session_id?: any;
  declare session_no?: any;
  declare teacher_id?: any;
  declare student_id?: any;
  declare status?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;
  declare assessment_id?: any;
  declare timestamp_taken?: any;
  declare timestamp_submitted?: any;

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

import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface StudentSessionsAttributes {
  id: string;
  sessionId: string;
  studentId: string;
  datePresent?: Date;
  finalScore?: number;
  isPresent?: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type StudentSessionsPk = "id";
export type StudentSessionsId = StudentSessions[StudentSessionsPk];
export type StudentSessionsOptionalAttributes = "datePresent" | "finalScore" | "isPresent" | "deletedAt";
export type StudentSessionsCreationAttributes = Optional<StudentSessionsAttributes, StudentSessionsOptionalAttributes>;

export class StudentSessions extends Model<StudentSessionsAttributes, StudentSessionsCreationAttributes> implements StudentSessionsAttributes {
  id!: string;
  sessionId!: string;
  studentId!: string;
  datePresent?: Date;
  finalScore?: number;
  isPresent?: boolean;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof StudentSessions {
    return StudentSessions.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    sessionId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'session_id'
    },
    studentId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'student_id'
    },
    datePresent: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'date_present'
    },
    finalScore: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0,
      field: 'final_score'
    },
    isPresent: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
      field: 'is_present'
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
    tableName: 'student_sessions',
    schema: 'public',
    timestamps: false
  });
  }
}

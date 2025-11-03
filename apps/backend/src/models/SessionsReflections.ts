import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface SessionsReflectionsAttributes {
  pk: number;
  id?: string;
  subjectId: string;
  sessionId: string;
  studentId: string;
  message: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type SessionsReflectionsPk = "id";
export type SessionsReflectionsId = SessionsReflections[SessionsReflectionsPk];
export type SessionsReflectionsOptionalAttributes = "pk" | "id" | "deletedAt";
export type SessionsReflectionsCreationAttributes = Optional<SessionsReflectionsAttributes, SessionsReflectionsOptionalAttributes>;

export class SessionsReflections extends Model<SessionsReflectionsAttributes, SessionsReflectionsCreationAttributes> implements SessionsReflectionsAttributes {
  pk!: number;
  id?: string;
  subjectId!: string;
  sessionId!: string;
  studentId!: string;
  message!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof SessionsReflections {
    return SessionsReflections.init({
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
    studentId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'student_id'
    },
    message: {
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
    tableName: 'sessions_reflections',
    schema: 'public',
    timestamps: false
  });
  }
}

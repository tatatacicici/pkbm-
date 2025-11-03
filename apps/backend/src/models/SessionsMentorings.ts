import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface SessionsMentoringsAttributes {
  pk: number;
  id?: string;
  subjectId: string;
  sessionId: string;
  teacherId: string;
  session?: number;
  title: string;
  content: string;
  duration: string;
  location: string;
  date: Date;
  link: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  moduleId?: string;
  type?: string;
}

export type SessionsMentoringsPk = "id";
export type SessionsMentoringsId = SessionsMentorings[SessionsMentoringsPk];
export type SessionsMentoringsOptionalAttributes = "pk" | "id" | "session" | "deletedAt" | "moduleId" | "type";
export type SessionsMentoringsCreationAttributes = Optional<SessionsMentoringsAttributes, SessionsMentoringsOptionalAttributes>;

export class SessionsMentorings extends Model<SessionsMentoringsAttributes, SessionsMentoringsCreationAttributes> implements SessionsMentoringsAttributes {
  pk!: number;
  id?: string;
  subjectId!: string;
  sessionId!: string;
  teacherId!: string;
  session?: number;
  title!: string;
  content!: string;
  duration!: string;
  location!: string;
  date!: Date;
  link!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;
  moduleId?: string;
  type?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof SessionsMentorings {
    return SessionsMentorings.init({
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
    teacherId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'teacher_id'
    },
    session: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    duration: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    location: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    link: {
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
    moduleId: {
      type: DataTypes.UUID,
      allowNull: true,
      field: 'module_id'
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sessions_mentorings',
    schema: 'public',
    timestamps: false
  });
  }
}

import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface SessionsAttributes {
  id: string;
  subjectId: string;
  sessionNo: number;
  isSync?: boolean;
  type?: string;
  description?: string;
  link?: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  title?: string;
  duration?: number;
  startAt?: Date;
  status: "DRAFT" | "PUBLISHED";
}

export type SessionsPk = "id";
export type SessionsId = Sessions[SessionsPk];
export type SessionsOptionalAttributes = "isSync" | "type" | "description" | "link" | "deletedAt" | "title" | "duration" | "startAt" | "status";
export type SessionsCreationAttributes = Optional<SessionsAttributes, SessionsOptionalAttributes>;

export class Sessions extends Model<SessionsAttributes, SessionsCreationAttributes> implements SessionsAttributes {
  id!: string;
  subjectId!: string;
  sessionNo!: number;
  isSync?: boolean;
  type?: string;
  description?: string;
  link?: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;
  title?: string;
  duration?: number;
  startAt?: Date;
  status!: "DRAFT" | "PUBLISHED";


  static initModel(sequelize: Sequelize.Sequelize): typeof Sessions {
    return Sessions.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    subjectId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'subject_id'
    },
    sessionNo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'session_no'
    },
    isSync: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field: 'is_sync'
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    link: {
      type: DataTypes.STRING(255),
      allowNull: true
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
    title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    startAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'start_at'
    },
    status: {
      type: DataTypes.ENUM("DRAFT","PUBLISHED"),
      allowNull: false,
      defaultValue: "PUBLISHED"
    }
  }, {
    sequelize,
    tableName: 'sessions',
    schema: 'public',
    timestamps: false
  });
  }
}

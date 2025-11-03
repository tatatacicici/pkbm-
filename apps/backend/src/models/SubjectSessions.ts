import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface SubjectSessionsAttributes {
  id: string;
  subjectId: string;
  title: string;
  description?: string;
  sessionNumber: number;
  durationMinutes?: number;
  status: "ACTIVE" | "INACTIVE" | "DRAFT";
  publishedAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export type SubjectSessionsPk = "id";
export type SubjectSessionsId = SubjectSessions[SubjectSessionsPk];
export type SubjectSessionsOptionalAttributes = "description" | "durationMinutes" | "status" | "publishedAt" | "createdAt" | "updatedAt" | "deletedAt";
export type SubjectSessionsCreationAttributes = Optional<SubjectSessionsAttributes, SubjectSessionsOptionalAttributes>;

export class SubjectSessions extends Model<SubjectSessionsAttributes, SubjectSessionsCreationAttributes> implements SubjectSessionsAttributes {
  id!: string;
  subjectId!: string;
  title!: string;
  description?: string;
  sessionNumber!: number;
  durationMinutes?: number;
  status!: "ACTIVE" | "INACTIVE" | "DRAFT";
  publishedAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof SubjectSessions {
    return SubjectSessions.init({
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
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sessionNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'session_number'
    },
    durationMinutes: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'duration_minutes'
    },
    status: {
      type: DataTypes.ENUM("ACTIVE","INACTIVE","DRAFT"),
      allowNull: false,
      defaultValue: "DRAFT"
    },
    publishedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'published_at'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'updated_at'
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'deleted_at'
    }
  }, {
    sequelize,
    tableName: 'subject_sessions',
    schema: 'public',
    timestamps: false
  });
  }
}

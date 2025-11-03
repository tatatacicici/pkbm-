import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface AssessmentsSessionsSubmissionsAttributes {
  pk: number;
  id?: string;
  assessmentId: number;
  assessmentSessionId: number;
  studentId: string;
  documentId?: number;
  documentUrl?: string;
  videoUrl?: string;
  submittedAt: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type AssessmentsSessionsSubmissionsPk = "pk";
export type AssessmentsSessionsSubmissionsId = AssessmentsSessionsSubmissions[AssessmentsSessionsSubmissionsPk];
export type AssessmentsSessionsSubmissionsOptionalAttributes = "pk" | "id" | "documentId" | "documentUrl" | "videoUrl" | "deletedAt";
export type AssessmentsSessionsSubmissionsCreationAttributes = Optional<AssessmentsSessionsSubmissionsAttributes, AssessmentsSessionsSubmissionsOptionalAttributes>;

export class AssessmentsSessionsSubmissions extends Model<AssessmentsSessionsSubmissionsAttributes, AssessmentsSessionsSubmissionsCreationAttributes> implements AssessmentsSessionsSubmissionsAttributes {
  pk!: number;
  id?: string;
  assessmentId!: number;
  assessmentSessionId!: number;
  studentId!: string;
  documentId?: number;
  documentUrl?: string;
  videoUrl?: string;
  submittedAt!: Date;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof AssessmentsSessionsSubmissions {
    return AssessmentsSessionsSubmissions.init({
    pk: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id: {
      type: DataTypes.UUID,
      allowNull: true
    },
    assessmentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'assessment_id'
    },
    assessmentSessionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'assessment_session_id'
    },
    studentId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'student_id'
    },
    documentId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'document_id'
    },
    documentUrl: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'document_url'
    },
    videoUrl: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'video_url'
    },
    submittedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'submitted_at'
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
    tableName: 'assessments_sessions_submissions',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "assessments_sessions_submissions_pkey",
        unique: true,
        fields: [
          { name: "pk" },
        ]
      },
    ]
  });
  }
}

import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface AssessmentsSessionsSubmissionsAttributes {
  pk: number;
  id?: string;
  assessment_id: number;
  assessment_session_id: number;
  student_id: string;
  document_id?: number;
  document_url?: string;
  video_url?: string;
  submitted_at: Date;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type AssessmentsSessionsSubmissionsCreationAttributes = Optional<AssessmentsSessionsSubmissionsAttributes, 'id' | 'document_id' | 'document_url' | 'video_url' | 'deleted_at'>;

export class AssessmentsSessionsSubmissions extends Model<AssessmentsSessionsSubmissionsAttributes, AssessmentsSessionsSubmissionsCreationAttributes> implements AssessmentsSessionsSubmissionsAttributes {
  declare pk: number;
  declare id?: string;
  declare assessment_id: number;
  declare assessment_session_id: number;
  declare student_id: string;
  declare document_id?: number;
  declare document_url?: string;
  declare video_url?: string;
  declare submitted_at: Date;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof AssessmentsSessionsSubmissions {
    AssessmentsSessionsSubmissions.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false },
        id: { type: DataTypes.UUID, primaryKey: true },
        assessment_id: { type: DataTypes.INTEGER, allowNull: false },
        assessment_session_id: { type: DataTypes.INTEGER, allowNull: false },
        student_id: { type: DataTypes.UUID, allowNull: false },
        document_id: { type: DataTypes.INTEGER, allowNull: true },
        document_url: { type: DataTypes.TEXT, allowNull: true },
        video_url: { type: DataTypes.TEXT, allowNull: true },
        submitted_at: { type: DataTypes.DATE, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'assessments_sessions_submissions',
        timestamps: true,
        underscored: true,
      }
    );
    return AssessmentsSessionsSubmissions;
  }
}

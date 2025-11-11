import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface AssessmentsSessionsSubmissionsAttributes {
  pk?: any;
  id?: any;
  assessment_id?: any;
  assessment_session_id?: any;
  student_id?: any;
  document_id?: any;
  document_url?: any;
  video_url?: any;
  submitted_at?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type AssessmentsSessionsSubmissionsCreationAttributes = Optional<AssessmentsSessionsSubmissionsAttributes, 'id'>;

export class AssessmentsSessionsSubmissions extends Model<AssessmentsSessionsSubmissionsAttributes, AssessmentsSessionsSubmissionsCreationAttributes> implements AssessmentsSessionsSubmissionsAttributes {
  declare pk?: any;
  declare id?: any;
  declare assessment_id?: any;
  declare assessment_session_id?: any;
  declare student_id?: any;
  declare document_id?: any;
  declare document_url?: any;
  declare video_url?: any;
  declare submitted_at?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

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

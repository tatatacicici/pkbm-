import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

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

export type AssessmentsSessionsSubmissionsCreationAttributes = Optional<AssessmentsSessionsSubmissionsAttributes, 'id' | 'documentId' | 'documentUrl' | 'videoUrl' | 'deletedAt'>;

export class AssessmentsSessionsSubmissions extends Model<AssessmentsSessionsSubmissionsAttributes, AssessmentsSessionsSubmissionsCreationAttributes> implements AssessmentsSessionsSubmissionsAttributes {
  declare pk: number;
  declare id?: string;
  declare assessmentId: number;
  declare assessmentSessionId: number;
  declare studentId: string;
  declare documentId?: number;
  declare documentUrl?: string;
  declare videoUrl?: string;
  declare submittedAt: Date;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof AssessmentsSessionsSubmissions {
    AssessmentsSessionsSubmissions.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false,
            field: 'pk'
        },
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        assessmentId: { type: DataTypes.INTEGER, allowNull: false,
            field: 'assessment_id'
        },
        assessmentSessionId: { type: DataTypes.INTEGER, allowNull: false,
            field: 'assessment_session_id'
        },
        studentId: { type: DataTypes.UUID, allowNull: false,
            field: 'student_id'
        },
        documentId: { type: DataTypes.INTEGER, allowNull: true,
            field: 'document_id'
        },
        documentUrl: { type: DataTypes.TEXT, allowNull: true,
            field: 'document_url'
        },
        videoUrl: { type: DataTypes.TEXT, allowNull: true,
            field: 'video_url'
        },
        submittedAt: { type: DataTypes.DATE, allowNull: false,
            field: 'submitted_at'
        },
        createdAt: { type: DataTypes.DATE, allowNull: false,
            field: 'created_at'
        },
        updatedAt: { type: DataTypes.DATE, allowNull: false,
            field: 'updated_at'
        },
        deletedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'deleted_at'
        }
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

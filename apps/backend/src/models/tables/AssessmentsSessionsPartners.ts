import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface AssessmentsSessionsPartnersAttributes {
  pk: number;
  id?: string;
  assessmentId: number;
  assessmentSessionId: number;
  studentId?: string;
  partnerId?: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type AssessmentsSessionsPartnersCreationAttributes = Optional<AssessmentsSessionsPartnersAttributes, 'id' | 'studentId' | 'partnerId' | 'deletedAt'>;

export class AssessmentsSessionsPartners extends Model<AssessmentsSessionsPartnersAttributes, AssessmentsSessionsPartnersCreationAttributes> implements AssessmentsSessionsPartnersAttributes {
  declare pk: number;
  declare id?: string;
  declare assessmentId: number;
  declare assessmentSessionId: number;
  declare studentId?: string;
  declare partnerId?: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof AssessmentsSessionsPartners {
    AssessmentsSessionsPartners.init(
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
        studentId: { type: DataTypes.UUID, allowNull: true,
            field: 'student_id'
        },
        partnerId: { type: DataTypes.UUID, allowNull: true,
            field: 'partner_id'
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
        tableName: 'assessments_sessions_partners',
        timestamps: true,
        underscored: true,
      }
    );
    return AssessmentsSessionsPartners;
  }
}

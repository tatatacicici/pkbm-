import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface AssessmentsSessionsPartnersAttributes {
  pk: number;
  id?: string;
  assessment_id: number;
  assessment_session_id: number;
  student_id?: string;
  partner_id?: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type AssessmentsSessionsPartnersCreationAttributes = Optional<AssessmentsSessionsPartnersAttributes, 'id' | 'student_id' | 'partner_id' | 'deleted_at'>;

export class AssessmentsSessionsPartners extends Model<AssessmentsSessionsPartnersAttributes, AssessmentsSessionsPartnersCreationAttributes> implements AssessmentsSessionsPartnersAttributes {
  declare pk: number;
  declare id?: string;
  declare assessment_id: number;
  declare assessment_session_id: number;
  declare student_id?: string;
  declare partner_id?: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof AssessmentsSessionsPartners {
    AssessmentsSessionsPartners.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false },
        id: { type: DataTypes.UUID, primaryKey: true },
        assessment_id: { type: DataTypes.INTEGER, allowNull: false },
        assessment_session_id: { type: DataTypes.INTEGER, allowNull: false },
        student_id: { type: DataTypes.UUID, allowNull: true },
        partner_id: { type: DataTypes.UUID, allowNull: true },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
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

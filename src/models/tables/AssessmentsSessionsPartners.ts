import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface AssessmentsSessionsPartnersAttributes {
  pk?: any;
  id?: any;
  assessment_id?: any;
  assessment_session_id?: any;
  student_id?: any;
  partner_id?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type AssessmentsSessionsPartnersCreationAttributes = Optional<AssessmentsSessionsPartnersAttributes, 'id'>;

export class AssessmentsSessionsPartners extends Model<AssessmentsSessionsPartnersAttributes, AssessmentsSessionsPartnersCreationAttributes> implements AssessmentsSessionsPartnersAttributes {
  declare pk?: any;
  declare id?: any;
  declare assessment_id?: any;
  declare assessment_session_id?: any;
  declare student_id?: any;
  declare partner_id?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

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

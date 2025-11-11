import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface AssessmentsAssessorsAvailabilitiesAttributes {
  pk: number;
  id?: string;
  assessment_id: number;
  assessor_id: string;
  day: string;
  start_time: string;
  end_time: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type AssessmentsAssessorsAvailabilitiesCreationAttributes = Optional<AssessmentsAssessorsAvailabilitiesAttributes, 'id' | 'deleted_at'>;

export class AssessmentsAssessorsAvailabilities extends Model<AssessmentsAssessorsAvailabilitiesAttributes, AssessmentsAssessorsAvailabilitiesCreationAttributes> implements AssessmentsAssessorsAvailabilitiesAttributes {
  declare pk: number;
  declare id?: string;
  declare assessment_id: number;
  declare assessor_id: string;
  declare day: string;
  declare start_time: string;
  declare end_time: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof AssessmentsAssessorsAvailabilities {
    AssessmentsAssessorsAvailabilities.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false },
        id: { type: DataTypes.UUID, primaryKey: true },
        assessment_id: { type: DataTypes.INTEGER, allowNull: false },
        assessor_id: { type: DataTypes.UUID, allowNull: false },
        day: { type: DataTypes.STRING, allowNull: false },
        start_time: { type: DataTypes.STRING, allowNull: false },
        end_time: { type: DataTypes.STRING, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'assessments_assessors_availabilities',
        timestamps: true,
        underscored: true,
      }
    );
    return AssessmentsAssessorsAvailabilities;
  }
}

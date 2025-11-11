import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface AssessmentsAssessorsAvailabilitiesAttributes {
  pk?: any;
  id?: any;
  assessment_id?: any;
  assessor_id?: any;
  day?: any;
  start_time?: any;
  end_time?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type AssessmentsAssessorsAvailabilitiesCreationAttributes = Optional<AssessmentsAssessorsAvailabilitiesAttributes, 'id'>;

export class AssessmentsAssessorsAvailabilities extends Model<AssessmentsAssessorsAvailabilitiesAttributes, AssessmentsAssessorsAvailabilitiesCreationAttributes> implements AssessmentsAssessorsAvailabilitiesAttributes {
  declare pk?: any;
  declare id?: any;
  declare assessment_id?: any;
  declare assessor_id?: any;
  declare day?: any;
  declare start_time?: any;
  declare end_time?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

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

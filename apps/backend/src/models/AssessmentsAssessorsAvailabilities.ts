import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface AssessmentsAssessorsAvailabilitiesAttributes {
  pk: number;
  id?: string;
  assessmentId: number;
  assessorId: string;
  day: string;
  startTime: string;
  endTime: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type AssessmentsAssessorsAvailabilitiesPk = "pk";
export type AssessmentsAssessorsAvailabilitiesId = AssessmentsAssessorsAvailabilities[AssessmentsAssessorsAvailabilitiesPk];
export type AssessmentsAssessorsAvailabilitiesOptionalAttributes = "pk" | "id" | "deletedAt";
export type AssessmentsAssessorsAvailabilitiesCreationAttributes = Optional<AssessmentsAssessorsAvailabilitiesAttributes, AssessmentsAssessorsAvailabilitiesOptionalAttributes>;

export class AssessmentsAssessorsAvailabilities extends Model<AssessmentsAssessorsAvailabilitiesAttributes, AssessmentsAssessorsAvailabilitiesCreationAttributes> implements AssessmentsAssessorsAvailabilitiesAttributes {
  pk!: number;
  id?: string;
  assessmentId!: number;
  assessorId!: string;
  day!: string;
  startTime!: string;
  endTime!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof AssessmentsAssessorsAvailabilities {
    return AssessmentsAssessorsAvailabilities.init({
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
    assessorId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'assessor_id'
    },
    day: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    startTime: {
      type: DataTypes.TIME,
      allowNull: false,
      field: 'start_time'
    },
    endTime: {
      type: DataTypes.TIME,
      allowNull: false,
      field: 'end_time'
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
    tableName: 'assessments_assessors_availabilities',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "assessments_assessors_availabilities_pkey",
        unique: true,
        fields: [
          { name: "pk" },
        ]
      },
    ]
  });
  }
}

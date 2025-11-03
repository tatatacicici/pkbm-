import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface DrillSimulationAssessmentsMeetingsAttributes {
  id: number;
  uuid?: string;
  topic: string;
  description: string;
  thumbnail?: string;
  type: string;
  place: string;
  assessorId: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type DrillSimulationAssessmentsMeetingsPk = "id";
export type DrillSimulationAssessmentsMeetingsId = DrillSimulationAssessmentsMeetings[DrillSimulationAssessmentsMeetingsPk];
export type DrillSimulationAssessmentsMeetingsOptionalAttributes = "id" | "uuid" | "thumbnail" | "deletedAt";
export type DrillSimulationAssessmentsMeetingsCreationAttributes = Optional<DrillSimulationAssessmentsMeetingsAttributes, DrillSimulationAssessmentsMeetingsOptionalAttributes>;

export class DrillSimulationAssessmentsMeetings extends Model<DrillSimulationAssessmentsMeetingsAttributes, DrillSimulationAssessmentsMeetingsCreationAttributes> implements DrillSimulationAssessmentsMeetingsAttributes {
  id!: number;
  uuid?: string;
  topic!: string;
  description!: string;
  thumbnail?: string;
  type!: string;
  place!: string;
  assessorId!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof DrillSimulationAssessmentsMeetings {
    return DrillSimulationAssessmentsMeetings.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    topic: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    thumbnail: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    place: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    assessorId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'assessor_id'
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
    tableName: 'drill_simulation_assessments_meetings',
    schema: 'public',
    timestamps: false
  });
  }
}

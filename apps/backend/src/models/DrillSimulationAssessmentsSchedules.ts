import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface DrillSimulationAssessmentsSchedulesAttributes {
  id: number;
  uuid?: string;
  schedule: Date;
  meetingId: number;
  assessorId: string;
  studentId?: string;
  status: string;
  finishedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  score?: number;
}

export type DrillSimulationAssessmentsSchedulesPk = "id";
export type DrillSimulationAssessmentsSchedulesId = DrillSimulationAssessmentsSchedules[DrillSimulationAssessmentsSchedulesPk];
export type DrillSimulationAssessmentsSchedulesOptionalAttributes = "id" | "uuid" | "studentId" | "finishedAt" | "deletedAt" | "score";
export type DrillSimulationAssessmentsSchedulesCreationAttributes = Optional<DrillSimulationAssessmentsSchedulesAttributes, DrillSimulationAssessmentsSchedulesOptionalAttributes>;

export class DrillSimulationAssessmentsSchedules extends Model<DrillSimulationAssessmentsSchedulesAttributes, DrillSimulationAssessmentsSchedulesCreationAttributes> implements DrillSimulationAssessmentsSchedulesAttributes {
  id!: number;
  uuid?: string;
  schedule!: Date;
  meetingId!: number;
  assessorId!: string;
  studentId?: string;
  status!: string;
  finishedAt?: Date;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;
  score?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof DrillSimulationAssessmentsSchedules {
    return DrillSimulationAssessmentsSchedules.init({
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
    schedule: {
      type: DataTypes.DATE,
      allowNull: false
    },
    meetingId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'meeting_id'
    },
    assessorId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'assessor_id'
    },
    studentId: {
      type: DataTypes.UUID,
      allowNull: true,
      field: 'student_id'
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    finishedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'finished_at'
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
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'drill_simulation_assessments_schedules',
    schema: 'public',
    timestamps: false
  });
  }
}

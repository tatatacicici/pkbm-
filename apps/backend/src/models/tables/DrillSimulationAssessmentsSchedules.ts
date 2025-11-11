import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface DrillSimulationAssessmentsSchedulesAttributes {
  id?: number;
  uuid?: string;
  schedule: Date;
  meeting_id: number;
  assessor_id: string;
  student_id?: string;
  status: string;
  finished_at?: Date;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  score?: number;
}

export type DrillSimulationAssessmentsSchedulesCreationAttributes = Optional<DrillSimulationAssessmentsSchedulesAttributes, 'id' | 'uuid' | 'student_id' | 'finished_at' | 'deleted_at' | 'score'>;

export class DrillSimulationAssessmentsSchedules extends Model<DrillSimulationAssessmentsSchedulesAttributes, DrillSimulationAssessmentsSchedulesCreationAttributes> implements DrillSimulationAssessmentsSchedulesAttributes {
  declare id?: number;
  declare uuid?: string;
  declare schedule: Date;
  declare meeting_id: number;
  declare assessor_id: string;
  declare student_id?: string;
  declare status: string;
  declare finished_at?: Date;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;
  declare score?: number;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof DrillSimulationAssessmentsSchedules {
    DrillSimulationAssessmentsSchedules.init(
      {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        uuid: { type: DataTypes.UUID, allowNull: true },
        schedule: { type: DataTypes.DATE, allowNull: false },
        meeting_id: { type: DataTypes.INTEGER, allowNull: false },
        assessor_id: { type: DataTypes.UUID, allowNull: false },
        student_id: { type: DataTypes.UUID, allowNull: true },
        status: { type: DataTypes.STRING, allowNull: false },
        finished_at: { type: DataTypes.DATE, allowNull: true },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true },
        score: { type: DataTypes.INTEGER, allowNull: true }
      },
      {
        sequelize,
        tableName: 'drill_simulation_assessments_schedules',
        timestamps: true,
        underscored: true,
      }
    );
    return DrillSimulationAssessmentsSchedules;
  }
}

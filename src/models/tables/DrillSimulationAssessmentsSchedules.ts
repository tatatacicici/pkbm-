import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface DrillSimulationAssessmentsSchedulesAttributes {
  id?: any;
  uuid?: any;
  schedule?: any;
  meeting_id?: any;
  assessor_id?: any;
  student_id?: any;
  status?: any;
  finished_at?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
  score?: any;
}

export type DrillSimulationAssessmentsSchedulesCreationAttributes = Optional<DrillSimulationAssessmentsSchedulesAttributes, 'id'>;

export class DrillSimulationAssessmentsSchedules extends Model<DrillSimulationAssessmentsSchedulesAttributes, DrillSimulationAssessmentsSchedulesCreationAttributes> implements DrillSimulationAssessmentsSchedulesAttributes {
  declare id?: any;
  declare uuid?: any;
  declare schedule?: any;
  declare meeting_id?: any;
  declare assessor_id?: any;
  declare student_id?: any;
  declare status?: any;
  declare finished_at?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;
  declare score?: any;

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

import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface DrillSimulationAssessmentsSchedulesAttributes {
  id?: number;
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

export type DrillSimulationAssessmentsSchedulesCreationAttributes = Optional<DrillSimulationAssessmentsSchedulesAttributes, 'id' | 'uuid' | 'studentId' | 'finishedAt' | 'deletedAt' | 'score'>;

export class DrillSimulationAssessmentsSchedules extends Model<DrillSimulationAssessmentsSchedulesAttributes, DrillSimulationAssessmentsSchedulesCreationAttributes> implements DrillSimulationAssessmentsSchedulesAttributes {
  declare id?: number;
  declare uuid?: string;
  declare schedule: Date;
  declare meetingId: number;
  declare assessorId: string;
  declare studentId?: string;
  declare status: string;
  declare finishedAt?: Date;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;
  declare score?: number;

  public static initModel(sequelize: Sequelize): typeof DrillSimulationAssessmentsSchedules {
    DrillSimulationAssessmentsSchedules.init(
      {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,
            field: 'id'
        },
        uuid: { type: DataTypes.UUID, allowNull: true,
            field: 'uuid'
        },
        schedule: { type: DataTypes.DATE, allowNull: false,
            field: 'schedule'
        },
        meetingId: { type: DataTypes.INTEGER, allowNull: false,
            field: 'meeting_id'
        },
        assessorId: { type: DataTypes.UUID, allowNull: false,
            field: 'assessor_id'
        },
        studentId: { type: DataTypes.UUID, allowNull: true,
            field: 'student_id'
        },
        status: { type: DataTypes.STRING, allowNull: false,
            field: 'status'
        },
        finishedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'finished_at'
        },
        createdAt: { type: DataTypes.DATE, allowNull: false,
            field: 'created_at'
        },
        updatedAt: { type: DataTypes.DATE, allowNull: false,
            field: 'updated_at'
        },
        deletedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'deleted_at'
        },
        score: { type: DataTypes.INTEGER, allowNull: true,
            field: 'score'
        }
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

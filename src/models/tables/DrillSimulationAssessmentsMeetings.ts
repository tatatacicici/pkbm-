import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface DrillSimulationAssessmentsMeetingsAttributes {
  id?: number;
  uuid?: string;
  topic: string;
  description: string;
  thumbnail?: string;
  type: string;
  place: string;
  assessor_id: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type DrillSimulationAssessmentsMeetingsCreationAttributes = Optional<DrillSimulationAssessmentsMeetingsAttributes, 'id' | 'uuid' | 'thumbnail' | 'deleted_at'>;

export class DrillSimulationAssessmentsMeetings extends Model<DrillSimulationAssessmentsMeetingsAttributes, DrillSimulationAssessmentsMeetingsCreationAttributes> implements DrillSimulationAssessmentsMeetingsAttributes {
  declare id?: number;
  declare uuid?: string;
  declare topic: string;
  declare description: string;
  declare thumbnail?: string;
  declare type: string;
  declare place: string;
  declare assessor_id: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof DrillSimulationAssessmentsMeetings {
    DrillSimulationAssessmentsMeetings.init(
      {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        uuid: { type: DataTypes.UUID, allowNull: true },
        topic: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.STRING, allowNull: false },
        thumbnail: { type: DataTypes.STRING, allowNull: true },
        type: { type: DataTypes.STRING, allowNull: false },
        place: { type: DataTypes.STRING, allowNull: false },
        assessor_id: { type: DataTypes.UUID, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'drill_simulation_assessments_meetings',
        timestamps: true,
        underscored: true,
      }
    );
    return DrillSimulationAssessmentsMeetings;
  }
}

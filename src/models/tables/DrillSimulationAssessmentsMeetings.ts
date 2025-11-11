import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface DrillSimulationAssessmentsMeetingsAttributes {
  id?: any;
  uuid?: any;
  topic?: any;
  description?: any;
  thumbnail?: any;
  type?: any;
  place?: any;
  assessor_id?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type DrillSimulationAssessmentsMeetingsCreationAttributes = Optional<DrillSimulationAssessmentsMeetingsAttributes, 'id'>;

export class DrillSimulationAssessmentsMeetings extends Model<DrillSimulationAssessmentsMeetingsAttributes, DrillSimulationAssessmentsMeetingsCreationAttributes> implements DrillSimulationAssessmentsMeetingsAttributes {
  declare id?: any;
  declare uuid?: any;
  declare topic?: any;
  declare description?: any;
  declare thumbnail?: any;
  declare type?: any;
  declare place?: any;
  declare assessor_id?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

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

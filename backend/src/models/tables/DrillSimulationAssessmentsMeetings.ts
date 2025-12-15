import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface DrillSimulationAssessmentsMeetingsAttributes {
  id?: number;
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

export type DrillSimulationAssessmentsMeetingsCreationAttributes = Optional<DrillSimulationAssessmentsMeetingsAttributes, 'id' | 'uuid' | 'thumbnail' | 'deletedAt'>;

export class DrillSimulationAssessmentsMeetings extends Model<DrillSimulationAssessmentsMeetingsAttributes, DrillSimulationAssessmentsMeetingsCreationAttributes> implements DrillSimulationAssessmentsMeetingsAttributes {
  declare id?: number;
  declare uuid?: string;
  declare topic: string;
  declare description: string;
  declare thumbnail?: string;
  declare type: string;
  declare place: string;
  declare assessorId: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof DrillSimulationAssessmentsMeetings {
    DrillSimulationAssessmentsMeetings.init(
      {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,
            field: 'id'
        },
        uuid: { type: DataTypes.UUID, allowNull: true,
            field: 'uuid'
        },
        topic: { type: DataTypes.STRING, allowNull: false,
            field: 'topic'
        },
        description: { type: DataTypes.STRING, allowNull: false,
            field: 'description'
        },
        thumbnail: { type: DataTypes.STRING, allowNull: true,
            field: 'thumbnail'
        },
        type: { type: DataTypes.STRING, allowNull: false,
            field: 'type'
        },
        place: { type: DataTypes.STRING, allowNull: false,
            field: 'place'
        },
        assessorId: { type: DataTypes.UUID, allowNull: false,
            field: 'assessor_id'
        },
        createdAt: { type: DataTypes.DATE, allowNull: false,
            field: 'created_at'
        },
        updatedAt: { type: DataTypes.DATE, allowNull: false,
            field: 'updated_at'
        },
        deletedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'deleted_at'
        }
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

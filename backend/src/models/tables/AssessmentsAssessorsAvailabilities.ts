import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

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

export type AssessmentsAssessorsAvailabilitiesCreationAttributes = Optional<AssessmentsAssessorsAvailabilitiesAttributes, 'id' | 'deletedAt'>;

export class AssessmentsAssessorsAvailabilities extends Model<AssessmentsAssessorsAvailabilitiesAttributes, AssessmentsAssessorsAvailabilitiesCreationAttributes> implements AssessmentsAssessorsAvailabilitiesAttributes {
  declare pk: number;
  declare id?: string;
  declare assessmentId: number;
  declare assessorId: string;
  declare day: string;
  declare startTime: string;
  declare endTime: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof AssessmentsAssessorsAvailabilities {
    AssessmentsAssessorsAvailabilities.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false,
            field: 'pk'
        },
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        assessmentId: { type: DataTypes.INTEGER, allowNull: false,
            field: 'assessment_id'
        },
        assessorId: { type: DataTypes.UUID, allowNull: false,
            field: 'assessor_id'
        },
        day: { type: DataTypes.STRING, allowNull: false,
            field: 'day'
        },
        startTime: { type: DataTypes.STRING, allowNull: false,
            field: 'start_time'
        },
        endTime: { type: DataTypes.STRING, allowNull: false,
            field: 'end_time'
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
        tableName: 'assessments_assessors_availabilities',
        timestamps: true,
        underscored: true,
      }
    );
    return AssessmentsAssessorsAvailabilities;
  }
}

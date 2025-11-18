import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface AssessmentsSessionsAttributes {
  pk: number;
  id?: string;
  assessmentId: number;
  type: string;
  status: string;
  day: string;
  bookedBy: string;
  bookedAt: Date;
  rubricScore?: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type AssessmentsSessionsCreationAttributes = Optional<AssessmentsSessionsAttributes, 'id' | 'rubricScore' | 'deletedAt'>;

export class AssessmentsSessions extends Model<AssessmentsSessionsAttributes, AssessmentsSessionsCreationAttributes> implements AssessmentsSessionsAttributes {
  declare pk: number;
  declare id?: string;
  declare assessmentId: number;
  declare type: string;
  declare status: string;
  declare day: string;
  declare bookedBy: string;
  declare bookedAt: Date;
  declare rubricScore?: number;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof AssessmentsSessions {
    AssessmentsSessions.init(
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
        type: { type: DataTypes.STRING, allowNull: false,
            field: 'type'
        },
        status: { type: DataTypes.STRING, allowNull: false,
            field: 'status'
        },
        day: { type: DataTypes.STRING, allowNull: false,
            field: 'day'
        },
        bookedBy: { type: DataTypes.UUID, allowNull: false,
            field: 'booked_by'
        },
        bookedAt: { type: DataTypes.DATE, allowNull: false,
            field: 'booked_at'
        },
        rubricScore: { type: DataTypes.INTEGER, allowNull: true,
            field: 'rubric_score'
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
        tableName: 'assessments_sessions',
        timestamps: true,
        underscored: true,
      }
    );
    return AssessmentsSessions;
  }
}

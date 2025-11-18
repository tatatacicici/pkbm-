import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SubjectsSessionsActivitiesAttributes {
  id?: string;
  sessionId: string;
  type: string;
  referenceId?: string;
  duration?: number;
  startAt?: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  subjectId: string;
  durationType?: string;
}

export type SubjectsSessionsActivitiesCreationAttributes = Optional<SubjectsSessionsActivitiesAttributes, 'id' | 'referenceId' | 'duration' | 'startAt' | 'deletedAt' | 'durationType'>;

export class SubjectsSessionsActivities extends Model<SubjectsSessionsActivitiesAttributes, SubjectsSessionsActivitiesCreationAttributes> implements SubjectsSessionsActivitiesAttributes {
  declare id?: string;
  declare sessionId: string;
  declare type: string;
  declare referenceId?: string;
  declare duration?: number;
  declare startAt?: Date;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;
  declare subjectId: string;
  declare durationType?: string;

  public static initModel(sequelize: Sequelize): typeof SubjectsSessionsActivities {
    SubjectsSessionsActivities.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        sessionId: { type: DataTypes.UUID, allowNull: false,
            field: 'session_id'
        },
        type: { type: DataTypes.STRING, allowNull: false,
            field: 'type'
        },
        referenceId: { type: DataTypes.UUID, allowNull: true,
            field: 'reference_id'
        },
        duration: { type: DataTypes.INTEGER, allowNull: true,
            field: 'duration'
        },
        startAt: { type: DataTypes.DATE, allowNull: true,
            field: 'start_at'
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
        subjectId: { type: DataTypes.UUID, allowNull: false,
            field: 'subject_id'
        },
        durationType: { type: DataTypes.STRING, allowNull: true,
            field: 'duration_type'
        }
      },
      {
        sequelize,
        tableName: 'subjects_sessions_activities',
        timestamps: true,
        underscored: true,
      }
    );
    return SubjectsSessionsActivities;
  }
}

import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface AvailabilitySchedulesAttributes {
  id?: number;
  uuid?: string;
  schedulerId: string;
  schedulerRole: string;
  timeStart?: Date;
  duration?: number;
  taken?: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type AvailabilitySchedulesCreationAttributes = Optional<AvailabilitySchedulesAttributes, 'id' | 'uuid' | 'timeStart' | 'duration' | 'taken' | 'deletedAt'>;

export class AvailabilitySchedules extends Model<AvailabilitySchedulesAttributes, AvailabilitySchedulesCreationAttributes> implements AvailabilitySchedulesAttributes {
  declare id?: number;
  declare uuid?: string;
  declare schedulerId: string;
  declare schedulerRole: string;
  declare timeStart?: Date;
  declare duration?: number;
  declare taken?: boolean;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof AvailabilitySchedules {
    AvailabilitySchedules.init(
      {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,
            field: 'id'
        },
        uuid: { type: DataTypes.UUID, allowNull: true,
            field: 'uuid'
        },
        schedulerId: { type: DataTypes.UUID, allowNull: false,
            field: 'scheduler_id'
        },
        schedulerRole: { type: DataTypes.STRING, allowNull: false,
            field: 'scheduler_role'
        },
        timeStart: { type: DataTypes.DATE, allowNull: true,
            field: 'time_start'
        },
        duration: { type: DataTypes.INTEGER, allowNull: true,
            field: 'duration'
        },
        taken: { type: DataTypes.BOOLEAN,
            field: 'taken'
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
        tableName: 'availability_schedules',
        timestamps: true,
        underscored: true,
      }
    );
    return AvailabilitySchedules;
  }
}

import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface AvailabilitySchedulesAttributes {
  id?: number;
  uuid?: string;
  scheduler_id: string;
  scheduler_role: string;
  time_start?: Date;
  duration?: number;
  taken?: boolean;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type AvailabilitySchedulesCreationAttributes = Optional<AvailabilitySchedulesAttributes, 'id' | 'uuid' | 'time_start' | 'duration' | 'taken' | 'deleted_at'>;

export class AvailabilitySchedules extends Model<AvailabilitySchedulesAttributes, AvailabilitySchedulesCreationAttributes> implements AvailabilitySchedulesAttributes {
  declare id?: number;
  declare uuid?: string;
  declare scheduler_id: string;
  declare scheduler_role: string;
  declare time_start?: Date;
  declare duration?: number;
  declare taken?: boolean;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof AvailabilitySchedules {
    AvailabilitySchedules.init(
      {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        uuid: { type: DataTypes.UUID, allowNull: true },
        scheduler_id: { type: DataTypes.UUID, allowNull: false },
        scheduler_role: { type: DataTypes.STRING, allowNull: false },
        time_start: { type: DataTypes.DATE, allowNull: true },
        duration: { type: DataTypes.INTEGER, allowNull: true },
        taken: { type: DataTypes.BOOLEAN },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
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

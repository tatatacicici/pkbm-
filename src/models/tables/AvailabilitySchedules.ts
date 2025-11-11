import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface AvailabilitySchedulesAttributes {
  id?: any;
  uuid?: any;
  scheduler_id?: any;
  scheduler_role?: any;
  time_start?: any;
  duration?: any;
  taken?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type AvailabilitySchedulesCreationAttributes = Optional<AvailabilitySchedulesAttributes, 'id'>;

export class AvailabilitySchedules extends Model<AvailabilitySchedulesAttributes, AvailabilitySchedulesCreationAttributes> implements AvailabilitySchedulesAttributes {
  declare id?: any;
  declare uuid?: any;
  declare scheduler_id?: any;
  declare scheduler_role?: any;
  declare time_start?: any;
  declare duration?: any;
  declare taken?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

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

import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface AvailabilitySchedulesAttributes {
  id: number;
  uuid?: string;
  schedulerId: string;
  schedulerRole: string;
  timeStart?: Date;
  duration?: number;
  taken: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type AvailabilitySchedulesPk = "id";
export type AvailabilitySchedulesId = AvailabilitySchedules[AvailabilitySchedulesPk];
export type AvailabilitySchedulesOptionalAttributes = "id" | "uuid" | "timeStart" | "duration" | "deletedAt";
export type AvailabilitySchedulesCreationAttributes = Optional<AvailabilitySchedulesAttributes, AvailabilitySchedulesOptionalAttributes>;

export class AvailabilitySchedules extends Model<AvailabilitySchedulesAttributes, AvailabilitySchedulesCreationAttributes> implements AvailabilitySchedulesAttributes {
  id!: number;
  uuid?: string;
  schedulerId!: string;
  schedulerRole!: string;
  timeStart?: Date;
  duration?: number;
  taken!: boolean;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof AvailabilitySchedules {
    return AvailabilitySchedules.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    schedulerId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'scheduler_id'
    },
    schedulerRole: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'scheduler_role'
    },
    timeStart: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'time_start'
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    taken: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'updated_at'
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'deleted_at'
    }
  }, {
    sequelize,
    tableName: 'availability_schedules',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "availability_schedules_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

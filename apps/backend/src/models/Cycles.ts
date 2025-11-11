import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface CyclesAttributes {
  id: number;
  uuid?: string;
  name: string;
  cycle: number;
  type: string;
  startDuration: Date;
  startRegistration: Date;
  endRegistration: Date;
  endDuration: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  status: string;
}

export type CyclesPk = "id";
export type CyclesId = Cycles[CyclesPk];
export type CyclesOptionalAttributes = "id" | "uuid" | "deletedAt";
export type CyclesCreationAttributes = Optional<CyclesAttributes, CyclesOptionalAttributes>;

export class Cycles extends Model<CyclesAttributes, CyclesCreationAttributes> implements CyclesAttributes {
  id!: number;
  uuid?: string;
  name!: string;
  cycle!: number;
  type!: string;
  startDuration!: Date;
  startRegistration!: Date;
  endRegistration!: Date;
  endDuration!: Date;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;
  status!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof Cycles {
    return Cycles.init({
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
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    cycle: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    startDuration: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'start_duration'
    },
    startRegistration: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'start_registration'
    },
    endRegistration: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'end_registration'
    },
    endDuration: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'end_duration'
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
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'cycles',
    schema: 'public',
    timestamps: false
  });
  }
}

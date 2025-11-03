import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface SimulationGroupsAttributes {
  id: number;
  uuid?: string;
  assessorId: string;
  simulation: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type SimulationGroupsPk = "id";
export type SimulationGroupsId = SimulationGroups[SimulationGroupsPk];
export type SimulationGroupsOptionalAttributes = "id" | "uuid" | "deletedAt";
export type SimulationGroupsCreationAttributes = Optional<SimulationGroupsAttributes, SimulationGroupsOptionalAttributes>;

export class SimulationGroups extends Model<SimulationGroupsAttributes, SimulationGroupsCreationAttributes> implements SimulationGroupsAttributes {
  id!: number;
  uuid?: string;
  assessorId!: string;
  simulation!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof SimulationGroups {
    return SimulationGroups.init({
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
    assessorId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'assessor_id'
    },
    simulation: {
      type: DataTypes.UUID,
      allowNull: false
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
    tableName: 'simulation_groups',
    schema: 'public',
    timestamps: false
  });
  }
}

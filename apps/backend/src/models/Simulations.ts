import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface SimulationsAttributes {
  id: number;
  uuid?: string;
  topic: string;
  description: string;
  assessorId: string;
  session: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type SimulationsPk = "id";
export type SimulationsId = Simulations[SimulationsPk];
export type SimulationsOptionalAttributes = "id" | "uuid" | "deletedAt";
export type SimulationsCreationAttributes = Optional<SimulationsAttributes, SimulationsOptionalAttributes>;

export class Simulations extends Model<SimulationsAttributes, SimulationsCreationAttributes> implements SimulationsAttributes {
  id!: number;
  uuid?: string;
  topic!: string;
  description!: string;
  assessorId!: string;
  session!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof Simulations {
    return Simulations.init({
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
    topic: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    assessorId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'assessor_id'
    },
    session: {
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
    tableName: 'simulations',
    schema: 'public',
    timestamps: false
  });
  }
}

import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SimulationGroupsAttributes {
  id?: number;
  uuid?: string;
  assessor_id: string;
  simulation: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type SimulationGroupsCreationAttributes = Optional<SimulationGroupsAttributes, 'id' | 'uuid' | 'deleted_at'>;

export class SimulationGroups extends Model<SimulationGroupsAttributes, SimulationGroupsCreationAttributes> implements SimulationGroupsAttributes {
  declare id?: number;
  declare uuid?: string;
  declare assessor_id: string;
  declare simulation: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof SimulationGroups {
    SimulationGroups.init(
      {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        uuid: { type: DataTypes.UUID, allowNull: true },
        assessor_id: { type: DataTypes.UUID, allowNull: false },
        simulation: { type: DataTypes.UUID, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'simulation_groups',
        timestamps: true,
        underscored: true,
      }
    );
    return SimulationGroups;
  }
}

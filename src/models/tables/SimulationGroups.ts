import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SimulationGroupsAttributes {
  id?: any;
  uuid?: any;
  assessor_id?: any;
  simulation?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type SimulationGroupsCreationAttributes = Optional<SimulationGroupsAttributes, 'id'>;

export class SimulationGroups extends Model<SimulationGroupsAttributes, SimulationGroupsCreationAttributes> implements SimulationGroupsAttributes {
  declare id?: any;
  declare uuid?: any;
  declare assessor_id?: any;
  declare simulation?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

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

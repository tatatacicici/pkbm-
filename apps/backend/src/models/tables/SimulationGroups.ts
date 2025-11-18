import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SimulationGroupsAttributes {
  id?: number;
  uuid?: string;
  assessorId: string;
  simulation: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type SimulationGroupsCreationAttributes = Optional<SimulationGroupsAttributes, 'id' | 'uuid' | 'deletedAt'>;

export class SimulationGroups extends Model<SimulationGroupsAttributes, SimulationGroupsCreationAttributes> implements SimulationGroupsAttributes {
  declare id?: number;
  declare uuid?: string;
  declare assessorId: string;
  declare simulation: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof SimulationGroups {
    SimulationGroups.init(
      {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,
            field: 'id'
        },
        uuid: { type: DataTypes.UUID, allowNull: true,
            field: 'uuid'
        },
        assessorId: { type: DataTypes.UUID, allowNull: false,
            field: 'assessor_id'
        },
        simulation: { type: DataTypes.UUID, allowNull: false,
            field: 'simulation'
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
        tableName: 'simulation_groups',
        timestamps: true,
        underscored: true,
      }
    );
    return SimulationGroups;
  }
}

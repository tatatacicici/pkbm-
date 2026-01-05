import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SimulationGroupStudentsAttributes {
  id?: number;
  uuid?: string;
  simulationGroupId: string;
  studentId: string;
  groupRole?: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type SimulationGroupStudentsCreationAttributes = Optional<SimulationGroupStudentsAttributes, 'id' | 'uuid' | 'groupRole' | 'deletedAt'>;

export class SimulationGroupStudents extends Model<SimulationGroupStudentsAttributes, SimulationGroupStudentsCreationAttributes> implements SimulationGroupStudentsAttributes {
  declare id?: number;
  declare uuid?: string;
  declare simulationGroupId: string;
  declare studentId: string;
  declare groupRole?: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof SimulationGroupStudents {
    SimulationGroupStudents.init(
      {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,
            field: 'id'
        },
        uuid: { type: DataTypes.UUID, allowNull: true,
            field: 'uuid'
        },
        simulationGroupId: { type: DataTypes.UUID, allowNull: false,
            field: 'simulation_group_id'
        },
        studentId: { type: DataTypes.UUID, allowNull: false,
            field: 'student_id'
        },
        groupRole: { type: DataTypes.STRING, allowNull: true,
            field: 'group_role'
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
        tableName: 'simulation_group_students',
        timestamps: true,
        underscored: true,
      }
    );
    return SimulationGroupStudents;
  }
}

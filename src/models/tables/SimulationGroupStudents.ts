import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SimulationGroupStudentsAttributes {
  id?: number;
  uuid?: string;
  simulation_group_id: string;
  student_id: string;
  group_role?: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type SimulationGroupStudentsCreationAttributes = Optional<SimulationGroupStudentsAttributes, 'id' | 'uuid' | 'group_role' | 'deleted_at'>;

export class SimulationGroupStudents extends Model<SimulationGroupStudentsAttributes, SimulationGroupStudentsCreationAttributes> implements SimulationGroupStudentsAttributes {
  declare id?: number;
  declare uuid?: string;
  declare simulation_group_id: string;
  declare student_id: string;
  declare group_role?: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof SimulationGroupStudents {
    SimulationGroupStudents.init(
      {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        uuid: { type: DataTypes.UUID, allowNull: true },
        simulation_group_id: { type: DataTypes.UUID, allowNull: false },
        student_id: { type: DataTypes.UUID, allowNull: false },
        group_role: { type: DataTypes.STRING, allowNull: true },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
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

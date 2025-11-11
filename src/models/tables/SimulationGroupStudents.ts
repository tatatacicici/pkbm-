import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SimulationGroupStudentsAttributes {
  id?: any;
  uuid?: any;
  simulation_group_id?: any;
  student_id?: any;
  group_role?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type SimulationGroupStudentsCreationAttributes = Optional<SimulationGroupStudentsAttributes, 'id'>;

export class SimulationGroupStudents extends Model<SimulationGroupStudentsAttributes, SimulationGroupStudentsCreationAttributes> implements SimulationGroupStudentsAttributes {
  declare id?: any;
  declare uuid?: any;
  declare simulation_group_id?: any;
  declare student_id?: any;
  declare group_role?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

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

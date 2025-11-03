import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface SimulationGroupStudentsAttributes {
  id: number;
  uuid?: string;
  simulationGroupId: string;
  studentId: string;
  groupRole?: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type SimulationGroupStudentsPk = "id";
export type SimulationGroupStudentsId = SimulationGroupStudents[SimulationGroupStudentsPk];
export type SimulationGroupStudentsOptionalAttributes = "id" | "uuid" | "groupRole" | "deletedAt";
export type SimulationGroupStudentsCreationAttributes = Optional<SimulationGroupStudentsAttributes, SimulationGroupStudentsOptionalAttributes>;

export class SimulationGroupStudents extends Model<SimulationGroupStudentsAttributes, SimulationGroupStudentsCreationAttributes> implements SimulationGroupStudentsAttributes {
  id!: number;
  uuid?: string;
  simulationGroupId!: string;
  studentId!: string;
  groupRole?: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof SimulationGroupStudents {
    return SimulationGroupStudents.init({
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
    simulationGroupId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'simulation_group_id'
    },
    studentId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'student_id'
    },
    groupRole: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'group_role'
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
    tableName: 'simulation_group_students',
    schema: 'public',
    timestamps: false
  });
  }
}

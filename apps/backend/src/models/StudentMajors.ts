import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface StudentMajorsAttributes {
  id: string;
  studentId: string;
  majorId: string;
  semesterId: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  generation?: string;
}

export type StudentMajorsPk = "id";
export type StudentMajorsId = StudentMajors[StudentMajorsPk];
export type StudentMajorsOptionalAttributes = "deletedAt" | "generation";
export type StudentMajorsCreationAttributes = Optional<StudentMajorsAttributes, StudentMajorsOptionalAttributes>;

export class StudentMajors extends Model<StudentMajorsAttributes, StudentMajorsCreationAttributes> implements StudentMajorsAttributes {
  id!: string;
  studentId!: string;
  majorId!: string;
  semesterId!: string;
  status!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;
  generation?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof StudentMajors {
    return StudentMajors.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    studentId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'student_id'
    },
    majorId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'major_id'
    },
    semesterId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'semester_id'
    },
    status: {
      type: DataTypes.STRING(255),
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
    },
    generation: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'student_majors',
    schema: 'public',
    timestamps: false
  });
  }
}

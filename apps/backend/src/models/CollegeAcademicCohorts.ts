import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface CollegeAcademicCohortsAttributes {
  id: string;
  name: string;
  academicYear: string;
  cohort: "Ganjil" | "Genap" | "Pendek";
  status: "ONGOING" | "COMPLETED" | "COMING_SOON";
  startDate: Date;
  endDate: Date;
  deletedAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
  code?: string;
}

export type CollegeAcademicCohortsPk = "id";
export type CollegeAcademicCohortsId = CollegeAcademicCohorts[CollegeAcademicCohortsPk];
export type CollegeAcademicCohortsOptionalAttributes = "deletedAt" | "createdAt" | "updatedAt" | "code";
export type CollegeAcademicCohortsCreationAttributes = Optional<CollegeAcademicCohortsAttributes, CollegeAcademicCohortsOptionalAttributes>;

export class CollegeAcademicCohorts extends Model<CollegeAcademicCohortsAttributes, CollegeAcademicCohortsCreationAttributes> implements CollegeAcademicCohortsAttributes {
  id!: string;
  name!: string;
  academicYear!: string;
  cohort!: "Ganjil" | "Genap" | "Pendek";
  status!: "ONGOING" | "COMPLETED" | "COMING_SOON";
  startDate!: Date;
  endDate!: Date;
  deletedAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
  code?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof CollegeAcademicCohorts {
    return CollegeAcademicCohorts.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    academicYear: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'academic_year'
    },
    cohort: {
      type: DataTypes.ENUM("Ganjil","Genap","Pendek"),
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM("ONGOING","COMPLETED","COMING_SOON"),
      allowNull: false
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'start_date'
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'end_date'
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'deleted_at'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'updated_at'
    },
    code: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'college_academic_cohorts',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "college_academic_cohorts_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

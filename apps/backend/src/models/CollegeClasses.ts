import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface CollegeClassesAttributes {
  id: string;
  subjectId: string;
  collegeAcademicCohortId: string;
  lecturerId?: string;
  majorId?: string;
  classCode: string;
  packageSemester?: number;
  deletedAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

export type CollegeClassesPk = "id";
export type CollegeClassesId = CollegeClasses[CollegeClassesPk];
export type CollegeClassesOptionalAttributes = "lecturerId" | "majorId" | "packageSemester" | "deletedAt" | "createdAt" | "updatedAt";
export type CollegeClassesCreationAttributes = Optional<CollegeClassesAttributes, CollegeClassesOptionalAttributes>;

export class CollegeClasses extends Model<CollegeClassesAttributes, CollegeClassesCreationAttributes> implements CollegeClassesAttributes {
  id!: string;
  subjectId!: string;
  collegeAcademicCohortId!: string;
  lecturerId?: string;
  majorId?: string;
  classCode!: string;
  packageSemester?: number;
  deletedAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof CollegeClasses {
    return CollegeClasses.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    subjectId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'subject_id'
    },
    collegeAcademicCohortId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'college_academic_cohort_id'
    },
    lecturerId: {
      type: DataTypes.UUID,
      allowNull: true,
      field: 'lecturer_id'
    },
    majorId: {
      type: DataTypes.UUID,
      allowNull: true,
      field: 'major_id'
    },
    classCode: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "college_classes_class_code_key",
      field: 'class_code'
    },
    packageSemester: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'package_semester'
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
    }
  }, {
    sequelize,
    tableName: 'college_classes',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "college_classes_class_code_key",
        unique: true,
        fields: [
          { name: "class_code" },
        ]
      },
      {
        name: "college_classes_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

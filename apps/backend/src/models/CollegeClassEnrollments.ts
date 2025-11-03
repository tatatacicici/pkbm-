import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface CollegeClassEnrollmentsAttributes {
  id: string;
  studentId: string;
  classId: string;
  status: "ENROLLED" | "COMPLETED" | "WITHDRAWN";
  grade?: "A" | "B" | "C" | "D" | "E";
  gradePoint?: number;
  deletedAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

export type CollegeClassEnrollmentsPk = "id";
export type CollegeClassEnrollmentsId = CollegeClassEnrollments[CollegeClassEnrollmentsPk];
export type CollegeClassEnrollmentsOptionalAttributes = "status" | "grade" | "gradePoint" | "deletedAt" | "createdAt" | "updatedAt";
export type CollegeClassEnrollmentsCreationAttributes = Optional<CollegeClassEnrollmentsAttributes, CollegeClassEnrollmentsOptionalAttributes>;

export class CollegeClassEnrollments extends Model<CollegeClassEnrollmentsAttributes, CollegeClassEnrollmentsCreationAttributes> implements CollegeClassEnrollmentsAttributes {
  id!: string;
  studentId!: string;
  classId!: string;
  status!: "ENROLLED" | "COMPLETED" | "WITHDRAWN";
  grade?: "A" | "B" | "C" | "D" | "E";
  gradePoint?: number;
  deletedAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof CollegeClassEnrollments {
    return CollegeClassEnrollments.init({
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
    classId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'class_id'
    },
    status: {
      type: DataTypes.ENUM("ENROLLED","COMPLETED","WITHDRAWN"),
      allowNull: false,
      defaultValue: "ENROLLED"
    },
    grade: {
      type: DataTypes.ENUM("A","B","C","D","E"),
      allowNull: true
    },
    gradePoint: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'grade_point'
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
    tableName: 'college_class_enrollments',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "college_class_enrollments_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

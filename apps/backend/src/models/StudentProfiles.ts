import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface StudentProfilesAttributes {
  userId: string;
  nationalStudentNumber?: string;
  academicStatus: "ACTIVE" | "ON_LEAVE" | "GRADUATED" | "DROPPED_OUT";
  currentGpa?: number;
  graduationDate?: Date;
  diplomaNumber?: string;
  deletedAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

export type StudentProfilesOptionalAttributes = "nationalStudentNumber" | "currentGpa" | "graduationDate" | "diplomaNumber" | "deletedAt" | "createdAt" | "updatedAt";
export type StudentProfilesCreationAttributes = Optional<StudentProfilesAttributes, StudentProfilesOptionalAttributes>;

export class StudentProfiles extends Model<StudentProfilesAttributes, StudentProfilesCreationAttributes> implements StudentProfilesAttributes {
  userId!: string;
  nationalStudentNumber?: string;
  academicStatus!: "ACTIVE" | "ON_LEAVE" | "GRADUATED" | "DROPPED_OUT";
  currentGpa?: number;
  graduationDate?: Date;
  diplomaNumber?: string;
  deletedAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof StudentProfiles {
    return StudentProfiles.init({
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'user_id'
    },
    nationalStudentNumber: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'national_student_number'
    },
    academicStatus: {
      type: DataTypes.ENUM("ACTIVE","ON_LEAVE","GRADUATED","DROPPED_OUT"),
      allowNull: false,
      field: 'academic_status'
    },
    currentGpa: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'current_gpa'
    },
    graduationDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'graduation_date'
    },
    diplomaNumber: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'diploma_number'
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
    tableName: 'student_profiles',
    schema: 'public',
    timestamps: false
  });
  }
}

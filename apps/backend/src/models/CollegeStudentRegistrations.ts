import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface CollegeStudentRegistrationsAttributes {
  id: string;
  studentId: string;
  collegeProgramOfferingId: string;
  status: "ACTIVE" | "GRADUATED" | "DROPPED_OUT";
  createdAt?: Date;
  updatedAt?: Date;
  applicationStatus: "PENDING" | "APPROVED" | "REJECTED";
}

export type CollegeStudentRegistrationsPk = "id";
export type CollegeStudentRegistrationsId = CollegeStudentRegistrations[CollegeStudentRegistrationsPk];
export type CollegeStudentRegistrationsOptionalAttributes = "createdAt" | "updatedAt";
export type CollegeStudentRegistrationsCreationAttributes = Optional<CollegeStudentRegistrationsAttributes, CollegeStudentRegistrationsOptionalAttributes>;

export class CollegeStudentRegistrations extends Model<CollegeStudentRegistrationsAttributes, CollegeStudentRegistrationsCreationAttributes> implements CollegeStudentRegistrationsAttributes {
  id!: string;
  studentId!: string;
  collegeProgramOfferingId!: string;
  status!: "ACTIVE" | "GRADUATED" | "DROPPED_OUT";
  createdAt?: Date;
  updatedAt?: Date;
  applicationStatus!: "PENDING" | "APPROVED" | "REJECTED";


  static initModel(sequelize: Sequelize.Sequelize): typeof CollegeStudentRegistrations {
    return CollegeStudentRegistrations.init({
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
    collegeProgramOfferingId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'college_program_offering_id'
    },
    status: {
      type: DataTypes.ENUM("ACTIVE","GRADUATED","DROPPED_OUT"),
      allowNull: false
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
    applicationStatus: {
      type: DataTypes.ENUM("PENDING","APPROVED","REJECTED"),
      allowNull: false,
      field: 'application_status'
    }
  }, {
    sequelize,
    tableName: 'college_student_registrations',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "college_student_registrations_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

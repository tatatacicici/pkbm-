import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface TeachersRegistrationsAttributes {
  id: string;
  fullName: string;
  email?: string;
  phoneNumber: string;
  address: string;
  organization: string;
  linkedinUrl: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  department: string;
  position: string;
  lastEducation: string;
  birthDate: Date;
  interestField: string;
  feedback: string;
  contributions?: string[];
  userId?: string;
  status?: string;
}

export type TeachersRegistrationsPk = "id";
export type TeachersRegistrationsId = TeachersRegistrations[TeachersRegistrationsPk];
export type TeachersRegistrationsOptionalAttributes = "email" | "deletedAt" | "contributions" | "userId" | "status";
export type TeachersRegistrationsCreationAttributes = Optional<TeachersRegistrationsAttributes, TeachersRegistrationsOptionalAttributes>;

export class TeachersRegistrations extends Model<TeachersRegistrationsAttributes, TeachersRegistrationsCreationAttributes> implements TeachersRegistrationsAttributes {
  id!: string;
  fullName!: string;
  email?: string;
  phoneNumber!: string;
  address!: string;
  organization!: string;
  linkedinUrl!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;
  department!: string;
  position!: string;
  lastEducation!: string;
  birthDate!: Date;
  interestField!: string;
  feedback!: string;
  contributions?: string[];
  userId?: string;
  status?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof TeachersRegistrations {
    return TeachersRegistrations.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    fullName: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'full_name'
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    phoneNumber: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'phone_number'
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    organization: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    linkedinUrl: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'linkedin_url'
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
    department: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    position: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    lastEducation: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'last_education'
    },
    birthDate: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'birth_date'
    },
    interestField: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'interest_field'
    },
    feedback: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    contributions: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: true,
      field: 'user_id'
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "PENDING"
    }
  }, {
    sequelize,
    tableName: 'teachers_registrations',
    schema: 'public',
    timestamps: false
  });
  }
}

import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface AdministrationsFamilialsAttributes {
  id: string;
  administrationId: string;
  fatherName?: string;
  fatherOccupation?: string;
  fatherSalary?: string;
  motherName?: string;
  motherOccupation?: string;
  motherSalary?: string;
  selfSalary?: string;
  liveWith?: string;
  tuitionPayer?: string;
  createdAt: Date;
  updatedAt: Date;
  selfOccupation?: string;
  deletedAt?: Date;
}

export type AdministrationsFamilialsPk = "id";
export type AdministrationsFamilialsId = AdministrationsFamilials[AdministrationsFamilialsPk];
export type AdministrationsFamilialsOptionalAttributes = "fatherName" | "fatherOccupation" | "fatherSalary" | "motherName" | "motherOccupation" | "motherSalary" | "selfSalary" | "liveWith" | "tuitionPayer" | "selfOccupation" | "deletedAt";
export type AdministrationsFamilialsCreationAttributes = Optional<AdministrationsFamilialsAttributes, AdministrationsFamilialsOptionalAttributes>;

export class AdministrationsFamilials extends Model<AdministrationsFamilialsAttributes, AdministrationsFamilialsCreationAttributes> implements AdministrationsFamilialsAttributes {
  id!: string;
  administrationId!: string;
  fatherName?: string;
  fatherOccupation?: string;
  fatherSalary?: string;
  motherName?: string;
  motherOccupation?: string;
  motherSalary?: string;
  selfSalary?: string;
  liveWith?: string;
  tuitionPayer?: string;
  createdAt!: Date;
  updatedAt!: Date;
  selfOccupation?: string;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof AdministrationsFamilials {
    return AdministrationsFamilials.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    administrationId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'administration_id'
    },
    fatherName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'father_name'
    },
    fatherOccupation: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'father_occupation'
    },
    fatherSalary: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'father_salary'
    },
    motherName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'mother_name'
    },
    motherOccupation: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'mother_occupation'
    },
    motherSalary: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'mother_salary'
    },
    selfSalary: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'self_salary'
    },
    liveWith: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'live_with'
    },
    tuitionPayer: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'tuition_payer'
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
    selfOccupation: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'self_occupation'
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'deleted_at'
    }
  }, {
    sequelize,
    tableName: 'administrations_familials',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "administrations_familials_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

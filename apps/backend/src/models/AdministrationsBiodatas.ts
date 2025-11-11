import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface AdministrationsBiodatasAttributes {
  id: string;
  administrationId: string;
  gender?: string;
  birthdate?: Date;
  birthplace?: string;
  address?: string;
  lastEducation?: string;
  nim?: string;
  university?: string;
  major?: string;
  semester?: number;
  createdAt: Date;
  updatedAt: Date;
  fullName?: string;
  phoneNumber?: string;
  deletedAt?: Date;
  province?: string;
  provinceId?: string;
  regency?: string;
  regencyId?: string;
  district?: string;
  districtId?: string;
  village?: string;
  villageId?: string;
  identityNumber?: string;
  postalCode?: string;
  referralSource?: string;
  currentOccupation?: string;
}

export type AdministrationsBiodatasPk = "id";
export type AdministrationsBiodatasId = AdministrationsBiodatas[AdministrationsBiodatasPk];
export type AdministrationsBiodatasOptionalAttributes = "gender" | "birthdate" | "birthplace" | "address" | "lastEducation" | "nim" | "university" | "major" | "semester" | "fullName" | "phoneNumber" | "deletedAt" | "province" | "provinceId" | "regency" | "regencyId" | "district" | "districtId" | "village" | "villageId" | "identityNumber" | "postalCode" | "referralSource" | "currentOccupation";
export type AdministrationsBiodatasCreationAttributes = Optional<AdministrationsBiodatasAttributes, AdministrationsBiodatasOptionalAttributes>;

export class AdministrationsBiodatas extends Model<AdministrationsBiodatasAttributes, AdministrationsBiodatasCreationAttributes> implements AdministrationsBiodatasAttributes {
  id!: string;
  administrationId!: string;
  gender?: string;
  birthdate?: Date;
  birthplace?: string;
  address?: string;
  lastEducation?: string;
  nim?: string;
  university?: string;
  major?: string;
  semester?: number;
  createdAt!: Date;
  updatedAt!: Date;
  fullName?: string;
  phoneNumber?: string;
  deletedAt?: Date;
  province?: string;
  provinceId?: string;
  regency?: string;
  regencyId?: string;
  district?: string;
  districtId?: string;
  village?: string;
  villageId?: string;
  identityNumber?: string;
  postalCode?: string;
  referralSource?: string;
  currentOccupation?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof AdministrationsBiodatas {
    return AdministrationsBiodatas.init({
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
    gender: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    birthdate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    birthplace: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lastEducation: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'last_education'
    },
    nim: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    university: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    major: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    semester: {
      type: DataTypes.INTEGER,
      allowNull: true
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
    fullName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'full_name'
    },
    phoneNumber: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'phone_number'
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'deleted_at'
    },
    province: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    provinceId: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'province_id'
    },
    regency: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    regencyId: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'regency_id'
    },
    district: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    districtId: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'district_id'
    },
    village: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    villageId: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'village_id'
    },
    identityNumber: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'identity_number'
    },
    postalCode: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'postal_code'
    },
    referralSource: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'referral_source'
    },
    currentOccupation: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'current_occupation'
    }
  }, {
    sequelize,
    tableName: 'administrations_biodatas',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "administrations_biodatas_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface PartnersAttributes {
  id: string;
  userId?: string;
  officialName: string;
  categoryName: string;
  organizationName: string;
  industrialSector: string;
  mainOfficeAddress: string;
  provinceName: string;
  regencyName: string;
  website?: string;
  contactPerson: string;
  contactPhoneNumber: string;
  logo?: string;
  provinceCode: string;
  regencyCode: string;
  description?: string;
  slogan?: string;
}

export type PartnersPk = "id";
export type PartnersId = Partners[PartnersPk];
export type PartnersOptionalAttributes = "userId" | "website" | "logo" | "description" | "slogan";
export type PartnersCreationAttributes = Optional<PartnersAttributes, PartnersOptionalAttributes>;

export class Partners extends Model<PartnersAttributes, PartnersCreationAttributes> implements PartnersAttributes {
  id!: string;
  userId?: string;
  officialName!: string;
  categoryName!: string;
  organizationName!: string;
  industrialSector!: string;
  mainOfficeAddress!: string;
  provinceName!: string;
  regencyName!: string;
  website?: string;
  contactPerson!: string;
  contactPhoneNumber!: string;
  logo?: string;
  provinceCode!: string;
  regencyCode!: string;
  description?: string;
  slogan?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof Partners {
    return Partners.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: true,
      field: 'user_id'
    },
    officialName: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'official_name'
    },
    categoryName: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'category_name'
    },
    organizationName: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'organization_name'
    },
    industrialSector: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'industrial_sector'
    },
    mainOfficeAddress: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'main_office_address'
    },
    provinceName: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'province_name'
    },
    regencyName: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'regency_name'
    },
    website: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    contactPerson: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'contact_person'
    },
    contactPhoneNumber: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'contact_phone_number'
    },
    logo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    provinceCode: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'province_code'
    },
    regencyCode: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'regency_code'
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    slogan: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'partners',
    schema: 'public',
    timestamps: false
  });
  }
}

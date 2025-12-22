import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface CompaniesAttributes {
  id: string;
  name: string;
  address: string;
  website: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type CompaniesPk = "id";
export type CompaniesId = Companies[CompaniesPk];
export type CompaniesOptionalAttributes = "deletedAt";
export type CompaniesCreationAttributes = Optional<CompaniesAttributes, CompaniesOptionalAttributes>;

export class Companies extends Model<CompaniesAttributes, CompaniesCreationAttributes> implements CompaniesAttributes {
  id!: string;
  name!: string;
  address!: string;
  website!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof Companies {
    return Companies.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    website: {
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
    }
  }, {
    sequelize,
    tableName: 'companies',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "companies_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

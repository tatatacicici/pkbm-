import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface CompaniesDepartmentsAttributes {
  id: string;
  companyId: string;
  name: string;
  description?: string;
  status: "active" | "inactive";
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type CompaniesDepartmentsPk = "id";
export type CompaniesDepartmentsId = CompaniesDepartments[CompaniesDepartmentsPk];
export type CompaniesDepartmentsOptionalAttributes = "description" | "status" | "deletedAt";
export type CompaniesDepartmentsCreationAttributes = Optional<CompaniesDepartmentsAttributes, CompaniesDepartmentsOptionalAttributes>;

export class CompaniesDepartments extends Model<CompaniesDepartmentsAttributes, CompaniesDepartmentsCreationAttributes> implements CompaniesDepartmentsAttributes {
  id!: string;
  companyId!: string;
  name!: string;
  description?: string;
  status!: "active" | "inactive";
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof CompaniesDepartments {
    return CompaniesDepartments.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    companyId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'company_id'
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM("active","inactive"),
      allowNull: false,
      defaultValue: "active"
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
    tableName: 'companies_departments',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "companies_departments_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

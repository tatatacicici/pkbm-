import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface CompaniesEmployeesRolesAttributes {
  id: string;
  companyEmployeeId: string;
  role: "admin" | "teacher" | "employee";
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type CompaniesEmployeesRolesPk = "id";
export type CompaniesEmployeesRolesId = CompaniesEmployeesRoles[CompaniesEmployeesRolesPk];
export type CompaniesEmployeesRolesOptionalAttributes = "deletedAt";
export type CompaniesEmployeesRolesCreationAttributes = Optional<CompaniesEmployeesRolesAttributes, CompaniesEmployeesRolesOptionalAttributes>;

export class CompaniesEmployeesRoles extends Model<CompaniesEmployeesRolesAttributes, CompaniesEmployeesRolesCreationAttributes> implements CompaniesEmployeesRolesAttributes {
  id!: string;
  companyEmployeeId!: string;
  role!: "admin" | "teacher" | "employee";
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof CompaniesEmployeesRoles {
    return CompaniesEmployeesRoles.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    companyEmployeeId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'company_employee_id'
    },
    role: {
      type: DataTypes.ENUM("admin","teacher","employee"),
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
    tableName: 'companies_employees_roles',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "companies_employees_roles_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

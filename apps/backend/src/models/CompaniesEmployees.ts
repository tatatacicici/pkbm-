import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface CompaniesEmployeesAttributes {
  id: string;
  companyId: string;
  employeeId: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  assignedAt?: Date;
  status: "active" | "inactive";
  companyDepartmentId?: string;
}

export type CompaniesEmployeesPk = "id";
export type CompaniesEmployeesId = CompaniesEmployees[CompaniesEmployeesPk];
export type CompaniesEmployeesOptionalAttributes = "deletedAt" | "assignedAt" | "status" | "companyDepartmentId";
export type CompaniesEmployeesCreationAttributes = Optional<CompaniesEmployeesAttributes, CompaniesEmployeesOptionalAttributes>;

export class CompaniesEmployees extends Model<CompaniesEmployeesAttributes, CompaniesEmployeesCreationAttributes> implements CompaniesEmployeesAttributes {
  id!: string;
  companyId!: string;
  employeeId!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;
  assignedAt?: Date;
  status!: "active" | "inactive";
  companyDepartmentId?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof CompaniesEmployees {
    return CompaniesEmployees.init({
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
    employeeId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'employee_id'
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
    assignedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'assigned_at'
    },
    status: {
      type: DataTypes.ENUM("active","inactive"),
      allowNull: false,
      defaultValue: "active"
    },
    companyDepartmentId: {
      type: DataTypes.UUID,
      allowNull: true,
      field: 'company_department_id'
    }
  }, {
    sequelize,
    tableName: 'companies_employees',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "companies_employees_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

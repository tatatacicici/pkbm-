import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface CompaniesEmployeesRolesAttributes {
  id?: any;
  company_employee_id?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type CompaniesEmployeesRolesCreationAttributes = Optional<CompaniesEmployeesRolesAttributes, 'id'>;

export class CompaniesEmployeesRoles extends Model<CompaniesEmployeesRolesAttributes, CompaniesEmployeesRolesCreationAttributes> implements CompaniesEmployeesRolesAttributes {
  declare id?: any;
  declare company_employee_id?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof CompaniesEmployeesRoles {
    CompaniesEmployeesRoles.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        company_employee_id: { type: DataTypes.UUID, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'companies_employees_roles',
        timestamps: true,
        underscored: true,
      }
    );
    return CompaniesEmployeesRoles;
  }
}

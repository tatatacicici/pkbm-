import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface CompaniesEmployeesRolesAttributes {
  id?: string;
  company_employee_id: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type CompaniesEmployeesRolesCreationAttributes = Optional<CompaniesEmployeesRolesAttributes, 'id' | 'deleted_at'>;

export class CompaniesEmployeesRoles extends Model<CompaniesEmployeesRolesAttributes, CompaniesEmployeesRolesCreationAttributes> implements CompaniesEmployeesRolesAttributes {
  declare id?: string;
  declare company_employee_id: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

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

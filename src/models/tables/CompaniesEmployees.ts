import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface CompaniesEmployeesAttributes {
  id?: any;
  company_id?: any;
  employee_id?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
  assigned_at?: any;
  company_department_id?: any;
}

export type CompaniesEmployeesCreationAttributes = Optional<CompaniesEmployeesAttributes, 'id'>;

export class CompaniesEmployees extends Model<CompaniesEmployeesAttributes, CompaniesEmployeesCreationAttributes> implements CompaniesEmployeesAttributes {
  declare id?: any;
  declare company_id?: any;
  declare employee_id?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;
  declare assigned_at?: any;
  declare company_department_id?: any;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof CompaniesEmployees {
    CompaniesEmployees.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        company_id: { type: DataTypes.UUID, allowNull: false },
        employee_id: { type: DataTypes.UUID, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true },
        assigned_at: { type: DataTypes.DATE, allowNull: true },
        company_department_id: { type: DataTypes.UUID, allowNull: true }
      },
      {
        sequelize,
        tableName: 'companies_employees',
        timestamps: true,
        underscored: true,
      }
    );
    return CompaniesEmployees;
  }
}

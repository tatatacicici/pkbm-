import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface CompaniesEmployeesAttributes {
  id?: string;
  company_id: string;
  employee_id: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  assigned_at?: Date;
  company_department_id?: string;
}

export type CompaniesEmployeesCreationAttributes = Optional<CompaniesEmployeesAttributes, 'id' | 'deleted_at' | 'assigned_at' | 'company_department_id'>;

export class CompaniesEmployees extends Model<CompaniesEmployeesAttributes, CompaniesEmployeesCreationAttributes> implements CompaniesEmployeesAttributes {
  declare id?: string;
  declare company_id: string;
  declare employee_id: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;
  declare assigned_at?: Date;
  declare company_department_id?: string;

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

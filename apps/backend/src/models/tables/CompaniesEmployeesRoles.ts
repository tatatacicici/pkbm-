import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface CompaniesEmployeesRolesAttributes {
  id?: string;
  companyEmployeeId: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type CompaniesEmployeesRolesCreationAttributes = Optional<CompaniesEmployeesRolesAttributes, 'id' | 'deletedAt'>;

export class CompaniesEmployeesRoles extends Model<CompaniesEmployeesRolesAttributes, CompaniesEmployeesRolesCreationAttributes> implements CompaniesEmployeesRolesAttributes {
  declare id?: string;
  declare companyEmployeeId: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof CompaniesEmployeesRoles {
    CompaniesEmployeesRoles.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        companyEmployeeId: { type: DataTypes.UUID, allowNull: false,
            field: 'company_employee_id'
        },
        createdAt: { type: DataTypes.DATE, allowNull: false,
            field: 'created_at'
        },
        updatedAt: { type: DataTypes.DATE, allowNull: false,
            field: 'updated_at'
        },
        deletedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'deleted_at'
        }
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

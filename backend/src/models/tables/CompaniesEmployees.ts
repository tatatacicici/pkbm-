import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface CompaniesEmployeesAttributes {
  id?: string;
  companyId: string;
  employeeId: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  assignedAt?: Date;
  companyDepartmentId?: string;
}

export type CompaniesEmployeesCreationAttributes = Optional<CompaniesEmployeesAttributes, 'id' | 'deletedAt' | 'assignedAt' | 'companyDepartmentId'>;

export class CompaniesEmployees extends Model<CompaniesEmployeesAttributes, CompaniesEmployeesCreationAttributes> implements CompaniesEmployeesAttributes {
  declare id?: string;
  declare companyId: string;
  declare employeeId: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;
  declare assignedAt?: Date;
  declare companyDepartmentId?: string;

  public static initModel(sequelize: Sequelize): typeof CompaniesEmployees {
    CompaniesEmployees.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        companyId: { type: DataTypes.UUID, allowNull: false,
            field: 'company_id'
        },
        employeeId: { type: DataTypes.UUID, allowNull: false,
            field: 'employee_id'
        },
        createdAt: { type: DataTypes.DATE, allowNull: false,
            field: 'created_at'
        },
        updatedAt: { type: DataTypes.DATE, allowNull: false,
            field: 'updated_at'
        },
        deletedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'deleted_at'
        },
        assignedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'assigned_at'
        },
        companyDepartmentId: { type: DataTypes.UUID, allowNull: true,
            field: 'company_department_id'
        }
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

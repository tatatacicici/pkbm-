import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface CompaniesDepartmentsAttributes {
  id?: string;
  companyId: string;
  name: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type CompaniesDepartmentsCreationAttributes = Optional<CompaniesDepartmentsAttributes, 'id' | 'description' | 'deletedAt'>;

export class CompaniesDepartments extends Model<CompaniesDepartmentsAttributes, CompaniesDepartmentsCreationAttributes> implements CompaniesDepartmentsAttributes {
  declare id?: string;
  declare companyId: string;
  declare name: string;
  declare description?: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof CompaniesDepartments {
    CompaniesDepartments.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        companyId: { type: DataTypes.UUID, allowNull: false,
            field: 'company_id'
        },
        name: { type: DataTypes.STRING, allowNull: false,
            field: 'name'
        },
        description: { type: DataTypes.TEXT, allowNull: true,
            field: 'description'
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
        tableName: 'companies_departments',
        timestamps: true,
        underscored: true,
      }
    );
    return CompaniesDepartments;
  }
}

import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface CompaniesDepartmentsAttributes {
  id?: any;
  company_id?: any;
  name?: any;
  description?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type CompaniesDepartmentsCreationAttributes = Optional<CompaniesDepartmentsAttributes, 'id'>;

export class CompaniesDepartments extends Model<CompaniesDepartmentsAttributes, CompaniesDepartmentsCreationAttributes> implements CompaniesDepartmentsAttributes {
  declare id?: any;
  declare company_id?: any;
  declare name?: any;
  declare description?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof CompaniesDepartments {
    CompaniesDepartments.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        company_id: { type: DataTypes.UUID, allowNull: false },
        name: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.TEXT, allowNull: true },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
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

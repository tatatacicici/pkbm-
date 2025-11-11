import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface CompaniesDepartmentsAttributes {
  id?: string;
  company_id: string;
  name: string;
  description?: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type CompaniesDepartmentsCreationAttributes = Optional<CompaniesDepartmentsAttributes, 'id' | 'description' | 'deleted_at'>;

export class CompaniesDepartments extends Model<CompaniesDepartmentsAttributes, CompaniesDepartmentsCreationAttributes> implements CompaniesDepartmentsAttributes {
  declare id?: string;
  declare company_id: string;
  declare name: string;
  declare description?: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

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

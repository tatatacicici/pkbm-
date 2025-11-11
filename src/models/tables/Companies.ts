import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface CompaniesAttributes {
  id?: any;
  name?: any;
  address?: any;
  website?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type CompaniesCreationAttributes = Optional<CompaniesAttributes, 'id'>;

export class Companies extends Model<CompaniesAttributes, CompaniesCreationAttributes> implements CompaniesAttributes {
  declare id?: any;
  declare name?: any;
  declare address?: any;
  declare website?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof Companies {
    Companies.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        name: { type: DataTypes.STRING, allowNull: false },
        address: { type: DataTypes.STRING, allowNull: false },
        website: { type: DataTypes.STRING, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'companies',
        timestamps: true,
        underscored: false,
      }
    );
    return Companies;
  }
}

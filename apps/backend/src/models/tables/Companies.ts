import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface CompaniesAttributes {
  id?: string;
  name: string;
  address: string;
  website: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type CompaniesCreationAttributes = Optional<CompaniesAttributes, 'id' | 'deleted_at'>;

export class Companies extends Model<CompaniesAttributes, CompaniesCreationAttributes> implements CompaniesAttributes {
  declare id?: string;
  declare name: string;
  declare address: string;
  declare website: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

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

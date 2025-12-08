import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface CompaniesAttributes {
  id?: string;
  name: string;
  address: string;
  website: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type CompaniesCreationAttributes = Optional<CompaniesAttributes, 'id' | 'deletedAt'>;

export class Companies extends Model<CompaniesAttributes, CompaniesCreationAttributes> implements CompaniesAttributes {
  declare id?: string;
  declare name: string;
  declare address: string;
  declare website: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof Companies {
    Companies.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        name: { type: DataTypes.STRING, allowNull: false,
            field: 'name'
        },
        address: { type: DataTypes.STRING, allowNull: false,
            field: 'address'
        },
        website: { type: DataTypes.STRING, allowNull: false,
            field: 'website'
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
        tableName: 'companies',
        timestamps: true,
        underscored: false,
      }
    );
    return Companies;
  }
}

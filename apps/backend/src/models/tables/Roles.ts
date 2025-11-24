import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface RolesAttributes {
  id?: string;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export type RolesCreationAttributes = Optional<RolesAttributes, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'>;

export class Roles extends Model<RolesAttributes, RolesCreationAttributes> implements RolesAttributes {
  declare id?: string;
  declare name: string;
  declare createdAt?: Date;
  declare updatedAt?: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof Roles {
    Roles.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        name: { type: DataTypes.STRING, allowNull: false,
            field: 'name'
        },
        createdAt: { type: DataTypes.DATE, allowNull: true,
            field: 'created_at'
        },
        updatedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'updated_at'
        },
        deletedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'deleted_at'
        }
      },
      {
        sequelize,
        tableName: 'roles',
        timestamps: true,
        underscored: false,
      }
    );
    return Roles;
  }
}

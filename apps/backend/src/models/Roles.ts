import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface RolesAttributes {
  id: string;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export type RolesPk = "id";
export type RolesId = Roles[RolesPk];
export type RolesOptionalAttributes = "createdAt" | "updatedAt" | "deletedAt";
export type RolesCreationAttributes = Optional<RolesAttributes, RolesOptionalAttributes>;

export class Roles extends Model<RolesAttributes, RolesCreationAttributes> implements RolesAttributes {
  id!: string;
  name!: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof Roles {
    return Roles.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'updated_at'
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'deleted_at'
    }
  }, {
    sequelize,
    tableName: 'roles',
    schema: 'public',
    timestamps: false
  });
  }
}

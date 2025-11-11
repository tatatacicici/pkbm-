import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface UserRolesAttributes {
  id: string;
  userId: string;
  roleId: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type UserRolesPk = "id";
export type UserRolesId = UserRoles[UserRolesPk];
export type UserRolesOptionalAttributes = "deletedAt";
export type UserRolesCreationAttributes = Optional<UserRolesAttributes, UserRolesOptionalAttributes>;

export class UserRoles extends Model<UserRolesAttributes, UserRolesCreationAttributes> implements UserRolesAttributes {
  id!: string;
  userId!: string;
  roleId!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof UserRoles {
    return UserRoles.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'user_id'
    },
    roleId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'role_id'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'updated_at'
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'deleted_at'
    }
  }, {
    sequelize,
    tableName: 'user_roles',
    schema: 'public',
    timestamps: false
  });
  }
}

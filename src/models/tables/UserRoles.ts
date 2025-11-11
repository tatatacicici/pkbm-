import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface UserRolesAttributes {
  id?: any;
  user_id?: any;
  role_id?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type UserRolesCreationAttributes = Optional<UserRolesAttributes, 'id'>;

export class UserRoles extends Model<UserRolesAttributes, UserRolesCreationAttributes> implements UserRolesAttributes {
  declare id?: any;
  declare user_id?: any;
  declare role_id?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof UserRoles {
    UserRoles.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        user_id: { type: DataTypes.UUID, allowNull: false },
        role_id: { type: DataTypes.UUID, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'user_roles',
        timestamps: true,
        underscored: true,
      }
    );
    return UserRoles;
  }
}

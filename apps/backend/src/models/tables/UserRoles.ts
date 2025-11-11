import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface UserRolesAttributes {
  id?: string;
  user_id: string;
  role_id: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type UserRolesCreationAttributes = Optional<UserRolesAttributes, 'id' | 'deleted_at'>;

export class UserRoles extends Model<UserRolesAttributes, UserRolesCreationAttributes> implements UserRolesAttributes {
  declare id?: string;
  declare user_id: string;
  declare role_id: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

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

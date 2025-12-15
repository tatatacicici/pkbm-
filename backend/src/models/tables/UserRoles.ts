import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface UserRolesAttributes {
  id?: string;
  userId: string;
  roleId: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type UserRolesCreationAttributes = Optional<UserRolesAttributes, 'id' | 'deletedAt'>;

export class UserRoles extends Model<UserRolesAttributes, UserRolesCreationAttributes> implements UserRolesAttributes {
  declare id?: string;
  declare userId: string;
  declare roleId: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof UserRoles {
    UserRoles.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        userId: { type: DataTypes.UUID, allowNull: false,
            field: 'user_id'
        },
        roleId: { type: DataTypes.UUID, allowNull: false,
            field: 'role_id'
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
        tableName: 'user_roles',
        timestamps: true,
        underscored: true,
      }
    );
    return UserRoles;
  }
}

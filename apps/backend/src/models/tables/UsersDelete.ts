import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface UsersDeleteAttributes {
  id?: string;
  email: string;
  userId: string;
  actionAt: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type UsersDeleteCreationAttributes = Optional<UsersDeleteAttributes, 'id' | 'deletedAt'>;

export class UsersDelete extends Model<UsersDeleteAttributes, UsersDeleteCreationAttributes> implements UsersDeleteAttributes {
  declare id?: string;
  declare email: string;
  declare userId: string;
  declare actionAt: Date;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof UsersDelete {
    UsersDelete.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        email: { type: DataTypes.STRING, allowNull: false,
            field: 'email'
        },
        userId: { type: DataTypes.UUID, allowNull: false,
            field: 'user_id'
        },
        actionAt: { type: DataTypes.DATE, allowNull: false,
            field: 'action_at'
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
        tableName: 'users_delete',
        timestamps: true,
        underscored: true,
      }
    );
    return UsersDelete;
  }
}

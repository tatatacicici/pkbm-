import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface UsersDeleteAttributes {
  id?: any;
  email?: any;
  user_id?: any;
  action_at?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type UsersDeleteCreationAttributes = Optional<UsersDeleteAttributes, 'id'>;

export class UsersDelete extends Model<UsersDeleteAttributes, UsersDeleteCreationAttributes> implements UsersDeleteAttributes {
  declare id?: any;
  declare email?: any;
  declare user_id?: any;
  declare action_at?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof UsersDelete {
    UsersDelete.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        email: { type: DataTypes.STRING, allowNull: false },
        user_id: { type: DataTypes.UUID, allowNull: false },
        action_at: { type: DataTypes.DATE, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
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

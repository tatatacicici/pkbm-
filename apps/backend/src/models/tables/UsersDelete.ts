import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface UsersDeleteAttributes {
  id?: string;
  email: string;
  user_id: string;
  action_at: Date;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type UsersDeleteCreationAttributes = Optional<UsersDeleteAttributes, 'id' | 'deleted_at'>;

export class UsersDelete extends Model<UsersDeleteAttributes, UsersDeleteCreationAttributes> implements UsersDeleteAttributes {
  declare id?: string;
  declare email: string;
  declare user_id: string;
  declare action_at: Date;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

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

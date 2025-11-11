import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface UsersDeleteAttributes {
  id: string;
  email: string;
  userId: string;
  actionAt: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type UsersDeletePk = "id";
export type UsersDeleteId = UsersDelete[UsersDeletePk];
export type UsersDeleteOptionalAttributes = "deletedAt";
export type UsersDeleteCreationAttributes = Optional<UsersDeleteAttributes, UsersDeleteOptionalAttributes>;

export class UsersDelete extends Model<UsersDeleteAttributes, UsersDeleteCreationAttributes> implements UsersDeleteAttributes {
  id!: string;
  email!: string;
  userId!: string;
  actionAt!: Date;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof UsersDelete {
    return UsersDelete.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'user_id'
    },
    actionAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'action_at'
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
    tableName: 'users_delete',
    schema: 'public',
    timestamps: false
  });
  }
}

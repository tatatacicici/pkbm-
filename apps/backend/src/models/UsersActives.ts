import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface UsersActivesAttributes {
  pk: number;
  uuid?: string;
  userId: string;
  date: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  lastActive?: Date;
}

export type UsersActivesOptionalAttributes = "pk" | "uuid" | "deletedAt" | "lastActive";
export type UsersActivesCreationAttributes = Optional<UsersActivesAttributes, UsersActivesOptionalAttributes>;

export class UsersActives extends Model<UsersActivesAttributes, UsersActivesCreationAttributes> implements UsersActivesAttributes {
  pk!: number;
  uuid?: string;
  userId!: string;
  date!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;
  lastActive?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof UsersActives {
    return UsersActives.init({
    pk: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false
    },
    uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'user_id'
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
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
    },
    lastActive: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'last_active'
    }
  }, {
    sequelize,
    tableName: 'users_actives',
    schema: 'public',
    timestamps: false
  });
  }
}

import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface UsersAdministrationsAttributes {
  id: number;
  uuid?: string;
  userId: string;
  cycleId: number;
  type: string;
  status: string;
  actions?: object;
  approvedBy?: string;
  approvedAt?: Date;
}

export type UsersAdministrationsPk = "id";
export type UsersAdministrationsId = UsersAdministrations[UsersAdministrationsPk];
export type UsersAdministrationsOptionalAttributes = "id" | "uuid" | "actions" | "approvedBy" | "approvedAt";
export type UsersAdministrationsCreationAttributes = Optional<UsersAdministrationsAttributes, UsersAdministrationsOptionalAttributes>;

export class UsersAdministrations extends Model<UsersAdministrationsAttributes, UsersAdministrationsCreationAttributes> implements UsersAdministrationsAttributes {
  id!: number;
  uuid?: string;
  userId!: string;
  cycleId!: number;
  type!: string;
  status!: string;
  actions?: object;
  approvedBy?: string;
  approvedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof UsersAdministrations {
    return UsersAdministrations.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
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
    cycleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'cycle_id'
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    actions: {
      type: DataTypes.JSON,
      allowNull: true,
      defaultValue: {}
    },
    approvedBy: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'approved_by'
    },
    approvedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'approved_at'
    }
  }, {
    sequelize,
    tableName: 'users_administrations',
    schema: 'public',
    timestamps: false
  });
  }
}

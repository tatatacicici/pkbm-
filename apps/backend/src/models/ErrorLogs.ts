import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ErrorLogsAttributes {
  id: string;
  code: string;
  status: string;
  message: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type ErrorLogsPk = "id";
export type ErrorLogsId = ErrorLogs[ErrorLogsPk];
export type ErrorLogsOptionalAttributes = "deletedAt";
export type ErrorLogsCreationAttributes = Optional<ErrorLogsAttributes, ErrorLogsOptionalAttributes>;

export class ErrorLogs extends Model<ErrorLogsAttributes, ErrorLogsCreationAttributes> implements ErrorLogsAttributes {
  id!: string;
  code!: string;
  status!: string;
  message!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof ErrorLogs {
    return ErrorLogs.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    code: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    status: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    message: {
      type: DataTypes.TEXT,
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
    }
  }, {
    sequelize,
    tableName: 'error_logs',
    schema: 'public',
    timestamps: false
  });
  }
}

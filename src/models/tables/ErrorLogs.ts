import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ErrorLogsAttributes {
  id?: any;
  code?: any;
  status?: any;
  message?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type ErrorLogsCreationAttributes = Optional<ErrorLogsAttributes, 'id'>;

export class ErrorLogs extends Model<ErrorLogsAttributes, ErrorLogsCreationAttributes> implements ErrorLogsAttributes {
  declare id?: any;
  declare code?: any;
  declare status?: any;
  declare message?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof ErrorLogs {
    ErrorLogs.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        code: { type: DataTypes.TEXT, allowNull: false },
        status: { type: DataTypes.TEXT, allowNull: false },
        message: { type: DataTypes.TEXT, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'error_logs',
        timestamps: true,
        underscored: true,
      }
    );
    return ErrorLogs;
  }
}

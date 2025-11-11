import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ErrorLogsAttributes {
  id?: string;
  code: string;
  status: string;
  message: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type ErrorLogsCreationAttributes = Optional<ErrorLogsAttributes, 'id' | 'deleted_at'>;

export class ErrorLogs extends Model<ErrorLogsAttributes, ErrorLogsCreationAttributes> implements ErrorLogsAttributes {
  declare id?: string;
  declare code: string;
  declare status: string;
  declare message: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

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

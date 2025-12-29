import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ErrorLogsAttributes {
  id?: string;
  code: string;
  status: string;
  message: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type ErrorLogsCreationAttributes = Optional<ErrorLogsAttributes, 'id' | 'deletedAt'>;

export class ErrorLogs extends Model<ErrorLogsAttributes, ErrorLogsCreationAttributes> implements ErrorLogsAttributes {
  declare id?: string;
  declare code: string;
  declare status: string;
  declare message: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof ErrorLogs {
    ErrorLogs.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        code: { type: DataTypes.TEXT, allowNull: false,
            field: 'code'
        },
        status: { type: DataTypes.TEXT, allowNull: false,
            field: 'status'
        },
        message: { type: DataTypes.TEXT, allowNull: false,
            field: 'message'
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
        tableName: 'error_logs',
        timestamps: true,
        underscored: true,
      }
    );
    return ErrorLogs;
  }
}

import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface CreditConvertionRequestsAttributes {
  pk: number;
  uuid?: string;
  studentId: string;
  status: string;
  fileReport?: number;
  actionBy?: string;
  actionAt?: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type CreditConvertionRequestsCreationAttributes = Optional<CreditConvertionRequestsAttributes, 'id' | 'uuid' | 'fileReport' | 'actionBy' | 'actionAt' | 'deletedAt'>;

export class CreditConvertionRequests extends Model<CreditConvertionRequestsAttributes, CreditConvertionRequestsCreationAttributes> implements CreditConvertionRequestsAttributes {
  declare pk: number;
  declare uuid?: string;
  declare studentId: string;
  declare status: string;
  declare fileReport?: number;
  declare actionBy?: string;
  declare actionAt?: Date;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof CreditConvertionRequests {
    CreditConvertionRequests.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false,
            field: 'pk'
        },
        uuid: { type: DataTypes.UUID, allowNull: true,
            field: 'uuid'
        },
        studentId: { type: DataTypes.UUID, allowNull: false,
            field: 'student_id'
        },
        status: { type: DataTypes.STRING, allowNull: false,
            field: 'status'
        },
        fileReport: { type: DataTypes.INTEGER, allowNull: true,
            field: 'file_report'
        },
        actionBy: { type: DataTypes.UUID, allowNull: true,
            field: 'action_by'
        },
        actionAt: { type: DataTypes.DATE, allowNull: true,
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
        tableName: 'credit_convertion_requests',
        timestamps: true,
        underscored: true,
      }
    );
    return CreditConvertionRequests;
  }
}

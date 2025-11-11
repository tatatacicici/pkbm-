import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface CreditConvertionRequestsAttributes {
  pk: number;
  uuid?: string;
  student_id: string;
  status: string;
  file_report?: number;
  action_by?: string;
  action_at?: Date;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type CreditConvertionRequestsCreationAttributes = Optional<CreditConvertionRequestsAttributes, 'id' | 'uuid' | 'file_report' | 'action_by' | 'action_at' | 'deleted_at'>;

export class CreditConvertionRequests extends Model<CreditConvertionRequestsAttributes, CreditConvertionRequestsCreationAttributes> implements CreditConvertionRequestsAttributes {
  declare pk: number;
  declare uuid?: string;
  declare student_id: string;
  declare status: string;
  declare file_report?: number;
  declare action_by?: string;
  declare action_at?: Date;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof CreditConvertionRequests {
    CreditConvertionRequests.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false },
        uuid: { type: DataTypes.UUID, allowNull: true },
        student_id: { type: DataTypes.UUID, allowNull: false },
        status: { type: DataTypes.STRING, allowNull: false },
        file_report: { type: DataTypes.INTEGER, allowNull: true },
        action_by: { type: DataTypes.UUID, allowNull: true },
        action_at: { type: DataTypes.DATE, allowNull: true },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
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

import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface CreditConvertionRequestsAttributes {
  pk?: any;
  uuid?: any;
  student_id?: any;
  status?: any;
  file_report?: any;
  action_by?: any;
  action_at?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type CreditConvertionRequestsCreationAttributes = Optional<CreditConvertionRequestsAttributes, 'id'>;

export class CreditConvertionRequests extends Model<CreditConvertionRequestsAttributes, CreditConvertionRequestsCreationAttributes> implements CreditConvertionRequestsAttributes {
  declare pk?: any;
  declare uuid?: any;
  declare student_id?: any;
  declare status?: any;
  declare file_report?: any;
  declare action_by?: any;
  declare action_at?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

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

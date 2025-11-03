import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

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

export type CreditConvertionRequestsOptionalAttributes = "pk" | "uuid" | "fileReport" | "actionBy" | "actionAt" | "deletedAt";
export type CreditConvertionRequestsCreationAttributes = Optional<CreditConvertionRequestsAttributes, CreditConvertionRequestsOptionalAttributes>;

export class CreditConvertionRequests extends Model<CreditConvertionRequestsAttributes, CreditConvertionRequestsCreationAttributes> implements CreditConvertionRequestsAttributes {
  pk!: number;
  uuid?: string;
  studentId!: string;
  status!: string;
  fileReport?: number;
  actionBy?: string;
  actionAt?: Date;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof CreditConvertionRequests {
    return CreditConvertionRequests.init({
    pk: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false
    },
    uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    studentId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'student_id'
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    fileReport: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'file_report'
    },
    actionBy: {
      type: DataTypes.UUID,
      allowNull: true,
      field: 'action_by'
    },
    actionAt: {
      type: DataTypes.DATE,
      allowNull: true,
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
    tableName: 'credit_convertion_requests',
    schema: 'public',
    timestamps: false
  });
  }
}

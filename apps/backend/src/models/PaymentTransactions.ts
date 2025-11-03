import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface PaymentTransactionsAttributes {
  pk: number;
  id: string;
  userId: string;
  totalItem: number;
  finalAmount: number;
  status: string;
  type: string;
  method: string;
  snapToken: string;
  snapRedirectUrl: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export type PaymentTransactionsPk = "id";
export type PaymentTransactionsId = PaymentTransactions[PaymentTransactionsPk];
export type PaymentTransactionsOptionalAttributes = "pk" | "createdAt" | "updatedAt" | "deletedAt";
export type PaymentTransactionsCreationAttributes = Optional<PaymentTransactionsAttributes, PaymentTransactionsOptionalAttributes>;

export class PaymentTransactions extends Model<PaymentTransactionsAttributes, PaymentTransactionsCreationAttributes> implements PaymentTransactionsAttributes {
  pk!: number;
  id!: string;
  userId!: string;
  totalItem!: number;
  finalAmount!: number;
  status!: string;
  type!: string;
  method!: string;
  snapToken!: string;
  snapRedirectUrl!: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof PaymentTransactions {
    return PaymentTransactions.init({
    pk: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    userId: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'user_id'
    },
    totalItem: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'total_item'
    },
    finalAmount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'final_amount'
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    method: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    snapToken: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'snap_token'
    },
    snapRedirectUrl: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'snap_redirect_url'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'updated_at'
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'deleted_at'
    }
  }, {
    sequelize,
    tableName: 'payment_transactions',
    schema: 'public',
    timestamps: false
  });
  }
}

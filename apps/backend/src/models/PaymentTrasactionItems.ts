import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface PaymentTrasactionItemsAttributes {
  pk: number;
  id: string;
  transactionId: number;
  detail: string;
  amount: number;
  quantity: number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export type PaymentTrasactionItemsPk = "id";
export type PaymentTrasactionItemsId = PaymentTrasactionItems[PaymentTrasactionItemsPk];
export type PaymentTrasactionItemsOptionalAttributes = "pk" | "createdAt" | "updatedAt" | "deletedAt";
export type PaymentTrasactionItemsCreationAttributes = Optional<PaymentTrasactionItemsAttributes, PaymentTrasactionItemsOptionalAttributes>;

export class PaymentTrasactionItems extends Model<PaymentTrasactionItemsAttributes, PaymentTrasactionItemsCreationAttributes> implements PaymentTrasactionItemsAttributes {
  pk!: number;
  id!: string;
  transactionId!: number;
  detail!: string;
  amount!: number;
  quantity!: number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof PaymentTrasactionItems {
    return PaymentTrasactionItems.init({
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
    transactionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'transaction_id'
    },
    detail: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
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
    tableName: 'payment_trasaction_items',
    schema: 'public',
    timestamps: false
  });
  }
}

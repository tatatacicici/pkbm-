import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface PaymentTrasactionItemsAttributes {
  pk: number;
  id?: string;
  transaction_id: number;
  detail: string;
  amount: number;
  quantity: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export type PaymentTrasactionItemsCreationAttributes = Optional<PaymentTrasactionItemsAttributes, 'id' | 'created_at' | 'updated_at' | 'deleted_at'>;

export class PaymentTrasactionItems extends Model<PaymentTrasactionItemsAttributes, PaymentTrasactionItemsCreationAttributes> implements PaymentTrasactionItemsAttributes {
  declare pk: number;
  declare id?: string;
  declare transaction_id: number;
  declare detail: string;
  declare amount: number;
  declare quantity: number;
  declare created_at?: Date;
  declare updated_at?: Date;
  declare deleted_at?: Date;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof PaymentTrasactionItems {
    PaymentTrasactionItems.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false },
        id: { type: DataTypes.UUID, primaryKey: true },
        transaction_id: { type: DataTypes.INTEGER, allowNull: false },
        detail: { type: DataTypes.STRING, allowNull: false },
        amount: { type: DataTypes.INTEGER, allowNull: false },
        quantity: { type: DataTypes.INTEGER, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: true },
        updated_at: { type: DataTypes.DATE, allowNull: true },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'payment_trasaction_items',
        timestamps: true,
        underscored: true,
      }
    );
    return PaymentTrasactionItems;
  }
}

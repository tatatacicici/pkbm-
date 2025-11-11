import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface PaymentTrasactionItemsAttributes {
  pk?: any;
  id?: any;
  transaction_id?: any;
  detail?: any;
  amount?: any;
  quantity?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type PaymentTrasactionItemsCreationAttributes = Optional<PaymentTrasactionItemsAttributes, 'id'>;

export class PaymentTrasactionItems extends Model<PaymentTrasactionItemsAttributes, PaymentTrasactionItemsCreationAttributes> implements PaymentTrasactionItemsAttributes {
  declare pk?: any;
  declare id?: any;
  declare transaction_id?: any;
  declare detail?: any;
  declare amount?: any;
  declare quantity?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

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

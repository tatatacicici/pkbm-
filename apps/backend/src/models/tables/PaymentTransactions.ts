import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface PaymentTransactionsAttributes {
  pk: number;
  id?: string;
  user_id: string;
  total_item: number;
  final_amount: number;
  status: string;
  type: string;
  method: string;
  snap_token: string;
  snap_redirect_url: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export type PaymentTransactionsCreationAttributes = Optional<PaymentTransactionsAttributes, 'id' | 'created_at' | 'updated_at' | 'deleted_at'>;

export class PaymentTransactions extends Model<PaymentTransactionsAttributes, PaymentTransactionsCreationAttributes> implements PaymentTransactionsAttributes {
  declare pk: number;
  declare id?: string;
  declare user_id: string;
  declare total_item: number;
  declare final_amount: number;
  declare status: string;
  declare type: string;
  declare method: string;
  declare snap_token: string;
  declare snap_redirect_url: string;
  declare created_at?: Date;
  declare updated_at?: Date;
  declare deleted_at?: Date;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof PaymentTransactions {
    PaymentTransactions.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false },
        id: { type: DataTypes.UUID, primaryKey: true },
        user_id: { type: DataTypes.STRING, allowNull: false },
        total_item: { type: DataTypes.INTEGER, allowNull: false },
        final_amount: { type: DataTypes.INTEGER, allowNull: false },
        status: { type: DataTypes.STRING, allowNull: false },
        type: { type: DataTypes.STRING, allowNull: false },
        method: { type: DataTypes.STRING, allowNull: false },
        snap_token: { type: DataTypes.STRING, allowNull: false },
        snap_redirect_url: { type: DataTypes.STRING, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: true },
        updated_at: { type: DataTypes.DATE, allowNull: true },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'payment_transactions',
        timestamps: true,
        underscored: true,
      }
    );
    return PaymentTransactions;
  }
}

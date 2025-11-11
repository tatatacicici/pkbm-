import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface PaymentTransactionsAttributes {
  pk?: any;
  id?: any;
  user_id?: any;
  total_item?: any;
  final_amount?: any;
  status?: any;
  type?: any;
  method?: any;
  snap_token?: any;
  snap_redirect_url?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type PaymentTransactionsCreationAttributes = Optional<PaymentTransactionsAttributes, 'id'>;

export class PaymentTransactions extends Model<PaymentTransactionsAttributes, PaymentTransactionsCreationAttributes> implements PaymentTransactionsAttributes {
  declare pk?: any;
  declare id?: any;
  declare user_id?: any;
  declare total_item?: any;
  declare final_amount?: any;
  declare status?: any;
  declare type?: any;
  declare method?: any;
  declare snap_token?: any;
  declare snap_redirect_url?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

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
